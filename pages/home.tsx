import { Amplify } from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from '../src/aws-exports'
Amplify.configure(awsExports)
import { useAuthenticator } from '@aws-amplify/ui-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  })

  return null
}

function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return <h1>Wellcome {user.attributes?.name}</h1>
}

export default withAuthenticator(Home)
