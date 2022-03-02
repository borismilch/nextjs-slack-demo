import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { DumbChat } from '..'
import { fakeRooms } from 'mocks'

describe("<Chat /> component", () => {
  test("loading true", () => {
    renderWithStoreAndRouter(
      <DumbChat loading={true} room={fakeRooms[0]} />
    )

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(screen.queryByTestId("form")).not.toBeInTheDocument()
  })

  test("loading false", () => {
    renderWithStoreAndRouter(
      <DumbChat loading={false} room={fakeRooms[0]} />
    )

    expect(screen.getByTestId("form")).toBeInTheDocument()
  })
})