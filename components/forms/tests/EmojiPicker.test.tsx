import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from '@testing-library/react'
import { EmojiPicker } from '..'

describe ("<EmojiPicker /> component", () => {
  test("emojies count", () => {

    const changeValue = jest.fn()
    
    renderWithStoreAndRouter(
    <EmojiPicker  
      changeValue={changeValue} 
      emojies={'dddd'.split('')}  
    />)

    expect(screen.getAllByText('d')).toHaveLength(4)
  })

  test("emojies count", () => {

    const changeValue = jest.fn()
    
    renderWithStoreAndRouter(
    <EmojiPicker  
      changeValue={changeValue} 
      emojies={'dddd'.split('')}  
    />)

    const items = screen.getAllByText('d')

    expect(items).toHaveLength(4)

    userEvent.click(items[0])
    userEvent.click(items[1])
    userEvent.click(items[2])
    userEvent.click(items[3])

    expect(changeValue).toBeCalledTimes(4)

  })
})