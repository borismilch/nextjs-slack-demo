import Layout from '../components/Layout';

import { NextPage } from 'next';
import { observer } from 'mobx-react-lite';
import { RoomStore, AnswearStore, GalleryStore } from '@/store/.'

import { Chat, ChatPlaceholder } from '@/components/pages/index'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@/lib/firebase'

import { Redirect } from '../auth'
import { AnswearSidebar } from '@/components/pages/answear'
import ReactDom from 'react-dom'

import { Slider } from '@/components/Layout/slider'

const Home:NextPage = () => {

  const [user, loading] = useAuthState(auth)

  if (!user && !loading) {
    return <Redirect path='/login' />
  }

  return (
    <Layout title='Some App'>

      {RoomStore.roomId && <Chat />}

      {!RoomStore.roomId && <ChatPlaceholder />}

      {AnswearStore.isCommenting && <AnswearSidebar />}
     
    </Layout>
  );
}

export default observer(Home)

