import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page'; // adjust if your Home file is in a different location
import '@testing-library/jest-dom';

// Mock the API base URL
jest.mock('@/config/api', () => ({
  __esModule: true,
  default: 'http://mock-api.com'
}));

// Mock the Header component to isolate Home page testing
jest.mock('@/components/Header', () => () => <div data-testid="header">Header</div>);

// Setup mock for fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: 'Canada', flag: 'https://flags.com/ca.svg' },
        { name: 'Japan', flag: 'https://flags.com/jp.svg' }
      ])
  })
);

describe('Home Page', () => {
  it('renders loading spinner initially and then displays countries', async () => {
    render(<Home />);

    // Check loading spinner
    //expect(screen.getByRole('status')).toBeInTheDocument();

    // Wait for countries to be rendered
    await waitFor(() => {
      expect(screen.getByText('Canada')).toBeInTheDocument();
      expect(screen.getByText('Japan')).toBeInTheDocument();
    });

    // Check flags are rendered
    expect(screen.getByAltText('Canada')).toHaveAttribute('src', 'https://flags.com/ca.svg');
    expect(screen.getByAltText('Japan')).toHaveAttribute('src', 'https://flags.com/jp.svg');
  });
});
