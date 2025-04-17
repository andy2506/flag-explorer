import { render, screen, waitFor } from '@testing-library/react';
import CountryDetail from '../app/country/[name]/page'; // Adjust path as needed
import '@testing-library/jest-dom';

// Mock API base URL
jest.mock('@/config/api', () => ({
  __esModule: true,
  default: 'http://mock-api.com',
}));

// Mock Header component
jest.mock('@/components/Header', () => () => <div data-testid="header">Header</div>);

// Mock useParams
jest.mock('next/navigation', () => ({
  useParams: () => ({ name: 'Canada' }),
}));

// Global fetch mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'Canada',
        flag: 'https://flags.com/ca.svg',
        capital: 'Ottawa',
        population: 38000000,
      }),
  })
);

describe('CountryDetail Page', () => {
  it('displays loading spinner then shows country details', async () => {
    render(<CountryDetail />);

    // Spinner appears first
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Canada')).toBeInTheDocument();
      expect(screen.getByText(/Ottawa/)).toBeInTheDocument();
      expect(screen.getByText(/38,000,000/)).toBeInTheDocument();
      expect(screen.getByAltText('Canada')).toHaveAttribute('src', 'https://flags.com/ca.svg');
    });
  });
});
