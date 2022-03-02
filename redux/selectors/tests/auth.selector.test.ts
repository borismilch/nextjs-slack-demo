import { isLoadedSelector, isLoggedSelector, userSelector } from '../auth.selectors'
import { fakeUser } from 'mocks'

describe("auth slice selectors", () => {
  test("isLoaded selector empty state", () => {
    expect(isLoadedSelector({} as any)).toBeFalsy()
  })

  test("isLoaded selector true", () => {
    expect(isLoadedSelector({auth: { isLoaded: true }} as any)).toBeTruthy()
  })

  test("isLoaded selector true", () => {
    expect(isLoadedSelector({auth: { isLoaded: false }} as any)).toBeFalsy()
  })

  test("isLogged selector empty state", () => {
    expect(isLoggedSelector({} as any)).toBeFalsy()
  })

  test("isLogged selector true", () => {
    expect(isLoggedSelector({auth: { isLogged: true }} as any)).toBeTruthy()
  })

  test("isLogged selector true", () => {
    expect(isLoggedSelector({auth: { isLogged: false }} as any)).toBeFalsy()
  })

  test("user selector empty state", () => {
    expect(userSelector({} as any)).toBeNull()
  })

  test("user selector true", () => {
    expect(userSelector({auth: { user: fakeUser }} as any)).toEqual(fakeUser)
  })

  test("user selector true", () => {
    expect(userSelector({auth: { user: null }} as any)).toBeNull()
  })
})