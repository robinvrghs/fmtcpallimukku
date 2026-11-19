
"use client";

import {
    Paper,
    Stack,
    Typography,
    TextField,
    IconButton,
    Tooltip,
    Button,
    Divider,
    MenuItem
} from "@mui/material";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddIcon from "@mui/icons-material/Add";

import ListEditor from "./ListEditor";
import TableEditor from "./TableEditor";
import UploadEditor from "./UploadEditor";

import { v4 as uuid } from "uuid";
import FileItemsEditor from "./FileItemEditor";

export default function BlockEditor({
    block,
    setBlocks,
    dragHandleProps
}) {
    const updateBlock = (changes) => {
        setBlocks(previous =>
            previous.map(item =>
                item.id === block.id
                    ? { ...item, ...changes }
                    : item
            )
        );
    };

    const removeBlock = () => {
        setBlocks(previous =>
            previous.filter(item => item.id !== block.id)
        );
    };

    const duplicateBlock = () => {
        const copy = structuredClone(block);
        copy.id = uuid();

        setBlocks(previous => {
            const index = previous.findIndex(
                item => item.id === block.id
            );

            const updated = [...previous];
            updated.splice(index + 1, 0, copy);

            return updated;
        });
    };

    const updateItem = (index, changes) => {
        const items = [...(block.items || [])];

        items[index] = {
            ...items[index],
            ...changes
        };

        updateBlock({ items });
    };

    const removeItem = (index) => {
        updateBlock({
            items: (block.items || []).filter(
                (_, i) => i !== index
            )
        });
    };

    const addManagementItem = () => {
        updateBlock({
            items: [
                ...(block.items || []),
                {
                    id: uuid(),
                    name: "",
                    designation: "",
                    image: "",
                    description: ""
                }
            ]
        });
    };

    const addTimelineItem = () => {
        updateBlock({
            items: [
                ...(block.items || []),
                {
                    id: uuid(),
                    year: "",
                    title: "",
                    description: ""
                }
            ]
        });
    };

    const addObjective = () => {
        updateBlock({
            items: [...(block.items || []), ""]
        });
    };

    const updateObjective = (index, value) => {
        const items = [...(block.items || [])];
        items[index] = value;
        updateBlock({ items });
    };

    const renderImageUpload = (fieldName, label) => (
        <Stack spacing={1}>
            <Typography fontWeight={600}>
                {label}
            </Typography>

            <UploadEditor
                block={block}
                updateBlock={updateBlock}
                fieldName={fieldName}
                uploadType="image"
            />
        </Stack>
    );

    const renderEditor = () => {
        switch (block.type) {
            case "title":
            case "subtitle":
                return (
                    <TextField
                        label={block.type === "title" ? "Title" : "Subtitle"}
                        fullWidth
                        value={block.content || ""}
                        onChange={e =>
                            updateBlock({ content: e.target.value })
                        }
                    />
                );

            case "paragraph":
                return (
                    <TextField
                        multiline
                        minRows={4}
                        fullWidth
                        label="Paragraph"
                        value={block.content || ""}
                        onChange={e =>
                            updateBlock({ content: e.target.value })
                        }
                    />
                );

            case "list":
                return (
                    <ListEditor
                        block={block}
                        updateBlock={updateBlock}
                    />
                );

            case "table":
                return (
                    <TableEditor
                        block={block}
                        updateBlock={updateBlock}
                    />
                );

            case "image":
                return (
                    <UploadEditor
                        block={block}
                        updateBlock={updateBlock}
                    />
                );

            case "file":
                return (
                    <FileItemsEditor
                        block={block}
                        updateBlock={updateBlock}
                    />
                );



            case "page_hero":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Hero Title"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        <TextField
                            label="Description"
                            multiline
                            minRows={2}
                            fullWidth
                            value={block.description || ""}
                            onChange={e =>
                                updateBlock({ description: e.target.value })
                            }
                        />

                        {renderImageUpload("image", "Background Image")}

                        <TextField
                            select
                            label="Background Position"
                            fullWidth
                            value={block.background_position || "center"}
                            onChange={e =>
                                updateBlock({
                                    background_position: e.target.value
                                })
                            }
                        >
                            {[
                                "center",
                                "top",
                                "bottom",
                                "left",
                                "right",
                                "center top",
                                "center bottom"
                            ].map(position => (
                                <MenuItem key={position} value={position}>
                                    {position}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Overlay Opacity (%)"
                            type="number"
                            fullWidth
                            value={block.overlay_opacity ?? 65}
                            onChange={e =>
                                updateBlock({
                                    overlay_opacity: Math.min(
                                        100,
                                        Math.max(0, Number(e.target.value))
                                    )
                                })
                            }
                            slotProps={{
                                htmlInput: {
                                    min: 0,
                                    max: 100
                                }
                            }}
                            helperText="0 = transparent, 100 = fully opaque."
                        />
                    </Stack>
                );

            case "image_text":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Label"
                            fullWidth
                            value={block.label || ""}
                            onChange={e =>
                                updateBlock({ label: e.target.value })
                            }
                        />

                        <TextField
                            label="Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        <TextField
                            label="Description"
                            multiline
                            minRows={4}
                            fullWidth
                            value={block.description || ""}
                            onChange={e =>
                                updateBlock({ description: e.target.value })
                            }
                        />

                        {renderImageUpload("image", "Section Image")}
                    </Stack>
                );

            case "vision_mission":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        <TextField
                            label="Vision"
                            multiline
                            minRows={3}
                            fullWidth
                            value={block.vision || ""}
                            onChange={e =>
                                updateBlock({ vision: e.target.value })
                            }
                        />

                        <TextField
                            label="Mission"
                            multiline
                            minRows={3}
                            fullWidth
                            value={block.mission || ""}
                            onChange={e =>
                                updateBlock({ mission: e.target.value })
                            }
                        />
                    </Stack>
                );

            case "founder_profile":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Label"
                            fullWidth
                            value={block.label || ""}
                            onChange={e =>
                                updateBlock({ label: e.target.value })
                            }
                        />

                        <TextField
                            label="Founder Name"
                            fullWidth
                            value={block.name || ""}
                            onChange={e =>
                                updateBlock({ name: e.target.value })
                            }
                        />

                        <TextField
                            label="Designation"
                            fullWidth
                            value={block.designation || ""}
                            onChange={e =>
                                updateBlock({ designation: e.target.value })
                            }
                        />

                        <TextField
                            label="Description"
                            multiline
                            minRows={4}
                            fullWidth
                            value={block.description || ""}
                            onChange={e =>
                                updateBlock({ description: e.target.value })
                            }
                        />

                        <TextField
                            label="Quote"
                            multiline
                            minRows={2}
                            fullWidth
                            value={block.quote || ""}
                            onChange={e =>
                                updateBlock({ quote: e.target.value })
                            }
                        />

                        {renderImageUpload("image", "Founder Image")}
                    </Stack>
                );

            case "management_cards":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        <TextField
                            label="Section Description"
                            multiline
                            minRows={2}
                            fullWidth
                            value={block.description || ""}
                            onChange={e =>
                                updateBlock({ description: e.target.value })
                            }
                        />

                        <Divider />

                        {(block.items || []).map((item, index) => (
                            <Paper
                                key={item.id || index}
                                variant="outlined"
                                sx={{ p: 2 }}
                            >
                                <Stack spacing={2}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography fontWeight={600}>
                                            Management Member {index + 1}
                                        </Typography>

                                        <IconButton
                                            color="error"
                                            onClick={() => removeItem(index)}
                                            disabled={block.items.length <= 1}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>

                                    <TextField
                                        label="Name"
                                        fullWidth
                                        value={item.name || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                name: e.target.value
                                            })
                                        }
                                    />

                                    <TextField
                                        label="Designation"
                                        fullWidth
                                        value={item.designation || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                designation: e.target.value
                                            })
                                        }
                                    />

                                    <TextField
                                        label="Description"
                                        multiline
                                        minRows={2}
                                        fullWidth
                                        value={item.description || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                description: e.target.value
                                            })
                                        }
                                    />

                                    <UploadEditor
                                        block={{
                                            ...block,
                                            image: item.image || "",
                                            alt: item.alt || ""
                                        }}
                                        fieldName="image"
                                        uploadType="image"
                                        updateBlock={(changes) => updateItem(index, changes)}
                                    />
                                </Stack>
                            </Paper>
                        ))}

                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={addManagementItem}
                        >
                            Add Management Member
                        </Button>
                    </Stack>
                );

            case "objectives":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        {(block.items || []).map((item, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <TextField
                                    label={`Objective ${index + 1}`}
                                    fullWidth
                                    value={item || ""}
                                    onChange={e =>
                                        updateObjective(index, e.target.value)
                                    }
                                />

                                <IconButton
                                    color="error"
                                    onClick={() => removeItem(index)}
                                    disabled={block.items.length <= 1}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        ))}

                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={addObjective}
                        >
                            Add Objective
                        </Button>

                        {renderImageUpload("image", "Optional Image")}
                    </Stack>
                );

            case "timeline":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        {(block.items || []).map((item, index) => (
                            <Paper
                                key={item.id || index}
                                variant="outlined"
                                sx={{ p: 2 }}
                            >
                                <Stack spacing={2}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography fontWeight={600}>
                                            Timeline Entry {index + 1}
                                        </Typography>

                                        <IconButton
                                            color="error"
                                            onClick={() => removeItem(index)}
                                            disabled={block.items.length <= 1}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>

                                    <TextField
                                        label="Year"
                                        fullWidth
                                        value={item.year || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                year: e.target.value
                                            })
                                        }
                                    />

                                    <TextField
                                        label="Title"
                                        fullWidth
                                        value={item.title || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                title: e.target.value
                                            })
                                        }
                                    />

                                    <TextField
                                        label="Description"
                                        multiline
                                        minRows={2}
                                        fullWidth
                                        value={item.description || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                description: e.target.value
                                            })
                                        }
                                    />
                                </Stack>
                            </Paper>
                        ))}

                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={addTimelineItem}
                        >
                            Add Timeline Entry
                        </Button>
                    </Stack>
                );


            case "persons_list":
                return (
                    <Stack spacing={2}>
                        <TextField
                            label="Section Heading"
                            fullWidth
                            value={block.title || ""}
                            onChange={e =>
                                updateBlock({ title: e.target.value })
                            }
                        />

                        <TextField
                            label="Section Description"
                            multiline
                            minRows={2}
                            fullWidth
                            value={block.description || ""}
                            onChange={e =>
                                updateBlock({ description: e.target.value })
                            }
                        />

                        <Divider />

                        {(block.items || []).map((item, index) => (
                            <Paper
                                key={item.id || index}
                                variant="outlined"
                                sx={{ p: 2 }}
                            >
                                <Stack spacing={2}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography fontWeight={600}>
                                            Person {index + 1}
                                        </Typography>

                                        <IconButton
                                            color="error"
                                            onClick={() => removeItem(index)}
                                            disabled={block.items.length <= 1}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>

                                    <TextField
                                        label="Name"
                                        fullWidth
                                        value={item.name || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                name: e.target.value
                                            })
                                        }
                                    />

                                    <TextField
                                        label="Designation"
                                        fullWidth
                                        value={item.designation || ""}
                                        onChange={e =>
                                            updateItem(index, {
                                                designation: e.target.value
                                            })
                                        }
                                    />

                                    <UploadEditor
                                        block={{
                                            ...block,
                                            image: item.image || "",
                                            alt: item.alt || ""
                                        }}
                                        fieldName="image"
                                        uploadType="image"
                                        updateBlock={(changes) => updateItem(index, changes)}
                                    />
                                </Stack>
                            </Paper>
                        ))}

                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={addManagementItem}
                        >
                            Add Person
                        </Button>
                    </Stack>
                );


            default:
                return (
                    <Typography color="error">
                        Unsupported block type: {block.type}
                    </Typography>
                );
        }
    };

    return (
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
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
                        <Tooltip title="Drag to reorder">
                            <IconButton
                                {...dragHandleProps}
                                sx={{
                                    cursor: "grab",
                                    touchAction: "none"
                                }}
                            >
                                <DragIndicatorIcon />
                            </IconButton>
                        </Tooltip>

                        <Typography
                            fontWeight={600}
                            textTransform="capitalize"
                        >
                            {block.type.replaceAll("_", " ")}
                        </Typography>
                    </Stack>

                    <Stack direction="row">
                        <Tooltip title="Duplicate block">
                            <IconButton onClick={duplicateBlock}>
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete block">
                            <IconButton
                                color="error"
                                onClick={removeBlock}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>

                {renderEditor()}
            </Stack>
        </Paper>
    );
}
