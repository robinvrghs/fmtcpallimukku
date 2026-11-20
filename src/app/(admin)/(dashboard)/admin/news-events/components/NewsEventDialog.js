
"use client";

import { useEffect, useState } from "react";
import {
    Alert,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    MenuItem,
    Stack,
    TextField,
} from "@mui/material";

const initialValues = {
    type: "announcement",
    category: "",
    title: "",
    description: "",
    display_date: "",
    link: "",
    is_published: true,
    sort_order: 0,
};

export default function NewsEventDialog({
    open,
    onClose,
    onSave,
    record,
    saving,
}) {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState("");

    useEffect(() => {
        if (open) {
            setValues(
                record
                    ? {
                        ...initialValues,
                        ...record,
                        is_published:
                            Number(record.is_published) === 1,
                    }
                    : initialValues
            );
            setError("");
        }
    }, [open, record]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (
            !values.category.trim() ||
            !values.title.trim() ||
            !values.display_date
        ) {
            setError("Please complete all required fields.");
            return;
        }

        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            formData.append(
                key,
                key === "is_published"
                    ? value
                        ? "1"
                        : "0"
                    : String(value ?? "")
            );
        });

        if (record?.id) {
            formData.append("id", String(record.id));
        }

        try {
            await onSave(formData, Boolean(record?.id));
        } catch (err) {
            setError(err.message || "Unable to save record.");
        }
    };

    return (
        <Dialog
            open={open}
            onClose={saving ? undefined : onClose}
            fullWidth
            maxWidth="sm"
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    {record ? "Edit News / Event" : "Add News / Event"}
                </DialogTitle>

                <DialogContent dividers>
                    <Stack spacing={2.5} sx={{ pt: 1 }}>
                        {error && (
                            <Alert severity="error">{error}</Alert>
                        )}

                        <TextField
                            select
                            fullWidth
                            label="Type"
                            name="type"
                            value={values.type}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="announcement">
                                Announcement
                            </MenuItem>
                            <MenuItem value="event">
                                Event
                            </MenuItem>
                        </TextField>

                        <TextField
                            fullWidth
                            label="Category"
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            placeholder="e.g. General, Academic, Examination"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            fullWidth
                            multiline
                            minRows={3}
                            label="Description"
                            name="description"
                            value={values.description || ""}
                            onChange={handleChange}
                        />

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 7 }}>
                                <TextField
                                    fullWidth
                                    type="date"
                                    label="Display date"
                                    name="display_date"
                                    value={values.display_date}
                                    onChange={handleChange}
                                    slotProps={{
                                        inputLabel: { shrink: true },
                                    }}
                                    required
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 5 }}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Sort order"
                                    name="sort_order"
                                    value={values.sort_order}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            fullWidth
                            label="Link (optional)"
                            name="link"
                            value={values.link || ""}
                            onChange={handleChange}
                            placeholder="https://example.com"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(values.is_published)}
                                    onChange={(event) =>
                                        setValues((previous) => ({
                                            ...previous,
                                            is_published: event.target.checked,
                                        }))
                                    }
                                />
                            }
                            label="Published"
                        />
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button
                        onClick={onClose}
                        color="inherit"
                        disabled={saving}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={saving}
                    >
                        {saving
                            ? "Saving..."
                            : record
                                ? "Update"
                                : "Create"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
