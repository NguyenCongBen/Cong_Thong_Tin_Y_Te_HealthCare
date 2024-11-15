"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import *as Yup from 'yup';

export default function AddDoctors() {
    const router = useRouter();
    const [chuyenkhoa, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('http://localhost:3000/chuyenkhoa');
            const data = await res.json();
            setCategories(data);
        };
        getCategories();
    }, []);

    const validationSchema = Yup.object({
        ten: Yup.string()
            .trim()
            .required('Tên sản phẩm là bắt buộc')
            .min(3, 'Tên sản phẩm phải có ít nhất 3 ký tự')
            .max(50, 'Tên sản phẩm không được vượt quá 50 ký tự'),
        gioi_tinh: Yup.string()
            .required('Giới tính là bắt buộc'),
        dia_chi: Yup.string()
            .required('Địa chỉ là bắt buộc'),
        email: Yup.string()
            .required('Mô tả là bắt buộc')
            .min(10, 'Mô tả phải có ít nhất 10 ký tự'),
        anh: Yup.mixed()
            .required('Hình ảnh là bắt buộc'),
        ten_chuyen_khoa: Yup.string()
            .required('Tên chuyên khoa là bắt buộc'),
        id_chuyen_khoa: Yup.string()
            .required('id chuyên khoa là bắt buộc'),
        so_dien_thoai: Yup.number()
            .required('Số điện thoại là bắt buộc'),
        ngay_sinh: Yup.date()
            .required('Ngày là bắt buộc'),
    });
    
    const formik = useFormik({
        initialValues: {
            anh: null,
            id_chuyen_khoa: '',
            ten: '',
            ngay_sinh: '',
            gioi_tinh: '',
            dia_chi: '',
            so_dien_thoai: '',
            email: '',
            ten_chuyen_khoa: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const data = new FormData();
            data.append('ten', values.ten);
            data.append('ngay_sinh', values.ngay_sinh);
            data.append('gioi_tinh', values.gioi_tinh);
            data.append('dia_chi', values.dia_chi);
            data.append('anh', values.anh);
            data.append('so_dien_thoai', values.so_dien_thoai);
            data.append('email', values.email);
            data.append('ten_chuyen_khoa', values.ten_chuyen_khoa);
            data.append('id_chuyen_khoa', values.id_chuyen_khoa);

            const res = await fetch('http://localhost:3000/doctor', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const result = await res.json();
            if (result.error) {
                formik.setFieldError('general', result.error);
            } else {
                router.push('/admin/Doctors');
            }
        },
    });

    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h2>
                                <a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth">
                                    <i className="fa fa-arrow-left"></i>
                                </a>
                                Thêm Bác Sĩ
                            </h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"><i className="icon-home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Bác Sĩ</li>
                                <li className="breadcrumb-item active">Thêm Bác Sĩ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Thông Tin Cơ Bản <small>Mô tả ở đây...</small></h2>
                            </div>
                            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control"
                                                    name="ten"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ten}
                                                    placeholder="Họ Tên" />
                                                {formik.touched.ten && formik.errors.ten ? (
                                                    <div className="text-danger">{formik.errors.ten}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control"
                                                    name="dia_chi"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.dia_chi}
                                                    placeholder="Địa chỉ" />
                                                {formik.touched.dia_chi && formik.errors.dia_chi ? (
                                                    <div className="text-danger">{formik.errors.dia_chi}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="ngay_sinh"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ngay_sinh}
                                                    placeholder="Ngày Sinh"
                                                    required
                                                />
                                                {formik.touched.ngay_sinh && formik.errors.ngay_sinh ? (
                                                    <div className="text-danger">{formik.errors.ngay_sinh}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <select className="form-control show-tick"
                                                    name="gioi_tinh"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.gioi_tinh}>
                                                    <option value="">- Giới Tính -</option>
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                {formik.touched.gioi_tinh && formik.errors.gioi_tinh ? (
                                                    <div className="text-danger">{formik.errors.gioi_tinh}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <select
                                                    className="form-control show-tick"
                                                    name="id_chuyen_khoa"
                                                    onChange={(e) => {
                                                        const selectedId = e.target.value;
                                                        formik.setFieldValue('id_chuyen_khoa', selectedId); // Gán giá trị cho id_chuyen_khoa
                                                        const selectedCategory = chuyenkhoa.find(category => category.id === parseInt(selectedId));
                                                        formik.setFieldValue('ten_chuyen_khoa', selectedCategory ? selectedCategory.ten_chuyen_khoa : ""); // Gán giá trị cho ten_chuyen_khoa
                                                    }}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.id_chuyen_khoa}
                                                >
                                                    <option value="">- ID Chuyên khoa -</option>
                                                    {chuyenkhoa.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {`${category.id} - ${category.ten_chuyen_khoa}`}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formik.touched.id_chuyen_khoa && formik.errors.id_chuyen_khoa ? (
                                                    <div className="text-danger">{formik.errors.id_chuyen_khoa}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="ten_chuyen_khoa"
                                                    readOnly // Đặt readonly để không cho phép người dùng chỉnh sửa trực tiếp
                                                    value={formik.values.ten_chuyen_khoa}
                                                    placeholder="- Tên Chuyên khoa -"
                                                />
                                                {formik.touched.ten_chuyen_khoa && formik.errors.ten_chuyen_khoa ? (
                                                    <div className="text-danger">{formik.errors.ten_chuyen_khoa}</div>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="phone"
                                                    className="form-control"
                                                    name="so_dien_thoai"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.so_dien_thoai}
                                                    placeholder="Điện Thoại"
                                                />
                                                {formik.touched.so_dien_thoai && formik.errors.so_dien_thoai ? (
                                                    <div className="text-danger">{formik.errors.so_dien_thoai}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="email"
                                                    className="form-control"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    placeholder="Nhập Email của bạn"
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className="text-danger">{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12" id='mb-20'>
                                            <input
                                                type="file"
                                                className="dropify"
                                                name="anh"
                                                onChange={(event) => {
                                                    formik.setFieldValue("anh", event.currentTarget.files[0]);
                                                }}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.anh && formik.errors.anh ? (
                                                <div className="text-danger">{formik.errors.anh}</div>
                                            ) : null}
                                        </div>
                                        <div className="col-sm-12" id='mr-20'>
                                            <button type="submit" className="btn btn-primary">Gửi</button>
                                            <button type="button" className="btn btn-outline-secondary" onClick={() => router.push('/admin/Doctors')}>Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
