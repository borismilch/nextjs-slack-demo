import { renderWithStoreAndRouter, userEvent } from 'utils/testing'
import { screen } from '@testing-library/react'
import { AnswearBody } from '..'
import { fakeAnswears, fakeMessage } from 'mocks'

describe("<AnswearBody /> component", () => {
  test("test answears", () => {
    renderWithStoreAndRouter(
      <AnswearBody 
        answears={fakeAnswears} 
        message={fakeMessage} 
      />)

    expect(screen.getAllByTestId("message_item")).toHaveLength(3)  
  })
})