"use client";

import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface FormTextFieldProps {
    /** Field name (for id and name attributes) */
    name: string;
    /** Text displayed as the label */
    label: string;
    /** Width (e.g., '50%' or '200px') */
    width?: string;
    /** Controlled value */
    value: string;
    /** Change handler: receives new value */
    onChange: (value: string) => void;
    /** Input type (e.g., 'text', 'password', 'email') */
    type?: string;
}

export default function FormTextField({
                                          name,
                                          label,
                                          width = '100%',
                                          value,
                                          onChange,
                                          type = 'text',
                                      }: FormTextFieldProps) {
    return (
        <Box sx={{ width }}>
            <TextField
                fullWidth
                type={type}
                id={name}
                name={name}
                label={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Box>
    );
}
