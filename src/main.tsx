import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import Portifolio from './routes/portifolio'
import ClockD from './routes/port/clockd'
import ClockA from './routes/port/clocka'
import HashGame from './routes/port/hashgame'
import Calc from './routes/port/calc'

const routers = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/portifolio',
        element: <Portifolio />
      },
      {
        path:'/portifolio/clockdigital',
        element: <ClockD />
      },
      {
        path:'/portifolio/clockanalogic',
        element: <ClockA />
      },
      {
        path:'/portifolio/hashgame',
        element: <HashGame />
      },
      {
        path:'/portifolio/calc',
        element: <Calc />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <RouterProvider router={routers} />
)
  