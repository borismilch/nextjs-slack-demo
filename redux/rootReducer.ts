import { combineReducers } from '@reduxjs/toolkit'
import answearReducer from './slices/answear.slice'
import authReducer from './slices/auth.slice'
import galleryReducer from './slices/gallery.slice'
import mediaReducer from './slices/media.slice'
import roomReducer from './slices/room.slice'
import sidebarReducer from './slices/sidebar.slice'

export const rootReducer = combineReducers ({
  answear: answearReducer,
  auth: authReducer,
  gallery: galleryReducer,
  media: mediaReducer,
  room: roomReducer,
  sidebar: sidebarReducer,
})