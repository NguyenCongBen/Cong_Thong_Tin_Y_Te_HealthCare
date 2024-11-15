

import Link from "next/link";
export default function thongtincanhan() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 bg-light py-5">
                        <div class="text-center">
                            <img src="anh" class="rounded-circle mb-3" width="100" height="100" />
                            <h5>Ten_ người dùng </h5>
                            <p class="text-muted">Sửa Hồ Sơ</p>
                        </div>
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action">Tài Khoản Của Tôi</a>
                            <a href="#" class="list-group-item list-group-item-action">Hồ Sơ</a>
                            <a href="#" class="list-group-item list-group-item-action">Ngân Hàng</a>
                            <a href="#" class="list-group-item list-group-item-action">Địa Chỉ</a>
                            <a href="#" class="list-group-item list-group-item-action">Đổi Mật Khẩu</a>
                            <a href="#" class="list-group-item list-group-item-action">Cài Đặt Thông Báo</a>
                        </div>
                    </div>
                    <div class="col-9 p-5">
                        <h2>Hồ Sơ Của Tôi</h2>
                        <p class="text-muted">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        <form>
                            <div class="form-group">
                                <label for="username">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="username" value="di" readonly />
                            </div>
                            <div class="form-group">
                                <label for="fullname">Tên đầy đủ</label>
                                <input type="text" class="form-control" id="fullname" placeholder="Nhập tên đầy đủ" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div class="input-group">
                                    <input type="email" class="form-control" id="email" placeholder="Nhập email" value="dr******@gmail.com" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">Thay Đổi</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="phone">Số điện thoại</label>
                                <div class="input-group">
                                    <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">Thêm</button>
                                    </div>
                                </div>
                                <div class="form-text text-danger">Liên kết số điện thoại bạn đang sử dụng với tài khoản Shopee. Liên kết số điện thoại bạn đang sử dụng với tài khoản Shopee để có thể đăng nhập và mua hàng</div>
                            </div>
                            <div class="form-group">
                                <label for="gender">Giới tính</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="gender-male" value="male" />
                                    <label class="form-check-label" for="gender-male">Nam</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="gender-female" value="female" />
                                    <label class="form-check-label" for="gender-female">Nữ</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="gender-other" value="other" />
                                    <label class="form-check-label" for="gender-other">Khác</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Lưu Thay Đổi</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}