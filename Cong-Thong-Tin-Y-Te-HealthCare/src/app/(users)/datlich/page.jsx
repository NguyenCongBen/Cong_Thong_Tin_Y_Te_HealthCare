"use client";
import React from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import "../../../../public/css/user/datlich.css";
import { registerFailure, registerSuccess } from '../../../../redux/slices/userSlices';
import GoiTongDai from '../Components/Goitongdai';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Schema xác thực với Yup
    // const validationSchema = Yup.object({
    //     username: Yup.string()
    //         .required('Tên người dùng là bắt buộc'),
    //     radio: Yup.string()
    //         .required('Vui lòng chọn giới tính'),
    //     date: Yup.string()
    //         .required('Vui lòng chọn ngày tháng năm sinh'),
    //     mota: Yup.string()
    //         .required('Vui lòng nhập giới tính của bạn'),
    //     checkbox: Yup.boolean()
    //         .oneOf([true], 'Vui lòng xác nhận lại thông tin')
    //         .required('Vui lòng xác nhận lại thông tin'),
    //     email: Yup.string()
    //         .email("Email không hợp lệ")
    //         .required("Email là bắt buộc")
    //         .matches(
    //             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    //             "Email phải chứa ký tự hợp lệ"
    //         ),
    //     password: Yup.string()
    //         .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    //         .required("Mật khẩu là bắt buộc")
    //         .matches(
    //             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
    //             "Mật khẩu phải chứa ít nhất một chữ hoa, chữ thường, số và ký tự đặc biệt"
    //         ),
    //     phone: Yup.string()
    //         .required("Số điện thoại bắt buộc")
    //         .matches(/(\+84|0[3|5|7|8|9])+([0-9]{8,})\b/g, 'Số điện thoại không hợp lệ'),
    //     address: Yup.string()
    //         .required('Địa chỉ là bắt buộc'),
    // });
    // Sử dụng Formik để quản lý form
    const formik = useFormik({
        initialValues: {
            ten: '',
            email: '',
            phone: '',
            date: '',
            radio: '',
            mota: '',
            checkbox: false,
            role: "benh_nhan",
        },
        // validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.post('http://localhost:3000/users/register', values);
                dispatch(registerSuccess(response.data));
            } catch (err) {
                const errorMessage = err.response?.data?.message || 'Đã xảy ra lỗi. Vui lòng thử lại.';
                dispatch(registerFailure(errorMessage));
            } finally {
                setSubmitting(false);
                router.push('/');
                alert('Gửi thông tin thành công');
            }
        },
    });
    return (
        <>
            <main>
                <GoiTongDai />
                <div className="container-all">
                    <div className="cover-list-news">
                        <img src="/images/img/thành tựu/banner.jpg" alt="" />
                        <div className="name-cate-cover">Đăng ký khám</div>
                        <div className="thanhtuu-bar_util">
                            <div className="thanhtuu-col-4 col-4-w color-blue">
                                <button type="button" className="btn btn-primary thanhtuu-col-4 col-4-w color-blue" id="btn-goi"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="/images/img/thành tựu/Phone.png" alt="" />
                                    <span>Gọi tổng đài</span>
                                </button>
                            </div>
                            <div className="thanhtuu-col-4 col-4-w">
                                <Link href="/datlich">
                                    <img src="/images/img/thành tựu/Calendar.png" alt="" />
                                    <span>Đặt lịch hẹn</span>
                                </Link>
                            </div>
                            <div className="thanhtuu-col-4 col-4-w">
                                <Link href="/timbacsi">
                                    <img src="/images/img/thành tựu/doctor.png" alt="" />
                                    <span>Tìm bác sĩ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container-body">
                        <div className="container-1">
                            <div className="tt-bread">
                                <Link href="/trangchu" className="tt-item">Trang chủ</Link>
                                <i className="fa-solid fa-angle-right tt-item gt-item"></i>
                                <Link href="#" className="tt-item tt-item-1 tt-item-color">Đăng ký khám</Link>
                            </div>
                            <div className="lk-content_info_book-1">
                                <div className="lk-content_info_book">
                                    <h2 className="sm-title_cate_news">
                                        Nội dung chi tiết đặt hẹn
                                    </h2>
                                    <div className="lk-list_two_booking">
                                        <div className="lk-col6 lk-right">
                                            <div className="lk-mb2">
                                                <p className="lk-color-blue">
                                                    Bệnh viện/phòng khám Vinmec
                                                    <span className="lk-color-red">*</span>
                                                </p>
                                                <select className="form-select form-select-lg mb-3" id="lk-form-select">
                                                    <option selected>Chọn cơ sở khám</option>
                                                    <option value="1">BV ĐKQT Vinmec Times City (Hà Nội)</option>
                                                    <option value="2">BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</option>
                                                    <option value="3">BV ĐKQT Vinmec Central Park (Hồ Chí Minh)</option>
                                                    <option value="4">BV ĐKQT Vinmec Phú Quốc</option>
                                                    <option value="5">BV ĐKQT Vinmec Đà Nẵng</option>
                                                    <option value="6">PK ĐKQT Vinmec Dương Đông</option>
                                                    <option value="7">BV ĐKQT Vinmec Hải Phòng</option>
                                                    <option value="8">BV ĐKQT Vinmec Hạ Long</option>
                                                    <option value="9">PK ĐKQT Vinmec Sài Gòn</option>
                                                </select>
                                            </div>
                                            <div className="lk-mb2">
                                                <p className="lk-color-blue">
                                                    Chuyên khoa
                                                    <span className="lk-color-red">*</span>
                                                </p>
                                                <select className="form-select form-select-lg mb-3" id="lk-form-select">
                                                    <option selected>Chọn chuyên khoa</option>
                                                    <option value="0">Chưa xác định chuyên khoa</option>
                                                </select>
                                            </div>
                                            <div className="lk-mb2">
                                                <p className="lk-color-blue">
                                                    Bác sĩ
                                                </p>
                                                <select className="form-select form-select-lg mb-3" id="lk-form-select">
                                                    <option selected>Chọn Bác sĩ muốn khám</option>
                                                    <option value="1">Bác sĩ Noname</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="#" className="lk-flex">
                                                    <input type="checkbox" />
                                                    Đặt hẹn cho người nước ngoài
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lk-col6 lk-left">
                                            <p className="lk-color-blue color-toi">
                                                Thời gian khám
                                                <span className="lk-color-red color-toi">*</span>
                                            </p>
                                            <div className="lk-list_date">
                                                <div className="lk-item_date active">
                                                    <p className="lk-f14">04/10</p>
                                                    <p className="lk-f12">Thứ 6</p>
                                                </div>
                                                <div className="lk-item_date">
                                                    <p className="lk-f14 lk-mau">05/10</p>
                                                    <p className="lk-f12 lk-999">Thứ 7</p>
                                                </div>
                                                <div className="lk-item_date">
                                                    <p className="lk-f14 lk-mau">06/10</p>
                                                    <p className="lk-f12 lk-999">Chủ nhật</p>
                                                </div>
                                                <div className="lk-item_date">
                                                    <p className="lk-f14 lk-mau">
                                                        <input type="date" className="lk-date-oder" />
                                                    </p>
                                                    <p className="lk-f12 lk-999">Ngày khác</p>
                                                </div>
                                            </div>
                                            <div className="lk-mt2">
                                                *Lưu ý: Thời gian khám trên chỉ là thời gian dự kiến, tổng đài sẽ
                                                liên hệ xác nhận thời gian khám chính xác tới quý khách sau khi quý
                                                khách đặt hẹn.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lk-mt60">
                                        <h2 className="sm-title_cate_news">
                                            Thông tin khách hàng
                                        </h2>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="lk-list_two_booking lk-mbt-1">
                                                <div className="lk-col6 lk-right">
                                                    <div className="lk-mb2 lk-mbt">
                                                        <p className="lk-color-blue">
                                                            Họ và tên
                                                            <span className="lk-color-red">*</span>
                                                        </p>
                                                        <div className="lk-input">
                                                            <div className="check-loi-form">
                                                                <input
                                                                    type="text"
                                                                    className="lk-input-1"
                                                                    id="username"
                                                                    placeholder="Họ và tên"
                                                                    name="username"
                                                                    value={formik.values.username}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    required />
                                                                {formik.touched.username && formik.errors.username ? (
                                                                    <div className="error">{formik.errors.username}</div>
                                                                ) : null}
                                                            </div>
                                                            <div className="lk-input_gender lk-input-all">
                                                                <div className="lk-input_gender">
                                                                    <label htmlFor="radioNam" className="lk-lable">
                                                                        <input
                                                                            type="radio"
                                                                            className="lk-gender-picker"
                                                                            id="radioNam"
                                                                            name="radio"
                                                                            value="Nam"
                                                                            checked={formik.values.radio === "Nam"}
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            required
                                                                        />
                                                                        Nam
                                                                    </label>
                                                                    <label htmlFor="radioNu" className="lk-lable">
                                                                        <input
                                                                            type="radio"
                                                                            className="lk-gender-picker"
                                                                            id="radioNu"
                                                                            name="radio"
                                                                            value="Nữ"
                                                                            checked={formik.values.radio === "Nữ"}
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            required
                                                                        />
                                                                        Nữ
                                                                    </label>
                                                                </div>
                                                                {formik.touched.radio && formik.errors.radio ? (
                                                                    <div className="error">{formik.errors.radio}</div>
                                                                ) : null}
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="lk-mb2 lk-mbt">
                                                        <p className="lk-color-blue">
                                                            Số điện thoại
                                                            <span className="lk-color-red">*</span>
                                                        </p>
                                                        <div className="lk-input lk-input-all">
                                                            <input
                                                                type="text"
                                                                className="lk-input-2"
                                                                id="phone"
                                                                placeholder="Nhập số điện thoại"
                                                                name="phone"
                                                                value={formik.values.phone}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                required
                                                            />
                                                            {formik.touched.phone && formik.errors.phone ? (
                                                                <div className="error">{formik.errors.phone}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lk-col6 lk-left">
                                                    <div className="lk-mb2 lk-mbt">
                                                        <p className="lk-color-blue">
                                                            Ngày tháng năm sinh
                                                            <span className="lk-color-red">*</span>
                                                        </p>
                                                        <div className="lk-input lk-input-all">
                                                            <input
                                                                type="date"
                                                                className="lk-input-2"
                                                                id="date"
                                                                placeholder="Ngày tháng năm sinh"
                                                                name="date"
                                                                value={formik.values.date}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                required
                                                            />
                                                            {formik.touched.date && formik.errors.date ? (
                                                                <div className="error">{formik.errors.date}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="lk-mb2 lk-mbt">
                                                        <p className="lk-color-blue">
                                                            Email
                                                            <span className="lk-color-red">*</span>
                                                        </p>
                                                        <div className="lk-input lk-input-all">
                                                            <input
                                                                type="email"
                                                                className="lk-input-2"
                                                                id="email"
                                                                placeholder="Nhập email"
                                                                name="email"
                                                                value={formik.values.email}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                required
                                                            />
                                                            {formik.touched.email && formik.errors.email ? (
                                                                <div className="error">{formik.errors.email}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lk-col12">
                                                    <div className="lk-mb2 lk-mbt">
                                                        <p className="lk-color-blue">
                                                            Lý do khám
                                                            <span className="lk-color-red">*</span>
                                                        </p>
                                                        <div className="lk-input lk-input-all">
                                                            <textarea
                                                                className="lk-input-2"
                                                                name="mota"
                                                                id="mota"
                                                                cols="30"
                                                                rows="10"
                                                                placeholder="Triệu chứng của bạn"
                                                                value={formik.values.mota}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                required
                                                            ></textarea>
                                                            {formik.touched.mota && formik.errors.mota ? (
                                                                <div className="error">{formik.errors.mota}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="#" className="lk-fl-colum">
                                                        <div className="lk-flex">
                                                            <input
                                                                type="checkbox"
                                                                id="checkbox"
                                                                name="checkbox"
                                                                value={formik.values.checkbox}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                required
                                                            />
                                                            <div className="lk-thoathuan">
                                                                Tôi đã đọc và xác nhận <Link className="lk-cl-blue" href="#">Điều khoản dịch
                                                                    vụ</Link>
                                                                của bệnh viện.
                                                                <span className="lk-color-red">*</span>
                                                            </div>
                                                        </div>
                                                        {formik.touched.checkbox && formik.errors.checkbox ? (
                                                            <div className="error">{formik.errors.checkbox}</div>
                                                        ) : null}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="lk-text-center">
                                                <button className="lk-btn_send_book" type="submit" disabled={formik.isSubmitting}>Gửi thông tin</button>
                                            </div>
                                        </form>
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
export default Register;
