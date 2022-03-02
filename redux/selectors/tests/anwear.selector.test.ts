import {isCommentingSelector, messageIdSelector} from '../answear.selectors'

describe("ansewear selectors", () => {
  test("isCommentingSelector empty state", () => {
    expect(isCommentingSelector({} as any)).toBeFalsy()
  })

  test("isCommentingSelector not empty state", () => {
    expect(isCommentingSelector({answear: {isCommenting: true}} as any)).toBeTruthy()
  })

  test("isCommentingSelector false", () => {
    expect(isCommentingSelector({answear: {isCommenting: false}} as any)).toBeFalsy()
  })

  test("messageIdSelector empty state", () => {
    expect(messageIdSelector({} as any)).toBe('')
  })

  test("isCommentingSelector not empty state", () => {
    expect(messageIdSelector({answear: {messageId: 'some id'}} as any )).toBe("some id")
  })

})