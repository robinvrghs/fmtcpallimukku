
'use client';

import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function TopBar() {
  const router = useRouter();
  const { admin, logout } = useAuth();

  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await logout();
      router.replace('/admin-login');
    } catch (error) {
      console.error('Unable to logout:', error);
      // Show an error message using your existing Snackbar if available.
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src="/images/fmtc-logo.png"
              alt="FMTC Logo"
              sx={{
                width: 150,
                objectFit: 'contain',
              }}
            />

            {/* Right section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'primary.main',
                }}
              >
                A
              </Avatar>

              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                >
                  Administrator
                </Typography>
              </Box>

              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                disabled={loggingOut}
                size="medium"
              >
                {loggingOut ? 'Logging out...' : 'Logout'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
