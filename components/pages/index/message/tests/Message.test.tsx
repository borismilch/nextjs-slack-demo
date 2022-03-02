import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeMessage } from 'mocks'
import Message from '../Message'

import { fakeImageMessage, fakeVideomessage, fakeDocumentMessage } from 'mocks/fakeMessage'

describe("<Message /> compoenent", () => {
  test("empty message component", () => {
    renderWithStoreAndRouter(
      <Message message={fakeMessage}  />
    )

    expect(screen.getByTestId("message_toolbar")).toBeInTheDocument()
    expect(screen.queryByTestId("message_answears")).not.toBeInTheDocument()
  })

  test("isAnswear true", () => {
    renderWithStoreAndRouter(
      <Message message={fakeMessage} isAnswear={true} />
    )

    expect(screen.queryByTestId("message_toolbar")).not.toBeInTheDocument()
    expect(screen.queryByTestId("message_answears")).not.toBeInTheDocument()
  })

  test("message.role === text", () => {
    renderWithStoreAndRouter(
      <Message message={fakeMessage} isAnswear={true} />
    )

    expect(screen.getByTestId("text_message")).toBeInTheDocument()

  })

  test("message.role === video", () => {
    renderWithStoreAndRouter(
      <Message message={fakeVideomessage} isAnswear={true} />
    )

    expect(screen.getByTestId("video_message")).toBeInTheDocument()
    expect(screen.queryByTestId("text_message")).not.toBeInTheDocument()

  })

  test("message.role === image", () => {
    renderWithStoreAndRouter(
      <Message message={fakeImageMessage} isAnswear={true} />
    )

    expect(screen.getByTestId("image_message")).toBeInTheDocument()
    expect(screen.queryByTestId("text_message")).not.toBeInTheDocument()

  })

  test("message.role === document", () => {
    renderWithStoreAndRouter(
      <Message message={fakeDocumentMessage} isAnswear={true} />
    )

    expect(screen.getByTestId("document_message")).toBeInTheDocument()

    expect(screen.queryByTestId("text_message")).not.toBeInTheDocument()

  })

})