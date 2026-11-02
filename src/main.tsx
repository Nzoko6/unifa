import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Departements from './pages/Departements.tsx';
import Teacher from './pages/Teacher.tsx';
import AddEvent from './pages/AddEvent.tsx';
import Propos from './pages/Propos.tsx';
import Login from './pages/Login.tsx';
import  { Toaster } from "react-hot-toast"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Faculté from './pages/faculté.tsx';



const queryClient = new QueryClient();

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>
    },
    {
      path:"/departements",
      element:<Departements/>
    },
    {
      path:"/teacher",
      element:<Teacher/>
    },
    {
      path:"/propos",
      element:<Propos/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/AddEvent",
      element:<AddEvent/>
    },
    {
      path:"/dep",
      element:<Faculté/>
    }
  ]
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Toaster position='top-center'/>
    <RouterProvider router={Router}></RouterProvider>
  </QueryClientProvider>
  </StrictMode>,
)
