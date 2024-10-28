"use client";
import useSWR from "swr";
import "../../../../../public/css/user/giaithuong.css";
import GoiTongDai from "../../Components/Goitongdai";
export default function GiaiThuong({ params }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: baiviet, error: errorBaiviet, isLoading: isLoadingBaiviet } = useSWR(`http://localhost:3000/baiviet/${params.id}`, fetcher);
    if (errorBaiviet) return <strong>Lỗi...</strong>
    if (isLoadingBaiviet) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="container-body">
                        <div class="container-1">
                            <div class="container-body-1">
                                <div class="cc-picture">
                                    <img src="/images/img/giải thưởng/baner-capcuu.png" alt="" />
                                </div>
                                <div class="tt-bread">
                                    <a href="#" class="tt-item">Trang chủ</a>
                                    <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                    <span class="tt-item tt-item-1 gt-item">Về Healthcare</span>
                                    <i class="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                    <span class="tt-item tt-item-1 tt-item-color">Giải thưởng</span>
                                </div>
                                <div class="gt-post-detail">
                                    <div class="gt-post-detail-1">
                                        <h1 class="gt-line">{baiviet.ten}
                                        </h1>
                                    </div>
                                </div>
                                <div class="gt-detail-content">
                                    <div class="gt-post-detail-1 gt-main-col">
                                        <div class="gt-main-article">
                                            <p>
                                                <b>{baiviet.mota}</b>
                                            </p>
                                            <p>Anh hùng lao động, thầy thuốc nhân dân, GS.TS Nguyễn Viết Tiến – Thứ trưởng Bộ Y
                                                tế
                                                và PGS.TS Nguyễn Thị Xuyên – nguyên Thứ trưởng Bộ Y tế, chủ tịch Tổng hội Y học
                                                Việt
                                                Nam, chủ tịch Quỹ Ngày mai tươi sáng đã thay mặt Bộ trưởng Bộ Y tế trao tặng
                                                bằng
                                                khen, ghi nhận sự đồng hành tích cực của nhiều cá nhân, tổ chức với bệnh nhân
                                                ung
                                                thư khắp cả nước.</p>
                                            <p>Trong đó, Hệ thống Y tế Healthcare vinh dự được trao tặng bằng khen của Bộ Y tế
                                                vì đã
                                                đạt
                                                thành tích xuất sắc trong công tác tổ chức khám sàng lọc một số bệnh ung thư cho
                                                cộng đồng năm 2017.</p>
                                            <div class="gt-anh">
                                                <div class="gt-anh-1">
                                                    <img src="/images/img/giải thưởng/anh-gt.jpg" alt="" />
                                                </div>
                                                <div class="gt-caption">
                                                    <div class="gt-rich-text">
                                                        GS.TS.BS. Thầy thuốc Nhân dân Đỗ Tất Cường, Phó Tổng giám đốc Hệ thống Y
                                                        tế
                                                        Healthcare (thứ ba từ phải sang) đại diện Healthcare nhận bằng khen của
                                                        Bộ
                                                        trưởng Bộ
                                                        Y tế
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Hệ thống Y tế Healthcare đã phối hợp chặt chẽ với Quỹ Hỗ trợ Bệnh nhân Ung thư -
                                                Ngày
                                                mai
                                                tươi sáng và Bệnh viện K (Bộ Y tế) tổ chức chương trình miễn phí “Sàng lọc và
                                                phát
                                                hiện sớm một số bệnh ung thư” từ ngày 9/9 tới 18/10/2017, nhằm nâng cao nhận
                                                thức
                                                của cộng đồng về phòng và phát hiện sớm bệnh ung thư; tạo thói quen chủ động tầm
                                                soát định kỳ phát hiện sớm ung thư.</p>
                                            <p>Trong suốt thời gian diễn ra chương trình, Hệ thống Y tế Healthcare cùng Quỹ Hỗ
                                                trợ
                                                bệnh
                                                nhân ung thư – Ngày mai tươi sáng và Bệnh viện K đã hợp tác chặt chẽ với cán bộ
                                                y tế
                                                tại tất cả 18 điểm khám, đảm bảo toàn diện công tác tiếp đón, hỗ trợ hướng dẫn
                                                và
                                                sàng lọc cho người dân. 3 bệnh viện thuộc Hệ thống Y tế Healthcare (Bệnh viện Đa
                                                khoa
                                                Quốc tế Healthcare Times City, Healthcare Hạ Long, Healthcare Central Park) đã
                                                tích
                                                cực trực
                                                tiếp tham gia thăm khám, sàng lọc, tư vấn miễn phí, nhận được sự đánh giá cao
                                                của
                                                cộng đồng xã hội.</p>
                                            <div class="gt-anh">
                                                <div class="gt-anh-1">
                                                    <img src="/images/img/giải thưởng/anh-benhnhan.jpg" alt="" />
                                                </div>
                                                <div class="gt-caption">
                                                    <div class="gt-rich-text">
                                                        Người dân tham gia sàng lọc ung thư miễn phí tại Healthcare Times City
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Chương trình nhận được sự ủng hộ lớn của nhiều bệnh viện lớn trên toàn quốc các
                                                điểm
                                                khám cộng đồng tại trạm y tế xã/phường. Gần 20.000 người dân 8 tỉnh thành trên
                                                cả
                                                nước đã được sàng lọc và tư vấn ung thư vú, ung thư cổ tử cung, ung thư đại trực
                                                tràng.</p>
                                            <p>Thông qua sàng lọc, 695 người dân có kết quả xét nghiệm ung thư dương tính hoặc
                                                có
                                                triệu chứng lâm sàng nghi ngờ ung thư đã được tư vấn và thực hiện các xét nghiệm
                                                chuyên sâu ( <a class="gt-sieuam" href="#"><b>siêu âm vú</b></a>, chụp nhũ ảnh,
                                                nội
                                                soi đại trực tràng, sinh
                                                thiết cổ tử
                                                cung...) nhằm chẩn đoán xác định và kịp thời điều trị.</p>
                                            <p>
                                                Đặc biệt, qua sàng lọc, những trường hợp phát hiện mắc ung thư sẽ được Quỹ Thiện
                                                Tâm
                                                (Tập đoàn Vingroup) hỗ trợ chi phí điều trị lên tới 70- 100% tại các Bệnh viện
                                                Đa
                                                khoa Quốc tế Healthcare trên cả nước.
                                            </p>
                                            <div class="gt-anh">
                                                <div class="gt-anh-1">
                                                    <img src="/images/img/giải thưởng/anh-chuongtrinh.jpg" alt="" />
                                                </div>
                                                <div class="gt-caption">
                                                    <div class="gt-rich-text">
                                                        Chương trình sàng lọc ung thư miễn phí nhận được sự hưởng ứng lớn từ
                                                        nhiều
                                                        bệnh viện lớn cũng như người dân khắp cả nước
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Trước đó, nhân dịp kỷ niệm 70 năm ngày Thương binh liệt sĩ 27/07/2017, Hệ thống Y
                                                tế
                                                Healthcare cũng triển khai chương trình xét nghiệm miễn phí ADN định danh liệt
                                                sĩ.
                                                Đây
                                                là hoạt động tri ân các anh hùng liệt sĩ đã hi sinh vì Tổ quốc, đồng thời thiết
                                                thực
                                                hỗ trợ các gia đình có hoàn cảnh khó khăn đang tìm mộ người thân là liệt sĩ trên
                                                toàn quốc.</p>
                                            <p>Song song với việc triển khai chương trình Sàng lọc - phát hiện một số bệnh ung
                                                thư
                                                và miễn phí xét nghiệm ADN định danh liệt sĩ, trong năm 2017, Hệ thống Y tế
                                                Healthcare
                                                tạo dấu ấn mạnh mẽ trong cộng đồng xã hội nhờ đồng loạt triển khai chương trình
                                                phẫu
                                                thuật từ thiện (100% chi phí) cho bệnh nhân nghèo, người có hoàn cảnh khó khăn,
                                                người có công với cách mạng dưới sự hỗ trợ lên tới 1.500 tỉ đồng từ Quỹ Thiện
                                                Tâm
                                                (Tập đoàn Vingroup). Hơn 3.700 hồ sơ đã được tiếp nhận, hơn 1.700 bệnh nhân đã
                                                được
                                                điều trị.</p>
                                            <p>Nhiều chuyên khoa như ung bướu, tim mạch, ghép tạng, ghép tế bào gốc, phẫu thuật
                                                tiết
                                                niệu, tiêu hóa, chấn thương chỉnh hình, sản phụ khoa...., trên toàn Hệ thống Y
                                                tế
                                                Healthcare đã chữa trị thành công và mang tới cuộc sống tốt đẹp cho người bệnh
                                                trên
                                                khắp
                                                cả nước.</p>
                                            <p><b>Xem thêm:</b></p>
                                            <ul>
                                                <li>
                                                    <a class="gt-sieuam" href="#">
                                                        <b> Healthcare Đà Nẵng & OW phẫu thuật thay khớp miễn phí cho bệnh nhân
                                                            nghèo miền Trung</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <b>Quỹ thiện tâm và Healthcare “ra tay nghĩa hiệp” giúp bé Huế giữ được quả
                                                        thận</b>
                                                </li>
                                                <li>
                                                    <a class="gt-sieuam" href="#">
                                                        <b> Phẫu thuật miễn phí thay khớp gối và khớp háng cho người nghèo,
                                                            có hoàn cảnh khó khăn</b>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="gt-meta-bottom">
                                            <div class="gt-share">
                                                chia sẻ
                                                <ul class="gt-socical-share">
                                                    <li>
                                                        <a href="#">
                                                            <img src="/images/img/giải thưởng/facebook.png" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="/images/img/giải thưởng/x.png" alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="/images/img/giải thưởng/link.png" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul class="gt-list-subtitle">
                                            <li>
                                                <a href="#">Sàng lọc ung thư</a>
                                            </li>
                                            <li>
                                                <a href="#">Bằng khen</a>
                                            </li>
                                            <li>
                                                <a href="#">Ung thư</a>
                                            </li>
                                            <li>
                                                <a href="#">Hoạt động bệnh viện</a>
                                            </li>
                                            <li>
                                                <a href="#">Ung bướu</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="gt-sidebar">
                                        <div class="gt-widget-post-sidebar">
                                            <div class="gt-widget-title">
                                                Có thể bạn quan tâm
                                            </div>
                                            <div class="gt-widget-content">
                                                <div class="gt-post">
                                                    <a class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-1.jpg" alt="" />
                                                    </a>
                                                    <div class="gt-post-info">
                                                        <a href="#">GS Nguyễn Thanh Liêm - Viện trưởng Viện nghiên cứu Tế bào
                                                            gốc &
                                                            Công nghệ gen Healthcare nhận giải thưởng Nikkei Châu Á</a>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <a class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-2.jpg" alt="" />
                                                    </a>
                                                    <div class="gt-post-info">
                                                        <a href="#">Healthcare đạt giải thưởng “Bệnh viện Việt Nam tiến bộ nhất”
                                                            của
                                                            hiệp hội Quản lý Bệnh viện châu Á</a>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <a class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-3.jpg" alt="" />
                                                    </a>
                                                    <div class="gt-post-info">
                                                        <a href="#">GS Nguyễn Thanh Liêm được vinh danh là 1 trong 100 nhà khoa
                                                            học
                                                            tiêu biểu châu Á 2019</a>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <a class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-4.jpg" alt="" />
                                                    </a>
                                                    <div class="gt-post-info">
                                                        <a href="#">GS Nguyễn Thanh Liêm được trao danh hiệu “Công dân thủ đô ưu
                                                            tú”</a>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <a class="gt-post-thumb-1" href="#">
                                                        <img src="/images/img/giải thưởng/pro-5.png" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gt-related-posts">
                                <div class="gt-related-title">Bài viết liên quan</div>
                                <div class="tt-thanhtich-nhieu">
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-7.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Sử dụng thuốc điều trị ung thư di căn
                                                        xương</h5>
                                                </a>
                                                <p class="card-text" id="card-text">Các loại ung thư chính có xu hướng di căn
                                                    đến xương bao gồm ung thư đa u tủy, ung thư vú, ung thư tuyến tiền liệt,...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-8.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Hút shisha: Mùi hương của sự chết
                                                        chóc</h5>
                                                </a>
                                                <p class="card-text" id="card-text">Hút Shisha là một hoạt động giải trí phổ
                                                    biến ở nhiều quốc gia trên thế giới, đặc biệt là ở các nước Trung Đông và
                                                    châu....
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-9.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Nuôi cấy tăng sinh EX vivo tế bào
                                                        diệt tự nhiên và tế bào tê gây độc từ máu ngoại vi các bệnh nhân ung thư
                                                        phổi
                                                    </h5>
                                                </a>
                                                <p class="card-text" id="card-text">Tác giả: Hoàng Thị Mỹ Nhung 1,2*, Bùi Việt
                                                    Anh 1*, Trương Linh Huyền 1, Đoàn Trung Hiệp 3, Chu Thị Thảo 1, Phùng...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-10.png"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Điều trị ung thư di căn xương bằng
                                                        thuốc
                                                    </h5>
                                                </a>
                                                <p class="card-text" id="card-text">Có một số phương pháp điều trị ung thư di
                                                    căn xương như xạ trị, đốt khối u, sử dụng thuốc hay phẫu thuật. Khi điều
                                                    trị...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-12.jpg"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">Healthcare đạt giải thưởng “Bệnh viện
                                                        Việt Nam tiến bộ nhất” của hiệp hội Quản lý Bệnh viện châu Á
                                                    </h5>
                                                </a>
                                                <p class="card-text" id="card-text">Bệnh viện Đa khoa Quốc tế Healthcare Times
                                                    City
                                                    được trao danh hiệu “Bệnh viện Việt Nam tiến bộ nhất” trong lĩnh...
                                                </p>
                                                <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                                    <span class="btn-size">
                                                        <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tt-thanhtich-nhieu-1">
                                        <div class="card card-thanhtich" id="card-boder">
                                            <a href="#">
                                                <img class="cart-anh card-img-top" src="/images/img/giải thưởng/pro-11.png"
                                                    alt="..." />
                                            </a>
                                            <div class="card-body" id="card-body">
                                                <a href="#">
                                                    <h5 class="card-title" id="card-title">10 thực phẩm tốt nhất trong phòng
                                                        ngừa và điều trị ung thư
                                                    </h5>
                                                </a>
                                                <p class="card-text" id="card-text">Trong thời đại hiện nay, ung thư đang là một
                                                    trong những căn bệnh gây ra nhiều ca tử vong trên toàn thế giới. Tuy
                                                    nhiên,...
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
                            <div class="tt-bottom-main">
                                <span class="tt-widget tt-boder-right">
                                    <a href="#">
                                        Câu chuyện khách hàng
                                    </a>
                                </span>
                                <span class="tt-widget tt-boder-right">
                                    <a href="#">
                                        Thông tinh sức khỏe
                                    </a>
                                </span>
                                <span class="tt-widget">
                                    <a href="#">
                                        Sống khỏe
                                    </a>
                                </span>
                            </div>
                            <div class="tt-medium">
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/giải thưởng/pro-6.jpg" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare thực hiện thành công ca phẫu
                                                thuật
                                                tái tạo lồng ngực bằng titan ứng dụng công nghệ in 3d đầu tiên ở Đông Nam Á</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="card" id="card-boder-medium">
                                    <a href="#">
                                        <img src="/images/img/thông tin/product/pro-12.jpg" class="card-img-top" alt="..." />
                                    </a>
                                    <div class="card-body" id="card-medium">
                                        <a href="#">
                                            <p class="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở không
                                                Morphin
                                                giảm đau đầu tiên trên thế giới</p>
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
                            </div>
                            <div class="gt-banner-block">
                                <a class="gt-block-anh" href="#">
                                    <img src="/images/img/giải thưởng/banner-block.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}