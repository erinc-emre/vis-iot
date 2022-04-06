import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
function App() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])

  return <div></div>
}

export default withAuthenticator(App)
