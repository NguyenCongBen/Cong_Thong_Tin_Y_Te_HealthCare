"use client";
import Link from "next/link";
import useSWR from "swr";
import "../../../../public/css/user/chuyenkhoa.css";
import GoiTongDai from "../Components/Goitongdai";
export default function ChuyenKhoa({ params }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`http://localhost:3000/chuyenkhoa/${params.id}`, fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="cover-list-news">
                        <img src="/images/img/hệ thống/banner.jpg" alt="" />
                        <div class="name-cate-cover">Khoa Chẩn đoán hình ảnh - Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                        </div>
                        <div class="thanhtuu-bar_util">
                            <div class="thanhtuu-col-4 col-4-w color-blue">
                                <button type="button" class="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="/images/img/thành tựu/Phone.png" alt="" />
                                    <span>Gọi tổng đài</span>
                                </button>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="datlichkham.html">
                                    <img src="/images/img/thành tựu/Calendar.png" alt="" />
                                    <span>Đặt lịch hẹn</span>
                                </Link>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="timbacsi.html">
                                    <img src="/images/img/thành tựu/doctor.png" alt="" />
                                    <span>Tìm bác sĩ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <Link href="/" class="tt-item">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="#" class="tt-item">Hệ thống bệnh viện</Link>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="#" class="tt-item tt-item-1 tt-item-color"> Khoa Chẩn đoán hình ảnh - Bệnh viện Đa khoa
                                    Quốc tế Vinmec Central Park</Link>
                            </div>
                            <div class="ht-hospital-detail">
                                <div class="ht-hospital-header">
                                    <h1 class="sm-title_cate_news">Khoa Chẩn đoán hình ảnh - Bệnh viện Đa khoa Quốc tế Vinmec
                                        Central Park</h1>
                                    <div class="ht-address-hospital ht-mb">
                                        <img class="ht-mr" src="/images/img/bác sĩ/icon-address.png" alt="" />
                                        720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP HCM Hồ Chí Minh
                                    </div>
                                    <div class="ht-address-hospital">
                                        <img class="ht-mr" src="/images/img/hệ thống/hotline.png" alt="" />
                                        0283 6221 166
                                    </div>
                                </div>
                                <h2 class="ht-hospital-intro">Giới thiệu</h2>
                                <div class="ht-entry">
                                    <p>Chẩn đoán hình ảnh là ngành ứng dụng những tiến bộ về tia X, sóng siêu âm và từ trường để
                                        tạo ra hình ảnh cấu trúc cơ thể nhằm cung cấp những thông tin giải phẫu và bệnh lý cho
                                        các bác sỹ lâm sàng và đưa ra chẩn đoán bệnh chính xác.</p>
                                    <p>Với các trang thiết bị hiện đại, đồng bộ và tiên tiến thế giới, với đội ngũ bác sĩ - kỹ
                                        thuật viên có trình độ chuyên môn cao và nhiều kinh nghiệm, khoa Chẩn đoán hình ảnh Bệnh
                                        viện Đa khoa Quốc tế Vinmec Central Park có thể thực hiện nhiều kỹ thuật đa dạng và
                                        chuyên sâu, hỗ trợ cho các bác sỹ lâm sàng chẩn đoán bệnh nhanh, chính xác, giúp theo
                                        dõi bệnh trong và sau điều trị.</p>
                                    <p>Vị trí của khoa Chẩn đoán hình ảnh: Tầng B1 khu E Bệnh viện Đa khoa Quốc tế Vinmec
                                        Central Park.</p>
                                </div>
                            </div>
                            <div class="ht-widget-box">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item" id="accordion-item">
                                        <h2 class="accordion-header ht-accordion-header">
                                            <button class="accordion-button" id="accordion-button" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Trang thiết bị
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse ht-content collapse show"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <ul class="ht-collapsed">
                                                    <li>Hệ thống trang thiết bị y tế được đầu tư hiện đại, đồng bộ từ các hãng
                                                        Siemens, GE Healthcare v.v...</li>
                                                    <li>Hệ thống chụp cộng hưởng từ thế hệ mới 3.0T và 1.5T hãng Siemens
                                                        Healthcare/Đức</li>
                                                    <li>Hệ thống chụp chụp cắt lớp vi tính Aquilion One 640 lát cắt của hãng
                                                        Toshiba/Canon/Nhật</li>
                                                    <li>Hệ thống chụp XQuang nhũ ảnh hiện đại hãng GE Healthcare/Mỹ</li>
                                                    <li>Hệ thống chụp X quang răng toàn hàm, 3D Conebeam CT, hãng Sirona/Đức
                                                    </li>
                                                    <li>Hệ thống siêu âm tổng quát cao cấp Logiq E9, Logiq E10s hãng GE
                                                        Healthcare/Mỹ</li>
                                                </ul>
                                                <span class="ht-view_more_b">
                                                    Xem thêm
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ht-widget-doctors">
                                <h2 class="sm-title_cate_news h2">Đội ngũ bác sĩ chuyên môn</h2>
                                <div class="ht-list-doctors">
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="thongtinbacsi.html">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-1.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="/thongtinbacsi">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="/thongtinbacsi">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-2.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-3.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-4.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-1.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-1.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-1.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                    <div class="ht-doctor-list-item">
                                        <div class="ht-item-doctor">
                                            <Link class="ht-post-thumb" href="#">
                                                <img class="ht-doctor-thumb-small" src="/images/img/hệ thống/pro-1.jpg" alt="" />
                                            </Link>
                                            <div class="ht-position">
                                                Kỹ thuật viên
                                            </div>
                                            <h3 class="ht-post-title">
                                                <Link href="#">Phạm Thanh Bắc</Link>
                                            </h3>
                                            <Link class="ht-viewmore" href="#">Thông tin bác sĩ</Link>
                                        </div>
                                    </div>
                                </div>
                                <span class="ht-view_more_b ht-center">Xem Thêm</span>
                            </div>
                            <div class="ht-widget-doctor-banner">
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
                                                <p class="card-text" id="tt-medium-size">Ung thư xương: Mẹ của “chiến binh” cũng
                                                    là
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
                                                <p class="card-text" id="tt-medium-size">Healthcare phẫu thuật thành công cho 2
                                                    mẹ con cùng bị chèn ép dây thần kinh số 7, co giật mặt nhiều năm</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="card" id="card-boder-medium">
                                        <Link href="#">
                                            <img src="/images/img/thông tin/product/pro-15.jpg" class="card-img-top" alt="..." />
                                        </Link>
                                        <div class="card-body" id="card-medium">
                                            <Link href="#">
                                                <p class="card-text" id="tt-medium-size">“Nhờ được ghép tế bào gốc tại
                                                    Healthcare, tôi như được hồi sinh”</p>
                                            </Link>
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
