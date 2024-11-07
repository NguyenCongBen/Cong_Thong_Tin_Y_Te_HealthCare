"use client";
import Link from "next/link";
import useSWR from "swr";
import "../../../../../public/css/user/thongtinbacsi.css";
import GoiTongDai from "../../Components/Goitongdai";
export default function ThongTinBacSi({ params }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: doctor, error: errorDoctor, isLoading: isLoadingDoctor } = useSWR(`http://localhost:3000/doctor/${params.id}`, fetcher);
    if (errorDoctor) return <strong>Lỗi...</strong>
    if (isLoadingDoctor) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <Link href="/trangchu" class="tt-item">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="/timbacsi" class="tt-item">Tìm bác sĩ</Link>
                                <i class="fa-solid fa-angle-right gt-item"></i>
                                <p class="tt-item-1 cl-black">{doctor.ten}</p>
                            </div>
                            <div class="ct-profile_doctor">
                                <div class="ct-flex">
                                    <div class="ct-col-5">
                                        <div class="ct-avar_doctor">
                                            <Link href="#" class="ct-thumbblock">
                                                <img src={`http://localhost:3000/images/img/bác sĩ/pro-6.jpg`} alt="" />
                                            </Link>
                                            <div class="ct-flex-one">
                                                <div class="ct-blue">Kỹ thuật viên</div>
                                                <div class="ct-blue ct-f22">{doctor.ten}</div>
                                                <Link href="/datlich" class="ct-btn_book_detail_doctor">
                                                    <img src="/images/img/bác sĩ/calendar-w.png" alt="" />
                                                    Đăng ký khám
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="ct-blue ct-f18 ct-mt2">
                                            Giới thiệu
                                        </div>
                                        <div class="ct-mt2 ct-desc_detail">
                                            <div class="ct-cms">
                                                <p>
                                                    <strong>Kỹ thuật viên Trưởng Phạm Thanh Bắc </strong>
                                                    làm việc và học tập trong môi trường y tế - giáo dục là Bộ môn khoa CĐHA
                                                    Trường Đại Học Y Dược Huế, đây là một trong ba trường Đại học đào tạo về y
                                                    khoa chất lượng trong cả nước. Bệnh viện Trường Đại Học Y Dược Huế cũng là
                                                    một trong những địa chỉ tin cậy của người dân khu vực miền Trung - Tây
                                                    nguyên. Nên khi bước vào nghề luôn được quý Thầy cô, anh chị và đồng nghiệp
                                                    chỉ bảo dẫn dắt từ những ngày đầu. Vì đó luôn luôn chú trọng ứng dụng những
                                                    kiến thức được học, tích lũy vào công tác chuyên môn mong đem lại những kết
                                                    quả tốt nhất, chuẩn nhất cho khám chữa bệnh của người dân.
                                                </p>
                                                <p>Luôn mong muốn kết nối, xây dựng một đội ngũ kỹ thuật viên hình ảnh trong sự
                                                    đoàn kết thống nhất, vững mạnh kiến thức chuyên môn từ đó tạo ra một môi
                                                    trường làm việc khoa học, hiệu quả nhất.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct-col-7">
                                        <div class="ct-f14">
                                            <div class="ct-blue ct-f18">Chuyên môn</div>
                                            <div class="ct-mt1">
                                                Kỹ thuật viên trưởng khoa Chẩn đoán Hình ảnh
                                            </div>
                                            <div class="ct-line_ver"></div>
                                        </div>
                                        <div class="ct-f14">
                                            <div class="ct-blue ct-f18">Nơi làm việc</div>
                                            <div class="ct-mt1">
                                                <Link href="hethong.html">
                                                    Khoa Chẩn đoán hình ảnh - Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                </Link>
                                            </div>
                                            <div class="ct-line_ver"></div>
                                        </div>
                                        <div class="ct-mt40 ct-flex-1">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item" id="ct-accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button" id="ct-accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            Quá trình đào tạo
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body" id="ct-accordion-body">
                                                            <p>
                                                                08/2001 - 10/2005: Trường Đại Học Y Dược Huế chuyên ngành Kỹ
                                                                thuật Y học
                                                            </p>
                                                            <p>
                                                                08/2007 - 08/2011: Trường Đại Học Y Dược Huế chuyên ngành Kỹ
                                                                thuật hình ảnh Y Học
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item" id="ct-accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button" id="ct-accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="true" aria-controls="collapseTwo">
                                                            Kinh nghiệm làm việc
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse show"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body" id="ct-accordion-body">
                                                            <p>
                                                                10/2005 - 12/2021: Công tác tại Khoa Chẩn đoán hình ảnh - Bệnh
                                                                viện Trường Đại học Y Dược Huế với vai trò là kỹ thuật viên hình
                                                                ảnh. Tham gia công tác quản lý với vai trò kỹ thuật viên trưởng
                                                                khoa CĐHA 10/2016 cũng như quản lý hướng dẫn sinh viên học viên
                                                                KTHA đến học tập và thực hành
                                                            </p>
                                                            <p>
                                                                10/2005 - 12/2021: Làm việc tại bộ môn CĐHA - Trường Đại học Y
                                                                Dược huế, tham gia công tác giảng dạy lý thuyết và thực hành đối
                                                                tượng sinh viên chuyên ngành kỹ thuật hình ảnh Y học.
                                                            </p>
                                                            <p>
                                                                03/2022 - 02/2023: Công tác tại Trung tâm Chẩn đoán hình ảnh -
                                                                Bệnh viện Đa khoa Tâm Anh TP. HCM
                                                            </p>
                                                            <p>
                                                                03/2023 - Đến nay: Công tác tại khoa CĐHA - Bệnh viện Quốc tế
                                                                Vinmec Central Park
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item" id="ct-accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button" id="ct-accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="true" aria-controls="collapseThree">
                                                            Sách, báo, công trình nghiên cứu
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse show"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body" id="ct-accordion-body">
                                                            <div class="ct-cms">
                                                                <ul class="ct-list">
                                                                    <li>
                                                                        <p>Có nhiều sáng kiến cải tiến trong công việc chuyên
                                                                            ngành được ứng dụng vào thực tiễn lâm sàng: Kỹ thuật
                                                                            chụp Xquang cột sống toàn cảnh trên hệ thống X quang
                                                                            KTS DR-Fujifilm, Kỹ thuật chụp Xquang đặc biệt như
                                                                            HSG, Bàng quang - niệu đạo xuôi ngược dòng..</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Tham gia trong nhóm biên soạn Giáo trình và sách tham
                                                                            khảo cho đối tượng là kỹ thuật hình ảnh&nbsp;</p>
                                                                        <ul class="ct-list">
                                                                            <li>
                                                                                <p>
                                                                                    Giáo trình chụp Cộng hưởng từ. Xuất bản 2018
                                                                                    và tái bản 2020
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p>
                                                                                    Tia X chẩn đoán: Nguyên lý và các phương
                                                                                    pháp tạo ảnh. Xuất bản năm 2019
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p>
                                                                                    Giáo trình X-quang thông thường. Lưu hành
                                                                                    nội bộ 2021
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p>
                                                                                    Nguyên lý và kỹ thuật tạo ảnh cắt lớp vi
                                                                                    tính. Xuất bản tháng 5/2023.
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Báo cáo viên khóa đào tạo liên tục: Những kiến thức
                                                                            cần thiết trong chụp CLVT mạch máu” do Trường Đại
                                                                            học Y Dược Huế kết hợp với công ty Siemens
                                                                            Healthineers tổ chức năm 2020.
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Thành viên tham gia nhóm đề tài “ Ứng dụng phần mềm
                                                                            mô phỏng và xử lý hình ảnh y tế trong giảng dạy thực
                                                                            hành lâm sàng kỹ thuật hình ảnh” đạt giải nhất trong
                                                                            hội nghị lao động sáng tạo Trường Đại Học Y Dược Huế
                                                                            lần thứ Ĩ, năm 2021.
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Tham gia báo cáo chuyên đề trong hội nghị kỹ thuật
                                                                            điện quang và y học hạt nhân việt nam lần thứ X tổ
                                                                            chức năm 2022.
                                                                        </p>
                                                                    </li>
                                                                </ul>
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
                    </div>
                </div>
            </main>
        </>
    )
}