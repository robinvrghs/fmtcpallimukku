import { Box, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";

import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import TopBar from "../../components/appbar";
import theme from "../../components/theme";
import MainDrawer from "../../components/drawer";

export const metadata = {
    title: "FMTC",
    description: "FMTC, Kollam",
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin"],
    display: 'swap',
});

export default function AdminLayout({ children }) {

    return (
        <html lang="en">
            <body className={`${poppins.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Box sx={{ display: 'flex' }}>
                            <CssBaseline />
                            <TopBar />
                            <MainDrawer />
                            <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#f3f3f3' }}>
                                <Toolbar />
                                {children}
                            </Box>
                        </Box>
                        <CssBaseline />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
