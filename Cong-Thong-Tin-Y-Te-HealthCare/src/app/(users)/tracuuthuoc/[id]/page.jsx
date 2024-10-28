"use client";
import Link from "next/link";
import "../../../../../public/css/user/acenocoumarol.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Chitietthuoc({params }) {
    const [baiViet, setBaiViet] = useState([]);
    const [drug, setDrug] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDrug = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/thuoc/${params.id}`); // Giả sử ID của Acenocoumarol là 1
                setDrug(response.data);
            } catch (err) {
                setError('Không tìm thấy thông tin thuốc');
            }
        };

        fetchDrug();
    }, []);
    
    useEffect(() => {
        const fetchBaiViet = async () => {
            try {
                const response = await axios.get('http://localhost:3000/baiviet');
                setBaiViet(response.data); // Lưu dữ liệu bài viết vào state
            } catch (err) {
                setError('Lỗi khi tải bài viết liên quan!');
            } finally {
                setLoading(false);
            }
        };

        fetchBaiViet();
    }, []);

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!drug) {
        return <div>Đang Tải </div>; 
    }

    return (
        <>
            <div className="banner text-center">
                <div className="tt-bread">
                    <a href="/" className="tt-item">Trang chủ</a>
                    <i className="fa-solid fa-angle-right tt-item gt-item"></i>
                    <a href="/" className="tt-item tt-item-1 tt-item-color">Thuốc</a>
                    <i className="fa-solid fa-angle-right tt-item gt-item"></i>
                    <a href="#" className="tt-item tt-item-1 tt-item-color">danh mục thuốc</a>
                </div>
                <h1>{drug.ten_duoc_pham}</h1>

                <div className="mt-3">
                    <button className="btn btn-outline-light">Dạng bảo chế - biệt dược</button>
                    <button className="btn btn-outline-light">Nhóm thuốc - Tác dụng</button>
                    <button className="btn btn-outline-light">Chỉ định</button>
                    <button className="btn btn-outline-light">Chống chỉ định</button>
                    <button className="btn btn-outline-light">Thận trọng</button>
                    <button className="btn btn-outline-light">Liều và cách dùng</button>
                    <button className="btn btn-outline-light">Chú ý khi sử dụng</button>
                    <button className="btn btn-outline-light">Tài liệu tham khảo</button>
                </div>
            </div>
            <div className="container_body">
                <section className="detail_sick mb-5 mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="content_detail_sick">
                                <div id="tab-13579" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Dạng bào chế - biệt dược</h2>
                                    <div className="body">
                                        <p>{drug.hinh_thuc_bao_che}</p>
                                    </div>
                                </div>
                                <div id="tab-13582" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Nhóm thuốc - Tác dụng</h2>
                                    <div className="body">
                                        <p>{drug.chi_dinh}</p>
                                    </div>
                                </div>
                                <div id="tab-13585" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Chỉ định</h2>
                                    <div className="body">
                                        <p>{drug.chi_dinh}</p>
                                    </div>
                                </div>
                                <div id="tab-13588" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Chống chỉ định</h2>
                                    <div className="body">
                                        <p>{drug.chong_chi_dinh}</p>
                                    </div>
                                </div>
                                <div id="tab-13589" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Thận trọng</h2>
                                    <div className="body">
                                        <p>{drug.tac_dung_phu}</p>
                                    </div>
                                </div>
                                <div id="tab-13592" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Tác dụng không mong muốn</h2>
                                    <div className="body">
                                        <p>{drug.tac_dung_phu}</p>
                                    </div>
                                </div>
                                <div id="tab-13593" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Liều và cách dùng</h2>
                                    <div className="body">
                                        <p>{drug.lieu_luong}</p>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <h2 className="title_detail_sick font-weight-bold">Chú ý khi sử dụng</h2>
                                    <div className="short-underline"></div>
                                    <div className="body">
                                        <p>{drug.thong_tin_bao_quan}</p>
                                        <p><strong><em>Ngày hết hạn: </em></strong>{new Date(drug.ngay_het_han).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div id="tab-13595" className="item_detial_sick">
                                    <h2 className="title_detail_sick">Tài liệu tham khảo</h2>
                                    <div className="body">
                                        <p><em>Hướng dẫn sử dụng của Nhà sản xuất, Martindale.</em></p>
                                    </div>
                                </div>
                                <div className="list_topic_bottom_detail_drug">
                                    Chủ đề:
                                    <a href="/vie/chu-de/suy-tim" className="text-light">Suy tim</a>
                                    <a href="/vie/chu-de/thuyen-tac-phoi" className="text-light">Thuyên tắc phổi</a>
                                    <a href="/vie/chu-de/viem-tinh-mach" className="text-light">Viêm tĩnh mạch</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="fs-5 fw-bold">Bài viết liên quan</div>
                        <ul className="list_sick_right mt-3">
                            {/* Hiển thị tối đa 5 bài viết */}
                            {baiViet.slice(0, 10).map((article) => (
                                <li key={article.id}>
                                    <a href="#" className="text-light">
                                        {article.ten}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="ads_right text-center mt-3"></div>
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
}
