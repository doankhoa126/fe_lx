import * as React from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function AddProduct({ onClose }) {
  const [open, setOpen] = React.useState(true);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    onClose(); // Gọi hàm onClose được truyền từ ProductPage
  };

  const handleGenerateQRCode = () => {
    // Logic tạo mã QR cho sản phẩm
    console.log("Tạo mã QR cho sản phẩm");
  };


  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Thêm sản phẩm mới</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="tenSanPham"
          label="Tên sản phẩm"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="categoryName"
          label="Danh mục sản phẩm"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="tonKho"
          label="Tồn kho"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="tongTrongLuong"
          label="Tổng trọng lượng"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="ngayTao"
          label="Ngày tạo"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="ngayXuLy"
          label="Ngày xử lý"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="note"
          label="Ghi chú"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="skuSanPham"
          label="SKU sản phẩm"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="maVach"
          label="Mã vạch"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="giaNiemYet"
          label="Giá niêm yết"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="giaBan"
          label="Giá bán"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="trangThai"
          label="Trạng thái"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="ttKinhDoanh"
          label="TT kinh doanh"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="hoaHong"
          label="Hoa hồng (vnđ)"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="hoaHongPhanTram"
          label="Hoa hồng (%)"
          type="number"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="nguoiTao"
          label="Người tạo"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="nguoiXuLy"
          label="Người xử lý"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="sanPham"
          label="Sản phẩm"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="soNguyenLieu"
          label="Số nguyên liệu"
          type="number"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Hủy
        </Button>
        <Button onClick={handleGenerateQRCode} color="primary">
          Tạo mã QR
        </Button>
        <Box sx={{ my: 2 }}>
          <Button
            variant="contained"
            component="label"
            color="primary"
          >
            Thêm ảnh sản phẩm
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Button>
          {selectedImage && (
            <Box sx={{ mt: 2 }}>
              <img src={selectedImage} alt="Ảnh sản phẩm" width="100%" />
            </Box>
          )}
        </Box>
        <Button onClick={handleClose} color="primary">
          Thêm sản phẩm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
