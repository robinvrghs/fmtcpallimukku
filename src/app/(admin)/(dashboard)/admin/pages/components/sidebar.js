
"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  CircularProgress,
  Box,
  Typography,
  Alert,
  Button,
  Divider
} from "@mui/material";

import {
  ExpandLess,
  ExpandMore,
  Add,
  ArticleOutlined,
  FolderOutlined
} from "@mui/icons-material";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const getPageTrail = (pages, pathname, parents = []) => {
  for (const page of pages || []) {
    const currentPath = [
      ...parents,
      String(page.id)
    ];

    if (pathname === `/admin/pages/page-editor/${page.id}`) {
      return currentPath;
    }

    const childTrail = getPageTrail(
      page.children || [],
      pathname,
      currentPath
    );

    if (childTrail.length) {
      return childTrail;
    }
  }

  return [];
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isCreatePage = pathname === "/admin/pages/page-editor";

  // Fetch navigation
  useEffect(() => {
    let active = true;

    const fetchNavigation = async () => {
      try {
        const response = await fetch(
          `${API_URL}/pages/getnav.php`,
          {
            credentials: "include",
            cache: "no-store",
            headers: {
              Accept: "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error("Unable to load pages");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid navigation response");
        }

        if (active) {
          setCategories(data);
          setError("");
        }

      } catch (err) {
        console.error("Navigation error:", err);

        if (active) {
          setError(err.message || "Unable to load navigation");
        }

      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchNavigation();

    return () => {
      active = false;
    };
  }, []);

  // Automatically expand the active category and parent pages
  useEffect(() => {
    if (!categories.length) return;

    const newExpanded = {};

    categories.forEach((category) => {
      const trail = getPageTrail(
        category.pages || [],
        pathname
      );

      if (trail.length) {
        newExpanded[`category-${category.id}`] = true;

        trail.forEach((id) => {
          newExpanded[`page-${id}`] = true;
        });
      }
    });

    setExpanded((previous) => ({
      ...previous,
      ...newExpanded
    }));
  }, [categories, pathname]);

  const toggleExpanded = (key) => {
    setExpanded((previous) => ({
      ...previous,
      [key]: !previous[key]
    }));
  };

  const handleCreatePage = () => {
    router.push("/admin/pages/page-editor");
  };

  // Recursive page renderer
  const renderPages = (pages, depth = 0) => {
    return (pages || []).map((page) => {
      const href = `/admin/pages/page-editor/${page.id}/`;
      const isActive = pathname === href;
      const hasChildren = Boolean(page.children?.length);
      const pageKey = `page-${page.id}`;
      const isExpanded = Boolean(expanded[pageKey]);

      console.log({
        pathname,
        href,
        isActive
      });

      return (
        <Fragment key={page.id}>
          <ListItemButton
            component={Link}
            href={href}
            selected={isActive}
            sx={{
              position: "relative",
              minHeight: 38,
              mx: 1,
              mb: 0.4,
              pl: 2 + depth * 2,
              pr: 1,
              borderRadius: 1.5,
              color: isActive
                ? "primary.main"
                : "text.secondary",

              "&:hover": {
                backgroundColor: "action.hover",
                color: "primary.main"
              },

              "&.Mui-selected": {
                backgroundColor: "primary.main",
                color: "#fff",
                fontWeight: 600,

                "&:hover": {
                  backgroundColor: "primary.dark"
                },

                "& .MuiListItemText-primary": {
                  fontWeight: 600
                },

                "& .MuiSvgIcon-root": {
                  color: "#fff"
                }
              }
            }}
          >
            <ArticleOutlined
              sx={{
                fontSize: 17,
                mr: 1.2,
                opacity: isActive ? 1 : 0.65,
                flexShrink: 0
              }}
            />

            <ListItemText
              primary={page.title}
              primaryTypographyProps={{
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                noWrap: true
              }}
            />

            {hasChildren && (
              <Box
                component="span"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleExpanded(pageKey);
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 0.5,
                  cursor: "pointer",
                  opacity: 0.7
                }}
              >
                {isExpanded
                  ? <ExpandLess fontSize="small" />
                  : <ExpandMore fontSize="small" />
                }
              </Box>
            )}
          </ListItemButton>

          {hasChildren && (
            <Collapse
              in={isExpanded}
              timeout="auto"
              unmountOnExit
            >
              <Box
                sx={{
                  ml: 2,
                  borderLeft: "1px solid",
                  borderColor: "divider"
                }}
              >
                {renderPages(page.children, depth + 1)}
              </Box>
            </Collapse>
          )}
        </Fragment>
      );
    });
  };

  if (loading) {
    return (
      <Box
        p={3}
        display="flex"
        justifyContent="center"
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2.5,
        overflow: "hidden",
        boxShadow: "0 4px 18px rgba(0,0,0,0.035)"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "primary.main",
          color: "#fff"
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            letterSpacing={0.3}
          >
            Page Manager
          </Typography>

          <Typography
            variant="caption"
            sx={{ opacity: 0.8 }}
          >
            Manage website content
          </Typography>
        </Box>

        <FolderOutlined sx={{ opacity: 0.8 }} />
      </Box>

      {/* Create page */}
      <Box sx={{ p: 1.5 }}>
        <Button
          fullWidth
          variant={isCreatePage ? "contained" : "outlined"}
          startIcon={<Add />}
          onClick={handleCreatePage}
          sx={{
            borderRadius: 1.5,
            textTransform: "none",
            fontWeight: 600,
            py: 1,
            boxShadow: "none"
          }}
        >
          Create New Page
        </Button>
      </Box>

      <Divider />

      {/* Categories */}
      <List
        disablePadding
        sx={{ py: 1 }}
      >
        {categories.map((category) => {
          const categoryKey = `category-${category.id}`;
          const isExpanded = Boolean(expanded[categoryKey]);

          const hasActivePage = getPageTrail(
            category.pages || [],
            pathname
          ).length > 0;

          return (
            <Box key={category.id} sx={{ mb: 0.5 }}>
              {/* Category heading */}
              <ListItemButton
                onClick={() => toggleExpanded(categoryKey)}
                sx={{
                  mx: 1,
                  minHeight: 40,
                  borderRadius: 1.5,
                  color: hasActivePage
                    ? "primary.main"
                    : "text.primary",
                  "&:hover": {
                    bgcolor: "action.hover"
                  }
                }}
              >
                <FolderOutlined
                  sx={{
                    fontSize: 19,
                    mr: 1.2,
                    opacity: 0.75
                  }}
                />

                <ListItemText
                  primary={category.name}
                  primaryTypographyProps={{
                    fontSize: 13,
                    fontWeight: 700
                  }}
                />

                {isExpanded
                  ? <ExpandLess fontSize="small" />
                  : <ExpandMore fontSize="small" />
                }
              </ListItemButton>

              {/* Category pages */}
              <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding sx={{ pt: 0.3 }}>
                  {renderPages(category.pages || [])}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
    </Box>
  );
}
