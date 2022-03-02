import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { HeaderActions } from '../'
import { screen } from '@testing-library/react'

describe("<HeaderActions />", () => {
  test("Toggle sidebar function", () => {
    const toggleSidebar = jest.fn()
    
    renderWithStoreAndRouter(<HeaderActions toggleSidebar={toggleSidebar} />)

    userEvent.click(screen.getByTestId("menu-button"))
    userEvent.click(screen.getByTestId("menu-button"))

    expect(toggleSidebar).toBeCalledTimes(2)
  })
})