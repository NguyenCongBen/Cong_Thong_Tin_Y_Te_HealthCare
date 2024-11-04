import Link from "next/link";

export default function TatCaBacSi(props) {
    return (
        <>
            {props.data.map((doctor) => {
                const { id, id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, ten_chuyen_khoa, mo_ta } = doctor;
                return (
                    <li class="bs-flex-all" key={id}>
                        <div class="bs-anh">
                            <Link class="bs-thumbblock" href={`/timbacsi/${id}`}>
                                <img src={`http://localhost:3000/images/img/bác sĩ/pro-6.jpg`} alt="" />
                            </Link>
                            <Link class="bs-btn_book_doctor" href="/datlich">
                                <img src="/images/img/bác sĩ/calendar-w.png" alt="" />
                                Đăng ký khám
                            </Link>
                        </div>
                        <div class="bs-flex-one">
                            <div class="bs-name">
                                <Link href={`/timbacsi/${id}`}>{ten}</Link>
                                <span>Không có đánh giá</span>
                            </div>
                            <div class="bs-icon_list_doctor">
                                <img src="/images/img/bác sĩ/icon_hocvi.png" alt="" />
                                Bác sĩ chuyên khoa {id_chuyen_khoa}
                            </div>
                            <div class="bs-icon_list_doctor">
                                <img src="/images/img/bác sĩ/input_name.png" alt="" />
                                {dia_chi}
                            </div>
                            <div class="bs-icon_list_doctor">
                                <img src="/images/img/bác sĩ/Hospital.png" alt="" />
                                <Link class="bs-a" href={`/chuyenkhoa/${id_chuyen_khoa}`}>
                                    {ten_chuyen_khoa}
                                </Link>
                            </div>
                        </div>
                    </li>
                )
            })}
        </>
    )
}