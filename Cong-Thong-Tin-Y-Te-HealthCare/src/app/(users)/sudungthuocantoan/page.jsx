'use client'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import "../../../../public/css/user/sudungthuocantoan.css";
import "../../../../public/css/user/tintuc.css";






export default function Sudungthuocantoan() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Hàm lấy bài viết từ API  
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:3000/baiviet'); // Thay đổi thành endpoint API thực tế của bạn  
                if (!response.ok) {
                    throw new Error('Không thể lấy bài viết');
                }
                const data = await response.json();
                setArticles(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchArticles();
    }, []);


    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>Lỗi: {error}</div>;
    return (
        <>
            <main>
                <div class="cover_list_news">
                    <div class="name_cate_cover">Sử dụng thuốc an toàn</div>
                    <img src="/images/img/sudungthuocantoan/su_dung_thuo_an.jpg" alt="Sử dụng thuốc an toàn " />
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header model-goi">
                                <h3 className="modal-title g-blue" id="exampleModalLabel">Hotline</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="g-content">
                                    <ul className="g-phone-list">
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="g-contact-pair">
                                                <div className="g-col7">
                                                    <span>Vinmec Times City (HN)</span>
                                                </div>
                                                <div className="g-col5">
                                                    <strong>
                                                        <a className="g-blue g-phone" href="#">024 3974 3556</a>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="g-button-group">
                                        <div className="g-item">
                                            <div className="g-item-desc">
                                                <img src="/images/img/Download_App_8f9cde90f2.png" alt="" />
                                                <div className="g-icon-main">
                                                    <span className="g-item-title">Đặt lịch qua App - MyVinmec</span>
                                                    <span className="g-item-text">Đặt lịch hẹn chủ động ngay tại nhà với bác sĩ và
                                                        ngày giờ khám</span>
                                                </div>
                                            </div>
                                            <a className="g-a" href="#">
                                                <button className="bg-blue text-white border-none m-10">
                                                    <span>
                                                        Tải ngay
                                                    </span>
                                                </button>
                                            </a>
                                        </div>
                                        <div className="g-item">
                                            <div className="g-item-desc">
                                                <img src="/images/img/CSKH_b6c956f10b.png" alt="" />
                                                <div className="g-icon-main">
                                                    <span className="g-item-title">Cổng dịch vụ CSKH 24/7</span>
                                                </div>
                                            </div>
                                            <a className="g-a" href="#">
                                                <button className="bg-blue text-white border-none m-10">
                                                    <span>
                                                        Gửi yêu cầu
                                                    </span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-all">
                    <div className="container-body">
                        <div className="container-1">
                            <div className="tt-bread">
                                <a href="#" className="tt-item">Trang chủ</a>
                                <i className="fa-solid fa-angle-right tt-item tt-item"></i>
                                <a href="#" className="tt-item">Thuốc</a>
                                <i className="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                <span className="tt-item tt-item-1 tt-item-color">Sử dụng thuốc an toàn</span>
                            </div>
                            <div className="tt-main-new">
                                <div className="tt-hot">
                                    <div className="card">
                                        <a href="/giaithuong" className="tt-card-hot">
                                            <img className="cart-anh cart-anh-1 card-img-top" src="/images/img/thông tin/product/pro-1.jpg" alt="..." />
                                            <div className="card-body card-body-1">
                                                <h5 className="card-title" id="card-color">GS Nguyễn Thanh Liêm - Viện trưởng Viện
                                                    nghiên cứu Tế bào gốc & Công nghệ gen Healthcare nhận giải thưởng Nikkei
                                                    Châu Á
                                                </h5>
                                                <p className="card-text" id="card-color">Ngày 13/6/2018 tại Tokyo (Nhật Bản), Hãng
                                                    Thông tấn Nikkei đã trao giải thưởng Nikkei Châu Á cho GS.TS Nguyễn Thanh
                                                    Liêm -
                                                    Viện
                                                    trưởng Viện Nghiên cứu tế bào gốc & công nghệ Gen Healthcare. GS Nguyễn
                                                    Thanh
                                                    Liêm
                                                    là một trong ba nhà khoa học tiêu biểu của châu Á được trao tặng giải thưởng
                                                    Nikkei năm 2018 và là giáo sư bác sỹ đầu tiên của Việt Nam được vinh danh
                                                    trong
                                                    lĩnh vực khoa học công nghệ.</p>
                                                <span className="btn-size">
                                                    Xem thêm
                                                    <img src="/images/img/thông tin/product/icon.png" alt="" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="tt-thanhtich">
                                    <div className="tt-thanhtich-1">
                                        <div className="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img className="cart-anh card-img-top" src="/images/img/thông tin/product/pro-2.jpg"
                                                    alt="..." />
                                            </a>
                                            <div className="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 className="card-title" id="card-title">Healthcare nhận bằng khen của Bộ Y tế
                                                        vì
                                                        đóng
                                                        góp tích cực
                                                        cho cộng đồng</h5>
                                                </a>


                                                <p className="card-text" id="card-text">Trong chương trình giao lưu nghệ thuật tối
                                                    21/12 do Quỹ Hỗ
                                                    trợ bệnh nhân ung thư - Ngày mai Tươi sáng (Bộ Y tế) tổ chức, Healthcare đã
                                                    vinh...
                                                </p>
                                                <a href="#" className="btn" id="tt-xemthem">Xem thêm
                                                    <span className="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tt-thanhtich-1">
                                        <div className="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img className="cart-anh card-img-top" src="/images/img/thông tin/product/pro-3.jpg"
                                                    alt="..." />
                                            </a>
                                            <div className="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 className="card-title" id="card-title">Healthcare đạt giải thưởng “Bệnh viện
                                                        Việt
                                                        Nam tiến bộ nhất” của hiệp hội Quản lý Bệnh viện châu Á</h5>
                                                </a>


                                                <p className="card-text" id="card-text">Bệnh viện Đa khoa Quốc tế Healthcare Times
                                                    City
                                                    được trao danh hiệu “Bệnh viện Việt Nam tiến bộ nhất” trong lĩnh vực “Thực
                                                    hành an toàn...
                                                </p>
                                                <a href="#" className="btn" id="tt-xemthem">Xem thêm
                                                    <span className="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tt-bottom-new">
                                <div className="tt-baiviet">
                                    <h2 className="tt-baiviet-1">Bài viết mới nhất</h2>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-4 g-4">
                                {articles.length === 0 ? (
                                    <p>Không có bài viết nào</p>
                                ) : (
                                    articles.map((article) => (
                                        <div key={article.id} class="col">
                                            <div class="card h-100 hover-effect">
                                                <Link href={`/article/${article.id}`} passHref>
                                                    <img className="card-img-top" src={`/images/img/thông tin/product/${article.anh}`} alt={article.ten} />
                                                    <h5 class="card-title mt-3">{article.ten}</h5>
                                                </Link>
                                                <div class="card-body">
                                                    <p class="card-text">{article.mota}</p>
                                                    <Link href={`/article/${article.id}`} class="btn btn-primary">
                                                        Xem thêm
                                                        <span class="btn-size"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="tt-phantrang">
                                <a href="#" className="tt-item-paging active">1</a>
                                <a href="#" className="tt-item-paging active-1">2</a>
                                <a href="#" className="tt-item-paging active-1">3</a>
                                <a href="#" className="tt-item-paging active-1">4</a>
                                <a href="#" className="tt-item-paging">
                                    <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    );
}

