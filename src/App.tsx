// NPM Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Custom Modules
import { LoginPage, PortalPage, RegisterPage } from 'pages';

export default class App extends React.Component {
  public router = createBrowserRouter([
    {
      path: '/',
      element: <PortalPage />
    },
    {
      path: '/forgot-password',
      element: <LoginPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    }
  ]);
  render() {
    return (
      <div className="App">
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
