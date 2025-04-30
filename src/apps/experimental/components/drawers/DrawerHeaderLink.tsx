import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useSystemInfo } from 'hooks/useSystemInfo';
import ListItemLink from 'components/ListItemLink';

const appIcon = '/assets/img/icon-transparent.png';
const DrawerHeaderLink = () => {
    const { data: systemInfo } = useSystemInfo();

    return (
        <ListItemLink to='/'>
            <ListItemIcon sx={{ minWidth: 64 }}>
                <Box
                    component='img'
                    src={appIcon}
                    sx={{ height: '3.5rem' }}
                />
            </ListItemIcon>
            <ListItemText
                primary={systemInfo?.ServerName || 'Jellyfin'}
                secondary={systemInfo?.Version}
                slotProps={{
                    primary: { variant: 'h6' }
                }}
            />
        </ListItemLink>);
};

export default DrawerHeaderLink;
