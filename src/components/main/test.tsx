import { render, screen } from '@testing-library/react'

import Main from '@/components/main'

const makeSut = () => {
  return render(<Main />)
}

describe('Main Component', () => {
  it('should render the heading', () => {
    const { container } = makeSut()
    const heading = screen.getByRole('heading', { name: /React Avançado/i })
    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = makeSut()
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
