/* eslint-disable  react/react-in-jsx-scope*/

import { render, screen } from '@testing-library/react'
import App from './App'

test('render-link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
