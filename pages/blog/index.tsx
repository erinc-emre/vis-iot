import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'

import Date from '../../src/components/Date'
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { parseISO, format } from 'date-fns'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }:any) {

  return (
    <Container maxWidth="lg">


<Paper sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#CEF2F2',
        mt: 4,
        mb: 6,
        borderRadius: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
      }}>
      <Box sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          borderRadius: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Sunday Dev Blog
            </Typography>
            <Typography variant="h5" color="#e0e0e0" paragraph>
            A blog where the development process of VISIOT is shared on a weekly basis. I am writing the information I learned and the difficulties I encountered during the development of the project.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>


    {/* End hero unit */}
    <VerticalTimeline>
    {allPostsData.map(({ id, date, title, cover, description}:any) => (        

      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'transparent', color: '#fff' }}
        contentArrowStyle={{ borderRight: 'px solid  rgb(33, 150, 243)' }}
        date={format(parseISO(date), 'LLLL d, yyyy')}
        iconStyle={{ background: '#04D9C4', color: '#fff' }}

      >
        <Link href={'/blog/' + id}>
          <Card variant='outlined'   sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>

                    <CardMedia
                    component="img"
                    image={cover}
                    alt="cover"
                  />


            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h4" component="h2">
                {title}
              </Typography>
              <Typography>
                {description}
              </Typography>
            </CardContent>
           
            </Card>
          </Link>
      </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: '#F0F0F2', color: '#fff' }}
        
      />


    
    </VerticalTimeline>
  </Container>
  )
}