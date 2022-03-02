import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { SendImage } from "..";
import { screen } from '@testing-library/react'
import { fakeFile } from 'mocks/fakeFiles'
import '@testing-library/jest-dom/extend-expect';

describe("<SendImage /> component", () => {
  test("loading started", () => {
    renderWithStoreAndRouter(<SendImage file={fakeFile} idx={2} />)

    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })

})