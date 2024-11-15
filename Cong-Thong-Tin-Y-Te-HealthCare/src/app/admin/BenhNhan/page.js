"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

export default function Doctors() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');
    const [gender, setGender] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const fetchPatients = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/benhnhan/filter_benhnhan?filterType=${filter}${gender ? `&gender=${gender}` : ''}`
            );
            const result = await response.json();
            setData(Array.isArray(result) ? result : []);
        } catch (error) {
            setError("Lỗi khi tải dữ liệu bệnh nhân");
        }
    };

    useEffect(() => {
        fetchPatients();
        setCurrentPage(0);
    }, [filter, gender]);

    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);


    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        setCurrentPage(0);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setCurrentPage(0);
    };

    const calculateAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const month = currentDate.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };


    if (error) return <strong>{error}</strong>;
    if (data.length === 0) return <p>Không có dữ liệu bệnh nhân.</p>;

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <h2>Tất cả Bệnh Nhân</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card patients-list">
                            <div className="header">
                                <h2>Danh Sách Bệnh Nhân</h2>
                            </div>
                            <div className="body">
                                <div className="filters d-flex justify-content-end gap-2 mb-3">
                                    <select className="form-select" onChange={handleFilterChange} value={filter}>
                                        <option value="">Tất Cả Bệnh Nhân</option>
                                        <option value="oldest">Bệnh Nhân Lớn Tuổi</option>
                                        <option value="newest">Bệnh Nhân Mới</option>
                                    </select>
                                    <select className="form-select" onChange={handleGenderChange} value={gender}>
                                        <option value="">Tất Cả Giới Tính</option>
                                        <option value="male">Giới tính Nam</option>
                                        <option value="female">Giới tính Nữ</option>
                                    </select>
                                </div>
                                <table className="table m-b-12 table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Hình Ảnh</th>
                                            <th>Mã Bệnh Nhân</th>
                                            <th>Tên</th>
                                            <th>Tuổi</th>
                                            <th>Địa Chỉ</th>
                                            <th>Số Điện Thoại</th>
                                            <th>Email</th>
                                            <th>Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.length > 0 ? (
                                            currentItems.map((e) => (
                                                <tr key={e.id} >
                                                    <td>
                                                        <img className="patients-img" src="/images/xs/avatar1.jpg" alt="" />
                                                    </td>
                                                    <td>#BN 00{e.id}</td>
                                                    <td>{e.ten}</td>
                                                    <td>{calculateAge(e.ngay_sinh)} Tuổi</td>
                                                    <td>{e.dia_chi}</td>
                                                    <td>{e.so_dien_thoai}</td>
                                                    <td>{e.email}</td>
                                                    <td>
                                                        <Link href={`/admin/BenhNhan/${e.id}`}>
                                                            <button className="detail_benhnhan_btn_admin">Chi tiết</button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="8">Không có bệnh nhân nào.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                {/* Phân trang */}
                                <ReactPaginate
                                    previousLabel={"← Trước"}
                                    nextLabel={"Tiếp →"}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    activeClassName={"active"}
                                    pageLinkClassName={"page-link"}
                                    previousLinkClassName={"page-link"}
                                    nextLinkClassName={"page-link"}
                                    disabledClassName={"disabled"}
                                    breakLinkClassName={"page-link"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
