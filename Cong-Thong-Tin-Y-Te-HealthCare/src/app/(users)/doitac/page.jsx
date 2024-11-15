import "../../../../public/css/user/doitac.css";
import GoiTongDai from "../Components/Goitongdai";
export default function DoiTac() {
    return (
        <>
            <main>
                <GoiTongDai />
                <div class="container-all">
                    <div class="container-body">
                        <div class="container-1">
                            <div class="tt-bread">
                                <a href="/" class="tt-item">Trang chủ</a>
                                <i class="fa-solid fa-angle-right tt-item"></i>
                                <a href="/tintuc" class="tt-item">Về Healthcare</a>
                                <i class="fa-solid fa-angle-right tt-item tt-item-color"></i>
                                <span class="tt-item tt-item-1 tt-item-color">Đối tác của chúng tôi</span>
                            </div>
                            <div class="dt-content_partner dt-flex">
                                <div class="dt-col-5">
                                    <ul class="dt-lis_partner dt-flex">
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-1.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-2.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-3.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-4.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-5.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-6.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-7.webp" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img/đối tác/pro-8.webp" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dt-col-7 dt-text-center">
                                    <img src="/images/img/đối tác/map-world.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}