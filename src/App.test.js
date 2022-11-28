import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App GUI', () => {
  it('should render the App component', () => {
    render(<App />);
    expect(screen.getByText('Choose a time')).toBeInTheDocument();
  });

  it('should render the App component with the correct initial value', () => {
    render(<App />);
    expect(screen.getByLabelText('Choose a time')).toHaveValue(
      '2022-12-24T20:59'
    );
  });

  describe('Date input change', () => {
    it('should render the Arriving in Reykjavík in 10 minutes', () => {
      render(<App />);
      const input = screen.getByLabelText('Choose a time');
      fireEvent.change(input, { target: { value: '2022-12-25T02:20' } });
      expect(
        screen.getByText('Arriving in Reykjavík in 10 minutes')
      ).toBeInTheDocument();
    });

    if (
      ('Mexico City',
      () => {
        render(<App />);
        const input = screen.getByLabelText('Choose a time');
        fireEvent.change(input, { target: { value: '2022-12-25T05:00' } });
        expect(
          screen.getByText('Arriving in Mexico City in 30 minutes')
        ).toBeInTheDocument();
      })
    );

    it('should render the Santa has finished his journey for this year :)', () => {
      render(<App />);
      const input = screen.getByLabelText('Choose a time');
      fireEvent.change(input, { target: { value: '2022-12-25T07:50' } });
      expect(
        screen.getByText('Santa has finished his journey for this year :)')
      ).toBeInTheDocument();
    });
  });
});
