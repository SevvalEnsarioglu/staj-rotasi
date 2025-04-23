"use client";

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormTextField from '../components/FormTextField';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [university, setUniversity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, department, university, email, password, confirmPassword });
        // TODO: Spring Boot API entegrasyonu
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
                    maxWidth: 600,
                    bgcolor: 'background.paper',
                    p: 6,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
                        <LockOutlinedIcon fontSize="large" />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign Up
                    </Typography>
                </Box>
                <Stack spacing={3} sx={{ mt: 4 }}>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <FormTextField
                            name="firstName"
                            label="First Name"
                            width="50%"
                            value={firstName}
                            onChange={setFirstName}
                        />
                        <FormTextField
                            name="lastName"
                            label="Last Name"
                            width="50%"
                            value={lastName}
                            onChange={setLastName}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <FormTextField
                            name="university"
                            label="University"
                            width="50%"
                            value={university}
                            onChange={setUniversity}
                        />
                        <FormTextField
                            name="department"
                            label="Department"
                            width="50%"
                            value={department}
                            onChange={setDepartment}
                        />
                    </Box>
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
                        value={password}
                        onChange={setPassword}
                    />
                    <FormTextField
                        name="confirmPassword"
                        label="Confirm Password"
                        width="100%"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                    />
                </Stack>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 4, mb: 3 }}>
                    Sign Up
                </Button>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
