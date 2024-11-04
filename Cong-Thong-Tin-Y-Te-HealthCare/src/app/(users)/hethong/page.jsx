import React from "react";
import Link from "next/link";
import "../../../../public/css/user/hethong.css";
import TatCaBenhVien from "../Components/Allbenhvien";
import GoiTongDai from "../Components/Goitongdai";

export default async function HeThong() {
    const res = await fetch("http://localhost:3000/benhvien", { cache: 'no-store' });
    const data = await res.json();
    console.log(data);
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="cover-list-news">
                        <img src="images/img/bệnh viện/banner.png" alt="" />
                        <div class="name-cate-cover">Danh sách cơ sở y tế</div>
                        <div class="thanhtuu-bar_util">
                            <div class="thanhtuu-col-4 col-4-w color-blue">
                                <button type="button" class="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="images/img/thành tựu/Phone.png" alt="" />
                                    <span>Gọi tổng đài</span>
                                </button>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="/datlich">
                                    <img src="images/img/thành tựu/Calendar.png" alt="" />
                                    <span>Đặt lịch hẹn</span>
                                </Link>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="/timbacsi">
                                    <img src="images/img/thành tựu/doctor.png" alt="" />
                                    <span>Tìm bác sĩ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <Link href="#" class="tt-item">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item"></i>
                                <p href="#" class="tt-item tt-item-1 tt-item-color">Hệ thống bệnh viện</p>
                            </div>
                            <div class="gt-related-posts">
                                <div class="sm-title_cate_news">
                                    Các nhà cung cấp thuốc
                                </div>
                                <div class="tt-thanhtich-nhieu">
                                    <TatCaBenhVien data={data} />
                                </div>
                                <div class="tt-line-cdd"></div>
                                <div class="sm-title_cate_news">
                                    Phòng khám
                                </div>
                                <div class="tt-thanhtich-nhieu">
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <Link href="#">
                                                <img class="cart-anh card-img-top" src="images/img/giải thưởng/pro-7.jpg"
                                                    alt="..." />
                                            </Link>
                                            <div class="card-body" id="card-body">
                                                <Link href="#">
                                                    <h5 class="card-title" id="card-title">Sử dụng thuốc điều trị ung thư di căn
                                                        xương</h5>
                                                </Link>
                                                <p class="card-text" id="card-text">Các loại ung thư chính có xu hướng di căn
                                                    đến xương bao gồm ung thư đa u tủy, ung thư vú, ung thư tuyến tiền liệt,...
                                                </p>
                                                <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <Link href="#">
                                                <img class="cart-anh card-img-top" src="images/img/giải thưởng/pro-8.jpg"
                                                    alt="..." />
                                            </Link>
                                            <div class="card-body" id="card-body">
                                                <Link href="#">
                                                    <h5 class="card-title" id="card-title">Hút shisha: Mùi hương của sự chết
                                                        chóc</h5>
                                                </Link>
                                                <p class="card-text" id="card-text">Hút Shisha là một hoạt động giải trí phổ
                                                    biến ở nhiều quốc gia trên thế giới, đặc biệt là ở các nước Trung Đông và
                                                    châu....
                                                </p>
                                                <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <Link href="#">
                                                <img class="cart-anh card-img-top" src="images/img/giải thưởng/pro-9.jpg"
                                                    alt="..." />
                                            </Link>
                                            <div class="card-body" id="card-body">
                                                <Link href="#">
                                                    <h5 class="card-title" id="card-title">Nuôi cấy tăng sinh EX vivo tế bào
                                                        diệt tự nhiên và tế bào tê gây độc từ máu ngoại vi các bệnh nhân ung thư
                                                        phổi
                                                    </h5>
                                                </Link>
                                                <p class="card-text" id="card-text">Tác giả: Hoàng Thị Mỹ Nhung 1,2*, Bùi Việt
                                                    Anh 1*, Trương Linh Huyền 1, Đoàn Trung Hiệp 3, Chu Thị Thảo 1, Phùng...
                                                </p>
                                                <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <Link href="#">
                                                <img class="cart-anh card-img-top" src="images/img/giải thưởng/pro-10.png"
                                                    alt="..." />
                                            </Link>
                                            <div class="card-body" id="card-body">
                                                <Link href="#">
                                                    <h5 class="card-title" id="card-title">Điều trị ung thư di căn xương bằng
                                                        thuốc
                                                    </h5>
                                                </Link>
                                                <p class="card-text" id="card-text">Có một số phương pháp điều trị ung thư di
                                                    căn xương như xạ trị, đốt khối u, sử dụng thuốc hay phẫu thuật. Khi điều
                                                    trị...
                                                </p>
                                                <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </Link>
                                            </div>
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