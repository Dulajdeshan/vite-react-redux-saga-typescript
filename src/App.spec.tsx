import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';

import { store } from './redux/store';
import App from './App';

test('renders Vite + React text', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Vite \+ React/i);
  expect(linkElement).toBeDefined();
});
