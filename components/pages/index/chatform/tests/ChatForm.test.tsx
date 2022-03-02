import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import ChatForm from '../ChatForm'
import '@testing-library/jest-dom/extend-expect';
import { MessageService } from 'services'
import { fakeFiles, fakeImages, fakeDocuments } from "mocks";

describe("<ChatForm /> component", () => {
  test("Add adressat call", () => {
    const spy = jest.spyOn(MessageService, "addAdressat")

    renderWithStoreAndRouter(<ChatForm  />)

    const icons = screen.getAllByTestId("app_icon")

    icons.forEach(icon => (
      userEvent.click(icon)
    ))

    expect(spy).toHaveBeenCalled()
  })

  test("Typing in form", () => {
    renderWithStoreAndRouter(<ChatForm  />)

    userEvent.type(screen.getByPlaceholderText(/send a message/i), 'some value')

    expect(screen.getByDisplayValue('some value')).toBeInTheDocument()
  })

  test("Typing in form and disabling button", () => {
    renderWithStoreAndRouter(<ChatForm  />)

    expect(screen.getByTestId("first")).toBeDisabled()
    expect(screen.getByTestId("second")).toBeDisabled()

    userEvent.type(screen.getByPlaceholderText(/send a message/i), 'some value')

    expect(screen.getByTestId("first")).not.toBeDisabled()
    expect(screen.getByTestId("second")).not.toBeDisabled()

    expect(screen.getByDisplayValue('some value')).toBeInTheDocument()
  })

  test("has images < files in the store", () => {
    renderWithStoreAndRouter(
    <ChatForm  />, { media: { images: [], files: fakeFiles, documents: [] } })

    expect(screen.getByTestId("first")).toBeDisabled()
    expect(screen.getByTestId("second")).toBeDisabled()
    expect(screen.queryByPlaceholderText(/send a message/i)).not.toBeInTheDocument()
  })

  test("has images === files in the store", () => {
    renderWithStoreAndRouter(
    <ChatForm  />, { media: { images: fakeImages, files: fakeFiles, documents: [] } })

    expect(screen.getByTestId("first")).not.toBeDisabled()
    expect(screen.getByTestId("second")).not.toBeDisabled()
    expect(screen.queryByPlaceholderText(/send a message/i)).not.toBeInTheDocument()
  })

  test("has documents < files in the store", () => {
    renderWithStoreAndRouter(
    <ChatForm  />, { media: { images: [], files: fakeFiles, documents: [fakeDocuments[0]] }})

    expect(screen.getByTestId("first")).toBeDisabled()
    expect(screen.getByTestId("second")).toBeDisabled()
    expect(screen.queryByPlaceholderText(/send a message/i)).not.toBeInTheDocument()
  })

  test("has documents === files in the store", () => {
    renderWithStoreAndRouter(
    <ChatForm  />, { media: { images: [], files: fakeFiles, documents: fakeDocuments }})

    expect(screen.getByTestId("first")).toBeDisabled()
    expect(screen.getByTestId("second")).toBeDisabled()
    expect(screen.queryByPlaceholderText(/send a message/i)).not.toBeInTheDocument()
  })
})