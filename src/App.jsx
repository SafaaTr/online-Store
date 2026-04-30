
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/login'
import Register from './pages/register'
import Shop from './pages/Shop'
import Electronics from './pages/Electronics'
import MensClothing from './pages/MensClothing'
import WomensClothing from './pages/WomensClothing'
import Aboutpage from './pages/Aboutpage'
import Contact from './pages/Contact'
import CartPage from './pages/CartPage'
import Categories from './pages/Categories'
import Jewelery from './pages/Jewelery'
import ProductDetails from './pages/ProductDetails'

function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"shop",
          element:<Shop/>,
        },
        {
          path:"categories",
          element:<Categories/>,
          children:[
            {
              path:"electronics",
              element:<Electronics/>,
            },
            {
              path:"jewelery",
              element:<Jewelery/>,
            },
            {
              path:"mensclothing",
              element:<MensClothing/>,
            },
            {
              path:"womensclothing",
              element: <WomensClothing/>,
            },
           
          ]
        },
        {
          path:"about",
          element:<Aboutpage/>,
        },
        {
          path:"contact",
          element:<Contact/>,
        },
        {
          path:"cart",
          element:<CartPage/>,
        },
        {
          path:"auth",
          element:<Auth/>,
          children:[
            {
              index:true,
              element:<Register/>
            },
            {
              path:"signin",
              element:<Login/>
            }

          ]
        },
        {
          path:`Product/:id`,
          element:<ProductDetails/>,
        },
        
      ]
    }

  ])


  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  )
}

export default App
