import "../../../../public/css/user/login.css";
export default function Register() {
  return (
    <div class="container">
      <div class="nav-container">
        <div class="login-content">
          <h1>Đăng ký</h1>
          <form>
            <div class="name-tag">
              <input type="text" placeholder="Họ" />
              <input type="text" placeholder="Tên" />
            </div>
            <input type="text" placeholder="Tên đăng nhập" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Mật khẩu" />
            <br />
            <textarea
              placeholder="Dịch vụ cần đăng ký"
              rows="6"
              cols="20"
            ></textarea>
            <br />
            <select id="clinics">
              <option value="" disabled selected>
                Chọn phòng khám
              </option>
              <option value="clinic1">Phòng Khám Đa Khoa ABC</option>
              <option value="clinic2">Phòng Khám Chuyên Khoa XYZ</option>
              <option value="clinic3">Phòng Khám Quốc Tế DEF</option>
              <option value="clinic4">Phòng Khám Nhi Đồng 123</option>
            </select>
            <button class="button2" type="submit">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
