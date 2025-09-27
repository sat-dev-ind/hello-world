import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders input field and submit button', () => {
    render(<App />);
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('allows entering text in the input field', () => {
    render(<App />);
    const input = screen.getByTestId('name-input');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });

  test('displays greeting after form submission', () => {
    render(<App />);
    const input = screen.getByTestId('name-input');
    const button = screen.getByTestId('submit-button');
    
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(button);
    
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello John');
  });
});
