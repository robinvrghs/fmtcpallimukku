
'use client';

import { useState, useEffect } from 'react';
import {
    Paper,
    Button,
    TextField,
    Link,
    Box,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Divider,
} from '@mui/material';

import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

import * as yup from 'yup';
import { useFormik } from 'formik';

import SnackBar from '@/app/components/snackbar';

const API_URL = 'https://fmtcpallimukku.ac.in/api';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Minimum 8 characters')
        .required('Password is required'),
});

function Copyright() {
    return (
        <Typography
            variant="body2"
            sx={{
                color: 'rgba(255,255,255,0.75)',
                textAlign: 'center',
                mt: 4,
                fontSize: 12,
            }}
        >
            © {new Date().getFullYear()} {' '}
            <Link
                href="https://fmtcpallimukku.ac.in"
                underline="hover"
                sx={{ color: '#fff', fontWeight: 600 }}
            >
                FMTC Pallimukku
            </Link>
            . All rights reserved.
        </Typography>
    );
}

export default function SignIn() {
    const router = useRouter();

    const {
        checkAuth,
        authenticated,
        loading: authLoading,
    } = useAuth();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);



    useEffect(() => {
        if (!authLoading && authenticated) {
            router.replace('/admin');
        }
    }, [authLoading, authenticated, router]);

    const [snackbarData, setSnackbarData] = useState({
        snackbarOpen: false,
        snackbarSeverity: 'error',
        snackbarText: '',
    });

    const showSnackbar = (severity, message) => {
        setSnackbarData({
            snackbarOpen: true,
            snackbarSeverity: severity,
            snackbarText: message,
        });
    };

    const handleSnackbarClear = () => {
        setSnackbarData({
            snackbarOpen: false,
            snackbarSeverity: 'error',
            snackbarText: '',
        });
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                const formData = new FormData();
                formData.append('email', values.email);
                formData.append('password', values.password);

                const response = await fetch(`${API_URL}/auth/login.php`, {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    showSnackbar(
                        'error',
                        result.message || 'Invalid email or password'
                    );
                    return;
                }

                const isAuthenticated = await checkAuth();

                if (!isAuthenticated) {
                    showSnackbar(
                        'error',
                        'Session verification failed. Please try again.'
                    );
                    return;
                }

                showSnackbar('success', 'Login successful');
                router.replace('/admin');

            } catch (error) {
                console.error('Login error:', error);
                showSnackbar(
                    'error',
                    'Unable to connect to the server. Please try again.'
                );
            } finally {
                setLoading(false);
            }
        },
    });

    const fieldSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#F8FAFC',
            '& fieldset': {
                borderColor: '#E2E8F0',
            },
            '&:hover fieldset': {
                borderColor: '#94A3B8',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#174B77',
                borderWidth: 1.5,
            },
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#174B77',
        },
    };

    if (authLoading || authenticated) {
        return null;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `
                    linear-gradient(
                        135deg,
                        rgba(5, 25, 48, 0.92),
                        rgba(12, 54, 86, 0.82)
                    ),
                    url('/images/login-bg.jpg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: 5,
                px: 2,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    top: '-180px',
                    right: '-100px',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    bottom: '-180px',
                    left: '-100px',
                },
            }}
        >

            <Container
                maxWidth="xs"
                sx={{ position: 'relative', zIndex: 1 }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3.5, sm: 5 },
                        borderRadius: 4,
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 25px 70px rgba(0,0,0,0.25)',
                    }}
                >
                    {/* Logo */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 3,
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/fmtc-logo.png"
                            alt="FMTC Pallimukku"
                            sx={{
                                height: 85,
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                color: '#123B5D',
                                mt: 2,
                                letterSpacing: 1,
                            }}
                        >
                            Welcome Back
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: '#64748B',
                                mt: 0.7,
                            }}
                        >
                            Sign in to access the admin dashboard
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 3, borderColor: '#EDF0F4' }} />

                    {/* Login Form */}
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 700,
                                color: '#334155',
                                mb: 0.8,
                            }}
                        >
                            Email Address
                        </Typography>

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="username"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email &&
                                formik.errors.email
                            }
                            sx={fieldSx}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleOutlined
                                            sx={{ color: '#64748B' }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 700,
                                color: '#334155',
                                mt: 2.5,
                                mb: 0.8,
                            }}
                        >
                            Password
                        </Typography>

                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            sx={fieldSx}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlined
                                            sx={{ color: '#64748B' }}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                            aria-label={
                                                showPassword
                                                    ? 'Hide password'
                                                    : 'Show password'
                                            }
                                        >
                                            {showPassword
                                                ? <VisibilityOffOutlined />
                                                : <VisibilityOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={
                                loading ||
                                !formik.isValid ||
                                !formik.dirty
                            }
                            endIcon={!loading && <ArrowForwardRounded />}
                            sx={{
                                mt: 3.5,
                                py: 1.6,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: 15,
                                fontWeight: 700,
                                letterSpacing: 0.3,
                                background: 'linear-gradient(135deg, #174B77, #0B2D53)',
                                boxShadow: '0 8px 20px rgba(23,75,119,0.22)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #103B61, #071F3D)',
                                    boxShadow: '0 10px 25px rgba(23,75,119,0.3)',
                                },
                                '&.Mui-disabled': {
                                    background: '#CBD5E1',
                                    color: '#64748B',
                                },
                            }}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            color: '#94A3B8',
                            mt: 3,
                        }}
                    >
                        Secure Administrator Access
                    </Typography>
                </Paper>

                <Copyright />
            </Container>

            <SnackBar
                snackbarData={snackbarData}
                snackbarClear={handleSnackbarClear}
            />
        </Box>
    );
}
