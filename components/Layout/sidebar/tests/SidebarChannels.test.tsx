import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { SidebarChannels } from "..";
import { fakeSidebarItems } from 'mocks'
import { screen } from '@testing-library/react'

import { RoomSliceAction } from 'redux/actions' 

describe ("<SidebarChannels />", () => {
  test("display and call sidebar items", () => {

    const spy = jest.spyOn(RoomSliceAction, "setCurrentRoom")

    renderWithStoreAndRouter(
      <SidebarChannels channels={fakeSidebarItems} />
    )

    expect(screen.getAllByTestId('sidebar-item')).toHaveLength(1)
  })
})