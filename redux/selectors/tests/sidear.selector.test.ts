import { sidebarOpenSelector } from '../sidebar.selector'

describe("sidebar open selector", () => {
  test("empty state", () => {
    expect(sidebarOpenSelector({} as any)).toBeFalsy()
  })

  test("empty filled state", () => {
    expect(sidebarOpenSelector({sidebar: { open: true }} as any)).toBeTruthy()
  })

  test("empty state", () => {
    expect(sidebarOpenSelector({ sidebar: { open: false }} as any)).toBeFalsy()
  })
})