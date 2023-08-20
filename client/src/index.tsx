import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Paths } from './paths';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Editor from './components/editor';


const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home/>
  },
  {
    path: Paths.login,
    element: <Login/>
  },
  {
    path: Paths.status,
    element: <h1>STATUS</h1>
  },
  {
    path: Paths.register,
    element: <Register/>,
  },
  {
    path: Paths.adminEditor,
    element: <Editor/>,
  },
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
