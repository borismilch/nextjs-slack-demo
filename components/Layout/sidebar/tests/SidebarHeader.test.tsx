import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from '@testing-library/react'
import { SidebarHeader } from '..'

describe("<SidebarHeader />", () => {
  test("sidebar header function", () => {
    const sendMessage = jest.fn()

    renderWithStoreAndRouter(
      <SidebarHeader sendMessage={sendMessage} />
    )
    
    userEvent.click(screen.getByTestId('pencil'))
    expect(sendMessage).toBeCalled()

  })
})