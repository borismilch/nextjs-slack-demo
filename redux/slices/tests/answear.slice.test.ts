import { default as answearReducer, AnswearSliceActions, initialState } from '../answear.slice'

const mockState: typeof initialState = { isCommenting: true, messageId: "some id" }

describe("answearSliceReducer", () => {
  test("comment Message action", () => {
    expect(answearReducer(initialState, AnswearSliceActions.commentMessage("some id")).messageId).toBe("some id")
    expect(answearReducer(initialState, AnswearSliceActions.commentMessage("some id")).isCommenting).toBeTruthy()
  })

  test("clean message action", () => {
    expect(answearReducer(mockState, AnswearSliceActions.cleanMesageComment()).messageId).toBe("")
    expect(answearReducer(mockState, AnswearSliceActions.cleanMesageComment()).isCommenting).toBeFalsy()
  })
})