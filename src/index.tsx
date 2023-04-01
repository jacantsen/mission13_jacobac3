import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import PodcastPage from './pages/PodcastPage'
import MovieList from './pages/Movies';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"podcasts",
    element:<PodcastPage/>
  },
  {
    path:"movies",
    element:<MovieList/>
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


