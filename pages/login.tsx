import { Amplify } from 'aws-amplify'

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from '../src/aws-exports'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
Amplify.configure(awsExports)

function App() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])

  return <div></div>
}

export default withAuthenticator(App)
