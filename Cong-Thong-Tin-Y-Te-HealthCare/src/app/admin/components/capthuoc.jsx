import React, { useState } from 'react';

const TreatmentPlan = ({ benhnhan, drugData, drugError, handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [drugData, setDrugData] = useState([]);
    const [drugError, setDrugError] = useState(null);
    // Sắp sếp bệnh nhân
  const handleSearch = async () => {
    if (!searchQuery.trim()) return setDrugError('Vui lòng nhập tên thuốc');

    try {
        const response = await fetch('http://localhost:3000/benhnhan/search-drug', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ten_duoc_pham: searchQuery }),
        });

        const data = await response.json();
        if (!response.ok || !data.length) {
            setDrugError('Không tìm thấy thuốc nào');
            return setDrugData([]);
        }

        setDrugData(data);
        setDrugError(null);
    } catch (error) {
        setDrugError(error.message);
        setDrugData([]);
    }
};

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
    <div class="tab-pane" id="lssudungthuoc">
                                            <div className="treatment-plan">
                                                <div className="container mt-5">
                                                    <div className="row">
                                                        {/* Cột bên trái để trống */}
                                                        <div className="col-md-6 mb-4">
                                                            <h4 className="mb-3">Kê Thuốc</h4>
                                                            <div className="p-4 border rounded shadow-sm">
                                                                <ul
                                                                    className="list-unstyled"
                                                                    style={{
                                                                        paddingLeft: 0,
                                                                        marginBottom: 0,
                                                                        maxHeight: '350px',
                                                                        overflowY: 'auto',

                                                                        borderRadius: '4px',
                                                                        paddingRight: '5px',
                                                                    }}
                                                                >
                                                                    {/* Mỗi li trong danh sách */}
                                                                    <li
                                                                        style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            alignItems: 'center',
                                                                            padding: '10px 0',
                                                                            borderBottom: '1px solid #ddd',
                                                                        }}
                                                                    >
                                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                            {/* Tên sản phẩm */}
                                                                            <span style={{ marginRight: '10px', fontSize: '16px' }}>Thuốc 1</span>
                                                                        </div>

                                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                                                                <input
                                                                                    name="ten_duoc_pham"
                                                                                    type="number"
                                                                                    min="1"
                                                                                    max="10"
                                                                                    value={1}
                                                                                    style={{
                                                                                        width: '50px',
                                                                                        textAlign: 'center',
                                                                                        border: '1px solid #ddd',
                                                                                        borderRadius: '4px',
                                                                                        padding: '5px',
                                                                                        outline: 'none',
                                                                                        fontSize: '16px',
                                                                                    }}
                                                                                />{' '}
                                                                                <span>/ Ngày</span>
                                                                            </div>
                                                                            {/* Icon xóa */}
                                                                            <button
                                                                                style={{
                                                                                    border: 'none',
                                                                                    background: 'transparent',
                                                                                    fontSize: '25px',
                                                                                    outline: 'none',
                                                                                    color: '#dc3545',
                                                                                    cursor: 'pointer',
                                                                                    transition: 'transform 0.3s ease',
                                                                                }}
                                                                                onClick={() => alert('Xóa sản phẩm')}
                                                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                                            >
                                                                                <i className="fa-solid fa-circle-xmark"></i>
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                    <li
                                                                        style={{
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            alignItems: 'center',
                                                                            padding: '10px 0',
                                                                            borderBottom: '1px solid #ddd',
                                                                        }}
                                                                    >
                                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                            {/* Tên sản phẩm */}
                                                                            <span style={{ marginRight: '10px', fontSize: '16px' }}>Thuốc 2</span>
                                                                        </div>

                                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                                                                                <input
                                                                                    name="ten_duoc_pham"
                                                                                    type="number"
                                                                                    min="1"
                                                                                    max="10"
                                                                                    value={1}
                                                                                    style={{
                                                                                        width: '50px',
                                                                                        textAlign: 'center',
                                                                                        border: '1px solid #ddd',
                                                                                        borderRadius: '4px',
                                                                                        padding: '5px',
                                                                                        outline: 'none',
                                                                                        fontSize: '16px',
                                                                                    }}
                                                                                />{' '}
                                                                                <span>/ Ngày</span>
                                                                            </div>
                                                                            {/* Icon xóa */}
                                                                            <button
                                                                                style={{
                                                                                    border: 'none',
                                                                                    background: 'transparent',
                                                                                    fontSize: '25px',
                                                                                    outline: 'none',
                                                                                    color: '#dc3545',
                                                                                    cursor: 'pointer',
                                                                                    transition: 'transform 0.3s ease',
                                                                                }}
                                                                                onClick={() => alert('Xóa sản phẩm')}
                                                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                                            >
                                                                                <i className="fa-solid fa-circle-xmark"></i>
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                </ul>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-6 mb-4">
                                                            <h4 className="mb-3">Tìm Thuốc</h4>
                                                            <div className="p-4 border rounded shadow-sm">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Nhập tên thuốc"
                                                                    value={searchQuery}
                                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                                />
                                                                <button
                                                                    className="btn btn-primary mt-3 w-100"
                                                                    onClick={handleSearch}
                                                                    style={{
                                                                        background: 'linear-gradient(to right, #007bff, #00d2ff)',
                                                                        border: 'none',
                                                                        outline: 'none',
                                                                        color: '#fff',
                                                                        padding: '10px 15px',
                                                                        fontSize: '16px',
                                                                        fontWeight: 'bold',
                                                                        cursor: 'pointer',
                                                                        transition: 'background 0.8s ease, transform 0.8s ease', // Thêm transition cho background và transform
                                                                    }}
                                                                    onMouseEnter={(e) => {
                                                                        e.target.style.background = 'linear-gradient(to right, #00d2ff, #007bff)';
                                                                        e.target.style.transform = 'scale(1.05)'; // Tạo hiệu ứng phóng to khi hover
                                                                    }}
                                                                    onMouseLeave={(e) => {
                                                                        e.target.style.background = 'linear-gradient(to right, #007bff, #00d2ff)';
                                                                        e.target.style.transform = 'scale(1)'; // Quay lại kích thước ban đầu
                                                                    }}
                                                                >
                                                                    Tìm kiếm
                                                                </button>




                                                                <h5 className="mt-4">Thông tin thuốc</h5>
                                                                {drugError ? (
                                                                    <p className="text-danger">{drugError}</p>
                                                                ) : drugData.length > 0 ? (
                                                                    <ul
                                                                        className="list-unstyled"
                                                                        style={{
                                                                            paddingLeft: 0,
                                                                            marginBottom: 0,
                                                                            maxHeight: '250px',
                                                                            overflowY: 'auto',
                                                                            border: '1px solid #ddd',
                                                                            borderRadius: '4px',
                                                                        }}
                                                                    >
                                                                        {drugData.map((drug) => (
                                                                            <li
                                                                                key={drug.id}
                                                                                style={{
                                                                                    borderBottom: '1px solid #ddd',
                                                                                    padding: '8px 10px',
                                                                                    fontSize: '16px',
                                                                                    color: '#333',
                                                                                    display: 'flex',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    cursor: 'pointer',
                                                                                    transition: 'background-color 0.3s ease',
                                                                                }}
                                                                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f9f9f9'}
                                                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                                                            >
                                                                                {drug.ten_duoc_pham}
                                                                                <a
                                                                                    href="#"
                                                                                    style={{
                                                                                        color: '#007bff', // Màu sắc của biểu tượng
                                                                                        fontSize: '18px',  // Kích thước biểu tượng
                                                                                        textDecoration: 'none', // Loại bỏ gạch chân
                                                                                        marginLeft: '10px',  // Khoảng cách giữa tên thuốc và biểu tượng
                                                                                    }}
                                                                                >
                                                                                    <i className="fa-solid fa-circle-plus"></i>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <p>Chưa có kết quả tìm kiếm</p>
                                                                )}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="mt-3 mb-3">Lịch Sử Sử Dụng Thuốc</h6>

                                                <table className="table table-bordered table-striped billing-history">
                                                    <thead className="sr-only">
                                                        <tr>
                                                            <th>Chi tiết</th>
                                                            <th>Thông tin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Dược phẩm ID <span className="invoice-number">#{benhnhan.id_duoc_pham}</span></h5>
                                                                <span className="text-muted">Ngày sử dụng: {new Date(benhnhan.ngay_su_dung).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.lieu_luong}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Dược phẩm ID <span className="invoice-number">#{benhnhan.id_duoc_pham}</span></h5>
                                                                <span className="text-muted">Ngày sử dụng: {new Date(benhnhan.ngay_su_dung).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">
                                                                {new Date(benhnhan.ngay_su_dung).toLocaleDateString("vi-VN", {
                                                                    year: "numeric",
                                                                    month: "2-digit",
                                                                    day: "2-digit",
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Ghi chú</h5>
                                                                <span className="text-muted">{benhnhan.ghi_chu}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.ghi_chu}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <button
                                                        style={{
                                                            cursor: 'pointer',
                                                            outline: 'none',
                                                            padding: '10px 25px',
                                                            background: 'linear-gradient(45deg, #4CAF50, #81C784)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            fontSize: '16px',
                                                            fontWeight: '500',
                                                            margin: '10px',
                                                            transition: 'all 0.8s ease-in-out',
                                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                                        }}
                                                        onMouseOver={(e) => {
                                                            e.target.style.background = 'linear-gradient(45deg, #81C784, #4CAF50)';
                                                            e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
                                                        }}
                                                        onMouseOut={(e) => {
                                                            e.target.style.background = 'linear-gradient(45deg, #4CAF50, #81C784)';
                                                            e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                                                        }}
                                                    >
                                                        Cập Nhật
                                                    </button>

                                                </div>

                                            </div>


                                        </div>
                                        
                                        </>
  )};