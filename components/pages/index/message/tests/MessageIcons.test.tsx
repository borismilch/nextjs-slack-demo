import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeMessage } from 'mocks'
import DumbMessageIcons from '../dumb/DumbMessageIcons'

describe ("<DumbMessageIcons />", () => {
  test("add reaction items trigger", () => {
    const addReaction = jest.fn()
    const commentMessage = jest.fn()

    renderWithStoreAndRouter(
      <DumbMessageIcons 
         addReaction={addReaction}
         commentMessage={commentMessage}
         reactionItems={["d", "a"]}
      />
    )

    const icons = screen.getAllByTestId("app_icon")
    
    icons.forEach(icon => {
      userEvent.click(icon)
    })

    expect(addReaction).toHaveBeenCalledTimes(2)
    expect(commentMessage).toHaveBeenCalled()
  })

  test ("emoji picker toggling", () => {
    renderWithStoreAndRouter(
      <DumbMessageIcons />
    )
    const icons = screen.getAllByTestId("app_icon")

    expect(screen.queryByTestId('emojies')).not.toBeInTheDocument()
    userEvent.click(icons[0])

    expect(screen.getByTestId('emojies')).toBeInTheDocument()
    userEvent.click(icons[0])

    expect(screen.queryByTestId('emojies')).not.toBeInTheDocument()
  })
})