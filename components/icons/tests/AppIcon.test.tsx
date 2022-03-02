import AppIcon, { AiFillCaretDown } from '..'
import { renderWithStoreAndRouter, userEvent } from 'utils/testing'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect';

describe("<AppIcon />", () => {
  test("onClick function", () => {
    const onClick = jest.fn()

    renderWithStoreAndRouter(
      <AppIcon onClick={onClick} Icon={<AiFillCaretDown />} />
    )

    screen.debug()
    
    expect(screen.getByTestId("app_icon")).toBeInTheDocument()
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId("app_icon"))

    expect(onClick).toHaveBeenCalled()

  })

  test("with tooltip", () => {
    const onClick = jest.fn()

    renderWithStoreAndRouter(
      <AppIcon 
        onClick={onClick} 
        Icon={<AiFillCaretDown />}
        tooltip={['some test', 'tooltip']}
      />
    )
    
    expect(screen.getByTestId("app_icon")).toBeInTheDocument()
    expect(screen.getByTestId("tooltip")).toBeInTheDocument()

    userEvent.click(screen.getByTestId("app_icon"))
    expect(onClick).toHaveBeenCalled()
  })
})