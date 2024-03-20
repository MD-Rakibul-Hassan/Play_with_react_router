import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Contact from './Home/Contect.jsx'
import About from './Home/About.jsx'
import Users from './Users/Users.jsx'
import UserDetails from './Users/UserDetails.jsx'
import ErrorPage from './ErrorPage.jsx'
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement:<ErrorPage/>,
		children:[
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/contact",
				element:<Contact />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/users',
				loader: () => {
					return fetch('https://jsonplaceholder.typicode.com/users')
				},
				element:<Users />
			},
			{
				path: '/user/:userDetails',
				loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userDetails}`),
				element:<UserDetails />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
