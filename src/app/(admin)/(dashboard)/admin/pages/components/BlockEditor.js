"use client";

import {
    Paper,
    Stack,
    Typography,
    TextField,
    IconButton
} from "@mui/material";

import DragIndicatorIcon
    from "@mui/icons-material/DragIndicator";

import DeleteIcon
    from "@mui/icons-material/Delete";

import ContentCopyIcon
    from "@mui/icons-material/ContentCopy";

import ListEditor
    from "./ListEditor";

import TableEditor
    from "./TableEditor";
import UploadEditor from "./UploadEditor";

export default function BlockEditor({
    block,
    blocks,
    setBlocks,
    dragHandleProps
}) {

    const updateBlock = (
        changes
    ) => {

        setBlocks(
            blocks.map(item =>
                item.id === block.id
                    ? {
                        ...item,
                        ...changes
                    }
                    : item
            )
        );
    };

    const removeBlock = () => {

        setBlocks(
            blocks.filter(
                item =>
                    item.id !== block.id
            )
        );
    };

    const duplicateBlock = () => {

        const copy = JSON.parse(
            JSON.stringify(block)
        );

        copy.id =
            crypto.randomUUID();

        const index =
            blocks.findIndex(
                item =>
                    item.id === block.id
            );

        const updated = [
            ...blocks
        ];

        updated.splice(
            index + 1,
            0,
            copy
        );

        setBlocks(updated);
    };

    return (
        <Paper
            sx={{
                p: 2,
                mb: 2
            }}
        >
            <Stack spacing={2}>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >

                        <IconButton
                            {...dragHandleProps}
                        >
                            <DragIndicatorIcon />
                        </IconButton>

                        <Typography
                            fontWeight={600}
                        >
                            {block.type}
                        </Typography>

                    </Stack>

                    <Stack
                        direction="row"
                    >

                        <IconButton
                            onClick={
                                duplicateBlock
                            }
                        >
                            <ContentCopyIcon />
                        </IconButton>

                        <IconButton
                            color="error"
                            onClick={
                                removeBlock
                            }
                        >
                            <DeleteIcon />
                        </IconButton>

                    </Stack>

                </Stack>

                {block.type ===
                    "title" && (
                        <TextField
                            label="Title"
                            fullWidth
                            value={
                                block.content
                            }
                            onChange={e =>
                                updateBlock({
                                    content:
                                        e.target.value
                                })
                            }
                        />
                    )}

                {block.type ===
                    "paragraph" && (
                        <TextField
                            multiline
                            rows={6}
                            fullWidth
                            label="Paragraph"
                            value={
                                block.content
                            }
                            onChange={e =>
                                updateBlock({
                                    content:
                                        e.target.value
                                })
                            }
                        />
                    )}

                {block.type ===
                    "list" && (
                        <ListEditor
                            block={block}
                            updateBlock={
                                updateBlock
                            }
                        />
                    )}

                {block.type ===
                    "table" && (
                        <TableEditor
                            block={block}
                            updateBlock={
                                updateBlock
                            }
                        />
                    )}


                {block.type ===
                    "image" && (
                        <UploadEditor
                            block={block}
                            updateBlock={
                                updateBlock
                            }
                        />
                    )}

                {block.type ===
                    "file" && (
                        <UploadEditor
                            block={block}
                            updateBlock={
                                updateBlock
                            }
                        />
                    )}

            </Stack>
        </Paper>
    );
}