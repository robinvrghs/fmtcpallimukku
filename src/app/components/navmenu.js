'use client'

import React, { useState } from "react";
import {
    Box, Button,
    Menu, MenuItem,
} from "@mui/material";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons";

import { NAV_ITEMS } from "../config/collegeConfig";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);

    const [submenuAnchor, setSubmenuAnchor] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleMenuOpen = (event, label) => {

        setSubmenuAnchor(null);
        setOpenSubmenu(null);

        setAnchorEl(event.currentTarget);
        setOpenMenu(label);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
        setSubmenuAnchor(null);
        setOpenSubmenu(null);
    };

    const handleSubmenuOpen = (event, label) => {
        setSubmenuAnchor(event.currentTarget);
        setOpenSubmenu(label);
    };

    const handleSubmenuClose = () => {
        setSubmenuAnchor(null);
        setOpenSubmenu(null);
    };

    return (
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'right' }}>
            <Button
                sx={{ fontWeight: 600, color: '#0b2d53', minWidth: 36, fontSize: 20, lineHeight: 1 }}
                component="a"
                href="/"
            >
                <FontAwesomeIcon icon={faHouse} />
            </Button>
            {NAV_ITEMS.map((item) =>
                item.children ? (
                    <Box
                        key={item.label}
                        onMouseEnter={(e) => handleMenuOpen(e, item.label)}
                        onMouseLeave={handleMenuClose}
                        style={{ display: "inline-block" }}
                    >
                        <Button sx={{ fontWeight: 600, color: '#0b2d53' }}>
                            {item.label}
                            <FontAwesomeIcon icon={faAngleDown} />
                        </Button>
                        <Menu
                            disableEnforceFocus
                            disableRestoreFocus
                            disableAutoFocus
                            anchorEl={anchorEl}
                            open={openMenu === item.label}
                            onClose={handleMenuClose}
                            sx={{ pointerEvents: "none" }}
                            slotProps={{
                                paper: {
                                    sx: {
                                        elevation: 0, boxShadow: 'rgba(4, 4, 5, 0.2) 0px 7px 36px -8px',
                                        borderRadius: 0, minWidth: '280px',
                                        pointerEvents: "auto",
                                    },
                                    onMouseLeave: handleMenuClose,
                                },
                                list: {
                                    sx: { p: 0 },
                                    autoFocusItem: false,
                                    onMouseEnter: () => setOpenMenu(item.label),
                                    onMouseLeave: handleMenuClose,
                                }
                            }}

                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >

                            {item.children.map((child) =>
                                child.children ? (
                                    <MenuItem
                                        autoFocus={false}
                                        key={child.label}
                                        onMouseEnter={(e) => handleSubmenuOpen(e, child.label)}
                                        onMouseLeave={handleSubmenuClose}
                                        sx={{
                                            px: 3, py: 1, fontSize: 13, fontWeight: 400, borderBottom: 1, borderColor: '#E8E9ED',
                                            justifyContent: "space-between",
                                            "&:hover": {
                                                backgroundColor: "#0b2d53",
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {child.label}
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <Menu
                                            disableEnforceFocus
                                            disableRestoreFocus
                                            disableAutoFocus
                                            anchorEl={submenuAnchor}
                                            open={openSubmenu === child.label}
                                            onClose={handleSubmenuClose}
                                            sx={{ pointerEvents: "none" }}
                                            slotProps={{
                                                paper: {
                                                    sx: {
                                                        elevation: 0, boxShadow: 'rgba(4, 4, 5, 0.2) 0px 7px 36px -8px',
                                                        borderRadius: 0, minWidth: '280px', m: 0, pointerEvents: 'auto'
                                                    }
                                                },
                                                list: {
                                                    sx: { p: 0 },
                                                    autoFocusItem: false,
                                                    onMouseEnter: () => setOpenSubmenu(child.label),
                                                    onMouseLeave: () => setTimeout(() => {
                                                        if (document.activeElement instanceof HTMLElement) {
                                                            document.activeElement.blur();
                                                        }
                                                        handleSubmenuClose();
                                                    }, 120)
                                                }
                                            }}
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "right",
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "left",
                                            }}
                                        >
                                            {child.children.map((sub) => (
                                                <MenuItem
                                                    autoFocus={false}
                                                    key={sub.label}
                                                    component="a"
                                                    onClick={() => {
                                                        handleSubmenuClose();
                                                        handleMenuClose();
                                                    }}
                                                    target={sub.new ? "_blank" : '_self'}
                                                    href={sub.link}
                                                    sx={{
                                                        px: 3, py: 1, fontSize: 13, fontWeight: 400, borderBottom: 1, borderColor: '#E8E9ED',
                                                        "&:hover": {
                                                            backgroundColor: "#0b2d53",
                                                            color: "#fff"
                                                        },
                                                    }}
                                                >
                                                    {sub.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </MenuItem>
                                ) : (
                                    <MenuItem
                                        key={child.label}
                                        component={Link}
                                        href={child.link}
                                        onClick={handleMenuClose}
                                        sx={{
                                            px: 3, py: 1, fontSize: 14, fontWeight: 400, borderBottom: 1, borderColor: '#E8E9ED',
                                            "&:hover": {
                                                backgroundColor: "#0b2d53",
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {child.label}
                                    </MenuItem>
                                )
                            )}
                        </Menu>
                    </Box>
                ) : (
                    <Button
                        sx={{ fontWeight: 600, color: '#0b2d53' }}
                        key={item.label}
                        component="a"
                        href={item.link}
                    >
                        {item.label}
                    </Button>
                )
            )
            }
        </Box >
    );
}