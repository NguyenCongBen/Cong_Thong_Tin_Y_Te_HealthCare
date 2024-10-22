import React from 'react';
export default function Header(){
    return(
       <>
       <nav class="navbar navbar-fixed-top " style={{ position: 'fixed', top: 0, left: 0 }}>
        <div class="container-fluid">
            <div class="navbar-btn">
                <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
            </div>

            <div class="navbar-brand">
                <a href="index.html"><img src="assets/images/logo.svg" alt="Lucid Logo" class="img-responsive logo"/></a>                
            </div>
            
            <div class="navbar-right">
                <form id="navbar-search" class="navbar-form search-form">
                    <input value="" class="form-control" placeholder="Search here..." type="text"/>
                    <button type="button" class="btn btn-default"><i class="icon-magnifier"></i></button>
                </form>                

                <div id="navbar-menu">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="doctor-events.html" class="icon-menu d-none d-sm-block d-md-none d-lg-block"><i class="fa-solid fa-calendar-days"></i></a>
                        </li>
                        <li>
                            <a href="app-chat.html" class="icon-menu d-none d-sm-block"><i class="fa-regular fa-comments"></i></a>
                        </li>
                        <li>
                            <a href="app-inbox.html" class="icon-menu d-none d-sm-block"><i class="fa-regular fa-envelope"></i><span class="notification-dot"></span></a>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                            <i class="fa-regular fa-bell"></i>
                                <span class="notification-dot"></span>
                            </a>
                            <ul class="dropdown-menu notifications menu_thongbao_header">
                                <li class="header"><strong>Bạn có 4 thông báo mới</strong></li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-info text-warning"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Chuyến dịch <strong>Giảm giá ngày lễ</strong> sắp đạt giới hạn ngân hàng</p>
                                                <span class="timestamp">10 sáng hôm nay</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>                               
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-like text-success"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Chuyến dịhc mới của bạn <strong>Giảm giá ngày lễ</strong> được chấp thuận</p>
                                                <span class="timestamp">11 giờ 30 phút hôm nay</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                 <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-pie-chart text-info"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Lượt truy cập trang web từ Twitter cao hơn 27% so với tuần trước.</p>
                                                <span class="timestamp">4 giờ chiều hôm nay</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <div class="media-left">
                                                <i class="icon-info text-danger"></i>
                                            </div>
                                            <div class="media-body">
                                                <p class="text">Lỗi trong cấu hình phân tích trang web</p>
                                                <span class="timestamp">Yesterday</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="footer"><a href="javascript:void(0);" class="more">Xem tất cả thông báo</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown"><i class="fa-solid fa-sliders"></i></a>
                            <ul class="dropdown-menu user-menu menu-icon">
                                <li class="menu-heading">ACCOUNT SETTINGS</li>
                                <li><a href="javascript:void(0);"><i class="icon-note"></i> <span>Cơ Bản</span></a></li>
                                <li><a href="javascript:void(0);"><i class="fa-solid fa-sliders"></i> <span>Tùy chọn </span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-lock"></i> <span>Quyền riêng tư</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-bell"></i> <span>Thông Báo</span></a></li>
                                <li class="menu-heading">BILLING</li>
                                <li><a href="javascript:void(0);"><i class="icon-credit-card"></i> <span>Thanh Toán</span></a></li>
                                <li><a href="javascript:void(0);"><i class="icon-printer"></i> <span>Hóa Đơn</span></a></li>                                
                                <li><a href="javascript:void(0);"><i class="icon-refresh"></i> <span>Gia Hạn</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="page-login.html" class="icon-menu"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
       </>
    )
}