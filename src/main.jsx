import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login/index.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import UserList from "./pages/user/user-list/index.jsx";
import UserForm from "./pages/user/user-form/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user/list",
        element: <UserList />,
      },
      {
        path: "user/form",
        element: <UserForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
