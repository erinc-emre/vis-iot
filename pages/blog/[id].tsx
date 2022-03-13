import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../src/components/Date'


export default function Post({ postData }:any) {
  return (
    <Container maxWidth="md" sx={{mt:10}}>
    

    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
    {postData.title}
    </Typography>
    <Typography component="h4" variant="h5" color="inherit" gutterBottom>
    <Date dateString={postData.date} />
    </Typography>
    <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <br/>
      
      <br/>
      
    
    </Container>
  )
}
  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({params}:any) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

