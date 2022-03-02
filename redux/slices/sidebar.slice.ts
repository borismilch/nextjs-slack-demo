import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarSliceState {
  open: boolean,
}

export const initialState: SidebarSliceState = {
  open: false
}

const slice = createSlice({
  name: "SidebarSlice",
  initialState,
  reducers: {
    changeOpen: (state, action:PayloadAction<boolean>) => {
      state.open = action.payload
    },
    openSidebar: (state) => {
      state.open = true
    },
    closeSidebar: (state) => {
      state.open = false
    }
    
  }
})

export default slice.reducer 

export const SidebarSliceActions = slice.actions