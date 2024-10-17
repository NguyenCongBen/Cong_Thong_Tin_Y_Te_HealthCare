"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Return true or false based on saved value
  });

  // Update body class when darkMode changes
  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode); // Optional: Add dark class to body
    // Save the new mode to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Handle toggle function
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the current mode
  };

  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
      <div className="d-flex min-vh-100 overflow-hidden">
        {/*<div className={`container-left position-fixed start-0 top-0 h-100  text-white overflow-hidden transition-transform duration-300 ${sidebarToggle ? 'translate-x-0' : '-translate-x-100'} d-lg-block`} style={{ zIndex: 9999 }} >
      
    
      
          <div className="ct-left-content-temple-top text-center">
            <div className="content-temple-top-img mb-3">
              <div className="content-temple-top-img-vien">
                <a href="admin">
                <Image
                src="/images/product-1.jpg"
                alt="Rái Cá Đỏ"
                width={100}
                height={100}
                className="img-fluid rounded"
              />
              
                </a>
              </div>
            </div>
            <h3>Rái Cá Đỏ</h3>
            <div className="content-temple-top-icon-thongke d-flex justify-content-center mb-3">
              <div className="content-temple-top-icon-thongke-1 me-3 text-center">
                <i className="fa-regular fa-eye"></i>
                <span>2,594</span>
              </div>
              <div className="content-temple-top-icon-thongke-1 me-3 text-center">
                <i className="fa-regular fa-comment"></i>
                <span>465</span>
              </div>
              <div className="content-temple-top-icon-thongke-1 text-center">
                <i className="fa-regular fa-heart"></i>
                <span>551</span>
              </div>
            </div>
            <div className="content-temple-top-button text-center">
              <button className="btn btn-primary me-2">Follow</button>
              <button className="btn btn-secondary">Message</button>
            </div>
          </div>
          <div className="ct-left-content-temple-bottom">
            <div className="ct-left-content-temple-bottom-menu">
              <ul className="list-unstyled">
                <li>
                  <a href="index.html" className="d-flex align-items-center">
                    <i className="fa-solid fa-house me-2"></i>{" "}
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="SanPhamAdmin.html"
                    className="d-flex align-items-center"
                  >
                    <i className="fa-brands fa-slack me-2"></i>{" "}
                    <span>Sản Phẩm</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex align-items-center">
                    <i className="fa-solid fa-briefcase me-2"></i>{" "}
                    <span>Bình Luận</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex align-items-center">
                    <i className="fa-solid fa-inbox me-2"></i>{" "}
                    <span>Kho Chứa Đồ</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex align-items-center">
                    <i className="fa-solid fa-handshake me-2"></i>{" "}
                    <span>Thư Viện</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="position-relative d-flex flex-column flex-grow-1 overflow-auto pb-5">
          <div className="sticky-top bg-white border shadow-sm">
            <div className="d-flex justify-content-between align-items-center p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 d-lg-none">
                <button
                  className="btn border border-light bg-white p-1 shadow-sm"
                  onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                  <span
                    className="d-block position-relative"
                    style={{ height: "1.375rem", width: "1.375rem" }}
                  >
                    <span className="position-absolute top-0 end-0 h-100 w-100">
                      <span
                        className="position-relative d-block"
                        style={{
                          height: "0.125rem",
                          width: sidebarToggle ? "100%" : "0",
                          backgroundColor: "black",
                          transition: "width 0.2s",
                        }}
                      ></span>
                      <span
                        className="position-relative d-block"
                        style={{
                          height: "0.125rem",
                          width: sidebarToggle ? "100%" : "0",
                          backgroundColor: "black",
                          transition: "width 0.2s",
                        }}
                      ></span>
                      <span
                        className="position-relative d-block"
                        style={{
                          height: "0.125rem",
                          width: sidebarToggle ? "100%" : "0",
                          backgroundColor: "black",
                          transition: "width 0.2s",
                        }}
                      ></span>
                    </span>
                    <span
                      className="position-absolute top-0 end-0 h-100 w-100"
                      style={{ transform: "rotate(45deg)" }}
                    >
                      <span
                        className="position-absolute"
                        style={{
                          left: "10px",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "black",
                          transition: "height 0.2s",
                        }}
                      ></span>
                      <span
                        className="position-absolute"
                        style={{
                          left: "0",
                          top: "10px",
                          height: "0.125rem",
                          width: "100%",
                          backgroundColor: "black",
                          transition: "height 0.2s",
                        }}
                      ></span>
                    </span>
                  </span>
                </button>
                <a
                  className="d-block flex-shrink-0 d-lg-none"
                  href="index.html"
                >
                  <Image
                    src="/src/images/logo/logo-icon.svg"
                    alt="Logo"
                    className="img-fluid"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <div className="d-none d-sm-block">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                  className="position-relative"
                >
                  <button
                    type="submit"
                    className="position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent bg-success"
                  >
                    <i class="fas fa-search"></i>tìm
                  </button>

                  <input
                    type="text"
                    placeholder="Type to search..."
                    class="form-control ps-5 pe-4"
                    style={{ width: "100%" }}
                  />
                </form>
              </div>

              <div className="d-flex align-items-center gap-3">
                <ul className="d-flex align-items-center gap-2">
                  <li>
                    <label
                      className={`form-switch d-flex align-items-center ${
                        darkMode ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={handleToggle}
                        className="form-check-input"
                      />
                      <span
                        className="ms-2"
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          transition: "all 0.3s",
                          display: "inline-block",
                          position: "relative",
                          background: darkMode ? "#0d6efd" : "#6c757d", // Bootstrap primary and secondary colors
                        }}
                      >
                        <span
                          className={`position-absolute ${
                            darkMode ? "end-0 translate-middle" : "start-0"
                          }`}
                          style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "26px",
                            height: "26px",
                            background: "white",
                            borderRadius: "50%",
                            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </span>
                    </label>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle position-relative d-flex align-items-center justify-content-center"
                      href="#"
                      id="notificationDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                      <svg
                        class="bi bi-bell"
                        width="18"
                        height="18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"></path>
                      </svg>
                    </a>

                    <ul
                      class="dropdown-menu dropdown-menu-end p-2"
                      aria-labelledby="notificationDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          <p class="mb-1">
                            <strong>Edit your information in a swipe</strong>
                            <br />
                            Sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim.
                          </p>
                          <p class="small text-muted">12 May, 2025</p>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <p class="mb-1">
                            <strong>It is a long established fact</strong>
                            <br />
                            that a reader will be distracted by the readable.
                          </p>
                          <p class="small text-muted">24 Feb, 2025</p>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <p class="mb-1">
                            <strong>There are many variations</strong>
                            <br />
                            of passages of Lorem Ipsum available, but the
                            majority have suffered.
                          </p>
                          <p class="small text-muted">04 Jan, 2025</p>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <p class="mb-1">
                            <strong>There are many variations</strong>
                            <br />
                            of passages of Lorem Ipsum available, but the
                            majority have suffered.
                          </p>
                          <p class="small text-muted">01 Dec, 2024</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <span class="visually-hidden">New notifications</span>
                      </span>
                      <svg
                        class="bi bi-chat"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z"
                          fill=""
                        ></path>
                        <path
                          d="M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z"
                          fill=""
                        ></path>
                        <path
                          d="M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z"
                          fill=""
                        ></path>
                        <path
                          d="M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z"
                          fill=""
                        ></path>
                      </svg>
                    </a>

                    <ul
                      class="dropdown-menu dropdown-menu-end mt-2"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li class="dropdown-header">Messages</li>

                      <li>
                        <a
                          class="dropdown-item d-flex align-items-start"
                          href="messages.html"
                        >
                          <img
                            class="rounded-circle me-2"
                            src="src/images/user/user-02.png"
                            alt="User"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 class="fw-bold mb-1">Mariya Desoja</h6>
                            <p class="mb-0">I like your confidence 💪</p>
                            <small class="text-muted">2min ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-start"
                          href="messages.html"
                        >
                          <img
                            class="rounded-circle me-2"
                            src="src/images/user/user-01.png"
                            alt="User"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 class="fw-bold mb-1">Robert Jhon</h6>
                            <p class="mb-0">Can you share your offer?</p>
                            <small class="text-muted">10min ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-start"
                          href="messages.html"
                        >
                          <img
                            class="rounded-circle me-2"
                            src="src/images/user/user-03.png"
                            alt="User"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 class="fw-bold mb-1">Henry Dholi</h6>
                            <p class="mb-0">
                              I came across your profile and...
                            </p>
                            <small class="text-muted">1 day ago</small>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-start"
                          href="messages.html"
                        >
                          <img
                            class="rounded-circle me-2"
                            src="src/images/user/user-04.png"
                            alt="User"
                            width="40"
                            height="40"
                          />
                          <div>
                            <h6 class="fw-bold mb-1">Cody Fisher</h6>
                            <p class="mb-0">I’m waiting for your response!</p>
                            <small class="text-muted">5 days ago</small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                  <div class="container-fluid">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          data-mdb-dropdown-init
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          aria-expanded="false"
                        >
                          Dropdown link
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
