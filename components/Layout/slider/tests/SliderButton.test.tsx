import { renderWithStoreAndRouter, userEvent} from "utils/testing";
import { screen } from "@testing-library/react";
import { SliderButton } from "..";
import '@testing-library/jest-dom/extend-expect';

describe("<SliderButton />", () => {
  test("ONcIck Function", () => {
    const onClick = jest.fn()
    renderWithStoreAndRouter(
      <SliderButton
        isDisabled={false} 
        onClick={onClick} 
      />)

    expect(screen.getByTestId("slider_button")).toBeInTheDocument()

    userEvent.click(screen.getByTestId("slider_button"))

    expect(onClick).toBeCalled()
  })

  test ('match children inside', () => {
    renderWithStoreAndRouter(
      <SliderButton
        isDisabled={false} 
        onClick={() => {}} 
      ><input type="text" data-testid="mock" /></SliderButton>)

    expect(screen.getByTestId("mock"))  
  })
})