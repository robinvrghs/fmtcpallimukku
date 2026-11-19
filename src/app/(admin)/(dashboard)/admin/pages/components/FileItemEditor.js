"use client";

import {
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import {
    AddOutlined,
    DeleteOutline,
    PictureAsPdfOutlined
} from "@mui/icons-material";

import UploadEditor from "./UploadEditor";

export default function FileItemsEditor({ block, updateBlock }) {

    const files = Array.isArray(block.items) ? block.items : [];

    const addFile = () => {
        updateBlock({
            items: [
                ...files,
                {
                    id: crypto.randomUUID(),
                    filename: "",
                    url: ""
                }
            ]
        });
    };

    const updateFile = (fileId, changes) => {
        updateBlock({
            items: files.map((file) =>
                file.id === fileId
                    ? { ...file, ...changes }
                    : file
            )
        });
    };

    const removeFile = (fileId) => {
        updateBlock({
            items: files.filter((file) => file.id !== fileId)
        });
    };

    return (
        <Stack spacing={2}>

            <TextField
                label="Section Title"
                fullWidth
                value={block.title || ""}
                onChange={(event) =>
                    updateBlock({ title: event.target.value })
                }
            />

            <Divider />

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography fontWeight={600}>
                    Files ({files.length})
                </Typography>

                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<AddOutlined />}
                    onClick={addFile}
                >
                    Add File
                </Button>
            </Stack>

            {files.map((file, index) => (
                <Box
                    key={file.id}
                    sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        p: 2
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <PictureAsPdfOutlined color="secondary" />
                            <Typography fontWeight={600}>
                                File {index + 1}
                            </Typography>
                        </Stack>

                        <IconButton
                            color="error"
                            size="small"
                            onClick={() => removeFile(file.id)}
                            aria-label={`Remove file ${index + 1}`}
                        >
                            <DeleteOutline />
                        </IconButton>
                    </Stack>

                    <Stack spacing={2}>
                        <TextField
                            label="Display Name"
                            fullWidth
                            size="small"
                            value={file.filename || ""}
                            onChange={(event) =>
                                updateFile(file.id, {
                                    filename: event.target.value
                                })
                            }
                        />

                        <UploadEditor
                            block={file}
                            updateBlock={(changes) =>
                                updateFile(file.id, changes)
                            }
                            fieldName="url"
                            uploadType="file"
                        />

                        {file.url && (
                            <Typography
                                variant="caption"
                                color="success.main"
                                sx={{ overflowWrap: "anywhere" }}
                            >
                                Uploaded: {file.url}
                            </Typography>
                        )}
                    </Stack>
                </Box>
            ))}

            {files.length === 0 && (
                <Box
                    sx={{
                        py: 4,
                        textAlign: "center",
                        bgcolor: "action.hover",
                        borderRadius: 2
                    }}
                >
                    <Typography color="text.secondary">
                        No files added yet. Click Add File to upload a PDF.
                    </Typography>
                </Box>
            )}

        </Stack>
    );
}