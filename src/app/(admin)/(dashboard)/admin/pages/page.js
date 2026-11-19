
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    IconButton,
    InputAdornment,
    MenuItem,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Tooltip,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "@/context/AuthContext";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";

const API_URL = "https://fmtcpallimukku.ac.in/api";


function buildPageOptions(pages, categoryId) {
    const categoryPages = pages.filter(
        (item) => Number(item.category_id) === Number(categoryId)
    );

    const childrenMap = {};

    categoryPages.forEach((item) => {
        const parentId = item.parent_id
            ? Number(item.parent_id)
            : 0;

        if (!childrenMap[parentId]) {
            childrenMap[parentId] = [];
        }

        childrenMap[parentId].push(item);
    });

    const options = [];
    const visited = new Set();

    const addChildren = (parentId, depth = 0) => {
        const children = [...(childrenMap[parentId] || [])].sort(
            (a, b) =>
                Number(a.sort_order ?? 0) -
                Number(b.sort_order ?? 0) ||
                a.title.localeCompare(b.title)
        );

        children.forEach((item) => {
            const id = Number(item.id);

            if (visited.has(id)) return;

            visited.add(id);

            options.push({
                ...item,
                depth
            });

            addChildren(id, depth + 1);
        });
    };

    addChildren(0);

    return options;
}

export default function PagesManager() {
    const router = useRouter();

    const { csrfToken } = useAuth();

    const [reorderOpen, setReorderOpen] = useState(false);

    const [reorderCategoryId, setReorderCategoryId] = useState("");
    const [reorderParentId, setReorderParentId] = useState("");

    const [reorderItems, setReorderItems] = useState([]);

    const [draggedItemId, setDraggedItemId] = useState(null);

    const [reorderSaving, setReorderSaving] = useState(false);
    const [reorderError, setReorderError] = useState("");
    const [reorderSuccess, setReorderSuccess] = useState("");

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState("");

    const [pages, setPages] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const loadPages = useCallback(async () => {
        setLoading(true);
        setError("");

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

            setPages(
                Array.isArray(data.pages) ? data.pages : []
            );

            setCategories(
                Array.isArray(data.categories) ? data.categories : []
            );
        } catch (err) {
            console.error("Pages loading error:", err);
            setError(err.message || "Unable to load pages.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPages();
    }, [loadPages]);

    const filteredPages = useMemo(() => {
        return pages.filter((item) => {
            const searchText = search.trim().toLowerCase();

            const matchesSearch =
                !searchText ||
                item.title?.toLowerCase().includes(searchText) ||
                item.slug?.toLowerCase().includes(searchText);

            const matchesCategory =
                categoryFilter === "all" ||
                String(item.category_id) === categoryFilter;

            const matchesStatus =
                statusFilter === "all" ||
                item.status === statusFilter;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesStatus
            );
        });
    }, [pages, search, categoryFilter, statusFilter]);

    const paginatedPages = filteredPages.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const parentOptions = useMemo(() => {
        return buildPageOptions(pages, reorderCategoryId);
    }, [pages, reorderCategoryId]);

    const siblingPages = useMemo(() => {
        return pages
            .filter((item) => {
                const sameCategory =
                    Number(item.category_id) ===
                    Number(reorderCategoryId);

                const sameParent = reorderParentId
                    ? Number(item.parent_id) === Number(reorderParentId)
                    : item.parent_id === null ||
                    item.parent_id === undefined;

                return sameCategory && sameParent;
            })
            .sort(
                (a, b) =>
                    Number(a.sort_order ?? 0) -
                    Number(b.sort_order ?? 0) ||
                    a.title.localeCompare(b.title)
            );
    }, [pages, reorderCategoryId, reorderParentId]);

    useEffect(() => {
        setReorderItems(siblingPages);
    }, [siblingPages]);

    const openReorder = () => {
        const selectedCategory =
            categoryFilter !== "all"
                ? categoryFilter
                : categories.length
                    ? String(categories[0].id)
                    : "";

        setReorderCategoryId(selectedCategory);
        setReorderParentId("");
        setReorderError("");
        setReorderSuccess("");
        setReorderOpen(true);
    };

    const handleDrop = (targetId) => {
        if (
            draggedItemId === null ||
            Number(draggedItemId) === Number(targetId)
        ) {
            return;
        }

        setReorderItems((previous) => {
            const oldIndex = previous.findIndex(
                (item) => Number(item.id) === Number(draggedItemId)
            );

            const newIndex = previous.findIndex(
                (item) => Number(item.id) === Number(targetId)
            );

            if (oldIndex < 0 || newIndex < 0) return previous;

            const updated = [...previous];

            const [movedItem] = updated.splice(oldIndex, 1);

            updated.splice(newIndex, 0, movedItem);

            return updated;
        });

        setDraggedItemId(null);
    };

    const moveItem = (index, direction) => {
        const newIndex = index + direction;

        if (newIndex < 0 || newIndex >= reorderItems.length) {
            return;
        }

        setReorderItems((previous) => {
            const updated = [...previous];

            const [item] = updated.splice(index, 1);

            updated.splice(newIndex, 0, item);

            return updated;
        });
    };

    const savePageOrder = async () => {
        setReorderSaving(true);
        setReorderError("");
        setReorderSuccess("");

        try {
            if (!csrfToken) {
                throw new Error(
                    "Security token unavailable. Please refresh."
                );
            }

            const response = await fetch(
                `${API_URL}/pages/reorder.php`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": csrfToken
                    },
                    body: JSON.stringify({
                        category_id: Number(reorderCategoryId),
                        parent_id: reorderParentId
                            ? Number(reorderParentId)
                            : null,
                        ordered_ids: reorderItems.map(
                            (item) => Number(item.id)
                        )
                    })
                }
            );

            const data = await response.json();

            if (!response.ok || !data.status) {
                throw new Error(
                    data.error || "Unable to save page order."
                );
            }

            setReorderSuccess("Page order saved successfully.");

            await loadPages();

        } catch (err) {
            console.error("Page reorder error:", err);
            setReorderError(
                err.message || "Unable to save page order."
            );
        } finally {
            setReorderSaving(false);
        }
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        setPage(0);
    };

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
        setPage(0);
    };

    const handleStatusChange = (event) => {
        setStatusFilter(event.target.value);
        setPage(0);
    };

    const handleEdit = (id) => {
        router.push(`/admin/pages/page-editor/${id}`);
    };

    const handleDeleteClick = (item) => {
        setSelectedPage(item);
        setDeleteError("");
        setDeleteDialogOpen(true);
    };

    const handleDeleteCancel = () => {
        if (deleting) return;

        setDeleteDialogOpen(false);
        setSelectedPage(null);
        setDeleteError("");
    };

    const handleDeleteConfirm = async () => {
        if (!selectedPage || deleting) return;

        setDeleting(true);
        setDeleteError("");

        try {
            const response = await fetch(
                `${API_URL}/pages/delete.php`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": csrfToken
                    },
                    body: JSON.stringify({
                        id: selectedPage.id
                    })
                }
            );

            const data = await response.json();

            if (!response.ok || !data.status) {
                throw new Error(data.error || "Unable to delete page.");
            }

            setDeleteDialogOpen(false);
            setSelectedPage(null);

            await loadPages();

        } catch (err) {
            setDeleteError(err.message || "Unable to delete page.");
        } finally {
            setDeleting(false);
        }
    };


    const handleCreate = () => {
        router.push("/admin/pages/page-editor");
    };

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>

            {/* Header */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{
                    justifyContent: "space-between",
                    mb: 3,
                    alignItems: { xs: "stretch", sm: "center" }
                }}
                spacing={2}
            >
                <Box>
                    <Typography variant="h5" fontWeight={700}>
                        Pages
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        Manage your website pages and content.
                    </Typography>
                </Box>

                <Stack direction="row" spacing={1}>
                    <Tooltip title="Refresh pages">
                        <IconButton
                            onClick={loadPages}
                            disabled={loading}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>

                    <Button
                        variant="outlined"
                        onClick={openReorder}
                        disabled={loading || pages.length === 0}
                    >
                        Reorder Pages
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleCreate}
                    >
                        Create Page
                    </Button>
                </Stack>
            </Stack>

            {/* Error */}
            {error && (
                <Alert
                    severity="error"
                    sx={{ mb: 2 }}
                    action={
                        <Button
                            color="inherit"
                            size="small"
                            onClick={loadPages}
                        >
                            Retry
                        </Button>
                    }
                >
                    {error}
                </Alert>
            )}

            {/* Filters */}
            <Paper
                variant="outlined"
                sx={{ p: 2, mb: 3 }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                >
                    <TextField
                        placeholder="Search pages..."
                        value={search}
                        onChange={handleSearchChange}
                        size="small"
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />

                    <TextField
                        select
                        label="Category"
                        value={categoryFilter}
                        onChange={handleCategoryChange}
                        size="small"
                        sx={{ minWidth: { md: 190 } }}
                    >
                        <MenuItem value="all">
                            All Categories
                        </MenuItem>

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
                        label="Status"
                        value={statusFilter}
                        onChange={handleStatusChange}
                        size="small"
                        sx={{ minWidth: { md: 160 } }}
                    >
                        <MenuItem value="all">All Statuses</MenuItem>
                        <MenuItem value="published">Published</MenuItem>
                        <MenuItem value="draft">Draft</MenuItem>
                    </TextField>
                </Stack>
            </Paper>


            {reorderOpen && (
                <Paper
                    variant="outlined"
                    sx={{ p: 3, mb: 3 }}
                >
                    <Stack spacing={2}>

                        <Stack
                            direction="row"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <Box>
                                <Typography variant="h6" fontWeight={600}>
                                    Reorder Pages
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Drag pages to change their display order.
                                </Typography>
                            </Box>

                            <Button
                                color="inherit"
                                onClick={() => setReorderOpen(false)}
                            >
                                Close
                            </Button>
                        </Stack>

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={2}
                        >
                            <TextField
                                select
                                label="Category"
                                value={reorderCategoryId}
                                onChange={(event) => {
                                    setReorderCategoryId(event.target.value);
                                    setReorderParentId("");
                                    setReorderError("");
                                    setReorderSuccess("");
                                }}
                                fullWidth
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
                                value={reorderParentId}
                                onChange={(event) => {
                                    setReorderParentId(event.target.value);
                                    setReorderError("");
                                    setReorderSuccess("");
                                }}
                                fullWidth
                            >
                                <MenuItem value="">
                                    Top-Level Pages
                                </MenuItem>

                                {parentOptions.map((item) => (
                                    <MenuItem
                                        key={item.id}
                                        value={String(item.id)}
                                    >
                                        {"— ".repeat(item.depth)}
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>

                        {reorderError && (
                            <Alert severity="error">
                                {reorderError}
                            </Alert>
                        )}

                        {reorderSuccess && (
                            <Alert severity="success">
                                {reorderSuccess}
                            </Alert>
                        )}

                        {reorderItems.length === 0 ? (
                            <Alert severity="info">
                                No pages found under this parent.
                            </Alert>
                        ) : (
                            <Stack spacing={1}>
                                {reorderItems.map((item, index) => (
                                    <Box
                                        key={item.id}
                                        draggable
                                        onDragStart={() => {
                                            setDraggedItemId(item.id);
                                        }}
                                        onDragOver={(event) => {
                                            event.preventDefault();
                                        }}
                                        onDrop={(event) => {
                                            event.preventDefault();
                                            handleDrop(item.id);
                                        }}
                                        onDragEnd={() => {
                                            setDraggedItemId(null);
                                        }}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                            p: 1.5,
                                            border: 1,
                                            borderColor:
                                                Number(draggedItemId) ===
                                                    Number(item.id)
                                                    ? "primary.main"
                                                    : "divider",
                                            borderRadius: 2,
                                            bgcolor:
                                                Number(draggedItemId) ===
                                                    Number(item.id)
                                                    ? "action.hover"
                                                    : "background.paper",
                                            cursor: "grab",
                                            opacity:
                                                Number(draggedItemId) ===
                                                    Number(item.id)
                                                    ? 0.5
                                                    : 1,
                                            transition: "all 0.15s"
                                        }}
                                    >
                                        <DragIndicatorIcon
                                            color="action"
                                        />

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ minWidth: 24 }}
                                        >
                                            {index + 1}.
                                        </Typography>

                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography fontWeight={600}>
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                /{item.slug}
                                            </Typography>
                                        </Box>

                                        <Chip
                                            size="small"
                                            label={item.status}
                                            color={
                                                item.status === "published"
                                                    ? "success"
                                                    : "default"
                                            }
                                            variant="outlined"
                                        />

                                        <IconButton
                                            size="small"
                                            disabled={index === 0}
                                            onClick={() => moveItem(index, -1)}
                                        >
                                            <ArrowUpwardIcon fontSize="small" />
                                        </IconButton>

                                        <IconButton
                                            size="small"
                                            disabled={
                                                index === reorderItems.length - 1
                                            }
                                            onClick={() => moveItem(index, 1)}
                                        >
                                            <ArrowDownwardIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Stack>
                        )}

                        <Stack
                            direction="row"
                            sx={{ justifyContent: "flex-end" }}
                            spacing={1}
                        >
                            <Button
                                variant="outlined"
                                onClick={() => setReorderItems(siblingPages)}
                                disabled={reorderSaving}
                            >
                                Reset
                            </Button>

                            <Button
                                variant="contained"
                                onClick={savePageOrder}
                                disabled={
                                    reorderSaving ||
                                    reorderItems.length < 2
                                }
                            >
                                {reorderSaving
                                    ? "Saving..."
                                    : "Save Order"}
                            </Button>
                        </Stack>

                    </Stack>
                </Paper>
            )}


            {/* Page list */}
            <Paper variant="outlined">

                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Typography fontWeight={600}>
                        All Pages
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {filteredPages.length} pages
                    </Typography>
                </Box>

                {loading ? (
                    <Stack
                        spacing={2}
                        sx={{
                            py: 8,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <CircularProgress size={30} />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Loading pages...
                        </Typography>
                    </Stack>
                ) : filteredPages.length === 0 ? (
                    <Stack
                        spacing={2}
                        sx={{
                            py: 8, px: 2,
                            alignItems: "center"
                        }}
                    >
                        <Typography color="text.secondary">
                            No pages found.
                        </Typography>

                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={handleCreate}
                        >
                            Create your first page
                        </Button>
                    </Stack>
                ) : (
                    <>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Page Title</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Slug</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Updated</TableCell>
                                        <TableCell align="right">
                                            Actions
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {paginatedPages.map((item) => (
                                        <TableRow
                                            key={item.id}
                                            hover
                                        >
                                            <TableCell>
                                                <Typography
                                                    fontWeight={600}
                                                    variant="body2"
                                                >
                                                    {item.title}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                {item.category_name || "—"}
                                            </TableCell>

                                            <TableCell>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    /{item.slug}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Chip
                                                    label={item.status}
                                                    size="small"
                                                    color={
                                                        item.status === "published"
                                                            ? "success"
                                                            : "default"
                                                    }
                                                    variant="outlined"
                                                />
                                            </TableCell>

                                            <TableCell>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {item.updated_at
                                                        ? new Date(
                                                            item.updated_at
                                                        ).toLocaleDateString("en-IN")
                                                        : "—"}
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="right">
                                                <Stack
                                                    direction="row"
                                                    spacing={0.5}
                                                    sx={{ justifyContent: "flex-end" }}
                                                >
                                                    <Tooltip title="Edit page">
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => handleEdit(item.id)}
                                                            color="primary"
                                                        >
                                                            <EditIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title="Delete page">
                                                        <IconButton
                                                            size="small"
                                                            color="error"
                                                            onClick={() => handleDeleteClick(item)}
                                                        >
                                                            <DeleteIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            component="div"
                            count={filteredPages.length}
                            page={page}
                            onPageChange={(event, newPage) =>
                                setPage(newPage)
                            }
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={(event) => {
                                setRowsPerPage(
                                    parseInt(event.target.value, 10)
                                );
                                setPage(0);
                            }}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                        />
                    </>
                )}
            </Paper>


            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteCancel}
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle fontWeight={700}>
                    Delete Page?
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete
                        {" "}
                        <strong>{selectedPage?.title}</strong>?
                    </DialogContentText>

                    <Alert severity="warning" sx={{ mt: 2 }}>
                        This action cannot be undone. Any child pages
                        belonging to this page will also be deleted.
                    </Alert>

                    {deleteError && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {deleteError}
                        </Alert>
                    )}
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button
                        onClick={handleDeleteCancel}
                        disabled={deleting}
                        color="inherit"
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteConfirm}
                        disabled={deleting}
                        startIcon={
                            deleting
                                ? <CircularProgress size={16} color="inherit" />
                                : <DeleteIcon />
                        }
                    >
                        {deleting ? "Deleting..." : "Delete Page"}
                    </Button>
                </DialogActions>
            </Dialog>


        </Box>
    );
}
