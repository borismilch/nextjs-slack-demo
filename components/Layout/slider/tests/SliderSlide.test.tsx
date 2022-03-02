import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { SliderSlide } from "..";
import { screen } from "@testing-library/react";
import { fakeImages } from 'mocks'
import '@testing-library/jest-dom/extend-expect';


describe ("<SliderSlide /> component", () => {
  test("slides behaiwor", () => {
    renderWithStoreAndRouter(
      <SliderSlide idx={1} item={fakeImages[0]} />,
    )

    expect(screen.getByTestId("slider_image")).toHaveClass("absolute")
    expect(screen.getByTestId("slider_image")).toHaveStyle('opacity:0')

    expect(screen.getByTestId("slider_image")).toBeInTheDocument()
  })

  test("styling on active", () => {
    renderWithStoreAndRouter(
      <SliderSlide idx={2} item={fakeImages[0]} />,
      {gallery: { selectedImage: 2 }}
    )

    expect(screen.getByTestId("slider_image")).toBeInTheDocument()
    expect(screen.getByTestId("slider_image")).toHaveClass("relative")
    expect(screen.getByTestId("slider_image")).toHaveStyle('opacity:1')

    screen.debug()
  })
})