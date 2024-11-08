import "../../../../public/css/user/tranchu.css";
export default function Footer() {
    return (
        <>
            <footer>
                <div class="tt-footer">
                    <div class="container-1">
                        <div class="tt-footer-1">
                            <div class="card" id="card-footer">
                                <div class="card-body" id="card-body-footer">
                                    <h5 class="card-title">Hệ thống Healthcare</h5>
                                    <div class="tt-footer-item">
                                        <a href="#">
                                            <p class="card-text">Tầm nhìn sứ mệnh</p>
                                            <p class="card-text">Hệ thống cơ sở y tế</p>
                                            <p class="card-text">Tìm bác sĩ</p>
                                            <p class="card-text">Làm việc tại Healthcare</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card" id="card-footer">
                                <div class="card-body" id="card-body-footer">
                                    <h5 class="card-title">Dịch vụ</h5>
                                    <div class="tt-footer-item">
                                        <a href="#">
                                            <p class="card-text">Chuyên khoa</p>
                                            <p class="card-text">Gói dịch vụ</p>
                                            <p class="card-text">Bảo hiểm</p>
                                            <p class="card-text">Đặt lịch hẹn</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card" id="card-footer">
                                <div class="card-body" id="card-body-footer">
                                    <h5 class="card-title">Tải App MyHealthcare</h5>
                                    <div class="tt-footer-item">
                                        <p class="card-text">
                                            <img src="/images/img/thông tin/product/maQR.png" alt="" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" id="card-footer">
                                <div class="card-body" id="card-body-footer">
                                    <h5 class="card-title">Theo dõi chúng tôi</h5>
                                    <div class="tt-footer-item">
                                        <p class="card-text">
                                            <a href="#">
                                                <img src="/images/img/thông tin/product/Youtube_4bbcb9431f.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="/images/img/thông tin/product/Facebook_edefcd7d2d.png" alt="" />
                                            </a>
                                        </p>
                                    </div>
                                    <h5 class="card-title">Đối tác liên kết</h5>
                                    <div class="tt-footer-item">
                                        <div class="tt-footer-active">
                                            <a href="#">
                                                <img src="/images/img/thông tin/product/icon-congdong.webp" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="/images/img/thông tin/product/icon-buoctiep.webp" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card" id="card-footer">
                                <div class="card-body" id="card-body-footer">
                                    <div class="tt-footer-item">
                                        <div class="tt-footer-active-1">
                                            <a class="tt-footer-thongtin" href="#">
                                                <img src="/images/img/thông tin/product/download.png" alt="" />
                                            </a>
                                            <a class="tt-footer-thongtin-1" href="#">
                                                <img src="/images/img/thông tin/product/dmca_premi_badge_4_fd4745ff55.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-2">
                        <div class="container-1">
                            <div class="tt-footer-2">
                                <div class="tt-footer-banquyen">Bản quyền © 2024 thuộc về Công ty Cổ phần Bệnh viện Đa khoa Quốc
                                    tế Healthcare</div>
                                <div>
                                    <ul class="tt-footer-nolist">
                                        <li class="tt-footer-inline"><a href="#">Điều khoản sử dụng</a></li>
                                        <li class="tt-footer-inline"><a href="#">Chính sách bảo mật</a></li>
                                        <li class="tt-footer-inline"><a href="#">Chính sách bảo vệ dữ liệu cá nhân</a></li>
                                        <li class="tt-footer-inline"><a href="#">GR Privacy</a></li>
                                        <li class="tt-footer-inline tt-footer-boder-none"><a href="#">GR Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-body">
                    <div class="mb-hud pc-hidden">
                        <div class="hud-buttons">
                            <a href="#" class="hud-button advice-button">
                                <button type="button"
                                    class="btn btn-primary hud-button advice-button thanhtuu-col-4 col-4-w color-blue"
                                    id="btn-goi" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="/images/img/phone_1.png" alt="" />
                                    <span class="goi-footer">Gọi tổng đài</span>
                                </button>
                            </a>
                            <a href="/datlich" class="hud-button advice-button">
                                <img src="/images/img/calendar_1.png" alt="" />
                                <span>Đặt lịch hẹn</span>
                            </a>
                            <a href="/timbacsi" class="hud-button advice-button active">
                                <img src="/images/img/doctor_1.png" alt="" />
                                <span>Tìm bác sĩ</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}