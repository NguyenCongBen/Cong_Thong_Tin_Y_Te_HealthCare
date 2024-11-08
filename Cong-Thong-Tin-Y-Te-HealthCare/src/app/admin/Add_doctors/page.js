export default function AddDoctors() {
    return (
        <>
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
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Tên" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Họ" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Ngày Sinh" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <select className="form-control show-tick">
                                                    <option value="">- Giới Tính -</option>
                                                    <option value="10">Nam</option>
                                                    <option value="20">Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Chuyên Khoa" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Điện Thoại" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Nhập Email của bạn" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="URL Trang Web" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="file" className="dropify" />
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group mt-3">
                                                <textarea rows="4" className="form-control no-resize" placeholder="Vui lòng nhập nội dung bạn muốn..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary">Gửi</button>
                                            <button type="submit" className="btn btn-outline-secondary">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2>Thông Tin Tài Khoản Bác Sĩ <small>Mô tả ở đây...</small></h2>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Tên Tài Khoản" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Mật Khẩu" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Xác Nhận Mật Khẩu" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary">Gửi</button>
                                            <button type="submit" className="btn btn-outline-secondary">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
