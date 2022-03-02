import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const userSelector = createSelector(
  (state: RootState) => state?.auth || { user: null },
  (answear) => answear.user
)

export const isLoggedSelector = createSelector(
  (state: RootState) => state?.auth || {isLogged: false},
  (answear) => answear.isLogged
)

export const isLoadedSelector = createSelector(
  (state: RootState) => state?.auth || {isLoaded: false},
  (answear) => answear.isLoaded 
)