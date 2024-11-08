import React from 'react';
import Link from "next/link";

function TatCaBenhVien(props) {
    return (
        <>
            {props.data.map((benhvien) => {
                const { id, anh, ten, dia_chi, mo_ta, email, ten_cua_hang } = benhvien;
                return (
                    <div className="tt-thanhtich-nhieu-1" key={id}>
                        <div className="card card-thanhtich" id="card-boder">
                            <Link href={`/hethong/${id}`}>
                                <img className="cart-anh card-img-top" src={`http://localhost:3000/images/img/bệnh viện/pro-3.jpg`} alt="..." />
                            </Link>
                            <div className="card-body" id="card-body">
                                <Link href={`/hethong/${id}`}>
                                    <h5 className="card-title" id="card-title">{ten}</h5>
                                </Link>
                                <p className="card-text" id="card-text">{mo_ta}</p>
                                <p className="bv-dc">
                                    <img src="/images/img/bác sĩ/icon-address.png" alt="" />
                                    <span>{dia_chi}</span>
                                </p>
                                <p className="bv-dc">
                                    <i className="fa-regular fa-envelope"></i>
                                    <span>{email}</span>
                                </p>
                                <Link href={`/hethong/${id}`} className="btn" id="tt-xemthem">Xem thêm
                                    <span className="btn-size">
                                        <img src="images/img/thông tin/product/icon-2.png" alt="" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}
export default TatCaBenhVien;
