import { renderWithStoreAndRouter, userEvent } from "utils/testing"; 
import { DropList } from '..'
import { screen } from '@testing-library/react'
import { fakeDropItems } from 'mocks'

describe("<DropList />", () => {
  test("onClose call", () => {
    const onClose = jest.fn()
    renderWithStoreAndRouter(
      <DropList 
        dropItems={[]} 
        onClose={onClose}
      />
    )

    userEvent.click(screen.getByTestId('droplist'))

    expect(onClose).toHaveBeenCalled()
  })

  test("dropItem", () => {
    const onClose = jest.fn()
    renderWithStoreAndRouter(
      <DropList 
        dropItems={fakeDropItems} 
        onClose={onClose}
      />
    )

    userEvent.click(screen.getByTestId('droplist'))
    expect(onClose).toHaveBeenCalled()

    expect(screen.getAllByText(/text/i)).toHaveLength(2)
    userEvent.click(screen.getAllByText(/text/i)[0])

    expect(onClose).toBeCalledTimes(2)

  })
})