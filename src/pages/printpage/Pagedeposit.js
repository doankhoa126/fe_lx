import React, { useState, useEffect } from 'react';
import bieutuong from './imgLocalPage/bieutuong.png';
import footer from './imgLocalPage/footer2.png';
import header from './imgLocalPage//header2.png';

const DepositDocument = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [productCode, setProductCode] = useState('');
    const [specification, setSpecification] = useState('');
    const [size, setSize] = useState('');
    const [productValue, setProductValue] = useState('');
    const [mainStoneCode, setMainStoneCode] = useState('');
    const [mainStoneSpecification, setMainStoneSpecification] = useState('');
    const [certification, setCertification] = useState('');
    const [mainStoneValue, setMainStoneValue] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [deposit, setDeposit] = useState('');
    const [remainingBalance, setRemainingBalance] = useState('');
    const [productImage, setProductImage] = useState(null);

    const [title, setTitle] = useState('GIẤY ĐẶT CỌC');
    const [currentDate, setCurrentDate] = useState('');

    const [sizeValues, setSizeValues] = useState(['', '', '']);
    const [valueValues, setValueValues] = useState(['', '', '']);
    const [specificationValues, setSpecificationValues] = useState(['', '', '']);

    const [specification1, setSpecification1] = useState('');
    const [specification2, setSpecification2] = useState('');


    const handleSizeChange = (index, value) => {
        const newValues = [...sizeValues];
        newValues[index] = value;
        setSizeValues(newValues);
    };

    const handleValueChange = (index, value) => {
        const newValues = [...valueValues];
        newValues[index] = value;
        setValueValues(newValues);
    };

    const handleSpecificationChange = (index, value) => {
        const newValues = [...specificationValues];
        newValues[index] = value;
        setSpecificationValues(newValues);
    };

    useEffect(() => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JS bắt đầu từ 0
        const year = today.getFullYear();
        setCurrentDate(`TP. HCM, Ngày ${day} Tháng ${month} Năm ${year}`);
    }, []);

    const handleDateChange = (e) => {
        setCurrentDate(e.target.value);
    };


    const containerStyle = {
        width: '297mm',
        height: '210mm',
        margin: '0 auto',
        padding: '10mm',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
        fontSize: '9pt', // Reduce base font size
    };
    const headerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '5mm',  // Giảm khoảng cách phía dưới để tiết kiệm không gian
        padding: '2mm',       // Giảm padding để tránh lấn vào phần tiêu đề
        background: `url(${header}) no-repeat center center`,
        backgroundSize: 'cover',
        color: '#D4AF37',
    };

    const titleStyle = {
        textAlign: 'center',
        color: '#D4AF37',
        fontSize: '2.3em',
        border: 'none',
        background: 'none',
        width: '100%',
        fontWeight: 'bold',
        marginTop: '1px',
        marginBottom: '1px'
    };

    const inputStyle = {
        borderBottom: '1px dotted #999',
        border: 'none',
        width: '100%',
        height: '32px',
        backgroundColor: '#F8F8FF',
        padding: '2px',
        fontSize: '18px',
        marginBottom: '3px',
    };
    const inputStyle2 = {
        borderBottom: '1px dotted #999',
        border: 'none',
        width: '80%',
        height: '27px',
        backgroundColor: '#F8F8FF',
        padding: '2px',
        fontSize: '16px',
        marginBottom: '3px',
    };
    const inputStyle3 = {
        borderBottom: '1px dotted #999',
        border: 'none',
        width: '100%',
        height: '27px',
        backgroundColor: '#F8F8FF',
        padding: '2px',
        fontSize: '16px',
        marginBottom: '3px',
    };
    const sectionHeaderStyle = {
        background: 'linear-gradient(to right, #D4AF37, #FFE5B4)',
        color: '#000',
        padding: '4px',
        marginBottom: '5px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '1.1em',
    };
    const contentStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        height: 'calc(100% - 70mm)', // Account for header and footer
        padding: '5mm',
    };

    const sectionStyle = {
        padding: '5px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const handleImageUpload = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleImageUpload(event.dataTransfer.files[0]);
            event.dataTransfer.clearData();
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div id="depositDocument" style={{ margin: '0 auto', fontFamily: '"EB Garamond", serif', background: '#000', color: '#333', paddingRight: '0.5mm', paddingLeft: '4mm', paddingTop: '0.5mm', paddingBottom: '0.5mm', boxSizing: 'border-box', width: '390mm', }}>
            <div className="header" style={{ background: `url(${header}) no-repeat center center`, backgroundSize: 'cover', color: '#D4AF37', padding: '5mm 5mm', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
                <div className="company-info" style={{ textAlign: 'center', paddingRight: '8vw' }}>
                    <h3 style={{ margin: 0, fontSize: '1.7em', fontWeight: 'bold' }}>CÔNG TY TNHH TÂM LUXURY</h3>
                    <p style={{ margin: '5px 0', fontSize: '1.3em' }}>CHUYÊN KIM CƯƠNG THIÊN NHIÊN</p>
                    <p style={{ margin: '5px 0', fontSize: '1.1em', paddingTop: '25px' }}>714 - 716 TRẦN HƯNG ĐẠO, PHƯỜNG 2, QUẬN 5, TP.HCM</p>
                </div>
                <div className="logo" style={{ textAlign: 'center' }}>
                    {/* Logo section */}
                </div>
                <div className="contact-info" style={{ textAlign: 'left', paddingLeft: '16vw' }}>
                    <p style={{ margin: '5px 0', fontSize: '1.3em', textAlign: 'center' }}>THÔNG TIN LIÊN HỆ</p>
                    <p style={{ margin: '5px 0', fontSize: '0.88em' }}>WEBSITE: Tamluxury.com - Tamluxury.vn</p>
                    <p style={{ margin: '5px 0', fontSize: '0.88em' }}>FACEBOOK: Trần Lê Văn Tâm ( Tâm Luxury )</p>
                    <p style={{ margin: '5px 0', fontSize: '0.88em' }}>FANPAGE: Tâm Luxury - Diamond & Jewelry - Kim cương thiên nhiên giá tốt</p>
                    <p style={{ margin: '5px 0', fontSize: '0.88em' }}>YOUTUBE: Tâm Luxury</p>
                </div>
            </div>

            <div className="content" style={{ background: 'white', margin: '0 auto', maxWidth: '100%', height: '100%', fontSize: '1.2em', paddingTop: '10px' }}>
                {/* <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    style={titleStyle}
    <
/> */}
                <h1 style={titleStyle}>GIẤY ĐẢM BẢO</h1>
                {/* Nếu có các thành phần khác trong header, bạn có thể thêm vào đây */}

                <div style={{ textAlign: 'center' }}>
                    <img src={bieutuong} alt="Biểu tượng" style={{ width: '250px', height: 'auto' }} />
                </div>
                <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', paddingLeft: '10px' }}>
                    {/* Customer Information Section */}
                    <div>
                        <div className="section-header" style={sectionHeaderStyle}>THÔNG TIN KHÁCH HÀNG</div>
                        <div className="form-group" style={{ marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '220px', fontSize: '0.9em' }}>TÊN KHÁCH HÀNG:</label>
                            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={inputStyle2} />
                        </div>
                        <div className="form-group" style={{ marginBottom: '10px', fontSize: '0.9em' }}>
                            <label style={{ display: 'inline-block', width: '220px' }}>SĐT KHÁCH HÀNG:</label>
                            <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={inputStyle2} />
                        </div>

                        {/* Warranty Terms Section */}
                        <div className="section-header" style={sectionHeaderStyle}>CHẾ ĐỘ THU ĐỔI - BẢO HÀNH</div>
                        <div className="warranty-terms" style={{ margin: '2px 0' }}>
                            <h4 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>CHẾ ĐỘ THU ĐỔI</h4>
                            <div className="form-group">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <strong>VỎ TRANG SỨC</strong>
                                        <div>Thu lại: <input type="text" onChange={(e) => { }} style={inputStyle} /></div>
                                        <div>Đổi lớn: <input type="text" onChange={(e) => { }} style={inputStyle} /></div>
                                    </div>
                                    <div>
                                        <strong>KIM CƯƠNG CHỦ</strong>
                                        <div>Thu lại: <input type="text" onChange={(e) => { }} style={inputStyle} /></div>
                                        <div>Đổi lớn: <input type="text" onChange={(e) => { }} style={inputStyle} /></div>
                                    </div>
                                </div>
                            </div>

                            <h4 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>CHẾ ĐỘ BẢO HÀNH</h4>
                            <p style={{ margin: '0' }}>
                                - Bảo hành rơi rớt kim cương dưới 3mm (với điều kiện chấu hột không bị biến dạng do tác động bên ngoài).
                            </p>
                            <p style={{ margin: '0' }}> {/* Loại bỏ margin ở thẻ thứ hai */}
                                - Hỗ trợ làm mới, làm sạch, làm bóng vĩnh viễn thời gian sử dụng.
                            </p>
                            <p style={{ margin: '0' }}> {/* Loại bỏ margin ở thẻ thứ ba */}
                                Vui lòng liên hệ người bán trực tiếp để được tư vấn trong suốt quá trình sử dụng và thu đổi sản phẩm.
                            </p>

                        </div>
                    </div>

                    {/* Product Information Section */}
                    <div>
                        <div className="section-header" style={sectionHeaderStyle}>THÔNG TIN SẢN PHẨM</div>
                        <h3 style={{ textAlign: 'center' }}> VỎ TRANG SỨC</h3>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>MÃ SẢN PHẨM:</label>
                            <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} style={inputStyle2} />
                        </div>

                        <div>




                            <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>THÔNG SỐ:</label>
                                <input type="text" value={specification} onChange={(e) => setSpecification(e.target.value)} style={inputStyle2} />
                            </div>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input type="text" value={specification1} onChange={(e) => setSpecification1(e.target.value)} placeholder="" style={inputStyle3} />
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input type="text" value={specification2} onChange={(e) => setSpecification2(e.target.value)} placeholder="" style={inputStyle3} />
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px' ,fontSize: '0.9em' }}>SIZE (Ni Tay):</label>
                            <input type="text" value={size} onChange={(e) => setSize(e.target.value)} style={inputStyle2} />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>GIÁ TRỊ:</label>
                            <input type="text" value={productValue} onChange={(e) => setProductValue(e.target.value)} style={inputStyle2} />
                        </div>

                        <h3 style={{ textAlign: 'center' }}>VIÊN CHỦ</h3>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>MÃ VIÊN CHỦ:</label>
                            <input type="text" value={mainStoneCode} onChange={(e) => setMainStoneCode(e.target.value)} style={inputStyle2} />
                        </div>

                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px' ,fontSize: '0.9em' }}>KIỂM ĐỊNH:</label>
                            <input type="text" value={certification} onChange={(e) => setCertification(e.target.value)} style={inputStyle2} />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px' ,fontSize: '0.9em' }}>GIÁ TRỊ:</label>
                            <input type="text" value={mainStoneValue} onChange={(e) => setMainStoneValue(e.target.value)} style={inputStyle2} />
                        </div>

                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>TỔNG GIÁ TRỊ:</label>
                            <input type="text" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} style={inputStyle2} />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>CỌC TRƯỚC:</label>
                            <input type="text" value={deposit} onChange={(e) => setDeposit(e.target.value)} style={inputStyle2} />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label style={{ display: 'inline-block', width: '160px',fontSize: '0.9em'  }}>CÒN LẠI:</label>
                            <input type="text" value={remainingBalance} onChange={(e) => setRemainingBalance(e.target.value)} style={inputStyle2} />
                        </div>

                    </div>

                    {/* Product Image Section */}
                    <div>
                        <div className="section-header" style={sectionHeaderStyle}>HÌNH ẢNH SẢN PHẨM</div>
                        <div
                            style={{
                                textAlign: 'center',
                                border: '0px dashed #999',
                                padding: '15px',
                                position: 'relative',
                                cursor: 'pointer',
                                minHeight: '250px',
                                width: '100%',
                                height: '450px',
                                overflow: 'hidden',
                                margin: '0 auto'
                            }}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {productImage ? (
                                <img
                                    src={productImage}
                                    alt="Product Image"
                                    style={{
                                        width: '100%',
                                        height: '42vh',
                                        objectFit: 'contain',
                                        border: 'none'
                                    }}
                                />
                            ) : (
                                <>
                                    <p>Kéo và thả ảnh vào đây hoặc chọn để tải lên</p>
                                    <div style={{ marginTop: '12px' }}>
                                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} />
                                    </div>
                                </>
                            )}
                        </div>

                        <div style={{ marginTop: '20px', textAlign: 'center' }}> {/* Giảm marginTop ở đây */}
                            <div className="signature" style={{ marginTop: '-70px' }}> {/* Di chuyển signature lên 80px */}
                                <div style={{ textAlign: 'center' }}>
                                    <p
                                        contentEditable="true"
                                        onInput={(e) => setCurrentDate(e.target.innerText)}
                                        style={{
                                            border: 'none',
                                            textAlign: 'center',
                                            fontSize: '1em',
                                            width: '100%',
                                            backgroundColor: 'transparent',
                                            padding: '5px',
                                            display: 'inline-block',
                                        }}
                                    >
                                        {currentDate}
                                    </p>
                                </div>
                                <p style={{ textAlign: 'center', fontSize: '1em', margin: 0 }}>CHỮ KÝ XÁC NHẬN</p>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '65px' }}>
                                <p style={{ textAlign: 'center', fontSize: '1em', margin: 0 }}>GĐ. TRẦN LÊ VĂN TÂM</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div style={{
                background: `url(${footer}) no-repeat center center`,
                backgroundSize: 'cover',
                color: '#D4AF37',
                alignItems: 'center',
                width: '100%',
                height: '100px',
            }}>



            </div>
        </div>
    );
};

export default DepositDocument;
