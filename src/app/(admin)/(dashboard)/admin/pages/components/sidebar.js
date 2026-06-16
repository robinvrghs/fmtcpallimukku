"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  CircularProgress,
  Box,
  Typography
} from "@mui/material";

import {
  ExpandLess,
  ExpandMore
} from "@mui/icons-material";

export default function AdminSidebar() {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fmtcpallimukku.ac.in/api/pages/getnav.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const toggleCategory = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <Box p={2}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        border: '1px solid #ecf1f9', borderRadius: 2, boxShadow: '0px 9px 14px #fbfbfb',
        width: '100%'
      }}
    >
      <Box sx={{ backgroundColor: 'primary.main', px: 2, py: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
        <Typography variant="body1" sx={{ color: '#ffffff', textTransform: 'uppercase' }}>
          Pages
        </Typography>
      </Box>
      <List>

        {categories.map((category) => (
          <Box key={category.id}>

            <ListItemButton
              onClick={() => toggleCategory(category.id)}
            >
              <ListItemText
                primary={category.name}
              />

              {expanded[category.id]
                ? <ExpandLess />
                : <ExpandMore />
              }
            </ListItemButton>

            <Collapse
              in={expanded[category.id]}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>

                {category.pages.map((page) => (

                  <ListItemButton
                    key={page.id}
                    component={Link}
                    href={`/admin/pages/page-editor?id=${page.id}`}
                    sx={{
                      pl: 4
                    }}
                  >
                    <ListItemText
                      primary={page.title}
                    />
                  </ListItemButton>

                ))}

              </List>
            </Collapse>

          </Box>
        ))}

      </List>
    </Box>
  );
}