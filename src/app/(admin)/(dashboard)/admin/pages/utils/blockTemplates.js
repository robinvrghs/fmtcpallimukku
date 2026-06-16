import { v4 as uuid } from "uuid";

export const blockTemplates = {
    title: () => ({
        id: uuid(),
        type: "title",
        content: ""
    }),

    paragraph: () => ({
        id: uuid(),
        type: "paragraph",
        content: ""
    }),

    image: () => ({
        id: uuid(),
        type: "image",
        url: "",
        alt: "",
        caption: ""
    }),

    file: () => ({
        id: uuid(),
        type: "file",
        url: "",
        filename: ""
    }),

    list: () => ({
        id: uuid(),
        type: "list",
        items: [""]
    }),

    table: () => ({
        id: uuid(),
        type: "table",
        headers: ["Column 1"],
        rows: [[""]]
    })
};

export const createBlock = (type) =>
    blockTemplates[type]();