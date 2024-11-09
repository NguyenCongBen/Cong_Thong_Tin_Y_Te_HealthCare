

import Link from "next/link";

export default function GoiTongDai() {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header model-goi">
                            <h3 class="modal-title g-blue" id="exampleModalLabel">Hotline</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="g-content">
                                <ul class="g-phone-list">
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <a class="g-blue g-phone" href="#">024 3974 3556</a>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <a class="g-blue g-phone" href="#">024 3974 3556</a>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <a class="g-blue g-phone" href="#">024 3974 3556</a>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <a class="g-blue g-phone" href="#">024 3974 3556</a>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="g-contact-pair">
                                            <div class="g-col7">
                                                <span>Vinmec Times City (HN)</span>
                                            </div>
                                            <div class="g-col5">
                                                <strong>
                                                    <Link class="g-blue g-phone" href="#">024 3974 3556</Link>
                                                </strong>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="g-button-group">
                                    <div class="g-item">
                                        <div class="g-item-desc">
                                            <img src="/images/img/Download_App_8f9cde90f2.png" alt="" />
                                            <div class="g-icon-main">
                                                <span class="g-item-title">Đặt lịch qua App - MyVinmec</span>
                                                <span class="g-item-text">Đặt lịch hẹn chủ động ngay tại nhà với bác sĩ và
                                                    ngày giờ khám</span>
                                            </div>
                                        </div>
                                        <Link class="g-a" href="#">
                                            <button class="bg-blue text-white border-none m-10">
                                                <span>
                                                    Tải ngay
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                    <div class="g-item">
                                        <div class="g-item-desc">
                                            <img src="/images/img/CSKH_b6c956f10b.png" alt="" />
                                            <div class="g-icon-main">
                                                <span class="g-item-title">Cổng dịch vụ CSKH 24/7</span>
                                            </div>
                                        </div>
                                        <Link class="g-a" href="#">
                                            <button class="bg-blue text-white border-none m-10">
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
        </>
    )
}