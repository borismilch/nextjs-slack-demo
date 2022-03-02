import { default as authReducer, AuthSliceActions, initialState } from '../auth.slice'
import { fakeUser } from 'mocks'

const mockState: typeof initialState = { 
  isLoaded: true, 
  isLogged: true, 
  user: fakeUser 
}

describe("auth slice", () => {
  test("setUser action", () => {
    expect(authReducer(initialState, AuthSliceActions.setUser(fakeUser)).isLoaded).toBeTruthy()
    expect(authReducer(initialState, AuthSliceActions.setUser(fakeUser)).isLogged).toBeTruthy()
    expect(authReducer(initialState, AuthSliceActions.setUser(fakeUser)).user).toEqual(fakeUser)
  })

  test("cleanUser action", () => {
    expect(authReducer(mockState, AuthSliceActions.cleanUser()).isLoaded).toBeTruthy()
    expect(authReducer(mockState, AuthSliceActions.cleanUser()).isLogged).toBeFalsy()
    expect(authReducer(mockState, AuthSliceActions.cleanUser()).user).toBeNull()
  })
})