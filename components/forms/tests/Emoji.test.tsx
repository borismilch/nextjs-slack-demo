import { Emoji } from '..'
import { renderWithStoreAndRouter, userEvent } from 'utils/testing'
import { screen } from '@testing-library/react'

describe("<Emoji /> component", () => {

  test("onClick function trigger", () => {
    const onClick = jest.fn()

    renderWithStoreAndRouter(
      <Emoji onClick={onClick} val="some emoji" />
    )

    userEvent.click(screen.getByTestId('emoji'))

    expect(onClick).toHaveBeenCalled()
  })
})