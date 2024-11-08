import Link from "next/link";

export default function Header() {
    return (
        <>
            <header>
                <nav class="container-all">
                    <div className="tt-chucnang">
                        <div className="container-1">
                            <div className="tt-chucnang-1">
                                <ul className="tt-flex"></ul>
                                <ul className="tt-vaitro">
                                    <li>
                                        <Link className="tt-tinhnang" href="#">
                                            Tìm bác sĩ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="tt-tinhnang" href="#">
                                            Khóa học trực tuyến
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="tt-tinhnang" href="#">
                                            Chăm sóc khách hàng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="tt-tinhnang" href="/dltc">
                                            Đặt lịch thành công
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-1">
                        <nav className="navbar" id="navbar">
                            <div className="container-fluid" id="container-fluid">
                                <div className="tt-logo">
                                    <Link className="navbar-brand" href="/">
                                        <img src="/images/img/thông tin/logo.png" alt="" />
                                    </Link>
                                </div>
                                <div className="tt-search-all">
                                    <div className="tt-search">
                                        <div className="tt-form-none">
                                            <form className="d-flex" role="search">
                                                <div className="tt-search-1">
                                                    <button className="tt-button">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                    <input
                                                        className="form-control me-2"
                                                        id="tt-input"
                                                        type="search"
                                                        placeholder="Tiềm kiếm..."
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tt-datlich">
                                            <Link className="tt-icon" href="/datlich">
                                                <img src="/images/img/thông tin/calendar.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="tt-boder"></div>
                                        <div className="tt-icon-search">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <div className="tt-boder-1"></div>
                                    </div>
                                    <div className="tt-ngonngu">
                                        <div className="tt-anhvn">
                                            <img src="/images/img/thông tin/vie.png" alt="" />
                                        </div>
                                        <div className="tt-chon">
                                            <select
                                                className="form-select icon-only"
                                                id="tt-form-select"
                                                aria-label="Default select example"
                                            >
                                                <option value="1">English</option>
                                                <option value="2">Việt Nam</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="tt-boder-1"></div>
                                    <div className="tt-menu-icon">
                                        <button
                                            className="btn"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#staticBackdrop"
                                            aria-controls="staticBackdrop"
                                        >
                                            <i className="fa-solid fa-bars tt-menu-icon"></i>
                                        </button>

                                        <div
                                            className="offcanvas offcanvas-start"
                                            data-bs-backdrop="static"
                                            tabIndex="-1"
                                            id="staticBackdrop"
                                            aria-labelledby="staticBackdropLabel"
                                        >
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="staticBackdropLabel">
                                                    <Link href="tintuc.html">
                                                        <img src="/images/img/thông tin/logo.png" alt="" />
                                                    </Link>
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="offcanvas"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <div>
                                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseOne"
                                                                    aria-expanded="false"
                                                                    aria-controls="flush-collapseOne"
                                                                >
                                                                    Chuyên khoa
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="flush-collapseOne"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                                style={{ borderRadius: '5px' }}
                                                            >
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Cấp cứu</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Trung tâm tim mạch</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Trung tâm Ung bướu</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Trung tâm nhi</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu none-boder">
                                                                    <Link href="#">Còn nữa mà lười</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseTwo"
                                                                    aria-expanded="false"
                                                                    aria-controls="flush-collapseTwo"
                                                                >
                                                                    Hướng dẫn khách hàng
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="flush-collapseTwo"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                                style={{ borderRadius: '5px' }}
                                                            >
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="/lienhe">Liên hệ với chúng tôi</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="/hethong">Hệ thống Healthcare</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="/timbacsi">Tìm bác sĩ</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="/baohiem">Bảo hiểm</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu none-boder">
                                                                    <Link href="#">Còn nữa mà lười</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button accordion-button-none collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseFour"
                                                                    aria-expanded="false"
                                                                    aria-controls="flush-collapseFour"
                                                                >
                                                                    <Link href="hoatdong.html">Hoạt động vì cộng đồng</Link>
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseThree"
                                                                    aria-expanded="false"
                                                                    aria-controls="flush-collapseThree"
                                                                >
                                                                    Về Healthcare
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="flush-collapseThree"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#accordionFlushExample"
                                                                style={{ borderRadius: '5px' }}
                                                            >
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="/tamnhinvasumenh">Tầm nhìn và sứ mệnh</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Thành tựu và giải thưởng</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Đối tác của Healthcare</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu">
                                                                    <Link href="#">Làm việc tại Healthcare</Link>
                                                                </div>
                                                                <div className="accordion-body capcuu none-boder">
                                                                    <Link href="/tintuc">Tin tức</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="tt-line"></div>
                    <div class="container-1">
                        <div class="menu">
                            <nav class="navbar navbar-expand-lg" id="navbar">
                                <div class="container-fluid">
                                    <ul class="navbar-nav" id="tt-menu">
                                        <li class="nav-item">
                                            <Link class="nav-link active" href="#">Chuyên khoa</Link>
                                            <div class="muinhon"></div>
                                            <div class="drop-down-menu">
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="#">Cấp cứu</Link></li>
                                                    <li class="sub-menu-item"><Link href="/trungtamtimmach">Trung tâm Tim mạch</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Ung bướu</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Miễn dịch - Dị ứng</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Tiêu hoá - Gan mật</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Nhi</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Sức khoẻ phụ nữ</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Thẩm mỹ Healthcare-View</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Sức khoẻ tổng quát</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Mắt Healthcare-Alina</Link></li>
                                                </ul>
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="#">Nha khoa Healthcare View Premium</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Y học cổ truyền Healthcare-Sao Phương Đông</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Công nghệ cao</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Chấn thương chỉnh hình - Y học thể thao</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Viện nghiên cứu tế bào gốc và công nghệ Gen</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Vacxin</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Vú</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Thần kinh</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm chăm sóc sức khỏe tinh thần tích hợp</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="#">Hướng dẫn khách hàng</Link>
                                            <div class="muinhon"></div>
                                            <div class="drop-down-menu">
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="/lienhe">Liên hệ với chúng tôi</Link></li>
                                                    <li class="sub-menu-item"><Link href="/hethong">Hệ thống Healthcare</Link></li>
                                                    <li class="sub-menu-item"><Link href="/timbacsi">Tìm bác sĩ</Link></li>
                                                    <li class="sub-menu-item"><Link href="/baohiem">Bảo hiểm</Link></li>
                                                    <li class="sub-menu-item"><Link href="/baohiem">Dịch vụ bảo hiểm</Link></li>
                                                    <li class="sub-menu-item"><Link href="/dichvu">Dịch vụ y tế</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Thông tin hỗ trợ khác</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="/hoatdong">Hoạt động vì cộng đồng</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="/tintuc">Về Healthcare</Link>
                                            <div class="muinhon"></div>
                                            <div class="drop-down-menu">
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="/tamnhinvasumenh">Tầm nhìn và sứ mệnh</Link></li>
                                                    <li class="sub-menu-item"><Link href="/thanhtuu">Thành tựu và Giải thưởng</Link></li>
                                                    <li class="sub-menu-item"><Link href="/doitac">Đối tác của Healthcare</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Làm việc tại Healthcare</Link></li>
                                                    <li class="sub-menu-item"><Link href="/tintuc">Tin tức</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="#">Chuyên trang sức khỏe</Link>
                                            <div class="muinhon"></div>
                                            <div class="drop-down-menu" style={{ right: '0' }}>
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="/tintuc">Tổng hợp</Link></li>
                                                    <li class="sub-menu-item"><Link href="/tracuubenh">Tra cứu bệnh</Link></li>
                                                    <li class="sub-menu-item"><Link href="/cothenguoi">Hiểu về cơ thể bạn</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Tim mạch</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Ung bướu</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Miễn dịch - Dị ứng</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Tiêu hóa - Gan mật</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Nhi</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm sức khỏe phụ nữ</Link></li>
                                                </ul>
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="#">Chấn thương chỉnh hình - Y học thể thao</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Thần kinh</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm vú</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Thẩm mỹ</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Y học cổ truyền</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Tế bào gốc và Công nghệ Gen</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Trung tâm Công nghệ cao</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Sức khỏe tổng quát</Link></li>
                                                    <li class="sub-menu-item"><Link href="#">Hỏi đáp bác sĩ</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="#">Thông tin dược</Link>
                                            <div class="muinhon"></div>
                                            <div class="drop-down-menu" style={{ right: '0' }}>
                                                <ul>
                                                    <li class="sub-menu-item"><Link href="/tracuuthuoc">Tra cứu thuốc</Link></li>
                                                    <li class="sub-menu-item"><Link href="/sudungthuocantoan">Sử dụng thuốc an toàn</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav >
            </header >
        </>
    )
}