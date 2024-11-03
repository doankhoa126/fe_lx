import React, { useState } from 'react';
import { Container, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import WarrantyDocument from './Pageguarantee'; // Đảm bảo rằng đường dẫn chính xác
import DepositDocument from './Pagedeposit'; // Giả định bạn có một component cho Giấy Cọc
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import trang2 from './imgLocalPage/trang2.jpg'; // Đường dẫn tới hình ảnh trang 2

const PrintPage = () => {
    const [formData, setFormData] = useState({
        tenKhachHang: '',
        sdtKhachHang: '',
        maSanPham: '',
        thongSo: '',
        size: '',
        giaTri: '',
        maVienChu: '',
        kiemDinh: '',
        tongGiaTriBangChu: '',
    });
    
    const [selectedDocument, setSelectedDocument] = useState('warranty'); // State to handle document selection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleDocumentChange = (event) => {
        setSelectedDocument(event.target.value); // Update selected document
    };

    const handleExportPDF = () => {
        const input = document.getElementById(selectedDocument === 'warranty' ? 'warrantyDocument' : 'depositDocument'); // Adjust to get the correct document

        // Bước 1: Xuất trang đầu tiên (WarrantyDocument)
        html2canvas(input, {
            scale: 2, // Tăng độ phân giải
            useCORS: true, // Cho phép sử dụng hình ảnh cross-origin
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4',
            });

            const pageWidth = 297;
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * pageWidth) / canvas.width;

            // Thêm hình ảnh của trang 1 vào PDF
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Bước 2: Thêm trang thứ hai (trang2.jpg)
            const img = new Image();
            img.src = trang2; // Sử dụng biến đã import
            img.onload = () => {
                pdf.addPage(); // Thêm trang mới
                pdf.addImage(img.src, 'JPEG', 0, 0, pageWidth, 210); // Đảm bảo kích thước phù hợp với A4

                // Lưu PDF
                pdf.save('warranty_document.pdf');
            };
        });
    };

    return (
        <Container style={{paddingRight:'20px'}}>
            <Typography
                variant="h3"
                gutterBottom
                style={{
                    paddingBottom: "30px",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}
            >
                Thông Tin Giấy Cọc và Giấy Đảm Bảo
                <Button variant="contained" color="primary" onClick={handleExportPDF}>
                    Xuất PDF
                </Button>
            </Typography>

            <FormControl style={{ marginBottom: '40px' }}>
                <InputLabel>Chọn loại giấy</InputLabel>
                <Select value={selectedDocument} onChange={handleDocumentChange}>
                    <MenuItem value="warranty">Giấy Đảm Bảo</MenuItem>
                    <MenuItem value="deposit">Giấy Cọc</MenuItem>
                </Select>
            </FormControl>

            {selectedDocument === 'warranty' ? (
                <WarrantyDocument
                    customerName={formData.tenKhachHang}
                    customerPhone={formData.sdtKhachHang}
                    productCode={formData.maSanPham}
                    specification={formData.thongSo}
                    size={formData.size}
                    productValue={formData.giaTri}
                    mainStoneCode={formData.maVienChu}
                    mainStoneSpecification={formData.thongSo}
                    certification={formData.kiemDinh}
                    mainStoneValue={formData.giaTri}
                    totalValue={formData.tongGiaTriBangChu}
                    valueInWords={formData.tongGiaTriBangChu}
                />
            ) : (
                <DepositDocument
                    customerName={formData.tenKhachHang}
                    customerPhone={formData.sdtKhachHang}
                    productCode={formData.maSanPham}
                    specification={formData.thongSo}
                    size={formData.size}
                    productValue={formData.giaTri}
                    mainStoneCode={formData.maVienChu}
                    mainStoneSpecification={formData.thongSo}
                    certification={formData.kiemDinh}
                    mainStoneValue={formData.giaTri}
                    totalValue={formData.tongGiaTriBangChu}
                    valueInWords={formData.tongGiaTriBangChu}
                />
            )}
        </Container>
    );
};

export default PrintPage;
