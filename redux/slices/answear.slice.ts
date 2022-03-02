import {IUser} from "models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnswearSliceProps {
  isCommenting: boolean,
  messageId: string
}

export const initialState: AnswearSliceProps = {
  isCommenting: false,
  messageId: ''
}

const slice = createSlice({
  name: "answearSlice",
  initialState,
  reducers: {
    commentMessage: (state, action: PayloadAction<string>) => {
      state.messageId = action.payload
      state.isCommenting = true
    },

    cleanMesageComment: (state) => {
      state.messageId = '',
      state.isCommenting = false
    }

  }
})


export default slice.reducer
export const AnswearSliceActions = slice.actions
