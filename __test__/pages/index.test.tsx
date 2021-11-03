import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />)

		const heading = await waitFor(() => screen.getByRole('heading', {
      name: 'Next.js v5-beta with TypeScript example',
		}))

    expect(heading).toBeInTheDocument()
  })
})
