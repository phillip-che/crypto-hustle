import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout'
import DetailView from './routes/DetailView';
import NotFound from './routes/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
