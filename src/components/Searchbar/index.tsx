import React from 'react';
import {TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export const SearchBar = ({searchQuery, setSearchQuery}: Props) => (
    <TextField
        onChange={e => setSearchQuery(e.target.value)}
        variant="outlined"
        placeholder="Buscar"
        sx={{
            color: 'white',
            width: '100%',
            marginBottom: '16px',
        }}
        InputProps={{
            value: searchQuery,
            startAdornment: <SearchIcon />,
            endAdornment: searchQuery ? (
                <ClearIcon sx={{cursor: 'pointer'}} onClick={() => setSearchQuery('')} />
            ) : null,
            sx: {
                background: 'white',
                width: '100%',
            },
        }}
    />
);
