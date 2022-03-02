import { roomIdSelector } from '../roomId.selector'

describe ("roomid selector", () => {

  test("filled state", () => {
    expect(roomIdSelector({room: { roomId: "some id" }} as any)).toBe("some id")
  })

  test("filled falsy state", () => {
    expect(roomIdSelector({room: { roomId: "" }} as any)).toBe("")
  })
})