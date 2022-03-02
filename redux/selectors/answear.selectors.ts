import { createSelector } from '@reduxjs/toolkit'

import  { RootState } from 'redux/store'

export const isCommentingSelector = createSelector(
  (state: RootState) => state.answear || {isCommenting: false},
  (answear) => answear.isCommenting
)

export const messageIdSelector = createSelector(
  (state: RootState) => state?.answear || {messageId: ''},
  (answear) => answear.messageId
)