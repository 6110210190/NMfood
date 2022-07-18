import React from 'react';
import ReactDOM from 'react-dom/client';
import FormOrder from './components/FormOrder'
import  SuccessOrder  from './components/SuccessOrder';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderManagement from './components/OrderManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<OrderManagement />} />
      <Route path="FormOrder" element={<FormOrder />} />
      <Route path="SuccessOrder" element={<SuccessOrder />} />
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
