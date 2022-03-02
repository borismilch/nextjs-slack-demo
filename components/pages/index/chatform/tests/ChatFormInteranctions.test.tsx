import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { ChatFormInteranctions } from '..'

describe("<ChatFormActions />", () => {
  test("change value call", () => {
    const changeValueSpy = jest.fn()

    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        changeValue={changeValueSpy}
      />
    )
    
    const emojies = screen.getAllByTestId("emoji")

    emojies.forEach(emoji => {
      userEvent.click(emoji)
    })

    expect(changeValueSpy).toHaveBeenCalledTimes(5)
  })

  test("change addressat call", () => {
    const addAdressatSpy = jest.fn()

    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        addAdressat={addAdressatSpy}
      />
    )
    const icons = screen.getAllByTestId("app_icon")

    icons.forEach(icon => {
      userEvent.click(icon)
    })

    expect(addAdressatSpy).toHaveBeenCalledTimes(1)
  })

  test("send message call", () => {
    const sendMessageSpy = jest.fn()

    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        sendMessage={sendMessageSpy}
      />
    )
    const sendButton = screen.getByTestId('first')
    userEvent.click(sendButton)

    expect(sendMessageSpy).toHaveBeenCalledTimes(1)
  })

  test("undisabled buttons", () => {
    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        isButtonDisabled={false}
      />
    )
    
    expect(screen.getByTestId('first')).not.toBeDisabled()
    expect(screen.getByTestId('second')).not.toBeDisabled()
  })

  test("disabled buttons", () => {
    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        isButtonDisabled={true}
      />
    )
    
    expect(screen.getByTestId('first')).toBeDisabled()
    expect(screen.getByTestId('second')).toBeDisabled()
  })

  test("disabled buttons", () => {
    const changeValueSpy = jest.fn()
    renderWithStoreAndRouter(
      <ChatFormInteranctions  
        currentValue="some value"
        changeValue={changeValueSpy}
      />
    )
    const emojies = screen.getAllByTestId("emoji")

    userEvent.click(emojies[0])
    
    expect(changeValueSpy).toHaveBeenCalledWith("some value✌")
  })
})