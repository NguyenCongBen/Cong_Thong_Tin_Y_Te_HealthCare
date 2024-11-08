"use client";
import Link from "next/link";
import useSWR from "swr";
import "../../../../public/css/user/dichvu.css";
import AllDichVu from "../Components/Alldichvu";
import DichVuHot from "../Components/Dichvuhot";
import GoiTongDai from "../Components/Goitongdai";
export default function DichVu() {
    const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/dich-vu', fetcher)
    if (error) return <stong>Lỗi dịch vụ</stong>
    if (isLoading) return <stong>Lỗi load dịch vụ</stong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="cover-list-news">
                        <img src="/images/img/dịch vụ/banner.jpg" alt="" />
                        <div class="name-cate-cover">Dịch vụ y tế</div>
                    </div>
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <Link href="/" class="tt-item tt-item-color">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                <Link href="#" class="tt-item tt-item-color">Chăm sóc khách hàng</Link>
                                <i class="fa-solid fa-angle-right tt-item"></i>
                                <span class="tt-item-1">Dịch vụ y tế</span>
                            </div>
                            <div class="tt-main-new">
                                <div class="tt-hot">
                                    <DichVuHot />
                                </div>
                                <div class="tt-thanhtich">
                                    <AllDichVu />
                                </div>
                            </div>
                            <div class="tt-bottom-new">
                                <div class="tt-baiviet">
                                    <h2 class="tt-baiviet-1">Bài viết mới nhất</h2>
                                </div>
                                <div class="tt-boder-luc"></div>
                                <div class="tt-thanhtich-nhieu">
                                    {data.map((service) => (
                                        <div class="tt-thanhtich-nhieu-1" key={service.id_dich_vu}>
                                            <div class="card card-thanhtich" id="card-boder">
                                                <Link href={`/dichvu/${service.id_dich_vu}`}>
                                                    <img class="cart-anh card-img-top" src={`http://localhost:3000/images/img/dịch vụ/${service.image}`}
                                                        alt="..." />
                                                </Link>
                                                <div class="card-body" id="card-body">
                                                    <Link href={`/dichvu/${service.id_dich_vu}`}>
                                                        <h5 class="card-title" id="card-title">{service.ten_dich_vu}</h5>
                                                    </Link>
                                                    <p class="card-text" id="card-text">{service.mo_ta}</p>
                                                    <p class="card-text" id="card-text" style={{ color: 'red' }}>{service.don_gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                                    <Link href={`/dichvu/${service.id_dich_vu}`} class="btn" id="tt-xemthem">Xem thêm
                                                        <span class="btn-size">
                                                            <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="tt-phantrang">
                                <Link href="#" class="tt-item-paging active">1</Link>
                                <Link href="#" class="tt-item-paging active-1">2</Link>
                                <Link href="#" class="tt-item-paging active-1">3</Link>
                                <Link href="#" class="tt-item-paging active-1">4</Link>
                                <Link href="#" class="tt-item-paging">
                                    <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                </Link>
                            </div>
                            <div class="tt-bottom-main">
                                <span class="tt-widget tt-boder-right">
                                    <Link href="#">
                                        Câu chuyện khách hàng
                                    </Link>
                                </span>
                                <span class="tt-widget tt-boder-right"><Link href="#">
                                    Thông tinh sức khỏe
                                </Link>
                                </span>
                                <span class="tt-widget"><Link href="#">
                                    Dịch vụ bảo hiểm
                                </Link>
                                </span>
                            </div>
                            <div class="tt-medium">
                                <div class="card" id="card-boder-medium">
                                    <Link href="#">
                                        <img src="/images/img/thông tin/product/pro-12.jpg" class="card-img-top" alt="..." />
                                    </Link>
                                    <div class="card-body" id="card-medium">
                                        <Link href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở không
                                                Morphin
                                                giảm đau đầu tiên trên
                                                thế giới</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <Link href="#">
                                        <img src="/images/img/thông tin/product/pro-13.png" class="card-img-top" alt="..." />
                                    </Link>
                                    <div class="card-body" id="card-medium">
                                        <Link href="#">
                                            <p class="card-text" id="tt-medium-size">Ung thư xương: Mẹ của “chiến binh” cũng là
                                                chiến binh</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <Link href="#">
                                        <img src="/images/img/thông tin/product/pro-14.jpg" class="card-img-top" alt="..." />
                                    </Link>
                                    <div class="card-body" id="card-medium">
                                        <Link href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare phẫu thuật thành công cho 2 mẹ
                                                con
                                                cùng bị chèn ép dây thần kinh số 7, co giật mặt nhiều năm</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <Link href="#">
                                        <img src="/images/img/thông tin/product/pro-15.jpg" class="card-img-top" alt="..." />
                                    </Link>
                                    <div class="card-body" id="card-medium">
                                        <Link href="#">
                                            <p class="card-text" id="tt-medium-size">“Nhờ được ghép tế bào gốc tại Healthcare,
                                                tôi
                                                như được hồi sinh”</p>
                                        </Link>
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