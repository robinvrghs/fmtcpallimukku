
"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0B2D53",
            dark: "#071F3A",
            light: "#254B75",
            contrastText: "#FFFFFF",
        },

        secondary: {
            main: "#880D2E",
            dark: "#6E0925",
            light: "#AC3150",
            contrastText: "#FFFFFF",
        },

        warning: {
            main: "#D4AF37",
        },

        background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
        },

        text: {
            primary: "#172B45",
            secondary: "#64748B",
        },

        divider: "#E8E5E0",
    },

    typography: {
        fontFamily: "var(--font-poppins), Arial, sans-serif",

        h1: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        h2: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        h3: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        h4: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        h5: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        h6: {
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 10,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 4px 20px rgba(11,45,83,0.06)",
                },
            },
        },
    },
});

export default theme;
6n