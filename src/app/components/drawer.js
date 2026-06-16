'use client'

import React, { useState } from "react";
import {
    Box, Collapse, Divider, Drawer, IconButton,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";

import Link from "next/link";



import { NAV_ITEMS } from "../config/collegeConfig";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHouse, faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";

export default function DrawerMenu() {

    const [drawer, setDrawer] = useState(false);
    const [expanded, setExpanded] = useState({});
    const toggleExpand = (key) =>
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

    const DrawerList = (
        <Box sx={{ width: 300, pt: '114.5px' }} role="presentation">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/" sx={{ color: '#0b2d53', borderBottom: 1, borderColor: '#E8E9ED', }}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faHouse} style={{ color: "#0b2d53" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                {NAV_ITEMS.map((item, index) => {
                    const key = `${index}`;
                    const hasChildren = Boolean(item.children);

                    return (
                        <Box key={key}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() =>
                                        hasChildren
                                            ? toggleExpand(key)
                                            : setDrawer(false)
                                    }
                                    component={!hasChildren && item.link ? Link : "div"}
                                    href={!hasChildren && item.link ? item.link : undefined}
                                    sx={{ borderBottom: 1, borderColor: '#E8E9ED', }}
                                >
                                    <ListItemIcon sx={{ mr: 2, minWidth: 0 }}>
                                        <FontAwesomeIcon icon={faGem} style={{ color: "#0b2d53" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                    {hasChildren &&
                                        (expanded[key] ?
                                            <FontAwesomeIcon icon={faAngleUp} /> :
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        )
                                    }
                                </ListItemButton>
                            </ListItem>

                            {/* Collapse for submenu */}
                            {hasChildren && (
                                <Collapse in={expanded[key]}>
                                    <List sx={{ pl: 3 }}>
                                        {item.children.map((child, cIndex) => {
                                            const cKey = `${key}-${cIndex}`;
                                            const hasSub = Boolean(child.children);

                                            return (
                                                <Box key={cKey}>
                                                    <ListItemButton
                                                        onClick={() =>
                                                            hasSub ? toggleExpand(cKey) : setDrawer(false)
                                                        }
                                                        component={!hasSub && child.link ? Link : "div"}
                                                        href={
                                                            !hasSub && child.link ? child.link : undefined
                                                        }
                                                    >
                                                        <ListItemIcon sx={{ mr: 2, minWidth: 0 }}>
                                                            <FontAwesomeIcon icon={faWindowMinimize} style={{ color: "#0b2d53" }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={child.label} />
                                                        {hasSub &&
                                                            (expanded[cKey] ? (
                                                                <FontAwesomeIcon icon={faAngleUp} />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faAngleDown} />
                                                            ))}
                                                    </ListItemButton>
                                                    <Divider />

                                                    {/* 3rd level */}
                                                    {hasSub && (
                                                        <Collapse in={expanded[cKey]}>
                                                            <List sx={{ pl: 3 }}>
                                                                {child.children.map((leaf, lIndex) => (
                                                                    <ListItemButton
                                                                        key={`${cKey}-${lIndex}`}
                                                                        component={Link}
                                                                        href={leaf.link}
                                                                        onClick={() => setDrawer(false)}
                                                                    >
                                                                        <ListItemIcon sx={{ mr: 2, minWidth: 0 }}>
                                                                            <FontAwesomeIcon icon={faWindowMinimize} style={{ color: "#0b2d53" }} />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={leaf.label} />
                                                                    </ListItemButton>
                                                                ))}
                                                            </List>
                                                        </Collapse>
                                                    )}
                                                </Box>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    );
                })}
            </List>

        </Box>
    );

    return (

        <Box sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: 'right' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => setDrawer(true)}
            >
                <FontAwesomeIcon icon={faBars} sx={{ color: '#000030' }} />
            </IconButton>

            <Drawer open={drawer} onClose={() => setDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Box>
    );
}