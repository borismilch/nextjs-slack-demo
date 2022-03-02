import Layout from '../components/Layout';

import { NextPage } from 'next';
import { Chat, ChatPlaceholder } from 'components/pages/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'lib/firebase'
import { Redirect } from '../auth'
import { AnswearSidebar } from 'components/pages/answear'

import { useAppSelector } from 'hooks/redux';
import { roomIdSelector, isCommentingSelector } from 'redux/selectors';

const Home:NextPage = () => {

  const roomId = useAppSelector(roomIdSelector)
  const isCommenting = useAppSelector(isCommentingSelector)
  const [user, loading] = useAuthState(auth)

  if (!user && !loading) {
    return <Redirect path='/login' />
  }

  return (
    <Layout title='Some App'>

      {roomId && <Chat />}

      {!roomId && <ChatPlaceholder />}

      {isCommenting && <AnswearSidebar />}
     
    </Layout>
  );
}

export default Home

