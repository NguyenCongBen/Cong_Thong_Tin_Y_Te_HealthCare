"use client";
import useSWR from "swr";
import "../../../../public/css/user/tintuc.css";
import BaiViet from "../Components/Baiviet";
import GoiTongDai from "../Components/Goitongdai";
export default function TinTuc() {
    return (
        <>
            <main>
                <GoiTongDai />
                <div className="container-all">
                    <div className="container-body">
                        <div className="container-1">
                            <div className="tt-bread">
                                <a href="#" className="tt-item">Trang chủ</a>
                                <i className="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                <span className="tt-item tt-item-1 tt-item-color">Về Healthcare</span>
                            </div>
                            <div className="tt-main-new">
                                <div className="tt-hot">
                                    {/* bài viết hot */}
                                    <div className="card">
                                        <a href="/giaithuong" className="tt-card-hot">
                                            <img className="cart-anh cart-anh-1 card-img-top" src="/images/img/thông tin/product/pro-1.jpg" alt="..." />
                                            <div className="card-body card-body-1">
                                                <h5 className="card-title" id="card-color">GS Nguyễn Thanh Liêm - Viện trưởng Viện
                                                    nghiên cứu Tế bào gốc & Công nghệ gen Healthcare nhận giải thưởng Nikkei
                                                    Châu Á
                                                </h5>
                                                <p className="card-text" id="card-color">Ngày 13/6/2018 tại Tokyo (Nhật Bản), Hãng
                                                    Thông tấn Nikkei đã trao giải thưởng Nikkei Châu Á cho GS.TS Nguyễn Thanh
                                                    Liêm -
                                                    Viện
                                                    trưởng Viện Nghiên cứu tế bào gốc & công nghệ Gen Healthcare. GS Nguyễn
                                                    Thanh
                                                    Liêm
                                                    là một trong ba nhà khoa học tiêu biểu của châu Á được trao tặng giải thưởng
                                                    Nikkei năm 2018 và là giáo sư bác sỹ đầu tiên của Việt Nam được vinh danh
                                                    trong
                                                    lĩnh vực khoa học công nghệ.</p>
                                                <span className="btn-size">
                                                    Xem thêm
                                                    <img src="/images/img/thông tin/product/icon.png" alt="" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="tt-thanhtich">
                                    {/* bài viết thành tựu */}
                                    <div className="tt-thanhtich-1">
                                        <div className="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img className="cart-anh card-img-top" src="/images/img/thông tin/product/pro-2.jpg"
                                                    alt="..." />
                                            </a>
                                            <div className="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 className="card-title" id="card-title">Healthcare nhận bằng khen của Bộ Y tế
                                                        vì
                                                        đóng
                                                        góp tích cực
                                                        cho cộng đồng</h5>
                                                </a>

                                                <p className="card-text" id="card-text">Trong chương trình giao lưu nghệ thuật tối
                                                    21/12 do Quỹ Hỗ
                                                    trợ bệnh nhân ung thư - Ngày mai Tươi sáng (Bộ Y tế) tổ chức, Healthcare đã
                                                    vinh...
                                                </p>
                                                <a href="#" className="btn" id="tt-xemthem">Xem thêm
                                                    <span className="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tt-thanhtich-1">
                                        <div className="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img className="cart-anh card-img-top" src="/images/img/thông tin/product/pro-3.jpg"
                                                    alt="..." />
                                            </a>
                                            <div className="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 className="card-title" id="card-title">Healthcare đạt giải thưởng “Bệnh viện
                                                        Việt
                                                        Nam tiến bộ nhất” của hiệp hội Quản lý Bệnh viện châu Á</h5>
                                                </a>

                                                <p className="card-text" id="card-text">Bệnh viện Đa khoa Quốc tế Healthcare Times
                                                    City
                                                    được trao danh hiệu “Bệnh viện Việt Nam tiến bộ nhất” trong lĩnh vực “Thực
                                                    hành an toàn...
                                                </p>
                                                <a href="#" className="btn" id="tt-xemthem">Xem thêm
                                                    <span className="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tt-bottom-new">
                                <div className="tt-baiviet">
                                    <h2 className="tt-baiviet-1">Bài viết mới nhất</h2>
                                </div>
                                <div className="tt-boder-luc"></div>
                                <div className="tt-list-cate">
                                    <a href="#">Giải thưởng</a>
                                    <a href="#">Hoạt động nghiêng cứu</a>
                                    <a href="#">Hoạt động bệnh viện</a>
                                    <a href="#">Câu chuyện khách hàng</a>
                                    <a href="#">Làm việc tại Healthcare</a>
                                    <a href="#">Hoạt động đào tạo</a>
                                    <a href="#">Thành tựu và giải thưởng</a>
                                </div>
                                <div className="tt-thanhtich-nhieu">
                                    <BaiViet />
                                </div>
                            </div>
                            <div className="tt-phantrang">
                                <a href="#" className="tt-item-paging active">1</a>
                                <a href="#" className="tt-item-paging active-1">2</a>
                                <a href="#" className="tt-item-paging active-1">3</a>
                                <a href="#" className="tt-item-paging active-1">4</a>
                                <a href="#" className="tt-item-paging">
                                    <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                </a>
                            </div>
                            <div className="tt-bottom-main">
                                <span className="tt-widget tt-boder-right">
                                    <a href="#">
                                        Câu chuyện khách hàng
                                    </a>
                                </span>
                                <span className="tt-widget tt-boder-right"><a href="#">
                                    Thông tinh sức khỏe
                                </a>
                                </span>
                                <span className="tt-widget"><a href="#">
                                    Dịch vụ bảo hiểm
                                </a>
                                </span>
                            </div>
                            <div className="tt-medium">
                                <div className="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-12.jpg" className="card-img-top" alt="..." />
                                    </a>
                                    <div className="card-body" id="card-medium">
                                        <a href="#">
                                            <p className="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở không
                                                Morphin
                                                giảm đau đầu tiên trên
                                                thế giới</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-13.png" className="card-img-top" alt="..." />
                                    </a>
                                    <div className="card-body" id="card-medium">
                                        <a href="#">
                                            <p className="card-text" id="tt-medium-size">Ung thư xương: Mẹ của “chiến binh” cũng là
                                                chiến binh</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-14.jpg" className="card-img-top" alt="..." />
                                    </a>
                                    <div className="card-body" id="card-medium">
                                        <a href="#">
                                            <p className="card-text" id="tt-medium-size">Healthcare phẫu thuật thành công cho 2 mẹ
                                                con
                                                cùng bị chèn ép dây thần kinh số 7, co giật mặt nhiều năm</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-15.jpg" className="card-img-top" alt="..." />
                                    </a>
                                    <div className="card-body" id="card-medium">
                                        <a href="#">
                                            <p className="card-text" id="tt-medium-size">“Nhờ được ghép tế bào gốc tại Healthcare,
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