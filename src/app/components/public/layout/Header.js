"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Stack,
    Container,
    Collapse,
    Paper,
} from "@mui/material";

import {
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
    LockOutlined,
    Search,
    Menu as MenuIcon,
    KeyboardArrowDown,
    ArrowForward,
    Close,
    ChevronRight,
    ExpandMore,
    ExpandLess,
} from "@mui/icons-material";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const STATIC_NAV_ITEMS = [
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

function buildPageHref(categorySlug, slugs = []) {
    return `/${[
        categorySlug,
        ...slugs,
    ].filter(Boolean).map(encodeURIComponent).join("/")}`;
}

function isActivePath(pathname, href) {
    return pathname === href || pathname.startsWith(`${href}/`);
}

const COLORS = {
    navy: "#0B2D53",
    burgundy: "#880D2E",
    gold: "#D4AF37",
};

function TopBar() {
    return (
        <Box
            sx={{
                bgcolor: COLORS.navy,
                color: "#fff",
                py: 0.8,
                display: { xs: "none", md: "block" },
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Stack direction="row" spacing={0.7} alignItems="center">
                            <LocationOnOutlined fontSize="small" />
                            <Typography variant="caption">
                                Pallimukku, Kollam, Kerala
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={0.7} alignItems="center">
                            <PhoneOutlined fontSize="small" />
                            <Typography variant="caption">
                                0474-2727368
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={0.7} alignItems="center">
                            <EmailOutlined fontSize="small" />
                            <Typography variant="caption">
                                fathimabed@gmail.com
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        {/* <Stack direction="row" spacing={0.6} alignItems="center">
                            <LockOutlined fontSize="small" />
                            <Typography variant="caption">
                                Student Login
                            </Typography>
                        </Stack>

                        <Typography variant="caption">|</Typography>

                        <Typography variant="caption">
                            Faculty Login
                        </Typography> */}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

function MainHeader({ onMobileMenu }) {
    return (
        <Box sx={{ bgcolor: "#fff" }}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: { xs: 82, md: 112 },
                        justifyContent: "space-between",
                        gap: 2,
                    }}
                >
                    {/* College identity */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{ xs: 1, md: 2 }}
                        sx={{ minWidth: 0 }}
                    >
                        <Box
                            sx={{
                                width: { xs: 55, md: 300 },
                                height: { xs: 55, md: 112 },
                                position: "relative",
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/images/fmtc-logo.png"
                                alt="FMTC College Logo"
                                fill
                                sizes="(max-width: 600px) 55px, 82px"
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        {/* Affiliation */}
                        <Box
                            sx={{
                                display: { xs: "none", lg: "block" },
                                borderLeft: "2px solid #ddd",
                                pl: 2.5,
                                ml: 1,
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Affiliated to
                                <br />
                                University of Kerala
                                <br />
                                Recognised by NCTE
                            </Typography>
                        </Box>
                    </Stack>



                    {/* Desktop actions */}
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <IconButton aria-label="Search">
                            <Search />
                        </IconButton>

                        <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: COLORS.burgundy,
                                borderRadius: 2,
                                px: 2.5,
                                py: 1.2,
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: COLORS.navy,
                                },
                            }}
                        >
                            Admission Enquiry
                        </Button>
                    </Stack>

                    {/* Mobile menu button */}
                    <IconButton
                        onClick={onMobileMenu}
                        sx={{
                            display: { xs: "flex", md: "none" },
                            color: COLORS.navy,
                        }}
                        aria-label="Open navigation"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </Box>
    );
}

function DesktopPageItem({
    page,
    categorySlug,
    parentSlugs = [],
    pathname,
    onNavigate,
}) {
    const children = page.children || [];
    const hasChildren = children.length > 0;

    const currentSlugs = [...parentSlugs, page.slug];
    const href = buildPageHref(categorySlug, currentSlugs);

    const active = isActivePath(pathname, href);

    return (
        <Box
            sx={{
                position: "relative",
                "&:hover > .nested-menu": {
                    display: "block",
                },
                "&:focus-within > .nested-menu": {
                    display: "block",
                },
            }}
        >
            <MenuItem
                component={Link}
                href={href}
                onClick={onNavigate}
                selected={active}
                sx={{
                    minWidth: 220,
                    fontSize: 13,
                    py: 1.2,
                    color: active ? COLORS.burgundy : "text.primary",
                    "&:hover": {
                        color: COLORS.burgundy,
                        bgcolor: "rgba(136,13,46,0.06)",
                    },
                }}
            >
                {page.title}

                {hasChildren && (
                    <ChevronRight
                        sx={{ ml: "auto", fontSize: 18 }}
                    />
                )}
            </MenuItem>

            {hasChildren && (
                <Paper
                    className="nested-menu"
                    elevation={5}
                    sx={{
                        display: "none",
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        minWidth: 230,
                        borderRadius: 1.5,
                        overflow: "visible",
                        zIndex: 1400,
                    }}
                >
                    {children.map((child) => (
                        <DesktopPageItem
                            key={child.id}
                            page={child}
                            categorySlug={categorySlug}
                            parentSlugs={currentSlugs}
                            pathname={pathname}
                            onNavigate={onNavigate}
                        />
                    ))}
                </Paper>
            )}
        </Box>
    );
}

function Navigation({ categories, pathname }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleOpen = (event, categoryId) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(categoryId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    const currentCategory = categories.find(
        (category) => category.id === activeMenu
    );

    return (
        <Box
            sx={{
                bgcolor: COLORS.navy,
                display: { xs: "none", md: "block" },
            }}
        >
            <Container maxWidth="lg">
                <Stack direction="row" alignItems="center">

                    {categories.map((category) => {
                        const active = pathname.startsWith(
                            `/${category.slug}/`
                        );

                        return (
                            <Box key={category.id}>
                                <Button
                                    onClick={(event) =>
                                        handleOpen(event, category.id)
                                    }
                                    endIcon={<KeyboardArrowDown />}
                                    sx={{
                                        color: "#fff",
                                        borderRadius: 0,
                                        px: 1.7,
                                        py: 1.7,
                                        fontSize: 13,
                                        fontWeight: 500,
                                        bgcolor:
                                            active || activeMenu === category.id
                                                ? COLORS.burgundy
                                                : "transparent",
                                        "&:hover": {
                                            bgcolor: COLORS.burgundy,
                                        },
                                    }}
                                >
                                    {category.name}
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={activeMenu === category.id}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                mt: 1,
                                                minWidth: 230,
                                                overflow: "visible",
                                                borderRadius: 1.5,
                                                boxShadow:
                                                    "0 8px 30px rgba(0,0,0,0.15)",
                                            },
                                        },
                                    }}
                                >
                                    {currentCategory?.pages?.map((page) => (
                                        <DesktopPageItem
                                            key={page.id}
                                            page={page}
                                            categorySlug={category.slug}
                                            pathname={pathname}
                                            onNavigate={handleClose}
                                        />
                                    ))}
                                </Menu>
                            </Box>
                        );
                    })}

                    {STATIC_NAV_ITEMS.map((item) => (
                        <Button
                            key={item.href}
                            component={Link}
                            href={item.href}
                            sx={{
                                color: "#fff",
                                borderRadius: 0,
                                px: 1.8,
                                py: 1.7,
                                fontSize: 13,
                                fontWeight: 500,
                                bgcolor: isActivePath(pathname, item.href)
                                    ? COLORS.burgundy
                                    : "transparent",
                                "&:hover": {
                                    bgcolor: COLORS.burgundy,
                                },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}

                </Stack>
            </Container>
        </Box>
    );
}

function MobilePageItem({
    page,
    categorySlug,
    parentSlugs = [],
    pathname,
    onClose,
    level = 0,
}) {
    const [expanded, setExpanded] = useState(false);

    const children = page.children || [];
    const hasChildren = children.length > 0;

    const currentSlugs = [...parentSlugs, page.slug];

    const href = buildPageHref(categorySlug, currentSlugs);

    const active = isActivePath(pathname, href);

    return (
        <Box>
            <Stack direction="row" alignItems="center">
                <ListItemButton
                    component={Link}
                    href={href}
                    onClick={onClose}
                    selected={active}
                    sx={{
                        pl: 2 + level * 2,
                        color: active ? COLORS.burgundy : COLORS.navy,
                    }}
                >
                    <ListItemText
                        primary={page.title}
                        primaryTypographyProps={{
                            fontSize: 13,
                            fontWeight: active ? 700 : 400,
                        }}
                    />
                </ListItemButton>

                {hasChildren && (
                    <IconButton
                        size="small"
                        onClick={() => setExpanded(!expanded)}
                        aria-label={
                            expanded ? "Collapse submenu" : "Expand submenu"
                        }
                    >
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                )}
            </Stack>

            {hasChildren && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {children.map((child) => (
                        <MobilePageItem
                            key={child.id}
                            page={child}
                            categorySlug={categorySlug}
                            parentSlugs={currentSlugs}
                            pathname={pathname}
                            onClose={onClose}
                            level={level + 1}
                        />
                    ))}
                </Collapse>
            )}
        </Box>
    );
}

function MobileNavigation({
    open,
    onClose,
    categories,
    pathname,
}) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        width: 320,
                        maxWidth: "85vw",
                    },
                },
            }}
        >
            <Box sx={{ p: 2 }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        fontWeight={700}
                        color={COLORS.navy}
                    >
                        FMTC MENU
                    </Typography>

                    <IconButton
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <Close />
                    </IconButton>
                </Stack>
            </Box>

            <Divider />

            <List>

                {categories.map((category) => (
                    <MobileCategory
                        key={category.id}
                        category={category}
                        pathname={pathname}
                        onClose={onClose}
                    />
                ))}

                {STATIC_NAV_ITEMS.map((item) => (
                    <ListItemButton
                        key={item.href}
                        component={Link}
                        href={item.href}
                        onClick={onClose}
                    >
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}

            </List>

            <Divider />

            <Box sx={{ p: 2 }}>
                <Button
                    component={Link}
                    href="/admissions"
                    fullWidth
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        bgcolor: COLORS.burgundy,
                        py: 1.3,
                        "&:hover": {
                            bgcolor: COLORS.navy,
                        },
                    }}
                >
                    Admission Enquiry
                </Button>
            </Box>
        </Drawer>
    );
}

function MobileCategory({
    category,
    pathname,
    onClose,
}) {
    const [expanded, setExpanded] = useState(
        pathname.startsWith(`/${category.slug}/`)
    );

    return (
        <Box>
            <ListItemButton
                onClick={() => setExpanded(!expanded)}
                sx={{
                    color: COLORS.navy,
                    fontWeight: 700,
                }}
            >
                <ListItemText
                    primary={category.name}
                    primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 700,
                    }}
                />

                {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {category.pages?.map((page) => (
                    <MobilePageItem
                        key={page.id}
                        page={page}
                        categorySlug={category.slug}
                        pathname={pathname}
                        onClose={onClose}
                    />
                ))}
            </Collapse>
        </Box>
    );
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const pathname = usePathname();

    useEffect(() => {
        let cancelled = false;

        async function loadNavigation() {
            try {
                const res = await fetch(
                    `${API_URL}/pages/getnav.php`,
                    { cache: "no-store" }
                );

                if (!res.ok) {
                    throw new Error("Navigation request failed");
                }

                const data = await res.json();

                const result = Array.isArray(data)
                    ? data
                    : data.categories || [];

                if (!cancelled) {
                    setCategories(result);
                }
            } catch {
                if (!cancelled) {
                    setCategories([]);
                }
            }
        }

        loadNavigation();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "#fff",
                color: COLORS.navy,
                zIndex: 1200,
            }}
        >
            <TopBar />

            <MainHeader
                onMobileMenu={() => setMobileOpen(true)}
            />

            <Navigation
                categories={categories}
                pathname={pathname}
            />

            <MobileNavigation
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                categories={categories}
                pathname={pathname}
            />
        </AppBar>
    );
}
