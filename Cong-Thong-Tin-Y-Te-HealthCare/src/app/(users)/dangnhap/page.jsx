import "../../../../public/css/user/login.css";

export default function Login() {
  return (
    <div class="container">
      <div class="nav-container">
        <div class="login-content">
          <h1>Đăng nhập</h1>
          <form>
            <input type="text" placeholder="Tên đăng nhập" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <textarea placeholder="Tin nhắn" rows="6" cols="20"></textarea>
            <br />
            <button class="button" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
