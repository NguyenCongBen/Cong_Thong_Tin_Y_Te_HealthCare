"use client";
import useSWR from "swr";

export default function BaiViet() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/baiviet', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            {data.map((baiviethot) => (
                <div className="tt-thanhtich-nhieu-1">
                    <div className="card card-thanhtich" id="card-boder">
                        <a href={`/tintuc/${baiviethot.id}`}>
                            <img className="cart-anh card-img-top" src={`http://localhost:3000/images/img/thông tin/product/pro-4.jpg`}
                                alt="..." />
                        </a>
                        <div className="card-body" id="card-body">
                            <a href="#">
                                <h5 className="card-title" id="card-title">{baiviethot.ten}</h5>
                            </a>
                            <p className="card-text" id="card-text">{baiviethot.mota}</p>
                            <p className="card-text" id="card-text">Ngày tạo: {baiviethot.ngay_tao}</p>
                            <a href={`/tintuc/${baiviethot.id}`} className="btn" id="tt-xemthem">Xem thêm
                                <span className="btn-size">
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