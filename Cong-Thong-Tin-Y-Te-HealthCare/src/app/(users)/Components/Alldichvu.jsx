import Link from "next/link";
import useSWR from "swr";

export default function AllDichVu() {
    // const fetcher = (...args) => fetch(...args).then((res) => res.json());
    // const { data, error, isLoading } = useSWR('http://localhost:3000/dich-vu', fetcher);
    // if (error) return <strong>Lỗi...</strong>
    // if (isLoading) return <strong>Lỗi load dữ liệu...</strong>
    return (
        <>
            <div class="tt-thanhtich-1">
                {/* {data.map((service) => ( */}
                <div class="card card-thanhtich" id="card-boder">
                    <Link href="#">
                        <img class="cart-anh card-img-top" src="/images/img/dịch vụ/pro-2.jpg"
                            alt="..." />
                    </Link>
                    <div class="card-body" id="card-body">
                        <Link href="#">
                            <h5 class="card-title" id="card-title">Chương trình chăm sóc sức khỏe Vinmec</h5>
                        </Link>

                        <p class="card-text" id="card-text">Chương trình chăm sóc sức khỏe Vinmec VIP &
                            Vinmec Select được thiết kế với chính sách đặc quyền miễn phí khám sức khỏe tổng quát...
                        </p>
                        <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                            <span class="btn-size">
                                <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                            </span>
                        </Link>
                    </div>
                </div>
                {/* ))} */}
            </div>
            <div class="tt-thanhtich-1">
                <div class="card card-thanhtich" id="card-boder">
                    <Link href="#">
                        <img class="cart-anh card-img-top" src="/images/img/dịch vụ/pro-3.jpg"
                            alt="..." />
                    </Link>
                    <div class="card-body" id="card-body">
                        <Link href="#">
                            <h5 class="card-title" id="card-title">Gói sàng lọc bệnh lý tim mạch - Rối loạn nhịp tim</h5>
                        </Link>

                        <p class="card-text" id="card-text">Rối loạn nhịp tim là vấn đề thường gặp nhất trong các bệnh lý tim mạch,
                            là một trong những nguyên nhân gây tử vong thường gặp nhất...
                        </p>
                        <Link href="#" class="btn" id="tt-xemthem">Xem thêm
                            <span class="btn-size">
                                <img src="/images/img/thông tin/product/icon-2.png" alt="" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}