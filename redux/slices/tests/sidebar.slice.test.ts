import { default as sidebarReducer, SidebarSliceActions, initialState }  from '../sidebar.slice'

const mockState: typeof initialState = {
  open: true
}

describe ("sidebarSlice Actions", () => {
  test("chageOpen action", () => {
    expect(sidebarReducer(initialState, SidebarSliceActions.changeOpen(true)).open).toBeTruthy()

    expect(sidebarReducer(mockState, SidebarSliceActions.changeOpen(false)).open).toBeFalsy()
  })

  test("chageOpen action", () => {
    expect(sidebarReducer(initialState, SidebarSliceActions.openSidebar()).open).toBeTruthy()

  })

  test("chageOpen action", () => {
    expect(sidebarReducer(mockState, SidebarSliceActions.closeSidebar()).open).toBeFalsy()
  })
})