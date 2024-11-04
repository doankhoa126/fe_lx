// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from '../components/drawer'; // Đảm bảo đường dẫn chính xác
import PrintPage from '../pages/printpage/Printpage';
import ProductPage from '../pages/products/product';
import ManageEmployee from '../pages/employees/manageEmployee';
import LoginForm from '../pages/login/login';
const AppRoutes = () => {
  return (
    <ResponsiveDrawer>
      <Routes>
        <Route path="/printpage" element={<PrintPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/manage-employee" element={<ManageEmployee />} />
        <Route path="/login" element ={<LoginForm/>}/>

        {/* Bạn có thể thêm các route khác tại đây */}
        {/* <Route path="/anotherPage" element={<AnotherPage />} /> */}
      </Routes>
    </ResponsiveDrawer>
  );
};

export default AppRoutes;
