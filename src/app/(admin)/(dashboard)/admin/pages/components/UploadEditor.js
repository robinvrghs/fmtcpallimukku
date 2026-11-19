
"use client";

import { useState } from "react";

import {
    Stack,
    Button,
    TextField,
    CircularProgress,
    Typography,
    Alert,
    Box
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useAuth } from "@/context/AuthContext";

const API_URL = "https://fmtcpallimukku.ac.in/api";
const SITE_URL = "https://fmtcpallimukku.ac.in";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif"
];

function getPreviewUrl(url) {
    if (!url) return "";

    try {
        return new URL(url, SITE_URL).href;
    } catch {
        return "";
    }
}

export default function UploadEditor({
    block,
    updateBlock,
    fieldName = "url",
    uploadType
}) {
    const { csrfToken } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const actualUploadType = uploadType || block.type;
    const isImage = actualUploadType === "image";
    const isOriginalImageBlock =
        block.type === "image" && fieldName === "url";

    const fileUrl = block[fieldName] || "";
    const previewUrl = getPreviewUrl(fileUrl);

    const uploadFile = async (file) => {
        setLoading(true);
        setError("");

        try {
            if (!csrfToken) {
                throw new Error(
                    "Authentication token unavailable. Please refresh and try again."
                );
            }

            const formData = new FormData();

            formData.append("file", file);
            formData.append("type", actualUploadType);

            const response = await fetch(
                `${API_URL}/pages/upload.php`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "X-CSRF-Token": csrfToken
                    },
                    body: formData
                }
            );

            const data = await response.json();

            if (!response.ok || !data.status || !data.url) {
                throw new Error(data.error || "Upload failed.");
            }

            if (isImage) {
                updateBlock({
                    [fieldName]: data.url
                });
            } else {
                updateBlock({
                    [fieldName]: data.url,
                    filename: file.name
                });
            }
        } catch (err) {
            console.error("Upload error:", err);
            setError(err.message || "Unable to upload file.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];

        event.target.value = "";

        if (!file) return;

        setError("");

        if (file.size > MAX_FILE_SIZE) {
            setError("Maximum file size is 10MB.");
            return;
        }

        if (isImage && !IMAGE_TYPES.includes(file.type)) {
            setError("Please select JPEG, PNG, WebP or GIF.");
            return;
        }

        if (!isImage && file.type !== "application/pdf") {
            setError("Please select a PDF document.");
            return;
        }

        uploadFile(file);
    };

    return (
        <Stack spacing={2}>
            {error && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}

            <Box>
                <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    disabled={loading}
                >
                    {loading
                        ? "Uploading..."
                        : isImage
                            ? "Upload Image"
                            : "Upload PDF"}

                    <input
                        hidden
                        type="file"
                        accept={
                            isImage
                                ? "image/jpeg,image/png,image/webp,image/gif"
                                : "application/pdf,.pdf"
                        }
                        onChange={handleFileChange}
                    />
                </Button>
            </Box>

            {loading && (
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <CircularProgress size={22} />
                    <Typography variant="body2">
                        Uploading...
                    </Typography>
                </Stack>
            )}

            {isImage && previewUrl && (
                <Box
                    component="img"
                    src={previewUrl}
                    alt={block.alt || ""}
                    sx={{
                        maxWidth: "100%",
                        width: 300,
                        maxHeight: 220,
                        objectFit: "contain",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider"
                    }}
                />
            )}

            {isImage && (
                <TextField
                    label="Alt Text"
                    value={block.alt || ""}
                    onChange={(e) =>
                        updateBlock({ alt: e.target.value })
                    }
                    fullWidth
                />
            )}

            {isOriginalImageBlock && (
                <TextField
                    label="Caption"
                    value={block.caption || ""}
                    onChange={(e) =>
                        updateBlock({ caption: e.target.value })
                    }
                    fullWidth
                />
            )}

            {!isImage && previewUrl && (
                <Alert severity="success">
                    Uploaded: {block.filename || "PDF document"}

                    <Typography
                        component="a"
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="block"
                        sx={{ mt: 1 }}
                    >
                        View uploaded PDF
                    </Typography>
                </Alert>
            )}
        </Stack>
    );
}
