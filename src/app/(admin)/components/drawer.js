'use client';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box
} from "@mui/material";

import Link from "next/link";

import Home from "@mui/icons-material/Home";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from "react";

export default function MainDrawer() {

  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
  }, []);

  return (
    <Drawer variant="permanent" sx={{ width: 121 }}>
      <Toolbar />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/admin"
            sx={{
              display: 'block',
              textAlign: 'center'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                m: 'auto',
                color: '#fcb913'
              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>

        <Divider />

        {/* {(role === 'admin') &&

          <Box>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                href="/admin/application-manager-btech"
                sx={{
                  display: 'block',
                  textAlign: 'center'


                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    m: 'auto',
                    color: '#fcb913'
                  }}
                >
                  <FeedOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Btech`}
                />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderBottomWidth: 5 }} />
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                href="/admin/application-manager-mtech"
                sx={{
                  display: 'block',
                  textAlign: 'center'


                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    m: 'auto',
                    color: '#fcb913'
                  }}
                >
                  <FeedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Mtech' />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderBottomWidth: 5 }} />

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                href="/admin/staff-management"
                sx={{
                  display: 'block',
                  textAlign: 'center'


                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    m: 'auto',
                    color: '#fcb913'
                  }}
                >
                  <FeedOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Staff`}
                />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderBottomWidth: 5 }} />



          </Box>
        } */}

        <Box>


          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href="/admin/pages"
              sx={{
                display: 'block',
                textAlign: 'center'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: 'auto',
                  color: '#fcb913'
                }}
              >
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <Divider />


          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href="/admin/notifications-manager"
              sx={{
                display: 'block',
                textAlign: 'center'


              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: 'auto',
                  color: '#fcb913'
                }}
              >
                <CampaignOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Notifications' />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href="/admin/gallery-manager"
              sx={{
                display: 'block',
                textAlign: 'center'


              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: 'auto',
                  color: '#fcb913'
                }}
              >
                <CollectionsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Gallery' />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href="/admin/files-manager"
              sx={{
                display: 'block',
                textAlign: 'center'


              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: 'auto',
                  color: '#fcb913'
                }}
              >
                <CollectionsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Files' />
            </ListItemButton>
          </ListItem>

        </Box>

      </List>


    </Drawer>
  );
}