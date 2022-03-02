import { fakeUser } from "mocks";
import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { HeaderUser } from "..";
import { screen } from '@testing-library/react'

describe("<HeaderUser /> comspoent ", () => {
  test("singnout function", () => {
    const signOut = jest.fn()
    renderWithStoreAndRouter(
    <HeaderUser 
      user={fakeUser} 
      signOut={signOut} 
    />)
    
    userEvent.click(screen.getByTestId("avatar"))

    expect(signOut).toHaveBeenCalled()
  })
})