import { default as galleryReducer, initialState, GallerySliceActions } from '../gallery.slice'
import { fakeImages } from 'mocks'

const mockState: typeof initialState = {
  images: fakeImages,
  selectedImage: 2,
}

describe("gallery reducer", () => {
  test("incrementImage action", () => {
    expect(galleryReducer(initialState, GallerySliceActions.incrementImage()).selectedImage).toBe(0)

    expect(galleryReducer({images: fakeImages, selectedImage: 0 }, GallerySliceActions.incrementImage()).selectedImage).toBe(1)
  })

  test("decrementImage action", () => {
    expect(galleryReducer({selectedImage: 0, images: []} as any, GallerySliceActions.incrementImage()).selectedImage).toBe(0)

    expect(galleryReducer(
      mockState, GallerySliceActions.decrementImage()
    ).selectedImage).toBe(1)
  })

  test("setCurrentImage action", () => {
    expect(galleryReducer(
      initialState, GallerySliceActions.setCurrentImage(2)
    ).selectedImage).toBe(2)

    expect(galleryReducer(
      mockState, GallerySliceActions.setCurrentImage(-1)
    ).selectedImage).toBe(2)
  })

  test("setImages action", () => {
    expect(galleryReducer(
      initialState, GallerySliceActions.setImages(fakeImages)
    ).images).toEqual(fakeImages)
  })

  
  test("clearData action", () => {
    expect(galleryReducer(
      mockState, GallerySliceActions.clearData()
    ).images).toEqual([])
  })
})