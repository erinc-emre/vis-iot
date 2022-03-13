import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup, styled } from '@mui/material';
import Link from '../Link';
import iLogo from '../../public/Logo.png'
import Image from 'next/image';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default function Navbar() {


    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="fixed">
          <Toolbar>
            <Link href={{pathname: '/'}} sx={{ flexGrow: 1, ml:16 }}>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <Image src={iLogo} height={'25'} width={'40'}/>
                <Typography variant="h6" color='black' sx={{ml:2}}>
                  VISIOT
                </Typography>

              </Box>
            </Link>

            <Button color="inherit" variant="contained" sx={{mr:2}}>Login</Button>
            <Button color="inherit" variant="contained" sx={{mr:16}}>Register</Button>
          </Toolbar>
        </AppBar>
        <Offset/>
      </Box>
    );
    
}
