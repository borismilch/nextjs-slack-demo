import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useToggle } from '..'

describe("useToggle hook", () => {
  test("initial value", () => {
    const { result } = renderHook(() => useToggle(true))

    expect(result.current[0]).toBeTruthy()
  })

  test("toggle function", () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => result.current[2]())
    expect(result.current[0]).toBeTruthy()

    act(() => result.current[2]())
    expect(result.current[0]).toBeFalsy()
  })

  
  test("change Value function", () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => result.current[1](true))
    expect(result.current[0]).toBeTruthy()

    act(() => result.current[1](false))
    expect(result.current[0]).toBeFalsy()
  })
})