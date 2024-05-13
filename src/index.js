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
import { Login } from './pages/LoginPage';
import { PrivateRoute } from './components/HOC/PrivateRoute';
import { Navigate } from "react-router-dom";
import { ArticleManagement } from './pages/ArticleManagement';
import { UISetting } from './pages/ManagerUI/uiSetting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute component={Layout} />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "category", element: <Category /> },
      { path: "post", element: <PostPage /> },
      { path: "user", element: <UserPage /> },
      { path: "baidang", element: <ArticleManagement /> },
      { path: "uiSetting", element: <UISetting /> },
    ]
  },
  {
    path: "/login",
    element: window.localStorage.getItem("token") ? <Navigate to="/" replace={true} /> : <Login />,
  }
], {
  // basename: "/admin-tvdt2"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);