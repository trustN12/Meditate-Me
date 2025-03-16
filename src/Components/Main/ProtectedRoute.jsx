import { RedirectToSignIn, useUser } from '@clerk/clerk-react'
import React from 'react'

const ProtectedRoute = ( {children} ) => {
  const { isSignedIn } = useUser();

  if ( !isSignedIn ){
    return <RedirectToSignIn />;
  }

  return children;

}

export default ProtectedRoute