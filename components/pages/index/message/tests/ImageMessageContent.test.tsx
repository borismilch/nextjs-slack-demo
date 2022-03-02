import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeImages } from 'mocks'
import { fakeImageMessage } from 'mocks/fakeMessage'
import ImageMessageContent from '../content/ImageMessageContent'

import { GallerySliceActions } from "redux/actions";

const moreImages = fakeImages.concat(fakeImages, fakeImages)

describe("<ImageMessageContent /> Component", () => {
  test("trigger store events", () => {
    const setImages = jest.spyOn(GallerySliceActions, "setImages")
    const setCurrentImage = jest.spyOn(GallerySliceActions, "setCurrentImage")
    renderWithStoreAndRouter(
      <ImageMessageContent  message={fakeImageMessage} />
    )

    const images = screen.getAllByTestId("message_image")

    images.forEach(item => {
      userEvent.click(item)
    })

    expect(setImages).toHaveBeenCalledTimes(2)
    expect(setCurrentImage).toHaveBeenCalledTimes(2)
  }) 
})