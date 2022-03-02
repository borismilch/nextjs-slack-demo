import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const sidebarOpenSelector = createSelector(
  (state: RootState) => state?.sidebar || {open: false},
  (sidebar) => sidebar.open
)