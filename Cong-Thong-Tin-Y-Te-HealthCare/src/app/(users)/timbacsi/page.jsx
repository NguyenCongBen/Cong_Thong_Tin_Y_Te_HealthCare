"use client";
import "../../../../public/css/user/timbacsi.css";
import Link from "next/link";
import GoiTongDai from "../Components/Goitongdai";
import useSWR from "swr";

export default function TimBacSi() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/doctor', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="cover-list-news">
                        <img src="/images/img/thành tựu/banner.jpg" alt="" />
                        <div class="name-cate-cover">Danh sách bác sĩ</div>
                        <div class="thanhtuu-bar_util">
                            <div class="thanhtuu-col-4 col-4-w color-blue">
                                <button type="button" class="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="/images/img/thành tựu/Phone.png" alt="" />
                                    <span>Gọi tổng đài</span>
                                </button>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="/datlich">
                                    <img src="/images/img/thành tựu/Calendar.png" alt="" />
                                    <span>Đặt lịch hẹn</span>
                                </Link>
                            </div>
                            <div class="thanhtuu-col-4 col-4-w">
                                <Link href="/timbacsi">
                                    <img src="/images/img/thành tựu/doctor.png" alt="" />
                                    <span>Tìm bác sĩ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread-1">
                                <Link href="#" class="tt-item">Trang chủ</Link>
                                <i class="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="#" class="tt-item-1 cl-black">Chuyên gia y tế</Link>
                            </div>
                            <div class="bs-fill_doctor">
                                <div class="bs-fill_doctor-1">
                                    <div class="bs-list_opttion_fill">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                                        aria-controls="flush-collapseOne">
                                                        <img src="/images/img/bác sĩ/icon-address.png" alt="" />
                                                        Lựa chọn cơ sở
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bs-list_opttion_fill active">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item" id="bs-accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                        aria-controls="flush-collapseTwo">
                                                        <img src="/images/img/bác sĩ/icon_chuyenmon.png" alt="" />
                                                        Yêu cầu chuyên môn
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bs-list_opttion_fill">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                        aria-controls="flush-collapseThree">
                                                        <img src="/images/img/bác sĩ/lang_doc.png" alt="" />
                                                        Ngôn ngữ
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bs-list_opttion_fill">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item" id="bs-accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                                        aria-controls="flush-collapseFour">
                                                        <img src="/images/img/bác sĩ/icon_work.png" alt="" />
                                                        Nghề Nghiệp
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseFour"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế Vinmec Central Park
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bs-list_opttion_fill">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseFive" aria-expanded="false"
                                                        aria-controls="flush-collapseFive">
                                                        <img src="/images/img/bác sĩ/icon_hocvi.png" alt="" />
                                                        Học hàm
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseFive"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện Đa khoa Quốc tế
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bs-list_opttion_fill">
                                        <div class="accordion accordion-flush bs-accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item" id="bs-accordion-item">
                                                <h2 class="accordion-header bs-accordion-header" id="bs-accordion-header">
                                                    <button class="accordion-button collapsed" id="accordion-button-1"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseSix" aria-expanded="false"
                                                        aria-controls="flush-collapseSix">
                                                        <img src="/images/img/bác sĩ/icon_hocvi.png" alt="" />
                                                        Học vị
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseSix"
                                                    class="accordion-collapse bs-accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample" style={{ borderRadius: '5px' }}>
                                                    <div class="accordion-body" id="accordion-body">
                                                        <ul class="bs-dropdown-content">
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Bệnh viện
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Đa khoa
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label for="#" class="bs-flex">
                                                                    <input type="checkbox" class="bs-hospitals-items" />
                                                                    Quốc tế
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bs-flex-1">
                                    <div class="bs-col-6">
                                        <input class="bs-txt_name_doctor" type="text" placeholder="Nhập tên bác sĩ..." />
                                        <img src="/images/img/bác sĩ/input_name.png" alt="" />
                                    </div>
                                    <div class="bs-col-6">
                                        <button class="bs-btn_fill_doctor">Tìm bác sĩ</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bs-doctor_cate">
                                <h2 class="sm-title_cate_news">Danh sách bác sĩ</h2>
                                <ul class="bs-list_doctor_cate">
                                    {data.map((doctor) => (
                                        <li class="bs-flex-all" key={doctor.id}>
                                            <div class="bs-anh">
                                                <Link class="bs-thumbblock" href={`/timbacsi/${doctor.id}`}>
                                                    <img src={`http://localhost:3000/images/img/bác sĩ/pro-6.jpg`} alt="" />
                                                </Link>
                                                <Link class="bs-btn_book_doctor" href="/datlich">
                                                    <img src="/images/img/bác sĩ/calendar-w.png" alt="" />
                                                    Đăng ký khám
                                                </Link>
                                            </div>
                                            <div class="bs-flex-one">
                                                <div class="bs-name">
                                                    <Link href={`/timbacsi/${doctor.id}`}>{doctor.ten}</Link>
                                                    <span>Không có đánh giá</span>
                                                </div>
                                                <div class="bs-icon_list_doctor">
                                                    <img src="/images/img/bác sĩ/icon_hocvi.png" alt="" />
                                                    Bác sĩ chuyên khoa {doctor.id_chuyen_khoa}
                                                </div>
                                                <div class="bs-icon_list_doctor">
                                                    <img src="/images/img/bác sĩ/input_name.png" alt="" />
                                                    {doctor.mo_ta}
                                                </div>
                                                <div class="bs-icon_list_doctor">
                                                    <img src="/images/img/bác sĩ/Hospital.png" alt="" />
                                                    <Link class="bs-a" href={`/chuyenkhoa/${doctor.id_chuyen_khoa}`}>
                                                        {doctor.ten_chuyen_khoa}
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                                <div class="tt-phantrang">
                                    <Link href="#" class="tt-item-paging active">1</Link>
                                    <Link href="#" class="tt-item-paging active-1">2</Link>
                                    <Link href="#" class="tt-item-paging active-1">3</Link>
                                    <Link href="#" class="tt-item-paging active-1">4</Link>
                                    <Link href="#" class="tt-item-paging">
                                        <img src="/images/img/thông tin/product/icon-1.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}