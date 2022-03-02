import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { HeaderSearch } from '../'  
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe("header search", () => {
  test("typing in form", () => {
    renderWithStoreAndRouter(<HeaderSearch  />) 

    userEvent.type(screen.getByTestId('search'), 'some value')

    expect(screen.getByDisplayValue("some value")).toBeInTheDocument()

  })
})