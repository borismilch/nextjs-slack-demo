import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IImage {url: string, id: number}

interface gallerySliceState {
  images: IImage[],
  selectedImage: number
}

export const initialState: gallerySliceState = {
  images: [],
  selectedImage: 0
}

const slice = createSlice({
  name: "GalleryStoreSlice", 
  initialState,
  reducers: {
    incrementImage: (state) => {
      if (state.selectedImage+ 1 < state.images.length) {
        state.selectedImage += 1;
      }
    },
    decrementImage: (state) => {
      if (state.selectedImage > 0) {
        state.selectedImage -= 1;
      }
    },
    clearData: (state) => {
      state.images = []
    },
    setCurrentImage: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0)
      state.selectedImage = action.payload
    },
    setImages: (state, action: PayloadAction<IImage[]>) => {
      state.images = action.payload
    }
  }
})


export default slice.reducer 

export const GallerySliceActions = slice.actions