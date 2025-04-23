"use client";

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormTextField from '../components/FormTextField';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
        // TODO: Call Spring Boot login API
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.100',
                p: 2,
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    bgcolor: 'background.paper',
                    p: 6,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                </Box>
                <Stack spacing={2} sx={{ mt: 3 }}>
                    <FormTextField
                        name="email"
                        label="Email Address"
                        width="100%"
                        value={email}
                        onChange={setEmail}
                    />
                    <FormTextField
                        name="password"
                        label="Password"
                        width="100%"
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Sign In
                    </Button>
                </Stack>
                <Typography align="center" sx={{ mt: 3, mb: 1 }}>
                    Or sign in with
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        fullWidth
                        sx={{ maxWidth: 180 }}
                    >
                        Google
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        fullWidth
                        sx={{ maxWidth: 180 }}
                    >
                        LinkedIn
                    </Button>
                </Stack>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Link href="/register" variant="body2">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
