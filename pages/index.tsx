import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Navbar from '../src/components/Navbar'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from '@mui/material'
import KeyboardDoubleArrowDownTwoTone from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone'
import Image from 'next/image'
import Link, { NextLinkComposed } from '../src/Link'
import iLogo from '../public/Logo.png'

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        pt: 16,

        pb: 9,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={iLogo} height={'125'} width={'200'} />
          <Typography
            sx={{ mt: 6 }}
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            VISIOT
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            maxWidth="md"
            sx={{ mt: 2 }}
          >
            Accelerate your projects with the perfect combination of Image
            Processing and IoT. VISIOT is a highend IoT management platform for
            industrial and individual use.
          </Typography>

          <Link href={{ pathname: '/blog' }} underline="none">
            <Button variant="contained" size="large" color="secondary" sx={{ mt: 6 }}>
              Dev Blog
            </Button>
          </Link>

          <KeyboardDoubleArrowDownTwoTone fontSize="large" sx={{ mt: 18 }} />
        </Box>
      </Container>
    </Box>
  )
}

export default Home
