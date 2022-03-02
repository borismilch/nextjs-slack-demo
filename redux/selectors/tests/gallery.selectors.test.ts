import { imagesSelector, selectedImageIndexSelector } from '../gallery.selector'

import { fakeImages} from 'mocks'

describe("gallery selectors", () => {
  test("imagesSelector no state", () => {
    expect(imagesSelector({} as any)).toEqual([])
  })

  test("imagesSelector with state", () => {
    expect(imagesSelector({gallery: {images: fakeImages}}  as any)).toEqual(fakeImages)
  })
  
  test("imagesSelector with state", () => {
    expect(imagesSelector({gallery: {images: []}}  as any)).toEqual([])
  })

  test("selectedImageIndexSelector no state", () => {
    expect(selectedImageIndexSelector({} as any)).toBe(0)
  })

  test("selectedImageIndexSelector with state", () => {
    expect(selectedImageIndexSelector({gallery: {selectedImage: 5}} as any)).toBe(5)
  })
  
  test("selectedImageIndexSelector with state", () => {
    expect(selectedImageIndexSelector({gallery: {selectedImage: 0}} as any)).toBe(0)
  })
  
})