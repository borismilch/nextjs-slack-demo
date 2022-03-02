import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeReactions } from 'mocks'
import MessageReactions from '../MessageReactions'

describe("<MessageReactions /> component", () => {
  test("Count of items", () => {
    renderWithStoreAndRouter(
      <MessageReactions reactions={fakeReactions} />
    )
    const reactions = screen.getAllByTestId("reaction")

    expect(reactions).toHaveLength(2)
  })
})