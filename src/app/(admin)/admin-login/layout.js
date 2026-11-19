import {
    Box
} from "@mui/material";


export const metadata = {
    title: "FMTC",
    description: "FMTC, Kollam",
};

export default function AdminLayout({ children }) {

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                bgcolor: '#f3f3f3'
            }}
        >
            {children}
        </Box>
    );
}
