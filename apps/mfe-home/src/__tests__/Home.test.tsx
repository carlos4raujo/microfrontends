import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../Home'

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('🏠 Home MFE')
  })

  it('renders the description mentioning mfe-home', () => {
    render(<Home />)
    expect(screen.getByText(/mfe-home/i)).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })
})
