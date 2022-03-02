import { renderWithStoreAndRouter, userEvent } from "utils/testing";
import { screen } from '@testing-library/react'
import { ChatLinksHeader } from ".."; 
import { fakeLink, fakeLinks } from 'mocks'

import { LinksService, WindowService } from 'services'

describe("<ChatLinksHeader /> component", () => {
  test("add link service empty urls", () => {
    const spy = jest.spyOn(LinksService, "addLink")
    renderWithStoreAndRouter(<ChatLinksHeader urls={[]} />)

    expect(screen.getAllByTestId("app_icon")).toHaveLength(1)

    userEvent.click(screen.getByTestId("app_icon"))

    expect(spy).toHaveBeenCalled()
  })

  test("add link service", () => {
    const spy = jest.spyOn(WindowService, "goOutside")
    renderWithStoreAndRouter(<ChatLinksHeader urls={fakeLinks} />)
    expect(screen.getAllByTestId("app_icon")).toHaveLength(3)
    
    userEvent.click(screen.getAllByTestId("app_icon")[0])
    userEvent.click(screen.getAllByTestId("app_icon")[1])
    userEvent.click(screen.getAllByTestId("app_icon")[2])

    expect(spy).toHaveBeenCalledTimes(2)

  })
})