import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "redux/store";

export const roomIdSelector = createSelector(
  (state: RootState) => state.room,
  (room) => room.roomId
)