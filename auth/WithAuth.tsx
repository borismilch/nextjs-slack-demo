import { observer } from 'mobx-react-lite'

import Redirect from './Redirect'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

const WithAuth: React.FC<{Component: any}> = ({Component}) => {

  const [user, loading] = useAuthState(auth)

  if (!user && loading) {
    return  <p>User loading...</p>
  }

  if (!user && !loading) {
    return  <Redirect path="/login" />
  }

  return observer(<Component />)
  
};

export default WithAuth