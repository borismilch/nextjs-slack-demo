import { default as roomReducer, RoomSliceAction, initialState } from '../room.slice'

const mockState: typeof initialState = {
  roomId: "some id"
}

describe ("roomReducer", () => {
  test("setCurrentRoom action", () => {
    expect(roomReducer(
      initialState, RoomSliceAction.setCurrentRoom('some id')
    ).roomId).toBe('some id')
  })

  test("deleteCurrentRoomId action", () => {
    expect(roomReducer(
      mockState, RoomSliceAction.deleteCurrentRoomId()
      ).roomId).toBe('')
  })
})