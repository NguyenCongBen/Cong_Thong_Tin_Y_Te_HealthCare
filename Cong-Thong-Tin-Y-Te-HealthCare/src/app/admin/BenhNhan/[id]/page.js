"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function BenhNhanDetail({ params }) {
    const [benhnhan, setBenhNhan] = useState(null);
    const [cssk, setchisosuckhoe] = useState(null);
    const [ttbl, setTtbl] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("latest");
    const [editingItem, setEditingItem] = useState(null);
    // show form thêm bệnh lý
    const [showForm, setShowForm] = useState(false);
    const [chandoan, setChandoan] = useState('');
    const [phuongphap, setPhuongphap] = useState('');
    const [ngaykham, setNgaykham] = useState('');
    const [idBenhNhan, setIdBenhNhan] = useState('');
    // Tìm kiếm thuốc
    const [searchQuery, setSearchQuery] = useState('');
    const [drugData, setDrugData] = useState([]);
    const [drugError, setDrugError] = useState(null);
    // Sắp sếp bệnh nhân
    const [sortOrder, setSortOrder] = useState('newest');
    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'newest' ? 'oldest' : 'newest'));
    };

    const [selectedIndices, setSelectedIndices] = useState([]);
    const { data, error } = useSWR(`http://localhost:3000/benhnhan/${params.id}`, fetcher);
    const { data: ttngay, error: ttngayError } = useSWR(`http://localhost:3000/benhnhan/ttngay/${params.id}`, fetcher);
    const { data: ttbenhly, error: ttbenhlyError } = useSWR(`http://localhost:3000/benhnhan/ttbenhly/${params.id}`, fetcher);

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
    const handleEdit = (item) => {
        setEditingItem(item);  // Mở form sửa và gán dữ liệu ban đầu
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const newCondition = {
            cham_doan: chandoan,
            phuong_phap_dieu_tri: phuongphap,
            ngay_kham: ngaykham,
            id_benh_nhan: idBenhNhan || params.id, // Use `params.id` if `id_benh_nhan` is not provided
        };

        try {
            const response = await fetch('http://localhost:3000/benhnhan/add-benh-ly', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCondition),
            });

            if (!response.ok) {
                throw new Error('Có lỗi xảy ra khi thêm bệnh lý');
            }

            const data = await response.json();
            alert('Bệnh lý đã được thêm thành công');
            console.log(data);

            // Reset the form fields after successful submission
            setChandoan('');
            setPhuongphap('');
            setNgaykham('');
            setIdBenhNhan('');
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    };
    useEffect(() => {
        if (data) {
            setBenhNhan(data);
        }
        if (ttngay) {
            setchisosuckhoe(ttngay);
        }
        if (ttbenhly) {
            setTtbl(ttbenhly);
        }
    }, [data, ttngay, ttbenhly]);

    if (error || ttngayError || ttngayError) {
        return <strong>Lỗi khi tải thông tin bệnh nhân</strong>;
    }

    if (!benhnhan) {
        return <div className="loader">Đang tải...</div>;
    }
    const toggleDateSelection = (index) => {
        if (selectedIndices.includes(index)) {
            setSelectedIndices(selectedIndices.filter((i) => i !== index));
        } else {
            setSelectedIndices([...selectedIndices, index]);
        }
    };
    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc muốn xóa bệnh lý này?')) {
            try {
                const response = await fetch(`http://localhost:3000/benhnhan/delete-benh-ly/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Lỗi khi xóa bệnh lý');
                }

                // Optionally, remove the deleted item from the UI manually
                setTtbl((prevData) => prevData.filter((item) => item.id_benh_ly !== id));

                alert('Bệnh lý đã được xóa');
            } catch (error) {
                console.error('Error deleting medical condition:', error);
                alert('Có lỗi xảy ra khi xóa bệnh lý');
            }
        }
    };

    const handleSaveEdit = async () => {
        const { cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan } = editingItem;
        try {
            const response = await fetch(`http://localhost:3000/benhnhan/update-benh-ly/${editingItem.id_benh_ly}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan }),
            });

            if (!response.ok) {
                throw new Error('Lỗi khi cập nhật thông tin');
            }

            const data = await response.json();
            alert('Bệnh lý đã được sửa thành công');

            // Cập nhật lại dữ liệu trong UI sau khi sửa
            setTtbl((prevData) => prevData.map((item) =>
                item.id_benh_ly === editingItem.id_benh_ly ? data.data : item
            ));
            setEditingItem(null);  // Đóng form sửa
        } catch (error) {
            console.error('Error updating medical condition:', error);
            alert('Có lỗi xảy ra khi sửa bệnh lý');
        }
    };

    return (
        <>
            <div id="main-content" className="profilepage_1">
                <div className="container-fluid">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Hồ sơ bệnh nhân</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                                    <li className="breadcrumb-item">Bệnh nhân</li>
                                    <li className="breadcrumb-item active">Hồ sơ bệnh nhân</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card member-card">
                                <div className="header l-coral">
                                    <h4 className="m-t-10 text-light">{benhnhan.ten}</h4>
                                </div>
                                <div className="member-img">
                                    <a href="patient-invoice.html">
                                        <img src="/images/sm/avatar2.jpg" className="rounded-circle" alt="hình đại diện" />
                                    </a>
                                </div>
                                <div className="body">
                                    <div className="col-12">
                                        <ul className="social-links list-unstyled">
                                            <li><a title="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a title="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a title="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <strong>Nghề nghiệp</strong>
                                    <p>Development</p>
                                    <strong>Nghề nghiệp</strong>
                                    <p>Development</p>
                                    <strong>Email</strong>
                                    <p>{benhnhan.email}</p>
                                    <hr />
                                    <strong>Địa chỉ</strong>
                                    <address>{benhnhan.dia_chi}</address>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2>Báo cáo tổng quát</h2>
                                </div>
                                <div className="body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Huyết áp</div>
                                                <small>Số liệu : <b>{benhnhan.huyet_ap}</b></small>
                                            </div>

                                            <div className="progress m-b-20">

                                                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.nhip_tim}%` }}   > <span className="sr-only">40% Hoàn thành (thành công)</span> </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Nhịp tim</div>
                                                <small>Số liệu : <b>{benhnhan.nhip_tim}</b></small>
                                            </div>

                                            <div className="progress m-b-20">
                                                <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.nhip_tim}%` }}> <span className="sr-only">20% Hoàn thành</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Hemoglobin</div>
                                                <small>Số liệu : <b>{benhnhan.bmi}</b></small>
                                            </div>

                                            <div className="progress m-b-20">
                                                <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.bmi}%` }}> <span className="sr-only">60% Hoàn thành (cảnh báo)</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Đường huyết</div>
                                                <small>Số liệu : <b>{benhnhan.duong_huyet}</b></small>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.duong_huyet}%` }}> <span className="sr-only">80% Hoàn thành (nguy hiểm)</span> </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="nav nav-tabs-new2">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#activity">Hoạt động</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ttbenhly">Thông tin Bệnh Lý</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#lssudungthuoc">Cấp Thuốc</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#kehoachdieutri">Kế Hoạch Điều Trị</a></li>

                                    </ul>
                                    <div className="tab-content mt-3">

                                        <div className="tab-pane active" id="activity">
                                            <p><strong>Hồ sơ bệnh nhân:</strong> Đây là thông tin y tế và chi tiết khám bệnh của bệnh nhân <strong>{benhnhan.ten}</strong>.</p>

                                            <div className="timeline-item green">
                                                <span className="date">Thông tin cá nhân</span>
                                                <div className="msg">
                                                    <p><strong>Họ tên:</strong> {benhnhan.ten}</p>
                                                    <p><strong>Ngày sinh:</strong> {new Date(benhnhan.ngay_sinh).toLocaleDateString()}</p>
                                                    <p><strong>Giới tính:</strong> {benhnhan.gioi_tinh}</p>
                                                    <p><strong>Địa chỉ:</strong> {benhnhan.dia_chi}</p>
                                                    <p><strong>Số điện thoại:</strong> {benhnhan.so_dien_thoai}</p>
                                                    <p><strong>Email:</strong> {benhnhan.email}</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item green">
                                                <span className="date">Thông Tin Chỉ Số sức Khỏe</span>
                                                <div className="msg" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                    {Array.isArray(cssk) && cssk.length > 0 ? (
                                                        cssk
                                                            .sort((a, b) => new Date(b.ngay) - new Date(a.ngay))
                                                            .map((e, index) => (
                                                                <div key={index} style={{ width: "auto" }}>
                                                                    <button
                                                                        style={{
                                                                            cursor: 'pointer',
                                                                            outline: 'none',
                                                                            padding: '10px 15px',
                                                                            background: 'linear-gradient(45deg, #4CAF50, #81C784)',
                                                                            color: 'white',
                                                                            border: 'none',
                                                                            borderRadius: '5px',
                                                                            fontSize: '16px',
                                                                            fontWeight: 'bold',
                                                                            margin: '10px',
                                                                            transition: 'background-color 0.5s ease',
                                                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                                                        }}
                                                                        onClick={() => toggleDateSelection(index)}
                                                                    >
                                                                        {new Date(e.ngay).toLocaleDateString("vi-VN", {
                                                                            year: "numeric",
                                                                            month: "long",
                                                                            day: "numeric",
                                                                        })}
                                                                    </button>

                                                                    {/* Bảng thông tin với hiệu ứng mở */}
                                                                    <div
                                                                        style={{
                                                                            overflow: 'hidden',
                                                                            maxHeight: selectedIndices.includes(index) ? '1000px' : '0',
                                                                            opacity: selectedIndices.includes(index) ? 1 : 0,
                                                                            transition: 'max-height 0.6s ease, opacity 0.8s ease',
                                                                            marginTop: '10px',
                                                                            padding: '10px',
                                                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                                                            borderRadius: '10px'
                                                                        }}
                                                                    >
                                                                        {selectedIndices.includes(index) && (
                                                                            <table
                                                                                className="table table-hover"
                                                                                style={{
                                                                                    width: '100%',
                                                                                    transition: 'all 0.3s ease-in-out',
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>Huyết áp</td>
                                                                                        <td>{e.huyet_ap}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Nhịp tim</td>
                                                                                        <td>{e.nhip_tim} bpm</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Cân nặng</td>
                                                                                        <td>{e.can_nang} kg</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Chiều cao</td>
                                                                                        <td>{e.chieu_cao} m</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>BMI</td>
                                                                                        <td>{e.bmi}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Đường huyết</td>
                                                                                        <td>{e.duong_huyet} mmol/L</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Cholesterol tổng</td>
                                                                                        <td>{e.cholesterol_total} mg/dL</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))
                                                    ) : (
                                                        <div>No data available</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane" id="kehoachdieutri">
                                            <div className="treatment-plan">
                                                <h6 className="mt-3 mb-3">Chi tiết kế hoạch điều trị</h6>
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
                                                                <h5 className="billing-title">Bác sĩ ID <span className="invoice-number">#{benhnhan.id_bac_si}</span></h5>
                                                                <span className="text-muted">Ngày lập kế hoạch: {new Date(benhnhan.ngay_ke_hoach).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.chi_tiet_dieu_tri}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Trạng thái</h5>
                                                                <span className="text-muted">Ngày khám: {new Date(benhnhan.ngay_kham).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.trang_thai}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Dược phẩm ID <span className="invoice-number">#{benhnhan.id_duoc_pham}</span></h5>
                                                                <span className="text-muted">Ngày sử dụng: {new Date(benhnhan.ngay_su_dung).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">
                                                                {new Date(benhnhan.ngay_ke_hoach).toLocaleDateString("vi-VN", {
                                                                    year: "numeric",
                                                                    month: "2-digit",
                                                                    day: "2-digit",
                                                                })}
                                                            </td>
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
                                        <div className="tab-pane" id="ttbenhly">
                                            <div className="treatment-plan">
                                                <h6 className="mt-3 mb-3">Thông Tin Bệnh Lý</h6>

                                                <div className="d-flex mb-3">
                                                    <select
                                                        className="form-select"
                                                        style={{
                                                            outline: 'none',
                                                            width: '200px',
                                                            height: '40px',
                                                            padding: '5px 10px',
                                                            borderRadius: '5px',
                                                            border: '1px solid #ced4da',
                                                            background: 'linear-gradient(45deg, #4CAF50, #81C784)', // Linear gradient
                                                            fontSize: '14px',
                                                            color: 'white',
                                                            cursor: 'pointer',
                                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                            transition: 'all 0.3s ease-in-out',
                                                            marginLeft: 'auto',
                                                        }}
                                                        onChange={(e) => setSelectedFilter(e.target.value)}
                                                    >
                                                        <option value="latest" style={{ backgroundColor: '#fff', color: '#333' }}>Bệnh lý mới nhất</option>
                                                        <option value="all" style={{ backgroundColor: '#fff', color: '#333' }}>Tất cả bệnh lý</option>
                                                    </select>
                                                </div>

                                                <table className="table table-bordered table-striped billing-history">
                                                    <thead className="sr-only">
                                                        <tr>
                                                            <th>Chi tiết</th>
                                                            <th>Thông tin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {ttbenhly && ttbenhly.length > 0 ? (
                                                            (() => {
                                                                let filteredData = [...ttbenhly];

                                                                if (selectedFilter === 'latest') {
                                                                    filteredData = filteredData.sort(
                                                                        (a, b) => new Date(b.ngay_kham) - new Date(a.ngay_kham)
                                                                    ).slice(0, 1);
                                                                } else {
                                                                    filteredData = filteredData.sort(
                                                                        (a, b) => new Date(b.ngay_kham) - new Date(a.ngay_kham)
                                                                    );
                                                                }

                                                                return filteredData.map((item, index) => (
                                                                    <React.Fragment key={index}>
                                                                        <tr>
                                                                            <td><h5 className="billing-title">STT</h5></td>
                                                                            <td className="amount">{index + 1}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><h5 className="billing-title">Chẩn đoán</h5></td>
                                                                            <td className="amount">{item.cham_doan || "Chưa có chẩn đoán"}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><h5 className="billing-title">Phương pháp điều trị</h5></td>
                                                                            <td className="amount">{item.phuong_phap_dieu_tri || "Chưa có phương pháp điều trị"}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><h5 className="billing-title">Ngày Khám</h5></td>
                                                                            <td className="amount">
                                                                                {item.ngay_kham
                                                                                    ? new Date(item.ngay_kham).toLocaleDateString("vi-VN", {
                                                                                        year: "numeric",
                                                                                        month: "2-digit",
                                                                                        day: "2-digit",
                                                                                    })
                                                                                    : "Chưa có ngày khám"}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colSpan="2" className="text-center">
                                                                                <button
                                                                                    className="btn btn-warning"
                                                                                    onClick={() => handleEdit(item)}
                                                                                >
                                                                                    <i className="fas fa-edit"></i>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-danger ml-2"
                                                                                    onClick={() => handleDelete(item.id)}
                                                                                >
                                                                                    <i className="fas fa-trash-alt"></i>
                                                                                </button>
                                                                            </td>

                                                                        </tr>
                                                                    </React.Fragment>
                                                                ));
                                                            })()
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="2" className="text-center">Chưa có thông tin bệnh lý</td>
                                                            </tr>
                                                        )}



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
                                                        onClick={() => setShowForm(!showForm)} // Toggle form visibility
                                                    >
                                                        <i class="fa-solid fa-plus"></i>  Thêm Bệnh Lý
                                                    </button>
                                                </div>


                                                {showForm && (
                                                    <div className="mt-5">
                                                        <h4 className="mb-3">Thêm Bệnh Lý Mới</h4>
                                                        <form onSubmit={handleFormSubmit} className="p-3">
                                                            <div className="row">
                                                                {/* Chẩn đoán input */}
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="chandoan" className="form-label">Chẩn đoán</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="chandoan"
                                                                        value={chandoan}
                                                                        placeholder="Viết Chẩn Đoán...."
                                                                        onChange={(e) => setChandoan(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>

                                                                {/* Phương pháp điều trị input */}
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="phuongphap" className="form-label">Phương pháp điều trị</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="phuongphap"
                                                                        value={phuongphap}
                                                                        placeholder="Viết phương pháp điều trị..."
                                                                        onChange={(e) => setPhuongphap(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Ngày Khám input */}
                                                            <div className="mb-3">
                                                                <label htmlFor="ngaykham" className="form-label">Ngày Khám</label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    id="ngaykham"
                                                                    value={ngaykham}
                                                                    onChange={(e) => setNgaykham(e.target.value)}
                                                                    required
                                                                />
                                                            </div>


                                                            <div className="mb-3">
                                                                <label htmlFor="id_benh_nhan" className="form-label">ID Bệnh Nhân</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    id="id_benh_nhan"
                                                                    value={idBenhNhan || params.id}
                                                                    onChange={(e) => setIdBenhNhan(e.target.value)}
                                                                    required
                                                                />
                                                            </div>

                                                            {/* Submit button */}
                                                            <button
                                                                type="submit"
                                                                className="btn btn-success"
                                                                style={{
                                                                    width: '100%',
                                                                    padding: '10px 25px',
                                                                    background: 'linear-gradient(45deg, #4CAF50, #81C784)',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '5px',
                                                                    fontSize: '16px',
                                                                    fontWeight: '500',
                                                                    transition: 'all 0.3s ease-in-out',
                                                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                                                }}
                                                            >
                                                                <i className="fa-solid fa-plus"></i> Thêm Mới
                                                            </button>
                                                        </form>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                        <div class="tab-pane" id="lssudungthuoc">
                                            <div className="treatment-plan">
                                                {/* tìm kiếm  */}
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


