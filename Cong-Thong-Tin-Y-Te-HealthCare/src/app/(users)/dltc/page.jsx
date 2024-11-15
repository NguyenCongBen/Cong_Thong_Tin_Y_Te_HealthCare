"use client"
import Link from "next/link";
import { useEffect } from "react";
import "../../../../public/css/user/dltc.css";
import "../../../../public/css/user/datlich.css";
import { useRouter } from "next/navigation";


export default function DatLichThanhCong() {
    const router = useRouter();

    // Mở modal khi component được load
    useEffect(() => {
        const modal = new window.bootstrap.Modal(document.getElementById('hihi'));
        modal.show();
    }, []);

    return (
        <>
            <div className="modal fade" id="hihi" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" id="dltc-w">
                        <div className="modal-header" id="dltc-boder">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                <div className="dltc-img">
                                    <img src="/images/img/đặt lịch thành công/Check_info.png" alt="" />
                                    <button type="button" id="btn-altc" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={() => {
                                            window.location.href = '/datlich';
                                        }}></button>
                                </div>
                            </h1>
                        </div>
                        <div className="modal-body" id="dltc-name">
                            <h2 className="dltc-sm-title_cate_news">Thông tin đã được ghi nhận</h2>
                            <p className="dltc-ly">
                                *Lưu ý: Thời gian khám trên chưa được xác nhận, tổng đài sẽ liên hệ xác nhận thời gian khám chính xác tới quý khách hàng.
                                Cảm ơn quý khách hàng đã sử dụng dịch vụ của Vinmec
                            </p>
                            <p className="dltc-email">
                                Email thông tin lịch hẹn đã được gửi cho quý khách (nếu quý khách để lại email chính xác)
                            </p>
                            <div className="dltc-bg-all">
                                <div className="dltc-bg">
                                    <div className="dltc-bg-1">
                                        <div className="dltc-dv">
                                            <img src="/images/images/img/đặt lịch thành công/Service.png" alt="" />
                                            <p><b>Dịch vụ</b></p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Hình thức</p>
                                            <p>Khám chuyên khoa đa khoa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dltc-bg">
                                    <div className="dltc-bg-1">
                                        <div className="dltc-dv">
                                            <img src="/images/images/img/đặt lịch thành công/Customer.png" alt="" />
                                            <p><b>Khách hàng</b></p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Họ tên</p>
                                            <p>Nguyễn Trung Nhịn</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Ngày tháng năm sinh</p>
                                            <p>10-09-2004</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Giới tính</p>
                                            <p>Nam</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Số điện thoại</p>
                                            <p>0332578895</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Email</p>
                                            <p>nhin12a3@gmail.com</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Lý do khám</p>
                                            <p>Hay ho</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dltc-bg">
                                    <div className="dltc-bg-1">
                                        <div className="dltc-dv">
                                            <img src="/images/images/img/đặt lịch thành công/Doctor.png" alt="" />
                                            <p><b>Bác sĩ</b></p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Thời gian khám</p>
                                            <p>08:20, 29/10/2024</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Bệnh viện/Phòng khám</p>
                                            <p>BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Chuyên khoa</p>
                                            <p>Đa khoa</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Bác sĩ</p>
                                            <p>Bác sĩ Trương Ngọc Hải</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="dltc-ly">
                                    <i>
                                        *Nếu quý khách cần thay đổi/huỷ lịch hẹn, vui lòng để lại yêu cầu
                                        <a className="text-none" href="#">TẠI ĐÂY</a>
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div class="container-all">
                <div class="cover-list-news">
                    <img src="images/img/thành tựu/banner.jpg" alt="" />
                    <div class="name-cate-cover">Đăng ký khám</div>
                    <div class="thanhtuu-bar_util">
                        <div class="thanhtuu-col-4 col-4-w color-blue">
                            <button type="button" class="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src="images/img/thành tựu/Phone.png" alt="" />
                                <span>Gọi tổng đài</span>
                            </button>
                        </div>
                        <div class="thanhtuu-col-4 col-4-w">
                            <a href="datlichkham.html">
                                <img src="images/img/thành tựu/Calendar.png" alt="" />
                                <span>Đặt lịch hẹn</span>
                            </a>
                        </div>
                        <div class="thanhtuu-col-4 col-4-w">
                            <a href="timbacsi.html">
                                <img src="images/img/thành tựu/doctor.png" alt="" />
                                <span>Tìm bác sĩ</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container-body">
                    <div class="container-1">
                        <div class="tt-bread">
                            <a href="#" class="tt-item">Trang chủ</a>
                            <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                            <a href="#" class="tt-item tt-item-1 tt-item-color">Đăng ký khám</a>
                        </div>
                        <div class="lk-content_info_book-1">
                            <div class="lk-content_info_book">
                                <h2 class="sm-title_cate_news">
                                    Nội dung chi tiết đặt hẹn
                                </h2>
                                <div class="lk-list_two_booking">
                                    <div class="lk-col6 lk-right">
                                        <div class="lk-mb2">
                                            <p class="lk-color-blue">
                                                Bệnh viện/phòng khám Vinmec
                                                <span class="lk-color-red">*</span>
                                            </p>
                                            <select class="form-select form-select-lg mb-3" id="lk-form-select">
                                                <option selected>Chọn cơ sở khám</option>
                                                <option value="1">BV ĐKQT Vinmec Times City (Hà Nội)</option>
                                                <option value="2">BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</option>
                                                <option value="3">BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</option>
                                                <option value="4">BV ĐKQT Vinmec Phú Quốc</option>
                                                <option value="5">BV ĐKQT Vinmec Đà Nẵng</option>
                                                <option value="6">PK ĐKQT Vinmec Dương Đông</option>
                                                <option value="7">BV ĐKQT Vinmec Hải Phòng</option>
                                                <option value="8">BV ĐKQT Vinmec Hạ Long</option>
                                                <option value="9">PK ĐKQT Vinmec Sài Gòn</option>
                                            </select>
                                        </div>
                                        <div class="lk-mb2">
                                            <p class="lk-color-blue">
                                                Chuyên khoa
                                                <span class="lk-color-red">*</span>
                                            </p>
                                            <select class="form-select form-select-lg mb-3" id="lk-form-select">
                                                <option selected>Chọn chuyên khoa</option>
                                                <option value="0">Chưa xác định chuyên khoa</option>
                                            </select>
                                        </div>
                                        <div class="lk-mb2">
                                            <p class="lk-color-blue">
                                                Bác sĩ
                                            </p>
                                            <select class="form-select form-select-lg mb-3" id="lk-form-select">
                                                <option selected>Chọn Bác sĩ muốn khám</option>
                                                <option value="1">Bác sĩ Noname</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="#" class="lk-flex">
                                                <input type="checkbox" />
                                                Đặt hẹn cho người nước ngoài
                                            </label>
                                        </div>
                                    </div>
                                    <div class="lk-col6 lk-left">
                                        <p class="lk-color-blue color-toi">
                                            Thời gian khám
                                            <span class="lk-color-red color-toi">*</span>
                                        </p>
                                        <div class="lk-list_date">
                                            <div class="lk-item_date active">
                                                <p class="lk-f14">04/10</p>
                                                <p class="lk-f12">Thứ 6</p>
                                            </div>
                                            <div class="lk-item_date">
                                                <p class="lk-f14 lk-mau">05/10</p>
                                                <p class="lk-f12 lk-999">Thứ 7</p>
                                            </div>
                                            <div class="lk-item_date">
                                                <p class="lk-f14 lk-mau">06/10</p>
                                                <p class="lk-f12 lk-999">Chủ nhật</p>
                                            </div>
                                            <div class="lk-item_date">
                                                <p class="lk-f14 lk-mau">
                                                    <input type="date" class="lk-date-oder" />
                                                </p>
                                                <p class="lk-f12 lk-999">Ngày khác</p>
                                            </div>
                                        </div>
                                        <div class="lk-mt2">
                                            *Lưu ý: Thời gian khám trên chỉ là thời gian dự kiến, tổng đài sẽ
                                            liên hệ xác nhận thời gian khám chính xác tới quý khách sau khi quý
                                            khách đặt hẹn.
                                        </div>
                                    </div>
                                </div>
                                <div class="lk-mt60">
                                    <h2 class="sm-title_cate_news">
                                        Thông tin khách hàng
                                    </h2>
                                    <div class="lk-list_two_booking lk-mbt-1">
                                        <div class="lk-col6 lk-right">
                                            <div class="lk-mb2 lk-mbt">
                                                <p class="lk-color-blue">
                                                    Họ và tên
                                                    <span class="lk-color-red">*</span>
                                                </p>
                                                <div class="lk-input">
                                                    <input class="lk-input-1" id="lk-form-select" type="text"
                                                        placeholder="Họ và tên" />
                                                    <div class="lk-input_gender">
                                                        <label for="#" class="lk-lable">
                                                            <input type="radio" name="gender" class="lk-gender-picker" />
                                                            Nam
                                                        </label>
                                                        <label for="#" class="lk-lable">
                                                            <input type="radio" name="gender" class="lk-gender-picker" />
                                                            Nữ
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="lk-mb2 lk-mbt">
                                                <p class="lk-color-blue">
                                                    Số điện thoại
                                                    <span class="lk-color-red">*</span>
                                                </p>
                                                <div class="lk-input">
                                                    <input class="lk-input-2" id="lk-form-select" type="text"
                                                        placeholder="Nhập số điện thoại" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lk-col6 lk-left">
                                            <div class="lk-mb2 lk-mbt">
                                                <p class="lk-color-blue">
                                                    Ngày tháng năm sinh
                                                    <span class="lk-color-red">*</span>
                                                </p>
                                                <div class="lk-input">
                                                    <input class="lk-input-2" id="lk-form-select" type="date"
                                                        placeholder="Ngày tháng năm sinh" max="10/04/2024" />
                                                </div>
                                            </div>
                                            <div class="lk-mb2 lk-mbt">
                                                <p class="lk-color-blue">
                                                    Email
                                                    <span class="lk-color-red">*</span>
                                                </p>
                                                <div class="lk-input">
                                                    <input class="lk-input-2" id="lk-form-select" type="email"
                                                        placeholder="Nhập email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lk-col12">
                                            <div class="lk-mb2 lk-mbt">
                                                <p class="lk-color-blue">
                                                    Lý do khám
                                                    <span class="lk-color-red">*</span>
                                                </p>
                                                <div class="lk-input">
                                                    <textarea class="lk-input-2" name="#" id="lk-form-select" cols="30"
                                                        rows="10" placeholder="Triệu chứng của bạn"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="#" class="lk-flex">
                                                <input type="checkbox" />
                                                <div class="lk-thoathuan">
                                                    Tôi đã đọc và xác nhận <a class="lk-cl-blue" href="#">Điều khoản dịch
                                                        vụ</a>
                                                    của bệnh viện.
                                                    <span class="lk-color-red">*</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="lk-text-center">
                                        <button class="lk-btn_send_book">Gửi thông tin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
