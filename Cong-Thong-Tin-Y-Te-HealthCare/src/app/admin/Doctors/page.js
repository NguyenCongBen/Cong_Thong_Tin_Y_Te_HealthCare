// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';
// import useSWR from "swr";
// import ReactPaginate from 'react-paginate';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export default function Doctors() {
//   const { data, error } = useSWR('http://localhost:3000/doctor', fetcher);
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 7; // Number of doctors per page
//   const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

//   // Handle page change
//   const handlePageChange = (selected) => {
//     setCurrentPage(selected.selected);
//   };

//   // Get current doctors to display
//   const currentDoctors = data ? data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : [];

//   // Error handling
//   if (error) return <strong>Error loading Doctors</strong>;
//   if (!data || data.length === 0) return <p>No Doctors data available.</p>;

//   return (
//     <>
//       <div id="main-content">
//         <div className="container-fluid phantrang_asbout_admin">
//           <div className="block-header">
//             <div className="row">
//               <div className="col-lg-6 col-md-8 col-sm-12">
//                 <h2>
//                   <a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth">
//                     <i className="fa fa-arrow-left"></i>
//                   </a>
//                   All Doctors
//                 </h2>
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <a href="index.html"><i className="icon-home"></i></a>
//                   </li>
//                   <li className="breadcrumb-item">Doctor</li>
//                   <li className="breadcrumb-item active">All Doctors</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="row clearfix">
//             {currentDoctors.map((doctor) => (
//               <div key={doctor.id} className="col-lg-3 col-md-6 col-sm-12">
//                 <Link href={`/admin/Doctors/${doctor.id}`}>
//                   <div className="card doctors_main">
//                     <div className="body text-center">
//                       <div className="chart" data-percent="75">
//                         <span>
//                           <img
//                             src={doctor.hinh_anh || "/images/sm/avatar1.jpg"} // Default image if none provided
//                             data-toggle="tooltip"
//                             data-placement="top"
//                             title={doctor.ten}
//                             alt="user"
//                           />
//                         </span>
//                       </div>
//                       <small className="chuyen_khoa_admin_doctor"> {doctor.ten_chuyen_khoa}</small>
//                       <h6 className="mb-0 name_doctors_admin">
//                         <a href="#" title="">{doctor.ten}</a>
//                       </h6>
//                       <span className="adress_admin_doctors">{doctor.dia_chi}</span>
//                       <div className="icon_ngoisao_admin_doctors">
//                         <i className="fa-solid fa-star"></i>
//                         <i className="fa-solid fa-star"></i>
//                         <i className="fa-solid fa-star"></i>
//                         <i className="fa-solid fa-star"></i>
//                         <i className="fa-regular fa-star"></i>
//                       </div>
//                       <div className="all_doctors_btn">
//                         <button className="edit_doctors">Sửa</button>
//                         <button className="delete_doctors">Xóa</button>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//             <div className="col-lg-3 col-md-6 col-sm-12">
//               <div className="card">
//                 <div className="body text-center">
//                   <div className="p-t-80 p-b-80">
//                     <h6>Add New <br /> Doctor</h6>
//                     <button type="button" className="btn btn-outline-primary m-t-10" data-toggle="modal" data-target="#addcontact">
//                       <i className="fa fa-plus-circle"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//             <div class="phantrang_admin_doctors">
//           <ReactPaginate
//             previousLabel={'← Previous'}
//             nextLabel={'Next →'}
//             breakLabel={'...'}
//             breakClassName={'break-me'}
//             pageCount={pageCount}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={'pagination'}
//             subContainerClassName={'pages pagination'}
//             activeClassName={'active'}
//             disabledClassName={'disabled'}
//           />
//           </div>
//         </div>
//       </div>

//       {/* Modal for adding a doctor */}
//       <div className="modal fade" id="addcontact" tabIndex="-1" role="dialog">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h6 className="title" id="defaultModalLabel">Add Doctor</h6>
//             </div>
//             <div className="modal-body">
//               <div className="row clearfix">
//                 <div className="col-6">
//                   <div className="form-group">
//                     <input type="text" className="form-control" placeholder="First Name" />
//                   </div>
//                 </div>
//                 <div className="col-6">
//                   <div className="form-group">
//                     <input type="text" className="form-control" placeholder="Last Name" />
//                   </div>
//                 </div>
//                 <div className="col-6">
//                   <div className="form-group">
//                     <input type="number" className="form-control" placeholder="Phone Number" />
//                   </div>
//                 </div>
//                 <div className="col-6">
//                   <div className="form-group">
//                     <input type="text" className="form-control" placeholder="Specialty" />
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="form-group">
//                     <input type="text" className="form-control" placeholder="Enter Address" />
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="form-group">
//                     <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
//                     <small id="fileHelp" className="form-text text-muted">Upload doctor's image.</small>
//                   </div>
//                   <hr />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary">Add</button>
//               <button type="button" className="btn btn-secondary" data-dismiss="modal">CLOSE</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
