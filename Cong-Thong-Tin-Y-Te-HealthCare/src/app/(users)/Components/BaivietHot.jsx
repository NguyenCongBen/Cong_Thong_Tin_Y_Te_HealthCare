"use client";
import useSWR from "swr";

export default function BaiVietHot() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:3000/baiviet', fetcher);
    if (error) return <strong>Lỗi...</strong>
    if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            {data.map((baiviethot) => (
                <div className="card">
                    <a href={`/tintuc/${baiviethot.id}`} className="tt-card-hot">
                        <img className="cart-anh cart-anh-1 card-img-top" src={`http://localhost:3000/images/img/thông tin/product/pro-1.jpg`} alt="..." />
                        <div className="card-body card-body-1">
                            <h5 className="card-title" id="card-color">{baiviethot.ten}
                            </h5>
                            <p className="card-text" id="card-color">{baiviethot.mota}</p>
                            <span className="btn-size">
                                Xem thêm
                                <img src="/images/img/thông tin/product/icon.png" alt="" />
                            </span>
                        </div>
                    </a>
                </div>
            ))}
        </>
    )
}