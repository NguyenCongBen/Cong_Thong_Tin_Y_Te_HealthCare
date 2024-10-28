import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoiTongDai from "./Components/Goitongdai";
export default function Home() {
  return (
    <>
      <main>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header model-goi">
                <h3 className="modal-title g-blue" id="exampleModalLabel">Hotline</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="g-content">
                  <ul className="g-phone-list">
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="g-contact-pair">
                        <div className="g-col7">
                          <span>Vinmec Times City (HN)</span>
                        </div>
                        <div className="g-col5">
                          <strong>
                            <Link className="g-blue g-phone" href="#">024 3974 3556</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="g-button-group">
                    <div className="g-item">
                      <div className="g-item-desc">
                        <img src="/images/img/Download_App_8f9cde90f2.png" alt="" />
                        <div className="g-icon-main">
                          <span className="g-item-title">Đặt lịch qua App - MyVinmec</span>
                          <span className="g-item-text">Đặt lịch hẹn chủ động ngay tại nhà với bác sĩ và
                            ngày giờ khám</span>
                        </div>
                      </div>
                      <Link className="g-a" href="#">
                        <button className="bg-blue text-white border-none m-10">
                          <span>
                            Tải ngay
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="g-item">
                      <div className="g-item-desc">
                        <img src="/images/img/CSKH_b6c956f10b.png" alt="" />
                        <div className="g-icon-main">
                          <span className="g-item-title">Cổng dịch vụ CSKH 24/7</span>
                        </div>
                      </div>
                      <Link className="g-a" href="#">
                        <button className="bg-blue text-white border-none m-10">
                          <span>
                            Gửi yêu cầu
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-all">
          <div className="banner-homepage">
            <div className="banner-slider">
              <div className="banner-responsive">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-5.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/banner-6.png" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"
                      id="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"
                      id="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="banner-responsive-1">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/rp-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/rp-3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000" id="carousel">
                      <img src="/images/img/Trang chủ/rp-4.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"
                      id="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"
                      id="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="banner-content">
              <div className="container-1">
                <div className="text-banner">
                  <h1 className="title-banner">Chăm sóc bằng tài năng, y đức và sự thấu cảm</h1>
                  <div className="desc-banner">
                    Vinmec cam kết về trách nhiệm xã hội và đóng góp tích cực vào sự phát triển bền vững của
                    cộng đồng
                  </div>
                  <Link href="#" className="home-viewmore-button">Xem thêm</Link>
                </div>
                <div className="cta-banner home-flex">
                  <button type="button" className="btn btn-primary home-col-4 cta-item" id="home-btn-goi"
                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="cta-icon">
                      <img src="/images/img/Trang chủ/call.png" alt="" />
                    </div>
                    <div className="cta-info">
                      <div className="cta-name">Gọi tổng đài</div>
                      <div className="cta-desc"> Hỏi về phương pháp điều trị và phương pháp của chúng tôi
                      </div>
                    </div>
                  </button>
                  <Link href="/datlich" className="home-col-4 cta-item">
                    <div className="cta-icon">
                      <img src="/images/img/Trang chủ/appoinment.png" alt="" />
                    </div>
                    <div className="cta-info">
                      <div className="cta-name">Đặt lịch hẹn</div>
                      <div className="cta-desc"> Đặt lịch hẹn với bệnh viện của chúng tôi
                      </div>
                    </div>
                  </Link>
                  <Link href="/timbacsi" className="home-col-4 cta-item">
                    <div className="cta-icon">
                      <img src="/images/img/Trang chủ/doctor.png" alt="" />
                    </div>
                    <div className="cta-info">
                      <div className="cta-name">Tìm bác sĩ</div>
                      <div className="cta-desc"> Chọn theo tên, chuyên môn và nhiều hơn thế
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container-body">
            <div className="container-1">
              <div className="home-why-us">
                <h2 className="sm-title_cate_news">Tại sao nên chọn Healthcare</h2>
              </div>
              <div className="home-flex">
                <div className="home-col-5">
                  <img src="/images/img/Trang chủ/pro-1.png" alt="" />
                </div>
                <div className="home-col-7">
                  <div className="list-whyus home-flex">
                    <div className="home-col-6 item-whyus">
                      <div className="home-item-icon">
                        <img src="/images/img/Trang chủ/whyus_01_403f42a936.png" alt="" />
                      </div>
                      <h3 className="home-item-title">
                        Chuyên gia hàng đầu
                      </h3>
                      <div className="home-item-desc">
                        Vinmec quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ
                        chuyên môn cao, tay nghề giỏi, tận tâm và chuyên nghiệp. Luôn đặt người bệnh làm
                        trung tâm, Vinmec cam kết đem đến dịch vụ chăm sóc sức khỏe tốt cho khách hàng.
                      </div>
                    </div>
                    <div className="home-col-6 item-whyus">
                      <div className="home-item-icon">
                        <img src="/images/img/Trang chủ/whyus_02_2a57cb372f.png" alt="" />
                      </div>
                      <h3 className="home-item-title">
                        Chất lượng quốc tế
                      </h3>
                      <div className="home-item-desc">
                        Hệ thống Y tế Vinmec được quản lý và vận hành dưới sự giám sát của những nhà
                        quản lý y tế giàu kinh nghiệm, cùng với sự hỗ trợ của phương tiện kỹ thuật hiện
                        đại, nhằm đảm bảo cung cấp dịch vụ chăm sóc sức khỏe toàn diện và hiệu quả.
                      </div>
                    </div>
                    <div className="home-col-6 item-whyus">
                      <div className="home-item-icon">
                        <img src="/images/img/Trang chủ/whyus_01_403f42a936.png" alt="" />
                      </div>
                      <h3 className="home-item-title">
                        Công nghệ tiên tiến
                      </h3>
                      <div className="home-item-desc">
                        Vinmec cung cấp cơ sở vật chất hạng nhất và dịch vụ 5 sao bằng cách sử dụng các
                        công nghệ tiên tiến được quản lý bởi các bác sĩ lâm sàng lành nghề để đảm bảo
                        dịch vụ chăm sóc sức khỏe toàn diện và hiệu quả cao haha
                      </div>
                    </div>
                    <div className="home-col-6 item-whyus">
                      <div className="home-item-icon">
                        <img src="/images/img/Trang chủ/whyus_01_403f42a936.png" alt="" />
                      </div>
                      <h3 className="home-item-title">
                        Nghiên cứu & đổi mới
                      </h3>
                      <div className="home-item-desc">
                        Vinmec quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ
                        chuyên môn cao, tay nghề giỏi, tận tâm và chuyên nghiệp. Luôn đặt người bệnh làm
                        trung tâm, Vinmec cam kết đem đến dịch vụ chăm sóc sức khỏe tốt cho khách hàng.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifi">
              <div className="container-1">
                <div className="home-flex home-items-center">
                  <div className="home-col-6 home-rpw">
                    <div className="home-sect-head">
                      <h2 className="sm-title_cate_news color">Chứng nhận và giải thưởng</h2>
                      <div className="sect-desc">
                        Vinmec tự hào được các tổ chức uy tín trên thế giới công nhận
                      </div>
                      <Link href="#" className="viewmore-button">
                        Xem thêm
                        <img src="/images/img/Trang chủ/Long-arrow.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="home-col-6 home-rpw">
                    <div className="home-list-certifi home-flex">
                      <div className="home-glide__slides">
                        <img src="/images/img/Trang chủ/pro-2.jpg" alt="" />
                      </div>
                      <div className="home-glide__slides">
                        <img src="/images/img/Trang chủ/pro-3.jpg" alt="" />
                      </div>
                      <div className="home-glide__slides">
                        <img src="/images/img/Trang chủ/pro-4.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-clinic-system">
              <div className="container-1">
                <div className="home-flex home-width">
                  <div className="home-col-6 clinic-large home-rpw">
                    <div className="home-list-clinic-large">
                      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="2000">
                            <img src="/images/img/Trang chủ/pro-8.jpg" className="d-block w-100" alt="..." />
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <img src="/images/img/Trang chủ/pro-6.jpg" className="d-block w-100" alt="..." />
                          </div>
                          <div className="carousel-item" data-bs-interval="2000">
                            <img src="/images/img/Trang chủ/pro-7.jpg" className="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" id="home-boder"
                          data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" id="home-f10"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" id="home-boder"
                          data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <span className="carousel-control-next-icon" id="home-f10"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="home-col-6 home-rpw">
                    <div className="home-sect-head">
                      <h2 className="sm-title_cate_news">Hệ thống phòng khám và trung tâm của chúng tôi</h2>
                      <div className="home-sect-desc home-mb15">
                        Vinmec là Hệ thống Y tế tư nhân duy nhất tại Việt Nam hoạt động không vì mục
                        tiêu lợi nhuận, có 2 bệnh viện đạt chứng chỉ tiêu chuẩn JCI – Tiêu chuẩn về
                        an toàn người bệnh và chất lượng bệnh viện khắt khe nhất thế giới, cùng
                        các chứng chỉ quốc tế trong từng lĩnh vực chuyên môn uy tín.
                      </div>
                    </div>
                    <div className="home-list-clinic-thumb home-flex home-mt30 home-items-center">
                      <div className="home-glide__slides home-icon-slice active">
                        <img src="/images/img/Trang chủ/pro-8.jpg" alt="" />
                      </div>
                      <div className="home-glide__slides home-icon-slice">
                        <img src="/images/img/Trang chủ/pro-6.jpg" alt="" />
                      </div>
                      <div className="home-glide__slides home-icon-slice">
                        <img src="/images/img/Trang chủ/pro-7.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-col-12 home-justify-content-center">
                  <Link href="#" className="home-icon viewmore-button">Xem thêm</Link>
                </div>
                <div className="home-news">
                  <div className="tt-bottom-main">
                    <span className="tt-widget tt-boder-right">
                      <Link href="#">
                        Câu chuyện khách hàng
                      </Link>
                    </span>
                    <span className="tt-widget tt-boder-right"><Link href="#">
                      Thông tinh sức khỏe
                    </Link>
                    </span>
                  </div>
                  <div className="tt-medium">
                    <div className="card" id="card-boder-medium">
                      <Link href="#">
                        <img src="/images/img/thông tin/product/pro-12.jpg" className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body" id="card-medium">
                        <Link href="#">
                          <p className="card-text" id="tt-medium-size">Healthcare công bố ca mổ tim hở
                            không Morphin giảm đau đầu tiên trên thế giới</p>
                        </Link>
                      </div>
                    </div>
                    <div className="card" id="card-boder-medium">
                      <Link href="#">
                        <img src="/images/img/thông tin/product/pro-13.png" className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body" id="card-medium">
                        <Link href="#">
                          <p className="card-text" id="tt-medium-size">Ung thư xương: Mẹ của “chiến binh”
                            cũng là chiến binh</p>
                        </Link>
                      </div>
                    </div>
                    <div className="card" id="card-boder-medium">
                      <Link href="#">
                        <img src="/images/img/thông tin/product/pro-14.jpg" className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body" id="card-medium">
                        <Link href="#">
                          <p className="card-text" id="tt-medium-size">Healthcare phẫu thuật thành công
                            cho 2 mẹ con cùng bị chèn ép dây thần kinh số 7, co giật mặt nhiều năm
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="card" id="card-boder-medium">
                      <Link href="#">
                        <img src="/images/img/thông tin/product/pro-15.jpg" className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body" id="card-medium">
                        <Link href="#">
                          <p className="card-text" id="tt-medium-size">“Nhờ được ghép tế bào gốc tại
                            Healthcare, tôi như được hồi sinh”</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-1">
              <div className="home-partner home-mt30">
                <h2 className="sm-title_cate_news h3">Đối tác của chúng tôi</h2>
                <div className="home-list-partner">
                  <div className="home-glide__track home-flex ">
                    <div className="home-hospital_slides">
                      <img src="/images/img/Trang chủ/dt-1.webp" alt="" />
                    </div>
                    <div className="home-hospital_slides">
                      <img src="/images/img/Trang chủ/dt-2.webp" alt="" />
                    </div>
                    <div className="home-hospital_slides">
                      <img src="/images/img/Trang chủ/dt-3.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
