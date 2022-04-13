
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  })

  return null
}

function Home() {


  return <h1>Wellcome</h1>
}

export default Home
