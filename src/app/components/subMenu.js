"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Box, Typography, Tab, Tabs
} from "@mui/material";

export default function SubMenu({
    title,
    categorySlug,
    pages = []
}) {

    const pathname = usePathname();

    const currentTab = pages.findIndex((page) => {
        const href = `/${categorySlug}/${page.slug}/`;
        return pathname === href;
    });

    return (
        <Box
            sx={{
                border: '1px solid #ecf1f9', borderRadius: 2, boxShadow: '0px 9px 14px #fbfbfb',
                width: '100%'
            }}
        >
            <Box sx={{ backgroundColor: 'primary.main', px: 2, py: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Typography variant="body1" sx={{ color: '#ffffff', textTransform: 'uppercase' }}>
                    {title}
                </Typography>
            </Box>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={currentTab >= 0 ? currentTab : false}
                sx={{ textAlign: 'left' }}
            >
                {pages.map((page) => (
                    <Tab
                        key={page.id}
                        label={page.title}
                        component={Link}
                        href={`/${categorySlug}/${page.slug}`}
                        prefetch={false}
                        sx={{ alignItems: 'start', textAlign: 'left' }}
                    />
                ))}

            </Tabs>
        </Box>
    )
}