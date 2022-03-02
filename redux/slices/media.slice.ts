import { IDocument, IMage } from "models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

interface MediaSliceProps {
  images: IMage[],
  files: File[],
  documents: IDocument[],

  fileInputRef: RefObject<HTMLInputElement>,

  isVideo: boolean,
  isDocuments: boolean,
  canUpload: boolean
}

export const initialState: MediaSliceProps = {
  images: [],
  files: [],
  documents: [],

  fileInputRef: null,

  isVideo: false,
  isDocuments: false,
  canUpload: false
}

const slice = createSlice({
  name: "mediaSlice",
  initialState,
  reducers: {
    changeCanUpload: (state, action: PayloadAction<boolean>) => {
      state.canUpload = action.payload
    },

    addImage: (state, action: PayloadAction<string>) => {
      state.canUpload = false
      state.images.push({url: action.payload, id: Date.now()})
    },

    removeImage: (state, action: PayloadAction<number>) => {
      state.images = state.images.filter((item, idx) => (
        idx !== action.payload
      ))
    },

    cleanImages: (state) => {
      state.images = []
    },

    addFile: (state, action: PayloadAction<File>) => {
      state.files.push(action.payload)
    },

    startVideoInsert: (state) => {
      state.isVideo = true
    },

    startDocumentInsert: (state) => {
      state.isDocuments = true
    },

    cleanDocuments: (state) => {
      state.documents = []
    },

    addDocument: (state, action: PayloadAction<IDocument>) => {
      state.documents.push(action.payload)
    },

    cleanAllAferSend: (state) => {
      state.documents = []
      state.images = []
      state.isDocuments = false
      state.isVideo = false
    }
  }
})

export default slice.reducer 

export const MediaSliceActions = slice.actions