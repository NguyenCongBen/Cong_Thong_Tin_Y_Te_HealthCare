import Link from "next/link"
import "../../../../public/css/user/tracuuthuoc.css"
export default function tracuuthuoc(){
    return (
        <>
            <main>
                <div class="cover_list_news">
                    <div class="name_cate_cover">Danh mục thuốc</div>
                    <img src="images/img/tracuuthuoc/banner_danh_muc_thuoc.jpg" alt="Danh mục thuốc"/>
                    <div class="bar_util mb-hidden flex">
                        <div class="col-4"><a href="javascript:modal.show('#modal-call-button')">
                        <img src="images/img/tracuuthuoc/Phone.svg" alt="phone" />
                        <span>Gọi tổng đài</span></a>
                        </div>
                        <div class="col-4"><a href="/"><img src="images/img/tracuuthuoc/Calendar.svg"
                            alt="booking" /><span>Đặt lịch hẹn
                            </span></a></div>
                        <div class="col-4"><a href="/"><img src="images/img/tracuuthuoc/doctor.svg"
                            alt="doctor" /><span>Tìm bác sĩ
                            </span></a></div>
                    </div>
                </div>
                <link href="/" rel="stylesheet" />
                <div class="container_body margin-auto">
                    <div class="bread-cump-main">
                        <a href="/" class="item-bread">Trang chủ</a>
                        <span class="item-bread">Danh mục thuốc</span>
                    </div>
                    <section class="bg_white mb3">
                        <div class="flex align-item-center">
                            <div class="f26 bold">Tra cứu tên thuốc</div>
                            <div class="search_drug flex-one">
                                <div class="flex align-item-center justify-betwee">
                                    <input id="search_box" type="text" class="txt_search_drug"
                                        placeholder="Nhập tên thuốc cần tìm..." />
                                    <button class="btn_search_drug"></button>
                                </div>
                                <template id="search-template">
                                    <div class="show_search_suggest ">
                                        <button type="button" class="modal-close-popup">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 18L18 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path d="M18 18L6 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        Hiển thị kết quả cho từ khóa: <strong>__KEYWORD__</strong>
                                        <div class="line_ver mt2 mb2"></div>
                                        <ul class="list_result_search_drug">
                                            <li><a href="__SLUG__">__NAME__</a></li>
                                        </ul>
                                        <div class="line_ver mt2 mb2"></div>
                                        <div class="text-center">
                                            <a onclick="ToVisible()" class="cl-blue">Xem tất cả
                                                <img src="/assets/images/arr-blue.svg" height="14" />
                                            </a>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </section>
                    <section class="bg_white mb60">
                        <div class="title_cate_news">Danh sách thuốc</div>
                        <div class="list_az">
                            <span class="letter" onclick="Select('a')">A</span>
                            <span class="letter" onclick="Select('b')">B</span>
                            <span class="letter" onclick="Select('c')">C</span>
                            <span class="letter" onclick="Select('d')">D</span>
                            <span class="letter" onclick="Select('e')">E</span>
                            <span class="letter" onclick="Select('f')">F</span>
                            <span class="letter" onclick="Select('g')">G</span>
                            <span class="letter" onclick="Select('h')">H</span>
                            <span class="letter" onclick="Select('i')">I</span>
                            <span class="letter" onclick="Select('j')">J</span>
                            <span class="letter" onclick="Select('k')">K</span>
                            <span class="letter" onclick="Select('l')">L</span>
                            <span class="letter" onclick="Select('m')">M</span>
                            <span class="letter" onclick="Select('n')">N</span>
                            <span class="letter" onclick="Select('o')">O</span>
                            <span class="letter" onclick="Select('p')">P</span>
                            <span class="letter" onclick="Select('q')">Q</span>
                            <span class="letter" onclick="Select('r')">R</span>
                            <span class="letter" onclick="Select('s')">S</span>
                            <span class="letter" onclick="Select('t')">T</span>
                            <span class="letter" onclick="Select('u')">U</span>
                            <span class="letter" onclick="Select('v')">V</span>
                            <span class="letter" onclick="Select('w')">W</span>
                            <span class="letter" onclick="Select('x')">X</span>
                            <span class="letter" onclick="Select('y')">Y</span>
                            <span class="letter" onclick="Select('z')">Z</span>
                        </div>
                        <span id="hide_alpha">Ẩn</span>
                        <ul class="list_drug flex first-hide">

                        </ul>
                        <div class="paging mt40">
                            <a id="slot-1" onclick="ThisPage(this)" class="item_paging active">1</a>
                            <a id="slot-2" onclick="ThisPage(this)" class="item_paging">2 </a>
                            <a id="slot-3" onclick="ThisPage(this)" class="item_paging">3 </a>
                            <a id="slot-4" onclick="ThisPage(this)" class="item_paging">4 </a>
                        </div>
                    </section>

                </div>

                <template id="drug_temp">
                    <li class>
                        <div class="flex align-item-center">
                            <div class="flex-one">
                                <a href="/vie/thuoc/__SLUG__" class="name_drug">__NAME__</a>
                            </div>
                        </div>
                    </li>
                </template>


            </main>
        </>
    )
}