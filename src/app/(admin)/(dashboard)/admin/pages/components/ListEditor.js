"use client";

import {
    Stack,
    TextField,
    Button,
    IconButton
} from "@mui/material";

import DeleteIcon
    from "@mui/icons-material/Delete";

export default function ListEditor({
    block,
    updateBlock
}) {

    const updateItem = (
        index,
        value
    ) => {

        const items = [
            ...block.items
        ];

        items[index] = value;

        updateBlock({
            items
        });
    };

    const addItem = () => {

        updateBlock({
            items: [
                ...block.items,
                ""
            ]
        });
    };

    const removeItem = index => {

        updateBlock({
            items: block.items.filter(
                (_, i) => i !== index
            )
        });
    };

    return (
        <Stack spacing={2}>

            {block.items.map(
                (item, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        spacing={1}
                    >

                        <TextField
                            fullWidth
                            label={`Item ${index + 1
                                }`}
                            value={item}
                            onChange={e =>
                                updateItem(
                                    index,
                                    e.target.value
                                )
                            }
                        />

                        <IconButton
                            color="error"
                            onClick={() =>
                                removeItem(index)
                            }
                        >
                            <DeleteIcon />
                        </IconButton>

                    </Stack>
                )
            )}

            <Button
                variant="outlined"
                onClick={addItem}
            >
                Add Item
            </Button>

        </Stack>
    );
}