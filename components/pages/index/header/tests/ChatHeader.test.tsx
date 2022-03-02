import { renderWithStoreAndRouter } from "utils/testing";
import { ChatHeader } from '..'
import { screen } from '@testing-library/react'
import { fakeRooms } from 'mocks'
import '@testing-library/jest-dom/extend-expect';

describe("<ChatHeader />", () => {
  test("display room's content", () => {
    renderWithStoreAndRouter(<ChatHeader room={fakeRooms[0]} />)

    expect(screen.getByText(/some room/i)).toBeInTheDocument()
  })
})