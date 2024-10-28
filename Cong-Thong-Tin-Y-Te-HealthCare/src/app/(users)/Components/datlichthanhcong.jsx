import "../../../../public/css/user/dltc.css";
export default function DatLichThanhCong() {
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id="dltc-w">
                        <div class="modal-header" id="dltc-boder">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                <div className="dltc-img">
                                    <img src="/images/img/đặt lịch thành công/Check_info.png" alt="" />
                                </div>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="dltc-name">
                            <h2 class="dltc-sm-title_cate_news">Thông tin đã được ghi nhận</h2>
                            <p className="dltc-ly">*Lưu ý: Thời gian khám trên chưa được xác nhận, tổng đài
                                sẽ liên hệ xác nhận thời gian khám chính xác tới quý khách hàng.
                                Cảm ơn quý khách hàng đã sử dụng dịch vụ của Vinmec</p>
                            <p className="dltc-email">Email thông tin lịch hẹn đã được gửi cho quý khách (nếu quý khách để lại email chính xác)</p>
                            <div className="dltc-bg-all">
                                <div className="dltc-bg">
                                    <div className="dltc-bg-1">
                                        <div className="dltc-dv">
                                            <img src="/images/img/đặt lịch thành công/Service.png" alt="" />
                                            <p>
                                                <b>Dịch vụ</b>
                                            </p>
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
                                            <img src="/images/img/đặt lịch thành công/Customer.png" alt="" />
                                            <p>
                                                <b>Khách hàng</b>
                                            </p>
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
                                            <img src="/images/img/đặt lịch thành công/Doctor.png" alt="" />
                                            <p>
                                                <b>Bác sĩ</b>
                                            </p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Thời gian khám</p>
                                            <p>08:20, 29/10/2024</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Bệnh viện/Phòng khám</p>
                                            <p>	BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Chuyên khoa</p>
                                            <p>Đa khoa</p>
                                        </div>
                                        <div className="dltc-flex">
                                            <p>Bác sĩ</p>
                                            <p>	Bác sĩ Trương Ngọc Hải</p>
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
            </div>
        </>
    )
}