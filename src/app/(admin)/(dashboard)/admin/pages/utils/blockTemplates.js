
import { v4 as uuid } from "uuid";

export const blockTemplates = {
    title: () => ({
        id: uuid(),
        type: "title",
        content: ""
    }),

    subtitle: () => ({
        id: uuid(),
        type: "subtitle",
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
        id: crypto.randomUUID(),
        type: "file",
        items: []
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
    }),

    // Full-width page hero
    page_hero: () => ({
        id: uuid(),
        type: "page_hero",
        title: "",
        description: "",
        image: "",
        background_position: "center",
        overlay_opacity: 65
    }),

    // Image with accompanying text
    image_text: () => ({
        id: uuid(),
        type: "image_text",
        label: "",
        title: "",
        description: "",
        image: "",
        alt: ""
    }),

    // Vision and mission
    vision_mission: () => ({
        id: uuid(),
        type: "vision_mission",
        title: "Our Vision & Mission",
        vision: "",
        mission: ""
    }),

    // Founder's profile
    founder_profile: () => ({
        id: uuid(),
        type: "founder_profile",
        label: "Our Founder",
        name: "",
        designation: "",
        description: "",
        quote: "",
        image: ""
    }),

    // Management team
    management_cards: () => ({
        id: uuid(),
        type: "management_cards",
        title: "Management & Leadership",
        description: "",
        items: [
            {
                id: uuid(),
                name: "",
                designation: "",
                image: "",
                description: ""
            }
        ]
    }),

    // Institutional objectives
    objectives: () => ({
        id: uuid(),
        type: "objectives",
        title: "Our Objectives",
        items: [""],
        image: "",
        alt: ""
    }),

    // Institutional timeline
    timeline: () => ({
        id: uuid(),
        type: "timeline",
        title: "Our Journey",
        items: [
            {
                id: uuid(),
                year: "",
                title: "",
                description: ""
            }
        ]
    }),

    persons_list: () => ({
        id: uuid(),
        type: "persons_list",
        title: "",
        items: [
            {
                id: uuid(),
                name: "",
                designation: "",
                image: "",
            }
        ]
    }),
};

export const createBlock = (type) => {
    if (!blockTemplates[type]) {
        throw new Error(`Unsupported block type: ${type}`);
    }

    return blockTemplates[type]();
};
