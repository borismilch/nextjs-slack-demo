import { useInputValue } from '..'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

describe("useInputValeHook", () => {
  test("initial value", () => {
    const { result } = renderHook(() => useInputValue('some initial value'))

    expect(result.current[0]).toBe('some initial value')
  })

  test("changeValue function", () => {
    const { result } = renderHook(() => useInputValue(''))

    act(() => {
      result.current[3]('some value')
    })

    expect(result.current[0]).toBe('some value')
  })

  test("cleanValue function", () => {
    const { result } = renderHook(() => useInputValue('some value'))

    act(() => {
      result.current[2]()
    })

    expect(result.current[0]).toBe('')
  })
})