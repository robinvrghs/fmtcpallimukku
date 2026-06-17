"use client";

import { useEffect, useState } from "react";

import { Formik } from "formik";

import {
    Stack,
    Paper,
    Button,
    TextField,
    Typography
} from "@mui/material";

import SortableBlocks from "../../components/SortableBlocks";
import { createBlock } from "../../utils/blockTemplates";


export default function PageEditor({ params }) {

    const [loading, setLoading] = useState(true);

    const { id } = params;

    const [blocks, setBlocks] = useState([]);

    const addBlock = type => {
        setBlocks(prev => [...prev, createBlock(type)]);
    };

    const savePage =
        async values => {

            const payload = {
                id: id,
                ...values,
                blocks
            };

            const url =
                id
                    ? "https://fmtcpallimukku.ac.in/api/pages/update.php"
                    : "https://fmtcpallimukku.ac.in/api/pages/save.php";

            const response =
                await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:
                        JSON.stringify(payload)
                });

            const data = await response.json();

            if (data.success) {

                alert(id ? "Updated" : "Saved");
            }
        };

    const [initialValues, setInitialValues] = useState({ title: "", slug: "" });

    useEffect(() => {

        if (!id) {

            setLoading(false);

            return;
        }

        loadPage();

    }, [id]);

    const loadPage =
        async () => {

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/pages/get.php?id=${id}`);

            const data = await response.json();

            if (!data.success)
                return;

            setInitialValues({
                title: data.page.title,
                slug: data.page.slug
            });

            setBlocks(data.page.blocks);

            setLoading(false);
        };


    if (loading) {

        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={savePage}
        >
            {({
                values,
                handleChange,
                handleSubmit
            }) => (

                <form
                    onSubmit={handleSubmit}
                >

                    <Stack
                        spacing={3}
                        sx={{
                            maxWidth: 1200,
                            mx: "auto",
                            p: 4
                        }}
                    >

                        <Typography
                            variant="h4"
                        >
                            Page Editor
                        </Typography>

                        <TextField
                            label="Page Title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Slug"
                            name="slug"
                            value={values.slug}
                            onChange={handleChange}
                            fullWidth
                        />

                        <Paper
                            sx={{
                                p: 2
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                flexWrap="wrap"
                            >

                                <Button
                                    variant="outlined"
                                    onClick={() => addBlock("title")}
                                >
                                    Title
                                </Button>

                                <Button
                                    variant="outlined"
                                    onClick={() => addBlock("paragraph")}
                                >
                                    Paragraph
                                </Button>

                                <Button
                                    variant="outlined"
                                    onClick={() => addBlock("image")}
                                >
                                    Image
                                </Button>

                                <Button
                                    variant="outlined"
                                    onClick={() => addBlock("file")}
                                >
                                    File
                                </Button>

                                <Button
                                    variant="outlined"
                                    onClick={() => addBlock("list")}
                                >
                                    List
                                </Button>

                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        addBlock("table")}
                                >
                                    Table
                                </Button>

                            </Stack>
                        </Paper>

                        <SortableBlocks
                            blocks={blocks}
                            setBlocks={setBlocks}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Save Page
                        </Button>

                    </Stack>

                </form>
            )}
        </Formik>
    );
}