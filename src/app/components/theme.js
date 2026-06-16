"use client"

import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#0b2d53',
            light: "#1F4A78",
            dark: "#071F3A",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: '#E74C3C',
            light: "#EF6A5A",
            dark: "#B93A2F",
            contrastText: "#FFFFFF",
        },
        text: {
            primary: '#232323',
            secondary: '#474747',
        }
    },

    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: '100px',
                    minHeight: '100px'
                }
            }
        }
    },
    typography: {
        fontFamily: "var(--font-poppins), sans-serif",
        allVariants: {
            color: '#232323',
        },
        h1: {
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '3.75rem',
        },
        h2: {
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '3.125rem',
        },
        h3: {
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '2.5rem',
        },
        h4: {
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '1.5rem',
        },
        h5: {
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: '1.125rem',
        },

        body1: {
            fontSize: '1.125rem',
            lineHeight: 2,
            color: '#474747'
        },
        subtitle1: {
            background: 'linear-gradient(to right, #191947, #000033)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontWeight: 600
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme