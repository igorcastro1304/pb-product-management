import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ProductList from '../pages/product/product-list';

const server = setupServer(
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          { id: 1, title: 'Produto 1', images: ['url1'], price: 100, description: 'desc1' },
          { id: 2, title: 'Produto 2', images: ['url2'], price: 200, description: 'desc2' },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('shows spinner while loading and products after loading', async () => {
  render(<ProductList />);
  
  expect(screen.getByRole('status')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });
});