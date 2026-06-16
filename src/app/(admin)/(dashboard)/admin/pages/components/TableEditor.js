"use client";

import {
    Stack,
    TextField,
    Button,
    IconButton,
    Divider
} from "@mui/material";

import DeleteIcon
    from "@mui/icons-material/Delete";

export default function TableEditor({
    block,
    updateBlock
}) {

    const updateHeader = (
        index,
        value
    ) => {

        const headers = [
            ...block.headers
        ];

        headers[index] = value;

        updateBlock({
            headers
        });
    };

    const addColumn = () => {

        const headers = [
            ...block.headers,
            `Column ${block.headers.length + 1
            }`
        ];

        const rows =
            block.rows.map(row => [
                ...row,
                ""
            ]);

        updateBlock({
            headers,
            rows
        });
    };

    const removeColumn =
        columnIndex => {

            const headers =
                block.headers.filter(
                    (_, i) =>
                        i !== columnIndex
                );

            const rows =
                block.rows.map(row =>
                    row.filter(
                        (_, i) =>
                            i !== columnIndex
                    )
                );

            updateBlock({
                headers,
                rows
            });
        };

    const addRow = () => {

        updateBlock({
            rows: [
                ...block.rows,
                Array(
                    block.headers.length
                ).fill("")
            ]
        });
    };

    const removeRow =
        rowIndex => {

            updateBlock({
                rows: block.rows.filter(
                    (_, i) =>
                        i !== rowIndex
                )
            });
        };

    const updateCell = (
        rowIndex,
        colIndex,
        value
    ) => {

        const rows = [
            ...block.rows
        ];

        rows[rowIndex][colIndex] =
            value;

        updateBlock({
            rows
        });
    };

    return (
        <Stack spacing={2}>

            <Stack
                direction="row"
                spacing={1}
            >

                {block.headers.map(
                    (
                        header,
                        index
                    ) => (

                        <Stack
                            key={index}
                            direction="row"
                            spacing={1}
                        >

                            <TextField
                                label="Header"
                                value={header}
                                onChange={e =>
                                    updateHeader(
                                        index,
                                        e.target.value
                                    )
                                }
                            />

                            <IconButton
                                color="error"
                                onClick={() =>
                                    removeColumn(
                                        index
                                    )
                                }
                            >
                                <DeleteIcon />
                            </IconButton>

                        </Stack>
                    )
                )}

            </Stack>

            <Button
                variant="outlined"
                onClick={addColumn}
            >
                Add Column
            </Button>

            <Divider />

            {block.rows.map(
                (row, rowIndex) => (

                    <Stack
                        key={rowIndex}
                        direction="row"
                        spacing={1}
                    >

                        {row.map(
                            (
                                cell,
                                colIndex
                            ) => (

                                <TextField
                                    key={colIndex}
                                    value={cell}
                                    onChange={e =>
                                        updateCell(
                                            rowIndex,
                                            colIndex,
                                            e.target.value
                                        )
                                    }
                                />
                            )
                        )}

                        <IconButton
                            color="error"
                            onClick={() =>
                                removeRow(
                                    rowIndex
                                )
                            }
                        >
                            <DeleteIcon />
                        </IconButton>

                    </Stack>
                )
            )}

            <Button
                variant="outlined"
                onClick={addRow}
            >
                Add Row
            </Button>

        </Stack>
    );
}