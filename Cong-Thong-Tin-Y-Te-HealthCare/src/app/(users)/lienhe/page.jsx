"use client";
import Link from "next/link";
import useSWR from "swr";
import "../../../../public/css/user/lienhe.css";
import GoiTongDai from "../Components/Goitongdai";
export default function LienHe() {
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
                        <img src="/images/img/liên hệ/banner.jpg" alt="" />
                        <div class="name-cate-cover">Liên hệ với chúng tôi</div>
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
                            <div class="tt-bread">
                                <Link href="#" class="tt-item">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="#" class="tt-item">Hướng dẫn khách hàng</Link>
                                <i class="fa-solid fa-angle-right gt-item"></i>
                                <p href="#" class="tt-item-1 cl-black"> Liên hệ</p>
                            </div>
                            <div class="lh-bottom_news_main lh-mt30">
                                <h2 class="sm-title_cate_news">Thời gian làm việc</h2>
                                <div class="lh-cl-blue lh-mb2">
                                    Dịch vụ cấp cứu
                                </div>
                                <div class="lh-none">
                                    <p>• Dịch vụ vận chuyển và cấp cứu 24/7</p>
                                    <p>
                                        • Phòng mổ, chẩn đoán hình ảnh và phòng thí nghiệm luôn sẵn sàng phục vụ
                                        dịch vụ cấp cứu 24/24 theo yêu cầu.</p>
                                </div>
                                <div class="lh-list_two_contact">
                                    <div class="lh-col-6">
                                        <div class="lh-cl-blue lh-mb1">Lịch làm việc tại Bệnh viện và các phòng khám</div>
                                        <div class="lh-bold"> Vinmec Times City và phòng khám tại Hà Nội, Vinmec Nha Trang,
                                            Vinmec Đà Nẵng, Vinmec Phú Quốc và Phòng khám tại Phú Quốc:
                                        </div>
                                        <div class="lh-none lh-mt1 lh-ml2">
                                            <p>• Từ thứ Hai đến hết sáng thứ Bảy</p>
                                            <p>• Buổi sáng: 08:00 – 12:00</p>
                                            <p>• Buổi chiều: 13:00 – 17:00</p>
                                        </div>
                                        <br />
                                        <div class="lh-bold">Vinmec Central Park và phòng khám tại TP.HCM, Vinmec Hạ Long,
                                            Vinmec Hải Phòng:
                                        </div>
                                        <div class="lh-none lh-mt1 lh-ml2">
                                            <p>• Từ thứ Hai đến hết sáng thứ Bảy</p>
                                            <p>• Buổi sáng: 07:30 – 11:30</p>
                                            <p>• Buổi chiều: 13:30 – 16:30</p>
                                            <p>Chiều thứ Bảy một số chuyên khoa làm việc</p>
                                        </div>
                                    </div>
                                    <div class="lh-col-6">
                                        <div class="lh-cl-blue lh-mb1">Dịch vụ y tế cho trẻ em</div>
                                        <div class="lh-bold">
                                            Trung tâm tiêm chủng - Phòng Khám Quốc tế Vinmec Times City
                                        </div>
                                        <div class="lh-none lh-mt1 lh-ml2">
                                            <p>Từ thứ Hai đến Chủ Nhật: 8:00 – 17:00</p>
                                            <p>• Buổi sáng: 08:00 – 12:00</p>
                                            <p>• Buổi chiều: 13:00 – 17:00</p>
                                        </div>
                                        <br />
                                        <div class="lh-bold">
                                            Chuyên khoa Nhi - Vinmec Hạ Long, Vinmec Hải Phòng
                                        </div>
                                        <div class="lh-none lh-mt1 lh-ml2">
                                            <p>• Từ thứ Hai đến thứ Bảy: 7:30 – 20:30</p>
                                            <p>Không áp dụng BHYT từ 16:30 - 20:30 và ngày thứ Bảy</p>
                                        </div>
                                        <br />
                                        <div class="lh-bold">Các bệnh viện khác làm việc theo giờ làm việc chung</div>
                                    </div>
                                </div>
                                <div class="lh-list_three_contact">
                                    <div class="lh-col-7">
                                        <ul class="lh-list_hospital_contact">
                                            {data.map((lienhe) => (
                                                <li class="lh-flex">
                                                    <div class="lh-left_list_hospital_contact">
                                                        <div class="lh-name_hospital">
                                                            {lienhe.ten}
                                                        </div>
                                                        <div class="lh-address_hospital">
                                                            <img src="/images/img/bác sĩ/icon-address.png" alt="" />
                                                            <div>
                                                                {lienhe.dia_chi}
                                                            </div>

                                                        </div>
                                                        <div class="lh-phone_hospital lh-address_hospital">
                                                            <i class="fa-regular fa-envelope"></i>
                                                            <Link href="#">{lienhe.email}</Link>
                                                        </div>
                                                    </div>
                                                    <div class="lh-right_list_hospital_contact">
                                                        <Link href="/datlich" class="lh-btn_book_doctor_contact">
                                                            <img src="/images/img/thành tựu/Calendar.png" alt="" />
                                                            Đăng ký khám
                                                        </Link>
                                                        <Link href="#" class="lh-btn_contact">Liên hệ</Link>
                                                    </div>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                    <div class="lh-col-5">
                                        <img src="/images/img/liên hệ/map-vn.png" alt="" />
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