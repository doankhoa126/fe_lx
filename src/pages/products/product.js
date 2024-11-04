import React, { useState } from "react";
import { Box, Button, Typography, Dialog } from "@mui/material";
import AddProduct from "./addProduct";
import TableProduct from "../../components/table";

const ProductPage = () => {
  const [open, setOpen] = useState(false);

  const handleAddProduct = () => {
    setOpen(true); // Mở form khi nhấn nút "Thêm sản phẩm"
  };

  const handleClose = () => {
    setOpen(false); // Đóng form
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: "auto", paddingBottom: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Thêm sản phẩm mới
      </Typography>
      
      <Box sx={{ display: "flex", justifyContent: "flex-end", pt: '20px', pb: '10px' }}>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Danh sách sản phẩm
        </Button>
      </Box>

      <Box sx={{ pt: '20px' }}>
        <TableProduct />
      </Box>

      {/* Dialog để hiển thị form AddProduct */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <AddProduct onClose={handleClose} />
      </Dialog>
    </Box>
  );
};

export default ProductPage;
