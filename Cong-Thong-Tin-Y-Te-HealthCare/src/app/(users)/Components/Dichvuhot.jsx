import Link from "next/link";
import useSWR from "swr";

export default function DichVuHot() {
    // const fetcher = (...args) => fetch(...args).then((res) => res.json());
    // const { data, error, isLoading } = useSWR('http://localhost:3000/dich-vu/', fetcher);
    // if (error) return <strong>Lỗi...</strong>
    // if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <div class="card" id="bodor-none">
                {/* {data.map((service) => ( */}
                    <Link href="#" class="tt-card-hot">
                        <img class="cart-anh cart-anh-1 card-img-top" src="/images/img/dịch vụ/pro-1.jpg"
                            alt="..." />
                        <div class="card-body card-body-1">
                            <div class="card-body-text">
                                <h5 class="card-title" id="card-color">Vinmec Times City Gói khám sàng lọc
                                    bệnh lý tim mạch
                                </h5>
                                <p class="card-text" id="card-color">Gói bao gồm: Gói SLTM Tiểu đường – Mỡ
                                    máu, Gói SLTM - Rối loạn nhịp tim, Gói SLTM - Suy giãn tĩnh mạch, Gói
                                    SLTM - Mạch vành, Gói SLTM - Xơ vữa</p>
                                <p class="btn" id="card-color">Xem thêm
                                    <span class="btn-size"><img src="/images/img/thông tin/product/icon.png"
                                        alt="" /></span>
                                </p>
                            </div>
                        </div>
                    </Link>
                {/* ))} */}
            </div>

        </>
    )
}