
"use client";

import {
    Stack,
    TextField,
    Button,
    IconButton,
    Tooltip
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ListEditor({ block, updateBlock }) {

    const items = Array.isArray(block.items) ? block.items : [];

    const updateItem = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index] = value;

        updateBlock({ items: updatedItems });
    };

    const addItem = () => {
        updateBlock({
            items: [...items, ""]
        });
    };

    const removeItem = (index) => {
        updateBlock({
            items: items.filter((_, i) => i !== index)
        });
    };

    return (
        <Stack spacing={2}>
            {items.map((item, index) => (
                <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                >
                    <TextField
                        fullWidth
                        size="small"
                        label={`Item ${index + 1}`}
                        value={item}
                        onChange={(e) =>
                            updateItem(index, e.target.value)
                        }
                    />

                    <Tooltip title="Remove item">
                        <IconButton
                            color="error"
                            aria-label={`Remove item ${index + 1}`}
                            onClick={() => removeItem(index)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            ))}

            <Button
                variant="outlined"
                onClick={addItem}
                sx={{ alignSelf: "flex-start" }}
            >
                Add Item
            </Button>
        </Stack>
    );
}
