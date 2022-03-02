import { ButtonGroup } from '../'
import { renderWithStoreAndRouter, userEvent } from 'utils/testing'
import { screen } from '@testing-library/react'

describe("Button group Behaiwor", () => {
  test("buttons behaiwor", () => {

    const onClickFirst = jest.fn()
    const onClickSecond = jest.fn()

    renderWithStoreAndRouter(
      <ButtonGroup 
        onClickFirst={onClickFirst}
        onClickSecond={onClickSecond}
        disabled = {false}
      />
    )

    userEvent.click(screen.getByTestId(/first/i))
    userEvent.click(screen.getByTestId(/second/i))

    expect(onClickFirst).toHaveBeenCalled()
    expect(onClickSecond).toHaveBeenCalled()
  })

  test("test disabled", () => {
    const onClickFirst = jest.fn()
    const onClickSecond = jest.fn()

    renderWithStoreAndRouter(
      <ButtonGroup 
        onClickFirst={onClickFirst}
        onClickSecond={onClickSecond}
        disabled={true}
      />
    )

    const button1 = screen.getByTestId(/first/i)
    const button2 = screen.getByTestId(/second/i)
    
    userEvent.click(button1)
    userEvent.click(button2)

    expect(onClickFirst).not.toHaveBeenCalled()
    expect(onClickSecond).not.toHaveBeenCalled()

  })
})