import { renderWithStoreAndRouter } from "utils/testing";
import { SendVideo } from '../'
import { screen } from "@testing-library/react";
import { fakeFile } from 'mocks/fakeFiles'
import '@testing-library/jest-dom/extend-expect';


describe("<SendVideo />", () => {
  test("<SendVideo /> compoenent loading", () => {
    renderWithStoreAndRouter(<SendVideo file={fakeFile} />)

    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })
})