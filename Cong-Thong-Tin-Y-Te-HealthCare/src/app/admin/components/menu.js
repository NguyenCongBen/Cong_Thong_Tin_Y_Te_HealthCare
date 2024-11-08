import Link from 'next/link';
import React from 'react';
export default function Menu() {
    return (
        <>

            <div id="left-sidebar" class="sidebar">
                <div class="sidebar-scroll">
                    <div class="user-account">
                        <img src="/images/user.png" class="rounded-circle user-photo" alt="User Profile Picture" />
                        <div class="dropdown">
                            <span>Chào Mừng,</span>
                            <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Dr. Rái Cá Đỏ</strong></a>
                            <ul class="dropdown-menu dropdown-menu-right account">
                                <li><a href="doctor-profile.html"><i class="icon-user"></i>Hồ Sơ Của Tôi</a></li>
                                <li><a href="app-inbox.html"><i class="icon-envelope-open"></i>Tin Nhắn</a></li>
                                <li><a href="javascript:void(0);"><i class="icon-settings"></i>Cài Đặt</a></li>
                                <li class="divider"></li>
                                <li><a href="page-login.html"><i class="icon-power"></i>Đăng Xuất</a></li>
                            </ul>
                        </div>
                        <hr />
                        {/* <ul class="row list-unstyled">
                    <li class="col-4">
                        <small>Exp</small>
                        <h6>14</h6>
                    </li>
                    <li class="col-4">
                        <small>Awards</small>
                        <h6>13</h6>
                    </li>
                    <li class="col-4">
                        <small>Clients</small>
                        <h6>213</h6>
                    </li>
                </ul> */}
                    </div>

                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu">Menu</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#sub_menu"><i class="icon-grid"></i></a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat"><i class="icon-book-open"></i></a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#setting"><i class="icon-settings"></i></a></li>
                    </ul>


                    <div class="tab-content p-l-0 p-r-0">
                        <div class="tab-pane active" id="menu">
                            <nav class="sidebar-nav">
                                <ul class="main-menu metismenu">
                                    <li class="active"><Link href="/admin"><i class="icon-home"></i><span>Bảng Điều Khiển</span></Link></li>
                                    <li><a href="/admin/Appointment"><i class="icon-calendar"></i>Cuộc Hẹn</a></li>
                                    <li><a href="app-taskboard.html"><i class="icon-list"></i>Bảng Tác Vụ</a></li>
                                    <li><a href="app-inbox.html"><i class="icon-home"></i>Ứng Dụng Inbox</a></li>
                                    <li><a href="app-chat.html"><i class="icon-bubbles"></i>Ứng Dụng Nhắn Tin</a></li>
                                    <li><a href="javascript:void(0);" class="has-arrow"><i class="icon-user-follow"></i><span>Bác Sĩ</span> </a>
                                        <ul>
                                            <li>  <Link href="/admin/Doctors">Tất Cả Bác Sĩ</Link></li>
                                            <li><Link href="/admin/Add_doctors">Thêm Bác Sĩ</Link></li>
                                            <li><a href="doctor-events.html">Lịch Trình Bác Sĩ</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);" class="has-arrow"><i class="icon-user"></i><span>Bệnh Nhân</span> </a>
                                        <ul>
                                            <li><Link href="/admin/BenhNhan">Tất Cả Bệnh Nhân</Link></li>
                                            <li><a href="patient-add.html">Thêm Bệnh Nhân</a></li>
                                            <li><a href="patient-invoice.html">Hóa Đơn</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);" class="has-arrow"><i class="icon-wallet"></i><span>Thanh Toán</span> </a>
                                        <ul>
                                            <li><a href="payments.html">Thánh Toán</a></li>
                                            <li><a href="payments-add.html">Thêm Thanh Toán</a></li>
                                            <li><a href="payments-invoice.html"></a>Hóa Đơn</li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);" class="has-arrow"><i class="icon-layers"></i><span>Cách Khoa</span> </a>
                                        <ul>
                                            <li><a href="depa-add.html">Thêm</a></li>
                                            <li><a href="depa-all.html">Tất Cả Khoa</a></li>
                                            <li><a href="javascript:void(0);">Tim Mạch</a></li>
                                            <li><a href="javascript:void(0);">Phổi </a></li>
                                            <li><a href="javascript:void(0);">Phụ Khoa</a></li>
                                            <li><a href="javascript:void(0);">Thần Kinh</a></li>
                                            <li><a href="javascript:void(0);">Tiết Niệu</a></li>
                                            <li><a href="javascript:void(0);">Tiêu Hóa</a></li>
                                            <li><a href="javascript:void(0);">Bác Nhi Khoa</a></li>
                                            <li><a href="javascript:void(0);">Phòng xét Nghiệm</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="our-centres.html"><i class="icon-pointer"></i>Trung Tâm trên Toàn Thế Giới</a></li>
                                    <li>
                                        <a href="#Authentication" class="has-arrow"><i class="icon-lock"></i><span>Xác thực </span></a>
                                        <ul>
                                            <li><a href="page-login.html">Đăng Nhập</a></li>
                                            <li><a href="page-register.html">Đăng ký</a></li>
                                            <li><a href="page-lockscreen.html">Màn Hình Khóa</a></li>
                                            <li><a href="page-forgot-password.html">Quên Mật Khẩu</a></li>
                                            <li><a href="page-404.html">Trang 404</a></li>
                                            <li><a href="page-403.html">Trang 403</a></li>
                                            <li><a href="page-500.html">Trang 500</a></li>
                                            <li><a href="page-503.html">Trang 503</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#Widgets" class="has-arrow"><i class="icon-puzzle"></i><span>Widgets</span></a>
                                        <ul>
                                            <li><a href="widgets-statistics.html">Thông Kê Widgets</a></li>
                                            <li><a href="widgets-data.html">Dữ Liệu Widgets</a></li>
                                            <li><a href="widgets-chart.html">Biểu Đồ Widgets</a></li>
                                            <li><a href="widgets-weather.html">Thời Tiết Widgets</a></li>
                                            <li><a href="widgets-social.html">Tiện Ích Xã Hội Widgets</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}