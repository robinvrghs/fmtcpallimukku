"use client";

import { useState } from "react";

import {
    Stack,
    Button,
    TextField,
    CircularProgress,
    Typography
} from "@mui/material";

export default function UploadEditor({
    block,
    updateBlock
}) {

    const [loading, setLoading] =
        useState(false);

    const uploadFile = async (
        file
    ) => {

        setLoading(true);

        try {

            const formData =
                new FormData();

            formData.append(
                "file",
                file
            );

            formData.append(
                "type",
                block.type
            );

            const response =
                await fetch(
                    "https://fmtcpallimukku.ac.in/api/pages/upload.php",
                    {
                        method: "POST",
                        body: formData
                    }
                );

            const data =
                await response.json();

            if (block.type === "image") {

                updateBlock({
                    url: data.url
                });

            } else {

                updateBlock({
                    url: data.url,
                    filename:
                        file.name
                });

            }

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    const handleFileChange =
        e => {

            const file =
                e.target.files?.[0];

            if (!file) return;

            const maxSize =
                10 * 1024 * 1024;

            if (
                file.size > maxSize
            ) {

                alert(
                    "Max file size 10MB"
                );

                return;
            }

            uploadFile(file);
        };

    return (
        <Stack spacing={2}>

            <Button
                variant="outlined"
                component="label"
            >
                Upload

                <input
                    hidden
                    type="file"
                    accept={
                        block.type === "image"
                            ? "image/*"
                            : "*"
                    }
                    onChange={
                        handleFileChange
                    }
                />

            </Button>

            {loading && (
                <CircularProgress />
            )}

            {block.type ===
                "image" &&
                block.url && (

                    <>
                        <img
                            src={block.url}
                            alt=""
                            style={{
                                maxWidth:
                                    "300px",
                                borderRadius:
                                    "8px"
                            }}
                        />

                        <TextField
                            label="Alt Text"
                            value={
                                block.alt
                            }
                            onChange={e =>
                                updateBlock({
                                    alt:
                                        e.target.value
                                })
                            }
                        />

                        <TextField
                            label="Caption"
                            value={
                                block.caption
                            }
                            onChange={e =>
                                updateBlock({
                                    caption:
                                        e.target.value
                                })
                            }
                        />
                    </>
                )}

            {block.type ===
                "file" &&
                block.url && (

                    <Typography>
                        Uploaded:
                        {" "}
                        {block.filename}
                    </Typography>

                )}

        </Stack>
    );
}