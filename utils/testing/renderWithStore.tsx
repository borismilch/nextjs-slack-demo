import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux/store'

export { default as userEvent } from '@testing-library/user-event'

export function renderWithStoreAndRouter <T extends Record<string, unknown>>(
  Component: ReactElement<any, any>, preloadedState?: T
) {
  const store = createStore(preloadedState || {})
  return render (
    <Provider store={store}>
      {Component}
    </Provider>
  )
}