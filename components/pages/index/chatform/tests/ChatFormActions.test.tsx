import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from '@testing-library/react'
import { ChatFormActions } from '..'
import { MediaSliceActions } from 'redux/actions'

describe("<ChatFormActions", () => {
  test("test all callbacks", () => {
    const cb1 = jest.fn()
    const cb2 = jest.fn()
    const cb3 = jest.fn()
    const cb4 = jest.fn()

    renderWithStoreAndRouter(
      <ChatFormActions cb1={cb1} cb2={cb2} cb3={cb3} cb4={cb4} />
    )

    const icons = screen.getAllByTestId("app_icon")

    icons.forEach(icon => (
      userEvent.click(icon)
    ))

    expect(cb1).toHaveBeenCalled()
    expect(cb2).toHaveBeenCalled()
    expect(cb3).toHaveBeenCalled()
    expect(cb4).toHaveBeenCalled()
  })

  
  test("test whith no callbacks", () => {
    renderWithStoreAndRouter(
      <ChatFormActions 
      
      />
    )
    const icons = screen.getAllByTestId("app_icon")

    icons.forEach(icon => (
      userEvent.click(icon)
    ))
  }) 

  test("test whith no callbacks", () => {

    const spy1 = jest.spyOn(MediaSliceActions, "startVideoInsert")
    const spy2 = jest.spyOn(MediaSliceActions, "startDocumentInsert")

    renderWithStoreAndRouter(
      <ChatFormActions 
      />
    )
    const handlers = screen.getAllByTestId("handler")

    handlers.forEach(handler => (
      userEvent.click(handler)
    ))

    expect(spy1).toHaveBeenCalled()
    expect(spy2).toHaveBeenCalled()

  }) 
})