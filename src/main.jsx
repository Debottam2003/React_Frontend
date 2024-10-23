import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './complete.jsx'
import Hero from './hero.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Signup from './signup.jsx';
import Login from './login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
const router = createBrowserRouter([
  {path:'/',
    element:<App />,
    children:[
      {path:'',element:<Hero />},
      {path:'about',element:<About />},
      {path:'contact',element:<Contact />}
    ]
  },
  {
    path:'/signup',
    element: <Signup />
  },
  {
    path:'/login',
    element: <Login />
  }
]);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <RouterProvider router={router}></RouterProvider>
  
)
