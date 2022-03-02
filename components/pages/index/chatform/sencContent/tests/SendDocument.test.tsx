import { renderWithStoreAndRouter } from "utils/testing";
import { screen } from "@testing-library/react";
import { SendDocument } from '..'
import { MediaSliceActions } from 'redux/actions'
import { fakeFiles } from 'mocks'

import '@testing-library/jest-dom/extend-expect';

describe("<SendDocument />", () => {
  test("uploading loading", () => {
    renderWithStoreAndRouter(<SendDocument file={fakeFiles[0]} />)

    expect(screen.getByTestId("overlay")).toBeInTheDocument()
    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })

})