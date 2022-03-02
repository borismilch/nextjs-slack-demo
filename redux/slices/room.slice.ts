import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface  RoomSliceState {
  roomId: string
}

export const initialState: RoomSliceState = {
  roomId: ''
}

const slice = createSlice({
  name: "RoomSlice",
  initialState,
  reducers: {
    setCurrentRoom: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload
    },
    deleteCurrentRoomId: (state) => {
      state.roomId = ''
    }
  }
})

export default slice.reducer 

export const RoomSliceAction = slice.actions