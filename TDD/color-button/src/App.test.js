import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('색 변경 버튼이 잘 작동하는가?', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'change to blue!' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });


  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('change to red!');

});
