import { NextPage } from 'next'

import { Authenticator } from '@aws-amplify/ui-react'

import Box from '@mui/material/Box'

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
