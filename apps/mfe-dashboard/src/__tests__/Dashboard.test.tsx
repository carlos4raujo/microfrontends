import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Dashboard from '../Dashboard'

describe('Dashboard', () => {
  it('renders the heading', () => {
    render(<Dashboard />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('📊 Dashboard MFE')
  })

  it('renders the description mentioning mfe-dashboard', () => {
    render(<Dashboard />)
    expect(screen.getByText(/mfe-dashboard/i)).toBeInTheDocument()
  })

  it('renders the view stats button', () => {
    render(<Dashboard />)
    expect(screen.getByRole('button', { name: /view stats/i })).toBeInTheDocument()
  })
})
