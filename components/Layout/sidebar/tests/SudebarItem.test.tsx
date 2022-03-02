import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { SidebarItem }  from '..'

import { AiFillAccountBook } from "react-icons/ai";
import { screen } from '@testing-library/react'

describe("<SidebarItem />", () => {
  test("onClick", () => {
    const onClick = jest.fn()
    
    renderWithStoreAndRouter(
    <SidebarItem 
      sidebarItem={{onClick, text: 'some id'}}
      Icon={<AiFillAccountBook />}  
    />)

    userEvent.click(screen.getByTestId("sidebar-item"))

    expect(onClick).toBeCalled()
    expect(screen.getByText('some id'))
  })
})