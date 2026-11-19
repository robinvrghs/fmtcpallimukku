
"use client";

import { useMemo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import {
    Stack,
    Paper,
    Button,
    TextField,
    Typography,
    MenuItem,
    Alert,
    CircularProgress,
    Divider
} from "@mui/material";

import { useAuth } from "@/context/AuthContext";
import { createBlock } from "../utils/blockTemplates";
import SortableBlocks from "./SortableBlocks";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const defaultValues = {
    title: "",
    slug: "",
    category_id: "",
    parent_id: "",
    sort_order: "0",
    status: "draft",
    meta_title: "",
    meta_description: ""
};


function getDescendantIds(pages, pageId) {
    const descendants = new Set();

    const findChildren = (parentId) => {
        pages
            .filter(
                (page) =>
                    Number(page.parent_id) === Number(parentId)
            )
            .forEach((child) => {
                const childId = Number(child.id);

                if (descendants.has(childId)) return;

                descendants.add(childId);
                findChildren(childId);
            });
    };

    findChildren(pageId);

    return descendants;
}

function buildPageOptions(pages, categoryId) {
    const categoryPages = pages.filter(
        (page) => Number(page.category_id) === Number(categoryId)
    );

    const childrenMap = {};

    categoryPages.forEach((page) => {
        const parentId = page.parent_id
            ? Number(page.parent_id)
            : 0;

        if (!childrenMap[parentId]) {
            childrenMap[parentId] = [];
        }

        childrenMap[parentId].push(page);
    });

    const options = [];
    const visited = new Set();

    const addChildren = (parentId, depth = 0) => {

        const children = [...(childrenMap[parentId] || [])].sort(
            (a, b) =>
                Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0) ||
                a.title.localeCompare(b.title)
        );

        children.forEach((page) => {
            const pageId = Number(page.id);

            if (visited.has(pageId)) return;

            visited.add(pageId);

            options.push({
                ...page,
                depth
            });

            addChildren(pageId, depth + 1);
        });
    };

    addChildren(0);

    return options;
}

export default function PageEditor({ id }) {

    const router = useRouter();

    const { csrfToken } = useAuth();

    const isEdit = Boolean(id && id !== "new");

    const [loading, setLoading] = useState(isEdit);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [categories, setCategories] = useState([]);
    const [blocks, setBlocks] = useState([]);

    const [initialValues, setInitialValues] = useState(defaultValues);

    const [allPages, setAllPages] = useState([]);

    const [pagesLoading, setPagesLoading] = useState(true);

    useEffect(() => {
        const loadPages = async () => {
            setPagesLoading(true);

            try {
                const response = await fetch(
                    `${API_URL}/pages/list.php`,
                    {
                        credentials: "include",
                        cache: "no-store"
                    }
                );

                const data = await response.json();

                if (!response.ok || !data.status) {
                    throw new Error(
                        data.error || "Unable to load pages."
                    );
                }

                setAllPages(
                    Array.isArray(data.pages) ? data.pages : []
                );

            } catch (err) {
                console.error("Parent pages loading error:", err);
                setError(err.message || "Unable to load parent pages.");
            } finally {
                setPagesLoading(false);
            }
        };

        loadPages();
    }, []);

    // Load page categories
    useEffect(() => {
        const loadCategories = async () => {
            setCategoriesLoading(true);

            try {
                const response = await fetch(
                    `${API_URL}/pages/categories.php`,
                    {
                        credentials: "include",
                        cache: "no-store"
                    }
                );

                const data = await response.json();

                if (!response.ok || !data.status) {
                    throw new Error(
                        data.error || "Unable to load categories."
                    );
                }

                setCategories(
                    Array.isArray(data.categories)
                        ? data.categories
                        : []
                );
            } catch (err) {
                console.error("Category loading error:", err);
                setError(err.message || "Unable to load categories.");
            } finally {
                setCategoriesLoading(false);
            }
        };

        loadCategories();
    }, []);

    // Load existing page
    useEffect(() => {
        if (!isEdit) {
            setLoading(false);
            return;
        }

        const loadPage = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(
                    `${API_URL}/pages/get.php?id=${encodeURIComponent(id)}`,
                    {
                        credentials: "include",
                        cache: "no-store"
                    }
                );

                const data = await response.json();

                if (!response.ok || !data.status) {
                    throw new Error(
                        data.error || "Unable to load page."
                    );
                }

                const page = data.page;

                setInitialValues({
                    title: page.title || "",
                    slug: page.slug || "",
                    category_id: String(page.category_id || ""),
                    parent_id: page.parent_id
                        ? String(page.parent_id)
                        : "",
                    sort_order: String(page.sort_order ?? 0),
                    status: page.status || "draft",
                    meta_title: page.meta_title || "",
                    meta_description: page.meta_description || ""
                });

                setBlocks(
                    Array.isArray(page.blocks)
                        ? page.blocks
                        : []
                );
            } catch (err) {
                console.error("Page loading error:", err);
                setError(err.message || "Unable to load page.");
            } finally {
                setLoading(false);
            }
        };

        loadPage();
    }, [id, isEdit]);

    // Add content block
    const addBlock = (type) => {
        setBlocks((previous) => [
            ...previous,
            createBlock(type)
        ]);
    };

    // Save page
    const savePage = async (values) => {
        setSaving(true);
        setError("");
        setSuccess("");

        try {
            if (!csrfToken) {
                throw new Error("Security token unavailable. Please refresh and try again.");
            }

            const payload = {
                ...(isEdit ? { id: Number(id) } : {}),
                ...values,
                category_id: Number(values.category_id),
                parent_id: values.parent_id
                    ? Number(values.parent_id)
                    : null,
                sort_order: Number(values.sort_order || 0),
                blocks
            };

            const endpoint = isEdit
                ? "update.php"
                : "save.php";

            const response = await fetch(
                `${API_URL}/pages/${endpoint}`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": csrfToken
                    },
                    body: JSON.stringify(payload)
                }
            );

            const data = await response.json();

            if (!response.ok || !data.status) {
                throw new Error(
                    data.error || "Unable to save page."
                );
            }

            setSuccess(
                isEdit
                    ? "Page updated successfully."
                    : "Page created successfully."
            );

            if (!isEdit && data.id) {
                router.push(`/admin/pages/page-editor/${data.id}`);
            }
        } catch (err) {
            console.error("Page saving error:", err);
            setError(err.message || "Unable to save page.");
        } finally {
            setSaving(false);
        }
    };

    if (loading || categoriesLoading || pagesLoading) {
        return (
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: 300 }}
                spacing={2}
            >
                <CircularProgress />
                <Typography color="text.secondary">
                    Loading page editor...
                </Typography>
            </Stack>
        );
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={savePage}
        >
            {({
                values,
                handleChange,
                handleSubmit,
                setFieldValue,
                isSubmitting
            }) => {

                const availableParentPages = buildPageOptions(
                    allPages.filter((page) => {
                        return (
                            Number(page.category_id) ===
                            Number(values.category_id)
                        );
                    }),
                    values.category_id
                );

                const descendants = isEdit
                    ? getDescendantIds(allPages, id)
                    : new Set();

                const filteredParentPages = availableParentPages.filter(
                    (page) => {
                        const pageId = Number(page.id);

                        return (
                            pageId !== Number(id) &&
                            !descendants.has(pageId)
                        );
                    }
                );
                return (
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>

                            {/* Header */}
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography variant="h5" fontWeight={600}>
                                    {isEdit ? "Edit Page" : "Create Page"}
                                </Typography>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={saving || isSubmitting}
                                >
                                    {saving
                                        ? "Saving..."
                                        : isEdit
                                            ? "Update Page"
                                            : "Create Page"}
                                </Button>
                            </Stack>

                            {error && (
                                <Alert severity="error">
                                    {error}
                                </Alert>
                            )}

                            {success && (
                                <Alert severity="success">
                                    {success}
                                </Alert>
                            )}

                            {/* Basic information */}
                            <Paper sx={{ p: 3 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6">
                                        Page Information
                                    </Typography>

                                    <TextField
                                        label="Page Title"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />

                                    <TextField
                                        label="Page Slug"
                                        name="slug"
                                        value={values.slug}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                        helperText="Example: about-us"
                                    />

                                    <TextField
                                        select
                                        label="Category"
                                        name="category_id"
                                        value={values.category_id}
                                        onChange={(event) => {
                                            const newCategoryId = event.target.value;

                                            setFieldValue("category_id", newCategoryId);
                                            setFieldValue("parent_id", "");
                                        }}
                                        fullWidth
                                        required
                                    >
                                        {categories.map((category) => (
                                            <MenuItem
                                                key={category.id}
                                                value={String(category.id)}
                                            >
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        select
                                        label="Parent Page"
                                        name="parent_id"
                                        value={values.parent_id}
                                        onChange={handleChange}
                                        fullWidth
                                        disabled={!values.category_id || allPages.length === 0}
                                        helperText="Leave empty to make this a top-level page."
                                    >
                                        <MenuItem value="">
                                            No Parent (Top Level)
                                        </MenuItem>

                                        {filteredParentPages.map((page) => (
                                            <MenuItem
                                                key={page.id}
                                                value={String(page.id)}
                                            >
                                                {"— ".repeat(page.depth)}
                                                {page.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        label="Sort Order"
                                        name="sort_order"
                                        type="number"
                                        value={values.sort_order}
                                        onChange={handleChange}
                                        fullWidth
                                        slotProps={{
                                            htmlInput: {
                                                min: 0,
                                                step: 1
                                            }
                                        }}
                                        helperText="Lower numbers appear first among pages with the same parent."
                                    />

                                    <TextField
                                        select
                                        label="Status"
                                        name="status"
                                        value={values.status}
                                        onChange={handleChange}
                                        fullWidth
                                    >
                                        <MenuItem value="draft">
                                            Draft
                                        </MenuItem>

                                        <MenuItem value="published">
                                            Published
                                        </MenuItem>
                                    </TextField>
                                </Stack>
                            </Paper>

                            {/* SEO */}
                            <Paper sx={{ p: 3 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6">
                                        SEO Settings
                                    </Typography>

                                    <TextField
                                        label="Meta Title"
                                        name="meta_title"
                                        value={values.meta_title}
                                        onChange={handleChange}
                                        fullWidth
                                    />

                                    <TextField
                                        label="Meta Description"
                                        name="meta_description"
                                        value={values.meta_description}
                                        onChange={handleChange}
                                        multiline
                                        minRows={3}
                                        fullWidth
                                    />
                                </Stack>
                            </Paper>

                            {/* Content blocks */}
                            <Paper sx={{ p: 3 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6">
                                        Page Content
                                    </Typography>

                                    <Divider />

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Add and arrange content blocks for this page.
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                        useFlexGap
                                    >
                                        {[
                                            "title",
                                            "subtitle",
                                            "paragraph",
                                            "image",
                                            "file",
                                            "list",
                                            "table",
                                            "page_hero",
                                            "image_text",
                                            "vision_mission",
                                            "founder_profile",
                                            "persons_list",
                                            "objectives",
                                            "timeline"
                                        ].map((type) => (
                                            <Button
                                                key={type}
                                                variant="outlined"
                                                size="small"
                                                onClick={() => addBlock(type)}
                                            >
                                                + {type.replaceAll("_", " ")}
                                            </Button>
                                        ))}
                                    </Stack>

                                    <Divider />

                                    <SortableBlocks
                                        blocks={blocks}
                                        setBlocks={setBlocks}
                                    />

                                    {blocks.length === 0 && (
                                        <Typography
                                            color="text.secondary"
                                            textAlign="center"
                                            sx={{ py: 4 }}
                                        >
                                            No content blocks added yet.
                                        </Typography>
                                    )}
                                </Stack>
                            </Paper>

                            {/* Bottom save button */}
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={saving || isSubmitting}
                                >
                                    {saving
                                        ? "Saving..."
                                        : isEdit
                                            ? "Update Page"
                                            : "Create Page"}
                                </Button>
                            </Stack>

                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}
