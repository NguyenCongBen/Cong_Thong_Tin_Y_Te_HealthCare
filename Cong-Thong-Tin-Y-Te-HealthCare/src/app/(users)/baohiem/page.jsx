"use client";
import useSWR from "swr";
import "../../../../public/css/user/dichvu.css";
import GoiTongDai from "../Components/Goitongdai";
export default function BaoHiem() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/benhvien', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="cover-list-news">
                        <img src="/images/img/dịch vụ/banner.jpg" alt="" />
                        <div class="name-cate-cover">Bảo hiểm</div>
                    </div>
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <a href="#" class="tt-item tt-item-color">Trang chủ</a>
                                <i class="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                <a href="#" class="tt-item tt-item-color">Hướng dẫn khách hàng</a>
                                <i class="fa-solid fa-angle-right"></i>
                                <span class="tt-item-1">Bảo hiểm</span>
                            </div>
                            <div class="tt-main-new">
                                <div class="tt-hot">
                                    <div class="card" id="bodor-none">
                                        <a href="giaithuong.html" class="tt-card-hot">
                                            <img class="cart-anh cart-anh-1 card-img-top" src="/images/img/dịch vụ/pro-1.jpg"
                                                alt="..." />
                                            <div class="card-body card-body-1">
                                                <div class="card-body-text">
                                                    <h5 class="card-title" id="card-color">Vinmec Times City Gói khám sàng lọc
                                                        bệnh lý tim mạch
                                                    </h5>
                                                    <p class="card-text" id="card-color">Gói bao gồm: Gói SLTM Tiểu đường – Mỡ
                                                        máu, Gói SLTM - Rối loạn nhịp tim, Gói SLTM - Suy giãn tĩnh mạch, Gói
                                                        SLTM - Mạch vành, Gói SLTM - Xơ vữa</p>
                                                    <a href="#" class="btn" id="card-color">Xem thêm
                                                        <span class="btn-size"><img src="/images/img/thông tin/product/icon.png"
                                                            alt="" /></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="tt-thanhtich">
                                    <div class="tt-thanhtich-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/thông tin/product/pro-2.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Healthcare nhận bằng khen của Bộ Y tế
                                                        vì
                                                        đóng
                                                        góp tích cực
                                                        cho cộng đồng</h5>
                                                </a>

                                                <p class="card-text" id="card-text">Trong chương trình giao lưu nghệ thuật tối
                                                    21/12 do Quỹ Hỗ
                                                    trợ bệnh nhân ung thư - Ngày mai Tươi sáng (Bộ Y tế) tổ chức, Healthcare đã
                                                    vinh...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/thông tin/product/pro-3.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Healthcare đạt giải thưởng “Bệnh viện
                                                        Việt
                                                        Nam tiến bộ nhất” của hiệp hội Quản lý Bệnh viện châu Á</h5>
                                                </a>

                                                <p class="card-text" id="card-text">Bệnh viện Đa khoa Quốc tế Healthcare Times
                                                    City
                                                    được trao danh hiệu “Bệnh viện Việt Nam tiến bộ nhất” trong lĩnh vực “Thực
                                                    hành an toàn...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tt-bottom-new">
                                <div class="tt-baiviet">
                                    <h2 class="tt-baiviet-1">Bài viết mới nhất</h2>
                                </div>
                                <div class="tt-boder-luc"></div>
                                <div class="tt-thanhtich-nhieu">
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/thông tin/product/pro-4.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">GS Nguyễn Thanh Liêm được vinh danh
                                                        là 1 trong 100 nhà khoa học tiêu biểu châu Á 2019</h5>
                                                </a>
                                                <p class="card-text" id="card-text">Năm 2019, Việt Nam có hai nhà khoa học của
                                                    Việt Nam được bình chọn Top 100 nhà khoa học tiêu biểu châu Á vì có thành
                                                    tích xuất...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tt-phantrang">
                                <a href="#" class="tt-item-paging active">1</a>
                                <a href="#" class="tt-item-paging active-1">2</a>
                                <a href="#" class="tt-item-paging active-1">3</a>
                                <a href="#" class="tt-item-paging active-1">4</a>
                                <a href="#" class="tt-item-paging">
                                    <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                </a>
                            </div>
                            <div class="tt-bottom-main">
                                <span class="tt-widget tt-boder-right">
                                    <a href="#">
                                        Câu chuyện khách hàng
                                    </a>
                                </span>
                                <span class="tt-widget tt-boder-right"><a href="#">
                                    Thông tinh sức khỏe
                                </a>
                                </span>
                                <span class="tt-widget"><a href="#">
                                    Dịch vụ bảo hiểm
                                </a>
                                </span>
                            </div>
                            <div class="tt-medium">
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-12.jpg" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở không
                                                Morphin
                                                giảm đau đầu tiên trên
                                                thế giới</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-13.png" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">Ung thư xương: Mẹ của “chiến binh” cũng là
                                                chiến binh</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-14.jpg" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare phẫu thuật thành công cho 2 mẹ
                                                con
                                                cùng bị chèn ép dây thần kinh số 7, co giật mặt nhiều năm</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-15.jpg" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">“Nhờ được ghép tế bào gốc tại Healthcare,
                                                tôi
                                                như được hồi sinh”</p>
                                        </a>
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