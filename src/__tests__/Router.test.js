import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login';
import Dashboard from '../pages/dashboard';

const routes = [
  { path: '/', element: <App /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/dashboard', element: <Dashboard /> },
];

test('renders login page on /login', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/login'],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('renders dashboard page on /dashboard', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/dashboard'],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText('Dashboard')).toBeInTheDocument();
});