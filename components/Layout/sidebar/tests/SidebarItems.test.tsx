import { renderWithStoreAndRouter } from "utils/testing";
import { SidebarItems } from "..";
import { screen } from '@testing-library/react'

describe("<SidebarItems />", () => {
  test("items length", () => {
    renderWithStoreAndRouter(<SidebarItems />)
    const sidebarItems = screen.getAllByTestId('sidebar-item')

    expect(sidebarItems).toHaveLength(3)

  })
})