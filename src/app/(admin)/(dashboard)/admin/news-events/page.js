
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Tab,
    TextField,
    Typography,
} from "@mui/material";

import AddOutlined from "@mui/icons-material/AddOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import EventOutlined from "@mui/icons-material/EventOutlined";

import { useAuth } from "@/context/AuthContext";
import NewsEventDialog from "./components/NewsEventDialog";
import { DeleteOutlined } from "@mui/icons-material";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const getErrorMessage = (result) =>
    result?.error || result?.message || "Something went wrong.";

const formatDate = (value) => {
    if (!value) return "—";

    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
};

export default function NewsEventsPage() {
    const { authenticated, loading: authLoading, csrfToken } = useAuth();

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [tab, setTab] = useState("all");
    const [search, setSearch] = useState("");

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const [deleteRecord, setDeleteRecord] = useState(null);

    const fetchRecords = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `${API_URL}/news-events/get_news_events_admin.php`,
                {
                    method: "GET",
                    credentials: "include",
                    cache: "no-store",
                    headers: { Accept: "application/json" },
                }
            );

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(getErrorMessage(result));
            }

            setRecords(result.data || []);
        } catch (err) {
            setError(err.message || "Unable to load records.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authenticated) {
            fetchRecords();
        } else if (!authLoading) {
            setLoading(false);
        }
    }, [authenticated, authLoading, fetchRecords]);

    const filteredRecords = useMemo(() => {
        return records.filter((record) => {
            const matchesTab =
                tab === "all" || record.type === tab;

            const searchText = search.trim().toLowerCase();

            const matchesSearch =
                !searchText ||
                record.title?.toLowerCase().includes(searchText) ||
                record.category?.toLowerCase().includes(searchText);

            return matchesTab && matchesSearch;
        });
    }, [records, tab, search]);

    const openAddDialog = () => {
        setSelectedRecord(null);
        setDialogOpen(true);
    };

    const openEditDialog = (record) => {
        setSelectedRecord(record);
        setDialogOpen(true);
    };

    const handleSave = async (formData, isEdit) => {
        setSaving(true);
        setError("");
        setSuccess("");

        try {
            const endpoint = isEdit
                ? "update_news_event.php"
                : "add_news_event.php";

            const response = await fetch(
                `${API_URL}/news-events/${endpoint}`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "X-CSRF-Token": csrfToken || "",
                    },
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(getErrorMessage(result));
            }

            setDialogOpen(false);
            setSelectedRecord(null);
            setSuccess(result.message || "Saved successfully.");

            await fetchRecords();
        } catch (err) {
            throw err;
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteRecord) return;

        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("id", String(deleteRecord.id));

        try {
            const response = await fetch(
                `${API_URL}/news-events/delete_news_event.php`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "X-CSRF-Token": csrfToken || "",
                    },
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(getErrorMessage(result));
            }

            setDeleteRecord(null);
            setSuccess(result.message || "Record deleted.");
            await fetchRecords();
        } catch (err) {
            setError(err.message || "Unable to delete record.");
            setDeleteRecord(null);
        }
    };

    if (authLoading || loading) {
        return (
            <Box
                sx={{
                    minHeight: 300,
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!authenticated) {
        return (
            <Alert severity="warning">
                Please sign in to manage news and events.
            </Alert>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "stretch", sm: "center" }}
                spacing={2}
                sx={{ mb: 3 }}
            >
                <Box>
                    <Typography variant="h5" fontWeight={700}>
                        News & Events
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Manage homepage announcements and upcoming events.
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddOutlined />}
                    onClick={openAddDialog}
                >
                    Add New
                </Button>
            </Stack>

            {error && (
                <Alert
                    severity="error"
                    sx={{ mb: 2 }}
                    onClose={() => setError("")}
                >
                    {error}
                </Alert>
            )}

            {success && (
                <Alert
                    severity="success"
                    sx={{ mb: 2 }}
                    onClose={() => setSuccess("")}
                >
                    {success}
                </Alert>
            )}

            <Paper sx={{ mb: 2 }}>
                <Tabs
                    value={tab}
                    onChange={(_, value) => setTab(value)}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label={`All (${records.length})`} value="all" />
                    <Tab
                        label={`Announcements (${records.filter((r) => r.type === "announcement").length})`}
                        value="announcement"
                    />
                    <Tab
                        label={`Events (${records.filter((r) => r.type === "event").length})`}
                        value="event"
                    />
                </Tabs>
            </Paper>

            <TextField
                fullWidth
                size="small"
                placeholder="Search by title or category..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                sx={{ mb: 2, maxWidth: 420 }}
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredRecords.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <Typography
                                        color="text.secondary"
                                        sx={{ py: 4 }}
                                    >
                                        No records found.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredRecords.map((record) => (
                                <TableRow key={record.id} hover>
                                    <TableCell>
                                        <Stack spacing={0.4}>
                                            <Typography fontWeight={600}>
                                                {record.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {record.category}
                                            </Typography>
                                        </Stack>
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            size="small"
                                            icon={
                                                record.type === "event"
                                                    ? <EventOutlined />
                                                    : <CampaignOutlined />
                                            }
                                            label={
                                                record.type === "event"
                                                    ? "Event"
                                                    : "Announcement"
                                            }
                                            variant="outlined"
                                        />
                                    </TableCell>

                                    <TableCell>
                                        {formatDate(record.display_date)}
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            size="small"
                                            label={
                                                Number(record.is_published) === 1
                                                    ? "Published"
                                                    : "Draft"
                                            }
                                            color={
                                                Number(record.is_published) === 1
                                                    ? "success"
                                                    : "default"
                                            }
                                        />
                                    </TableCell>

                                    <TableCell align="right">
                                        <IconButton
                                            aria-label="Edit record"
                                            onClick={() =>
                                                openEditDialog(record)
                                            }
                                        >
                                            <EditOutlined />
                                        </IconButton>

                                        <IconButton
                                            aria-label="Delete record"
                                            color="error"
                                            onClick={() =>
                                                setDeleteRecord(record)
                                            }
                                        >
                                            <DeleteOutlined />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <NewsEventDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSave={handleSave}
                record={selectedRecord}
                saving={saving}
            />

            <Dialog
                open={Boolean(deleteRecord)}
                onClose={() => setDeleteRecord(null)}
            >
                <DialogTitle>Delete record?</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete
                    {" "}
                    <strong>{deleteRecord?.title}</strong>?
                    This action cannot be undone.
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setDeleteRecord(null)}
                        color="inherit"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
