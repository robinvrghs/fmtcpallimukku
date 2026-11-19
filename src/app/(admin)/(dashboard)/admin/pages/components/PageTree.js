
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    List,
    ListItemButton,
    ListItemText,
    Collapse
} from "@mui/material";

import {
    ExpandLess,
    ExpandMore
} from "@mui/icons-material";

import { useState } from "react";

export default function PageTree({ pages = [], level = 0 }) {
    const pathname = usePathname();

    const [expanded, setExpanded] = useState({});

    return (
        <List disablePadding>
            {pages.map((page) => {
                const href = `/admin/pages/page-editor/${page.id}`;
                const isActive = pathname === href;
                const hasChildren = page.children?.length > 0;

                return (
                    <div key={page.id}>
                        <ListItemButton
                            component={hasChildren ? "div" : Link}
                            href={hasChildren ? undefined : href}
                            selected={isActive}
                            onClick={() => {
                                if (hasChildren) {
                                    setExpanded((prev) => ({
                                        ...prev,
                                        [page.id]: !prev[page.id]
                                    }));
                                }
                            }}
                            sx={{
                                pl: 2 + level * 2,
                                "&.Mui-selected": {
                                    bgcolor: "action.selected",
                                    borderRight: "3px solid",
                                    borderColor: "primary.main"
                                }
                            }}
                        >
                            <ListItemText
                                primary={page.title}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: isActive ? 600 : 400
                                }}
                            />

                            {hasChildren &&
                                (expanded[page.id]
                                    ? <ExpandLess />
                                    : <ExpandMore />
                                )
                            }
                        </ListItemButton>

                        {hasChildren && (
                            <Collapse
                                in={Boolean(expanded[page.id])}
                                timeout="auto"
                                unmountOnExit
                            >
                                <PageTree
                                    pages={page.children}
                                    level={level + 1}
                                />
                            </Collapse>
                        )}
                    </div>
                );
            })}
        </List>
    );
}
