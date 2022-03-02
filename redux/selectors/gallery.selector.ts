import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const selectedImageIndexSelector = createSelector(
  (state: RootState) => state?.gallery || { selectedImage:0 },
  (gallery) => gallery.selectedImage
)

export const imagesSelector = createSelector(
  (state:RootState) => state?.gallery || {images: []} ,
  (gallery) => gallery.images 
)