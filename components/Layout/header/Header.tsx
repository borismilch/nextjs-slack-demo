import React, { useCallback } from 'react';
import { auth } from 'lib/firebase'
import { useNavigation } from 'hooks/.'

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { sidebarOpenSelector } from 'redux/selectors'
import { SidebarSliceActions } from 'redux/actions';
import { userSelector } from 'redux/selectors';

import { HeaderActions, HeaderSearch, HeaderUser } from '.';

const Header = () => {
  const { pushRouter } = useNavigation()
  const user = useAppSelector(userSelector)

  const dispatch = useAppDispatch()
  const open = useAppSelector(sidebarOpenSelector)

  const signOut = useCallback(async () => {
    await auth.signOut()
    pushRouter('/login')
  }, [])

  const toggleSidebar = useCallback(() => {
    dispatch(SidebarSliceActions.changeOpen(!open))
  }, [])

  return (
    <header 
      className ="header_wrapper">

      <HeaderActions toggleSidebar={toggleSidebar} />

      <HeaderSearch />

      <HeaderUser signOut={signOut} user={user} />
            
    </header>
  );
};

export default React.memo(Header)
