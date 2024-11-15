"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import "../../../../public/css/user/tracuuthuoc.css"
const PAGE_SIZE = 5;
import axios from "axios";

export default function tracuuthuoc() {
    const [drugs, setDrugs] = useState([]); // State để lưu danh sách thuốc
    const [keyword, setKeyword] = useState(''); // State để lưu từ khóa tìm kiếm
    const [filteredDrugs, setFilteredDrugs] = useState([]); // Danh sách thuốc đã lọc
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchDrugs = async () => {
            try {
                const response = await fetch('http://localhost:3000/thuoc'); // Gọi API
                const data = await response.json(); // Chuyển dữ liệu thành JSON
                setDrugs(data); // Lưu dữ liệu vào state
                setFilteredDrugs(data);  // Khởi tạo danh sách thuốc đã lọc
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error); // Xử lý lỗi
            }
        };

        fetchDrugs(); // Thực hiện gọi API
    }, []);

    const filterDrugsByLetter = (letter) => {
        // Lọc danh sách thuốc theo chữ cái
        const filtered = drugs.filter(drug =>
            drug.ten_duoc_pham.toUpperCase().startsWith(letter.toUpperCase())
        );
        setFilteredDrugs(filtered); // Cập nhật danh sách thuốc đã lọc
        setCurrentPage(1); // Đặt lại trang về 1 khi lọc
    };

      // Định nghĩa hàm handleSearch
      const handleSearch = async () => {
        if (!keyword.trim()) {
            setError('Vui lòng nhập từ khóa tìm kiếm.');
            setDrugs([]); // Xóa danh sách cũ nếu không có từ khóa
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/thuoc/search', {
                keyword: keyword.trim(),
            });

            if (response.data.length > 0) {
                setDrugs(response.data); // Cập nhật danh sách thuốc tìm được
                setError(null); // Xóa thông báo lỗi
            } else {
                setError('Không tìm thấy thuốc nào.');
                setDrugs([]); // Xóa danh sách cũ
            }
        } catch (error) {
            console.error('Lỗi khi tìm kiếm thuốc:', error);
            setError('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    // Tính toán số trang
    const totalPages = Math.ceil(drugs.length / PAGE_SIZE);
    const indexOfLastDrug = currentPage * PAGE_SIZE;
    const indexOfFirstDrug = indexOfLastDrug - PAGE_SIZE;
    const currentDrugs = drugs.slice(indexOfFirstDrug, indexOfLastDrug);

    return (
        <>
            <main>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header model-goi">
                        <h3 class="modal-title g-blue" id="exampleModalLabel">Hotline</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="g-content">
                            <ul class="g-phone-list">
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="g-contact-pair">
                                        <div class="g-col7">
                                            <span>Vinmec Times City (HN)</span>
                                        </div>
                                        <div class="g-col5">
                                            <strong>
                                                <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                            </strong>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="g-button-group">
                                <div class="g-item">
                                    <div class="g-item-desc">
                                        <img src="/images/img/Download_App_8f9cde90f2.png" alt="" />
                                        <div class="g-icon-main">
                                            <span class="g-item-title">Đặt lịch qua App - MyVinmec</span>
                                            <span class="g-item-text">Đặt lịch hẹn chủ động ngay tại nhà với bác sĩ và
                                                ngày giờ khám</span>
                                        </div>
                                    </div>
                                    <Link class="g-a" href="#">
                                        <button class="bg-blue text-white border-none m-10">
                                            <span>
                                                Tải ngay
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <div class="g-item">
                                    <div class="g-item-desc">
                                        <img src="/images/img/CSKH_b6c956f10b.png" alt="" />
                                        <div class="g-icon-main">
                                            <span class="g-item-title">Cổng dịch vụ CSKH 24/7</span>
                                        </div>
                                    </div>
                                    <Link class="g-a" href="#">
                                        <button class="bg-blue text-white border-none m-10">
                                            <span>
                                                Gửi yêu cầu
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div class="container-all">
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <a href="#" class="tt-item">Trang chủ</a>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <a href="#" class="tt-item tt-item-1 tt-item-color">danh mục thuốc</a>
                            </div>
                            <div className="tc-bg_white tc-mb3">
                                <div className="tc-flex tc-align-item-center">
                                    <div className="tc-f26 tc-bold">Tra Cứu Tên Thuốc</div>
                                    <div className="tc-search_drug tc-flex-one">
                                        <div className="tc-flex tc-align-item-center tc-justify-betwee">
                                            <input
                                                type="text"
                                                className="tc-txt_search_drug"
                                                placeholder="Nhập tên thuốc cần tìm"
                                                value={keyword}
                                                onChange={(e) => setKeyword(e.target.value)} // Cập nhật từ khóa
                                            />
                                            <button className="tc-btn_search_drug" onClick={handleSearch}>
                                                <img src="images/img/tra cứu/search_icon_drug.png" alt="Search Icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tc-pb60">
                                <div class="tc-bg_white tc-mb60">
                                    <h2 class="sm-title_cate_news">Danh sách thuốc</h2>
                                    <div class="tc-list_az">
                                        <div class="collapse" id="collapseExample">
                                            <div class="tc-letter-all">
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">A</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">B</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">C</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">D</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">E</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">F</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">G</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">H</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">I</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">J</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">K</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">L</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">M</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">N</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">O</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">P</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">Q</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">R</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">S</a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">T
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">U
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">V
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">W
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">X
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">Y
                                                    </a>
                                                </p>
                                                <p class="d-inline-flex gap-1">
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1" id="tc-letter">Z
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <p class="d-inline-flex gap-1">
                                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseExample" aria-expanded="false"
                                                aria-controls="collapseExample">
                                                Ẩn
                                            </button>
                                        </p>
                                        <div className="container mt-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="tc-list_drug">
                                                        {currentDrugs.length > 0 ? (
                                                            currentDrugs.map((drug) => (
                                                                <li key={drug.id} className="tc-item">
                                                                    <Link href={`/tracuuthuoc/${drug.id}`} className="tc-name_drug">
                                                                        {drug.ten_duoc_pham}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li className="tc-item">Không có thuốc nào.</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <ul className="tc-list_drug">
                                                        {drugs
                                                            .filter((_, index) => index % 2 !== 0) // Hiển thị thuốc ở cột thứ hai (nếu cần)
                                                            .map((drug) => (
                                                                <li key={drug.id} className="tc-item">
                                                                    <Link href={`/tracuuthuoc/${drug.id}`} className="tc-name_drug">
                                                                        {drug.ten_duoc_pham}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Phân trang */   }
                                        <div className="tt-phantrang">
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <a
                                                    key={index + 1}
                                                    href="#"
                                                    className={`tt-item-paging ${currentPage === index + 1 ? "active" : ""}`}
                                                    onClick={() => setCurrentPage(index + 1)} // Cập nhật trang hiện tại
                                                >
                                                    {index + 1}
                                                </a>
                                            ))}
                                            <a href="#" className="tt-item-paging">
                                                <img src="images/img/thông tin/product/icon-1.png" alt="Next" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}