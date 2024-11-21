'use client'


import React, { useState } from 'react';
import useSWR from 'swr';


export default function Appointments() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());


    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [newStatus, setNewStatus] = useState('');


    // Fetch data for appointments and statuses
    const { data: appointments, error: appointmentsError, isLoading: isAppointmentsLoading, mutate } = useSWR('http://localhost:3000/lichhen', fetcher);
    const { data: statuses, error: statusesError, isLoading: isStatusesLoading } = useSWR('http://localhost:3000/lichhen/status', fetcher);


    if (appointmentsError || statusesError) {
        return <strong>Lỗi khi tải dữ liệu!</strong>;
    }
    if (isAppointmentsLoading || isStatusesLoading) {
        return <strong>Đang tải...</strong>;
    }


    const handleUpdateClick = (appointment) => {
        setSelectedAppointment(appointment);
        setNewStatus(appointment.trang_thai); // Set current status for the form
    };


    const handleStatusChange = (event) => {
        setNewStatus(event.target.value);
    };


    const handleSave = async () => {
        if (!selectedAppointment) return;


        try {
            // Send all appointment details, including the new status
            const response = await fetch(`http://localhost:3000/lichhen/${selectedAppointment.id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...selectedAppointment, // Send all data from selectedAppointment
                    trang_thai: newStatus,   // Ensure the new status is included
                }),
            });


            console.log('Request body:', {
                ...selectedAppointment,
                trang_thai: newStatus,
            });


            if (response.ok) {
                console.log(`Cập nhật trạng thái của cuộc hẹn ID ${selectedAppointment.id} thành: ${newStatus}`);
                mutate(); // Refresh the data after update
                setSelectedAppointment(null); // Clear selected appointment
                setNewStatus(''); // Clear the status form
            } else {
                console.error('Cập nhật thất bại!');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật trạng thái:', error);
        }
    };


    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-md-12">
                        <table className="table m-b-0 table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Bệnh Nhân</th>
                                    <th>Chuyên Khoa</th>
                                    <th>Thời Gian Hẹn</th>
                                    {/* <th>Mô Tả</th> */}
                                    <th>Bác Sĩ</th>
                                    <th>Bệnh Viện</th>
                                    <th>Ảnh Bác Sĩ</th>
                                    <th>Trạng Thái</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td>{appointment.id}</td>
                                        <td>{appointment.ten_benh_nhan}</td>
                                        <td>{appointment.ten_chuyen_khoa}</td>
                                        <td>{new Date(appointment.thoi_gian_hen).toLocaleString()}</td>
                                        {/* <td>{appointment.mo_ta}</td> */}
                                        <td>{appointment.ten_bac_si}</td>
                                        <td>{appointment.ten_benh_vien}</td>
                                        <td><img src={`/${appointment.anh}`} alt="Doctor" width="50" /></td>
                                        <td>
                                            {selectedAppointment && selectedAppointment.id === appointment.id ? (
                                                <select value={newStatus} onChange={handleStatusChange}>
                                                    {statuses?.map((status) => (
                                                        <option key={status} value={status}>{status}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                appointment.trang_thai
                                            )}
                                        </td>
                                        <td>
                                            {!selectedAppointment || selectedAppointment.id !== appointment.id ? (
                                                <button onClick={() => handleUpdateClick(appointment)}>Cập nhật</button>
                                            ) : (
                                                <button onClick={handleSave}>Lưu</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}





