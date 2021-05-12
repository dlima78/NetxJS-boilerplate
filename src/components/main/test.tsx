import { render, screen } from '@testing-library/react'

import Main from '@/components/main'

describe('Main Component', () => {
  it('should render the heading', () => {
    render(<Main />)
    const heading = screen.getByRole('heading', { name: /React Avançado/i })
    expect(heading).toBeInTheDocument()
  })
})
