
"use client";

import {
    Box,
    Stack,
    TextField,
    Button,
    IconButton,
    Divider,
    Typography,
    Tooltip
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function TableEditor({ block, updateBlock }) {

    const headers = Array.isArray(block.headers)
        ? block.headers
        : [];

    const rows = Array.isArray(block.rows)
        ? block.rows
        : [];

    const updateHeader = (index, value) => {
        const updatedHeaders = [...headers];
        updatedHeaders[index] = value;

        updateBlock({ headers: updatedHeaders });
    };

    const addColumn = () => {
        updateBlock({
            headers: [
                ...headers,
                `Column ${headers.length + 1}`
            ],
            rows: rows.map(row => [
                ...(Array.isArray(row) ? row : []),
                ""
            ])
        });
    };

    const removeColumn = (columnIndex) => {
        if (headers.length <= 1) return;

        updateBlock({
            headers: headers.filter((_, i) => i !== columnIndex),
            rows: rows.map(row =>
                (Array.isArray(row) ? row : []).filter(
                    (_, i) => i !== columnIndex
                )
            )
        });
    };

    const addRow = () => {
        updateBlock({
            rows: [
                ...rows,
                Array(headers.length).fill("")
            ]
        });
    };

    const removeRow = (rowIndex) => {
        updateBlock({
            rows: rows.filter((_, i) => i !== rowIndex)
        });
    };

    const updateCell = (rowIndex, colIndex, value) => {
        const updatedRows = rows.map((row, index) => {
            if (index !== rowIndex) return row;

            const updatedRow = [...row];
            updatedRow[colIndex] = value;

            return updatedRow;
        });

        updateBlock({ rows: updatedRows });
    };

    return (
        <Stack spacing={2}>

            <Typography variant="subtitle2">
                Table Headers
            </Typography>

            <Box sx={{ overflowX: "auto" }}>
                <Stack direction="row" spacing={1} sx={{ minWidth: "max-content" }}>
                    {headers.map((header, index) => (
                        <Stack
                            key={index}
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                        >
                            <TextField
                                size="small"
                                label={`Column ${index + 1}`}
                                value={header}
                                onChange={(e) =>
                                    updateHeader(index, e.target.value)
                                }
                                sx={{ width: 180 }}
                            />

                            <Tooltip title="Remove column">
                                <span>
                                    <IconButton
                                        color="error"
                                        disabled={headers.length <= 1}
                                        onClick={() => removeColumn(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Stack>
                    ))}
                </Stack>
            </Box>

            <Button
                variant="outlined"
                onClick={addColumn}
                sx={{ alignSelf: "flex-start" }}
            >
                Add Column
            </Button>

            <Divider />

            <Typography variant="subtitle2">
                Table Rows
            </Typography>

            <Box sx={{ overflowX: "auto" }}>
                <Stack spacing={1}>
                    {rows.map((row, rowIndex) => (
                        <Stack
                            key={rowIndex}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ minWidth: "max-content" }}
                        >
                            {headers.map((_, colIndex) => (
                                <TextField
                                    key={colIndex}
                                    size="small"
                                    label={
                                        colIndex === 0
                                            ? `Row ${rowIndex + 1}`
                                            : undefined
                                    }
                                    value={row?.[colIndex] ?? ""}
                                    onChange={(e) =>
                                        updateCell(
                                            rowIndex,
                                            colIndex,
                                            e.target.value
                                        )
                                    }
                                    sx={{ width: 180 }}
                                />
                            ))}

                            <Tooltip title="Remove row">
                                <IconButton
                                    color="error"
                                    onClick={() => removeRow(rowIndex)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    ))}
                </Stack>
            </Box>

            <Button
                variant="outlined"
                onClick={addRow}
                sx={{ alignSelf: "flex-start" }}
            >
                Add Row
            </Button>

        </Stack>
    );
}
