import { fakeDocuments, fakeFiles, fakeImages, fakeImage } from 'mocks'
import { fakeDocument } from 'mocks/fakeDocuments'
import { fakeFile } from 'mocks/fakeFiles'
import { default as mediaReducer, MediaSliceActions, initialState } from '../media.slice'

const mockState: typeof initialState = {
  canUpload: true,
  documents: fakeDocuments,
  fileInputRef: null,
  files: fakeFiles,
  images: fakeImages,
  isDocuments: true,
  isVideo: true
}

describe("media slice reducer", () => {
  test("change can upload", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.changeCanUpload(true)
    ).canUpload).toBeTruthy()

    expect(mediaReducer(
      initialState, MediaSliceActions.changeCanUpload(false)
    ).canUpload).toBeFalsy()
  })

  test("add image actions", () => {
    expect(mediaReducer(
      mockState, MediaSliceActions.addImage("some url")
    ).canUpload).toBeFalsy()

    expect(mediaReducer(
      mockState, MediaSliceActions.addImage("some url")
    ).images).toHaveLength(3)
  })

  test ("remove image test", () => {
    expect(mediaReducer(
      mockState, MediaSliceActions.removeImage(1)
    ).images).toHaveLength(1)
  })
  
  test ("cleanImages action", () => {
    expect(mediaReducer(
      mockState, MediaSliceActions.cleanImages()
    ).images).toEqual([])
  })

  test ("addFile action", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.addFile(fakeFile)
    ).files).toEqual([fakeFile])
  })

  test ("startVideoInsert action", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.startVideoInsert()
    ).isVideo).toBeTruthy()
  })

  
  test ("startDocunentInsert action", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.startDocumentInsert()
    ).isDocuments).toBeTruthy()
  })

  test ("cleardocuments actions", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.cleanDocuments()
    ).documents).toEqual([])
  })

  test ("add Document actions", () => {
    expect(mediaReducer(
      initialState, MediaSliceActions.addDocument(fakeDocument)
    ).documents).toEqual([fakeDocument])
  })

  test ("cleanAllAfterSend action", () => {
    expect(mediaReducer(
      mockState, MediaSliceActions.cleanAllAferSend()
    ).documents).toEqual([])

    expect(mediaReducer(
      mockState, MediaSliceActions.cleanAllAferSend()
    ).images).toEqual([])

    expect(mediaReducer(
      mockState, MediaSliceActions.cleanAllAferSend()
    ).isDocuments).toBeFalsy()

    expect(mediaReducer(
      mockState, MediaSliceActions.cleanAllAferSend()
    ).isVideo).toBeFalsy()
  })

})