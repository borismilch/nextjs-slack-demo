import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeMessages } from 'mocks'
import {DumbMessageAnswears} from '../dumb/'

describe("<MessageAnswears /> component", () => {
  test("ansewars count === 0", () => {
    renderWithStoreAndRouter(
      <DumbMessageAnswears answears={[]} commentMessage={() => {}} />
    )
    expect(screen.queryByTestId("message_answears")).not.toBeInTheDocument()
  })

  test("fansewars count > 0", () => {
    renderWithStoreAndRouter(
      <DumbMessageAnswears answears={fakeMessages} commentMessage={() => {}} />
    )
    expect(screen.getByTestId("message_answears")).toBeInTheDocument()
  })

  test("fansewars count", () => {
    const commentMessage = jest.fn()
    renderWithStoreAndRouter(
      <DumbMessageAnswears answears={fakeMessages} commentMessage={commentMessage} />
    )
    userEvent.click(screen.getByTestId("answear_link"))

    expect(commentMessage).toHaveBeenCalled()
  })
})