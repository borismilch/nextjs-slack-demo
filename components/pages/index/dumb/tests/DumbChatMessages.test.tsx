import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { fakeMessages } from 'mocks'
import DumbChatMessages from "../DumbChatMessages";
import { fakeImages } from 'mocks'

describe("<DumbChatMessages />", () => {

  test("no images - no slider ", () => {
    renderWithStoreAndRouter(
      <DumbChatMessages loading={false} messages={fakeMessages} />
    )
    expect(screen.queryByTestId('slider')).not.toBeInTheDocument()
  })

  
  test("have images - have slider ", () => {
    renderWithStoreAndRouter(
      <DumbChatMessages loading={false} messages={fakeMessages} />,
      {gallery: { images: fakeImages }}
    )
    expect(screen.queryByTestId('slider')).toBeInTheDocument()
  })

  
})