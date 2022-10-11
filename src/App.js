import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statics from './components/Statics/Statics';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },

        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },

    {
      path: '/statics',
      element: <Statics></Statics>
    },

    {
      path: '*',
      element: <div>this route is not found : 404</div>
    }



  ])


  return (
    <div className="App">

      <RouterProvider router={router}  ></RouterProvider>

    </div>
  );
}

export default App;
