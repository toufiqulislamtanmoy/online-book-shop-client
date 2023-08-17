import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from './Pages/Provider/AuthProviders';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <div className='overflow-x-hidden'>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,
)
