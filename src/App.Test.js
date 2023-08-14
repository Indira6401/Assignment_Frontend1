import { render, screen } from '@testing-library/react';
import App from './App'

describe('App component', () => {
  test('renders userData if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: '1', name: 'Leanne Graham', email: 'Sincere@april.biz'}],
    });
    render(<App />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});