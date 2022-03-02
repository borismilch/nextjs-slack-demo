import {IUser} from "models/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceProps {
  isLogged: boolean,
  user: IUser,
  isLoaded: boolean,
}

export const initialState: AuthSliceProps = {
  isLoaded: false,
  user: {} as IUser,
  isLogged: false
}

const slice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      if (action.payload.email) {
        state.user = action.payload
        state.isLogged = true
        state.isLoaded = true
      }
    },

    cleanUser: (state) => {
      state.user = null
      state.isLogged = false
      state.isLoaded = true
    },

  }
})

export default slice.reducer
export const AuthSliceActions = slice.actions
