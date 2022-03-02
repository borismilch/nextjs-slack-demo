import { 
  canUploadSelector, 
  documentsSelector, 
  filesSelector, 
  imagesSelector, 
  isDocumentsSelector, 
  isVideoSelector 
} from '../media.selectors'

import { fakeDocuments, fakeFiles, fakeImages } from 'mocks'

describe("media selector collections", () => {
  test("imagesSelector", () => {
    expect(filesSelector({} as any)).toEqual([])
  })
  
  test("imagesSelector filled state", () => {
    expect(imagesSelector({media: { images: fakeImages }} as any )).toEqual(fakeImages)
  })

  test("imagesSelector filled falsy state", () => {
    expect(imagesSelector({media: { images: [] }} as any )).toEqual([])
  })

  test("filesSelector", () => {
    expect(filesSelector({} as any)).toEqual([])
  })
  
  test("filesSelector filled state", () => {
    expect(filesSelector({media: { files: fakeFiles }} as any )).toEqual(fakeFiles)
  })

  test("filesSelector filled falsy state", () => {
    expect(filesSelector({media: { files: [] }} as any )).toEqual([])
  })

  test("documentsSelector", () => {
    expect(documentsSelector({} as any)).toEqual([])
  })
  
  test("documentsSelector filled state", () => {
    expect(documentsSelector({media: { documents: fakeDocuments }} as any )).toEqual(fakeDocuments)
  })

  test("documentsSelector filled falsy state", () => {
    expect(documentsSelector({media: { documents: [] }} as any )).toEqual([])
  })
})

describe("medial selectors booleans", () => {
  test("isVideo filled falsy state", () => {
    expect(isVideoSelector({} as any )).toBeFalsy()
  })

  test("isVideo filled state", () => {
    expect(isVideoSelector({media: { isVideo: true }} as any)).toBeTruthy()
  })
  
  test("isVideo filled falsy state", () => {
    expect(isVideoSelector({media: { isVideo: false }} as any )).toBeFalsy()
  })

  test("isDocuments filled falsy state", () => {
    expect(isDocumentsSelector({} as any )).toBeFalsy()
  })

  test("isDocuments filled state", () => {
    expect(isDocumentsSelector({media: { isDocuments: true }} as any)).toBeTruthy()
  })
  
  test("isDocuments filled falsy state", () => {
    expect(isDocumentsSelector({media: { isDocuments: false }} as any )).toBeFalsy()
  })

  test("canUpload filled falsy state", () => {
    expect(canUploadSelector({} as any )).toBeFalsy()
  })

  test("canUpload filled state", () => {
    expect(canUploadSelector({media: { canUpload: true }} as any)).toBeTruthy()
  })
  
  test("canUpload filled falsy state", () => {
    expect(canUploadSelector({media: { canUpload: false }} as any )).toBeFalsy()
  })
})