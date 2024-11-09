import Link from 'next/link';
import React from 'react';
import "../../../../public/css/user/timbacsi.css";
import TatCaBacSi from '../Components/Alldoctor';
import GoiTongDai from '../Components/Goitongdai';

export default async function search(params) {
    console.log(params);
    const res = await fetch('http://localhost:3000/doctor/search-doctor/' + params.searchParams.keyword, { cache: 'no-store' });
    const productSearch = await res.json();
    return (
        <>
            <GoiTongDai />
            <div class="container-all">
                <div class="cover-list-news">
                    <img src="/images/img/thành tựu/banner.jpg" alt="" />
                    <div class="name-cate-cover">Danh sách bác sĩ</div>
                    <div class="thanhtuu-bar_util">
                        <div class="thanhtuu-col-4 col-4-w color-blue">
                            <button type="button" class="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src="/images/img/thành tựu/Phone.png" alt="" />
                                <span>Gọi tổng đài</span>
                            </button>
                        </div>
                        <div class="thanhtuu-col-4 col-4-w">
                            <Link href="/datlich">
                                <img src="/images/img/thành tựu/Calendar.png" alt="" />
                                <span>Đặt lịch hẹn</span>
                            </Link>
                        </div>
                        <div class="thanhtuu-col-4 col-4-w">
                            <Link href="/timbacsi">
                                <img src="/images/img/thành tựu/doctor.png" alt="" />
                                <span>Tìm bác sĩ</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="container-body">
                    <div class="container-1">
                        <div class="tt-bread-1">
                            <Link href="#" class="tt-item">Trang chủ</Link>
                            <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                            <Link href="#" class="tt-item-1 cl-black">Chuyên gia y tế</Link>
                        </div>
                        <div class="bs-fill_doctor">

                            <form action="/timbacsi">
                                <div class="bs-flex-1">
                                    <div class="bs-col-6">
                                        <input class="bs-txt_name_doctor" type="text" name="keyword" placeholder="Nhập tên bác sĩ..." />
                                        <img src="/images/img/bác sĩ/input_name.png" alt="" />
                                    </div>
                                    <div class="bs-col-6">
                                        <button class="bs-btn_fill_doctor" type="submit">Tìm bác sĩ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="bs-doctor_cate">
                            <h2 class="sm-title_cate_news">Danh sách bác sĩ</h2>
                            <ul class="bs-list_doctor_cate">
                                <TatCaBacSi data={productSearch} />
                            </ul>
                            <div class="tt-phantrang">
                                <Link href="#" class="tt-item-paging active">1</Link>
                                <Link href="#" class="tt-item-paging active-1">2</Link>
                                <Link href="#" class="tt-item-paging active-1">3</Link>
                                <Link href="#" class="tt-item-paging active-1">4</Link>
                                <Link href="#" class="tt-item-paging">
                                    <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}