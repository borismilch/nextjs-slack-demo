import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { getByTestId, screen } from "@testing-library/react";
import { AnswearHeader } from "..";
import '@testing-library/jest-dom/extend-expect';

import { fakeRooms } from 'mocks'

describe("<AnswearHeader />", () => {
  test("rooms render", () => {
    renderWithStoreAndRouter(<AnswearHeader room={fakeRooms[0]}  />)

    expect(screen.getByText(/some room/i)).toBeInTheDocument()
  })
})