"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function BenhNhanEdit({ params }) {
    const [benhnhan, setBenhNhan] = useState(null);
    const [formData, setFormData] = useState({});

    const { data, error } = useSWR(`http://localhost:3000/benhnhan/${params.id}`, fetcher);

    useEffect(() => {
        if (data) {
            setBenhNhan(data);
            setFormData({
                ten: data.ten,
                ngay_sinh: data.ngay_sinh,
                gioi_tinh: data.gioi_tinh,
                dia_chi: data.dia_chi,
                so_dien_thoai: data.so_dien_thoai,
                email: data.email,
                huyet_ap: data.huyet_ap,
                nhip_tim: data.nhip_tim,
                can_nang: data.can_nang,
                chieu_cao: data.chieu_cao,
                bmi: data.bmi,
                duong_huyet: data.duong_huyet,
                cholesterol_total: data.cholesterol_total,
            });
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:3000/benhnhan/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Cập nhật thành công');
            } else {
                alert(`Lỗi: ${result.message}`);
            }
        } catch (error) {
            console.error('Error updating patient:', error);
            alert('Đã xảy ra lỗi');
        }
    };

    if (error) return <strong>Lỗi khi tải thông tin bệnh nhân</strong>;
    if (!benhnhan) return <div className="loader">Đang tải...</div>;

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
                                    <li className="breadcrumb-item active">Cập nhật hồ sơ bệnh nhân</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card member-card">
                                <div className="header l-coral">
                                    <h4 className="m-t-10 text-light">Cập nhật hồ sơ bệnh nhân</h4>
                                </div>
                                <div className="body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="ten">Họ tên</label>
                                            <input
                                                type="text"
                                                id="ten"
                                                name="ten"
                                                value={formData.ten}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="ngay_sinh">Ngày sinh</label>
                                            <input
                                                type="date"
                                                id="ngay_sinh"
                                                name="ngay_sinh"
                                                value={formData.ngay_sinh}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="gioi_tinh">Giới tính</label>
                                            <select
                                                id="gioi_tinh"
                                                name="gioi_tinh"
                                                value={formData.gioi_tinh}
                                                onChange={handleChange}
                                                className="form-control"
                                            >
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="dia_chi">Địa chỉ</label>
                                            <input
                                                type="text"
                                                id="dia_chi"
                                                name="dia_chi"
                                                value={formData.dia_chi}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="so_dien_thoai">Số điện thoại</label>
                                            <input
                                                type="text"
                                                id="so_dien_thoai"
                                                name="so_dien_thoai"
                                                value={formData.so_dien_thoai}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>

                                        {/* Add more fields as necessary */}
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Cập nhật</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
