import { NextPage } from 'next'
import { Amplify } from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from '../aws-exports'
import Box from '@mui/material/Box'
Amplify.configure(awsExports)

const Register: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default Register
