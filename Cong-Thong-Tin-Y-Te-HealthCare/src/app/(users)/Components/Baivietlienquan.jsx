"use client";
import useSWR from "swr";

export default function BaiVietLienQuan() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`http://localhost:3000/baiviet/chuyen-khoa/1/bai-viet`, fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            {data.map((baiviet) => (
                <div class="tt-thanhtich-nhieu-1">
                    <div class="card card-thanhtich" id="card-boder">
                        <a href="#">
                            <img class="cart-anh card-img-top" src={`http://localhost:3000/images/img/giải thưởng/pro-7.jpg`}
                                alt="..." />
                        </a>
                        <div class="card-body" id="card-body">
                            <a href="#">
                                <h5 class="card-title" id="card-title">{baiviet.ten}</h5>
                            </a>
                            <p class="card-text" id="card-text">{baiviet.mota}
                            </p>
                            <a href="#" class="btn" id="tt-xemthem">Xem thêm
                                <span class="btn-size">
                                    <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}