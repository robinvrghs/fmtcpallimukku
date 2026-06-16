'use client';

import { useState } from 'react';

import {
    Paper, Button, CssBaseline, TextField, Link, Box, Typography, Container, InputAdornment
} from '@mui/material';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';

import { useRouter } from 'next/navigation'

import * as yup from "yup";
import { useFormik } from 'formik';
import SnackBar from '@/app/components/snackbar';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://fmtcpallimukku.ac.in">
                FMTC Pallimukku
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default function SignIn() {

    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoading(true);

            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/login.php`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            const result = await response.json();
            if (result.status) {
                sessionStorage.setItem('role', result.role);
                sessionStorage.setItem('username', result.username);
                router.push('../admin');
            } else {
                setSnackbarData({
                    snackbarOpen: true,
                    snackbarSeverity: 'error',
                    snackbarText: 'Unable to login!!!'
                })
                setLoading(false)
            }
        },
    });



    // useEffect(() => {
    //     if (user != null) router.push("/")
    // }, [user, router])


    const [snackbarData, setSnackbarData] = useState({ snackbarOpen: false, snackbarSeverity: 'error', snackbarText: '' });

    const handleSnackbarClear = () => {
        setSnackbarData({
            snackbarOpen: false,
            snackbarSeverity: '',
            snackbarText: ''
        })

    }


    return (
        <Box sx={{
            backgroundImage: "url('../signin_bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Container component="main" maxWidth="xs" sx={{ height: '100%' }}>
                <CssBaseline />
                <Box sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            p: 5,
                        }}
                    >
                        {/* <Box component="img" src='../logo_rounded.jpeg' sx={{ height: 100 }} /> */}
                        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                            LOGIN
                        </Typography>

                        <Box component="form" sx={{ mt: 1, width: '100%' }} onSubmit={formik.handleSubmit}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                size='medium'
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PasswordIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />

                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size='large'
                                sx={{ mt: 2 }}
                            >
                                {loading ? "Logging in ..." : " Login "}
                            </Button>

                        </Box>


                    </Paper>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </Container>

            <SnackBar snackbarData={snackbarData} snackbarClear={handleSnackbarClear} />

        </Box>
    );
}