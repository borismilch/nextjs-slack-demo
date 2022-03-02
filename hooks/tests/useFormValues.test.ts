import { renderHook, act } from '@testing-library/react-hooks'
import { useFormValues } from '..' 

import { fakeEventCreator } from 'utils/testing'


const expectedVal = {
  name: "some name",
  surname: "",
  email: "",
}

const emptyState = {
  name: "",
  surname: "",
  email: "",
}

describe('useFormValues hook', () => {
  test("set form values", () => {
    const { result } = renderHook(() => useFormValues(['name', "surname", "email"]))

    act(() => {
      result.current.changeForm(fakeEventCreator("some name", 'name'))
    })

    expect(result.current.form).toEqual(expectedVal)
  })

  test("clean form", () => {
    const { result } = renderHook(() => useFormValues(['name', "surname", "email"]))

    act(() => {
      result.current.changeForm(fakeEventCreator("some name", 'name'))
    })

    expect(result.current.form).toEqual(expectedVal)

    act(() => {
      result.current.cleanForm()
    })

    expect(result.current.form).toEqual(emptyState)
  })
})