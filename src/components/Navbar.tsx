import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { ButtonGroup, ClickAwayListener, Popover, styled } from '@mui/material'
import Link from '../Link'
import iLogo from '../../public/Logo.png'
import Image from 'next/image'

import { Amplify } from 'aws-amplify'
import Register from './Register'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from '../aws-exports'
import { useAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports)

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default function Navbar() {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  if (user) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Link href={{ pathname: '/' }} sx={{ flexGrow: 1, ml: 16 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={iLogo} height={'25'} width={'40'} />
                <Typography variant="h6" color="black" sx={{ ml: 2 }}>
                  VISIOT
                </Typography>
              </Box>
            </Link>
            <Button
              onClick={signOut}
              color="inherit"
              variant="contained"
              sx={{ mr: 16 }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Offset />
      </Box>
    )
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Link href={{ pathname: '/' }} sx={{ flexGrow: 1, ml: 16 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={iLogo} height={'25'} width={'40'} />
                <Typography variant="h6" color="black" sx={{ ml: 2 }}>
                  VISIOT
                </Typography>
              </Box>
            </Link>

            <Button
              href="/login"
              color="inherit"
              variant="contained"
              sx={{ mr: 16 }}
            >
              Access
            </Button>
          </Toolbar>
        </AppBar>
        <Offset />
      </Box>
    )
  }
}
