import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import store from './redux/store';
import "./index.css"
import { DashboardPage } from './pages/DashboardPage';
import { Category } from './pages/Category';
import { PostPage } from './pages/PostPage';
import { UserPage } from './pages/UserPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "category", element: <Category /> },
      { path: "post", element: <PostPage /> },
      { path: "user", element: <UserPage /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);