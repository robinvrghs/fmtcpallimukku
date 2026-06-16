import { CssBaseline, ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";
import "../globals.css";

import { AOSInit } from "../components/aos";
import theme from "../components/theme";
import Footer from "../components/footer";


export const metadata = {
    title: "FMTC - Pallimukku",
    description: "Fathima Memorial Training College, Pallimukku, Kollam",
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
    display: 'swap',
});

export default function PublicLayout({ children }) {
    return (
        <html lang="en">
            <AOSInit />
            <body className={`${poppins.variable}`}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
