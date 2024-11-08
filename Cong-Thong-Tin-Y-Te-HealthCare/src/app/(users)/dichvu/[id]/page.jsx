"use client";
import Link from "next/link";
import useSWR from "swr";
import "../../../../../public/css/user/chitietdichvu.css";
import GoiTongDai from "../../Components/Goitongdai";

export default function DetailDichvu({ params }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: service, error: errorService, isLoading: isLoadingService } = useSWR(`http://localhost:3000/dich-vu/${params.id}`, fetcher);
    if (errorService) return <strong>Lỗi dịch vụ</strong>
    if (isLoadingService) return <strong>Lỗi load dữ liệu</strong>
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
                                    <Link href="/" class="tt-item">Trang chủ</Link>
                                    <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                    <Link href="/tintuc" class="tt-item tt-item-1 gt-item">Chăm sóc khách hàng</Link>
                                    <i class="fa-solid fa-angle-right tt-mr"></i>
                                    <span class="tt-item-1 tt-ml">Dịch vụ y tế</span>
                                </div>
                                <div class="gt-post-detail">
                                    <div class="gt-post-detail-1">
                                        <h1 class="gt-line">{service.ten_dich_vu}
                                        </h1>
                                    </div>
                                </div>
                                <div class="gt-detail-content">
                                    <div class="gt-post-detail-1 gt-main-col">
                                        <div class="gt-main-article">
                                            <div class="gt-anh">
                                                <div class="gt-anh-1">
                                                    <img src={`http://localhost:3000/images/img/dịch vụ/${service.image}`} alt="" />
                                                </div>
                                                <p>{service.mo_ta}</p>
                                                <p>Với giá chỉ: {service.don_gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                                <p>Trong suốt thời gian diễn ra chương trình, Hệ thống Y tế Healthcare cùng Quỹ
                                                    Hỗ trợ bệnh nhân ung thư – Ngày mai tươi sáng và Bệnh viện K đã hợp tác chặt
                                                    chẽ với cán bộ y tế tại tất cả 18 điểm khám, đảm bảo toàn diện công tác tiếp
                                                    đón, hỗ trợ hướng dẫn và sàng lọc cho người dân. 3 bệnh viện thuộc Hệ thống
                                                    Y tế Healthcare (Bệnh viện Đa khoa
                                                    Quốc tế Healthcare Times City, Healthcare Hạ Long, Healthcare Central Park)
                                                    đã tích cực trực tiếp tham gia thăm khám, sàng lọc, tư vấn miễn phí, nhận
                                                    được sự đánh giá cao của cộng đồng xã hội.</p>
                                            </div>
                                            <div class="gt-anh">
                                                <h3>1. Chi tiết gói khám</h3>
                                                <p>● Khám chuyên khoa;</p>
                                                <p>● Điện tim thường;</p>
                                                <p>● Siêu âm tim, màng tim qua thành ngực;</p>
                                                <p>● Siêu âm ổ bụng (gan mật, tụy, lách, thận, bàng quang);</p>
                                                <p>● Siêu âm doppler động mạch cảnh, doppler xuyên sọ (động mạch cảnh);</p>
                                                <p>● Siêu âm doppler động mạch, tĩnh mạch chi dưới (Động mạch chi dưới hai bên);
                                                </p>
                                                <p>● Siêu âm Doppler mạch máu ổ bụng (động mạch chủ, mạc treo tràng trên, thân
                                                    tạng...) (động mạch chủ & động mạch thận);
                                                </p>
                                                <p>● Chụp cắt lớp vi tính động mạch vành, tim (chụp động mạch vành);</p>
                                                <p>● Chụp X Quang ngực thẳng;</p>
                                                <p>
                                                    <strong>● Các xét nghiệm:</strong>
                                                </p>
                                                <p>● Định lượng Creatinin;</p>
                                                <p>● Điện giải đồ (Na, K, Cl);</p>
                                                <p>● Định lượng Glucose;</p>
                                                <p>● Đo hoạt độ AST (GOT);</p>
                                            </div>
                                            <div class="gt-anh">
                                                <h3>2. Đối tượng áp dụng</h3>
                                                <ul>
                                                    <li>Các khách hàng chưa có tiền sử bệnh lý tim mạch trước đó. Đặc biệt là
                                                        khách hàng có nguy cơ (tiền sử gia đình, hút thuốc, thừa cân, ít vận
                                                        động, bệnh lý tuyến giáp, rối loạn chuyển hóa Lipid máu) hoặc có các
                                                        triệu chứng tim mạch (đau ngực, khó thở, thở gấp, hồi hộp trống
                                                        ngực...); ngoài ra người bệnh có những dấu hiệu sau nên được sử dụng gói
                                                        càng sớm càng tốt:</li>
                                                    <li>Chân tay lạnh;</li>
                                                    <li>Lo lắng, mất ngủ;</li>
                                                    <li> Đau vai, cổ tay;</li>
                                                    <li> Mệt mỏi không rõ nguyên nhân;</li>
                                                    <li> Ra mồ hôi trộm, khó tiêu;</li>
                                                    <li> Sưng phù chân;</li>
                                                    <li> Thường xuyên đau nửa đầu;</li>
                                                    <li> Có cảm giác đau thắt khi đi bộ;</li>
                                                </ul>
                                                <p>● Các khách hàng có nguy cơ tim mạch từ trung bình trở lên;</p>
                                                <p>● Áp dụng phù hợp với khách hàng có nhu cầu muốn kiểm tra toàn diện, tổng
                                                    quát về tim mạch.</p>
                                            </div>
                                            <div class="gt-anh">
                                                <h3>3. Tại sao nên chọn Healthcare</h3>
                                                <p>● Đội ngũ y - bác sỹ là các bác sĩ tận tụy và hết lòng vì lợi ích của bệnh
                                                    nhân, mang đến hiệu quả cao trong điều trị khám chữa bệnh.</p>
                                                <p>● Khoa Tim mạch của Vinmec áp dụng quản lý thực hành lâm sàng trong điều trị
                                                    suy tim và can thiệp mạch vành theo tiêu chuẩn của Trường môn tim mạch Hoa
                                                    kỳ (ACC).</p>
                                                <p>● Khoa Tim mạch nằm trong Bệnh viện ĐKQT Vinmec Times City đạt chứng nhận JCI
                                                    về thực hành trong quản lý chất lượng và an toàn người bệnh.</p>
                                                <p>● Hội đồng thăm khám, kết hợp chặt chẽ giữa nhiều chuyên khoa, đảm bảo người
                                                    bệnh được hỗ trợ một cách toàn diện nhất trong quá trình điều trị.</p>
                                                <p>● Thời gian khám nhanh gọn, được tư vấn kỹ càng, dễ dàng tuân thủ quản lý
                                                    điều trị.</p>
                                                <p>● Người bệnh là trung tâm, được theo dõi và quản lý sát sao tình trạng bệnh
                                                    từ khi sàng lọc, chẩn đoán, điều trị và theo dõi sau điều trị.</p>
                                            </div>
                                            <div class="gt-anh">
                                                <h3>4. Danh sách bệnh viện áp dụng Gói sàng lọc bệnh lý tim mạch do xơ vữa:</h3>
                                                <p>Bệnh viện Đa khoa Quốc tế Vinmec Times City</p>
                                                <p>Địa chỉ: Số 458, phố Minh Khai, phường Vĩnh Tuy, quận Hai Bà Trưng, Thành phố
                                                    Hà Nội.</p>
                                                <p>Để đặt lịch khám tại viện, Quý khách vui lòng bấm số <Link class="gt-sieuam"
                                                    href="#"> <b>HOTLINE</b></Link> hoặc đặt lịch
                                                    trực tiếp <Link class="gt-sieuam" href="#"> <b>TẠI ĐÂY</b></Link>. Tải và đặt
                                                    lịch khám tự động trên <Link class="gt-sieuam" href="#"><b>ứng dụng
                                                        MyHealthcare</b></Link> để quản lý, theo dõi lịch và đặt hẹn mọi lúc
                                                    mọi nơi ngay trên ứng dụng.</p>
                                            </div>
                                        </div>
                                        <div class="gt-meta-bottom">
                                            <div class="gt-share">
                                                chia sẻ
                                                <ul class="gt-socical-share">
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/images/img/giải thưởng/facebook.png" alt="" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/images/img/giải thưởng/x.png" alt="" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <img src="/images/img/giải thưởng/link.png" alt="" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gt-sidebar">
                                        <div class="gt-widget-post-sidebar">
                                            <div class="gt-widget-title">
                                                Có thể bạn quan tâm
                                            </div>
                                            <div class="gt-widget-content">
                                                <div class="gt-post">
                                                    <Link class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-1.jpg" alt="" />
                                                    </Link>
                                                    <div class="gt-post-info">
                                                        <Link href="#">GS Nguyễn Thanh Liêm - Viện trưởng Viện nghiên cứu Tế bào
                                                            gốc &
                                                            Công nghệ gen Healthcare nhận giải thưởng Nikkei Châu Á</Link>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <Link class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-2.jpg" alt="" />
                                                    </Link>
                                                    <div class="gt-post-info">
                                                        <Link href="#">Healthcare đạt giải thưởng “Bệnh viện Việt Nam tiến bộ nhất”
                                                            của
                                                            hiệp hội Quản lý Bệnh viện châu Á</Link>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <Link class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-3.jpg" alt="" />
                                                    </Link>
                                                    <div class="gt-post-info">
                                                        <Link href="#">GS Nguyễn Thanh Liêm được vinh danh là 1 trong 100 nhà khoa
                                                            học
                                                            tiêu biểu châu Á 2019</Link>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <Link class="gt-post-thumb" href="#">
                                                        <img src="/images/img/giải thưởng/pro-4.jpg" alt="" />
                                                    </Link>
                                                    <div class="gt-post-info">
                                                        <Link href="#">GS Nguyễn Thanh Liêm được trao danh hiệu “Công dân thủ đô ưu
                                                            tú”</Link>
                                                    </div>
                                                </div>
                                                <div class="gt-post">
                                                    <Link class="gt-post-thumb-1" href="#">
                                                        <img src="/images/img/giải thưởng/pro-5.png" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gt-related-posts">
                                <div class="gt-related-title">Bài viết liên quan</div>
                                <div class="tt-bottom-main">
                                    <span class="tt-widget tt-boder-right">
                                        <Link href="#">
                                            Câu chuyện khách hàng
                                        </Link>
                                    </span>
                                    <span class="tt-widget tt-boder-right">
                                        <Link href="#">
                                            Thông tinh sức khỏe
                                        </Link>
                                    </span>
                                    <span class="tt-widget">
                                        <Link href="#">
                                            Sống khỏe
                                        </Link>
                                    </span>
                                </div>
                                <div class="tt-medium">
                                    <div class="card" id="card-boder-medium">
                                        <Link href="#">
                                            <img src="/images/img/giải thưởng/pro-6.jpg" class="card-img-top" alt="..." />
                                        </Link>
                                        <div class="card-body" id="card-medium">
                                            <Link href="#">
                                                <p class="card-text" id="tt-medium-size">Healthcare thực hiện thành công ca phẫu
                                                    thuật tái tạo lồng ngực bằng titan ứng dụng công nghệ in 3d đầu tiên ở Đông
                                                    Nam Á</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="card" id="card-boder-medium">
                                        <Link href="#">
                                            <img src="/images/img/thông tin/product/pro-12.jpg" class="card-img-top" alt="..." />
                                        </Link>
                                        <div class="card-body" id="card-medium">
                                            <Link href="#">
                                                <p class="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở không
                                                    Morphin giảm đau đầu tiên trên thế giới</p>
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
                                                    là chiến binh</p>
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
                                </div>
                            </div>
                            <div class="gt-banner-block">
                                <Link class="gt-block-anh" href="#">
                                    <img src="/images/img/giải thưởng/banner-block.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}