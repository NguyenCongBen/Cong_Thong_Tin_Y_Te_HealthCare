"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LichSuSuDungThuoc({ params }) {
    const [benhnhan, setBenhNhan] = useState(null);
    const { data, error } = useSWR(`http://localhost:3000/benhnhan/${params.id}`, fetcher);


    useEffect(() => {
        if (data) {
            setBenhNhan(data);
        }
     
    }, [data]);

    if (error || ttngayError) {
        return <strong>Lỗi khi tải thông tin bệnh nhân</strong>;
    }

    if (!benhnhan) {
        return <div className="loader">Đang tải...</div>;
    }

    return (
        <>
            <div class="tab-pane" id="lssudungthuoc">
                <div className="treatment-plan">
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
    )
};