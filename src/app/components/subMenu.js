import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Box, Typography, Tab, Tabs
} from "@mui/material";

import { NAV_ITEMS } from "@/app/config/collegeConfig";

const SubMenu = ({ title }) => {

    const menu = NAV_ITEMS.find(item => item.label === title);

    const pathname = usePathname();

    const currentTab = menu?.children?.findIndex((tab) =>
        pathname.startsWith(tab.link)
    );

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
                value={currentTab !== -1 ? currentTab : 0}
                sx={{ textAlign: 'left' }}
            >
                {menu?.children?.map((tab) => (
                    <Tab
                        key={tab.link}
                        label={tab.label}
                        component={Link}
                        href={tab.link}
                        sx={{ alignItems: 'start', textAlign: 'left' }}
                    />
                ))}

            </Tabs>
        </Box>
    )
}

export default SubMenu;