
'use client';

import { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useRouter } from "next/navigation";


export default function TopBar() {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const fetchCookie = async () => {
    let storedUsername = undefined;
    if (typeof window !== 'undefined') {
      storedUsername = sessionStorage.getItem('username');
      setUsername(storedUsername)
    }
  }

  useEffect(() => {
    fetchCookie();
  }, [])


  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = async () => {
    await fetch("https://fmtcpallimukku.ac.in/api/login.php", {
      method: "POST",
      credentials: "include",
    });

    sessionStorage.clear();

    router.push("/admin-login");
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#fff' }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component='img' src="/images/logo.png" sx={{ width: 250 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            </Box>

            {username &&
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            }
          </Box>

        </Container>
      </Toolbar>
    </AppBar>
  );
}