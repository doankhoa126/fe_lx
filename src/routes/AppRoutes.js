// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from '../components/drawer'; // Đảm bảo đường dẫn chính xác
import PrintPage from '../pages/printpage/Printpage';
const AppRoutes = () => {
  return (
    <ResponsiveDrawer>
      <Routes>
        <Route path="/printpage" element={<PrintPage />} />
        {/* Bạn có thể thêm các route khác tại đây */}
        {/* <Route path="/anotherPage" element={<AnotherPage />} /> */}
      </Routes>
    </ResponsiveDrawer>
  );
};

export default AppRoutes;
