import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const mediaSelector = (state) => state.media

export const imagesSelector = createSelector(
  (state: RootState) => state?.media || {images: []},
  (media) => media.images
)

export const filesSelector = createSelector(
  (state: RootState) => state?.media || {files: []},
  (media) => media.files
)

export const documentsSelector = createSelector(
  (state: RootState) => state?.media || {documents: []},
  (media) => media.documents
)

export const isVideoSelector = createSelector(
  (state: RootState) => state?.media || {isVideo: false},
  (media) => media.isVideo
)

export const isDocumentsSelector = createSelector(
  (state: RootState) => state?.media || { isDocuments: false },
  (media) => media.isDocuments
)

export const canUploadSelector = createSelector(
  (state: RootState) => state?.media || { canUpload: false },
  (media) => media.canUpload
)
