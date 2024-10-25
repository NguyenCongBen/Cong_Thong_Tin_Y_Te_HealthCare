"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
    <div id="main-content">

        <div className="container-fluid">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Dashboard</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>                            
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ul>
                    </div>            
                  
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-12">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-6">
                            <div className="card top_counter">
                                <div className="body">
                                    <div id="top_counter1" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="icon"><i className="fa fa-user"></i> </div>
                                                <div className="content">
                                                    <div className="text">Total Patient</div>
                                                    <h5 className="number">215</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div id="top_counter2" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="icon"><i className="fa fa-user-md"></i> </div>
                                                <div className="content">
                                                    <div className="text">Operations</div>
                                                    <h5 className="number">06</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="card top_counter">
                                <div className="body">
                                    <div id="top_counter3" className="carousel vert slide" data-ride="carousel" data-interval="2300">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="icon"><i className="fa fa-eye"></i> </div>
                                                <div className="content">
                                                    <div className="text">Total Visitors</div>
                                                    <h5 className="number">10K</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <hr/>
                                    <div className="icon"><i className="fa fa-university"></i> </div>
                                    <div className="content">
                                        <div className="text">Revenue</div>
                                        <h5 className="number">$18,925</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="card top_counter">
                                <div className="body">
                                    <div className="icon"><i className="fa fa-thumbs-o-up"></i> </div>
                                    <div className="content">
                                        <div className="text">Happy Clients</div>
                                        <h5 className="number">528</h5>
                                    </div>
                                    <hr/>
                                    <div className="icon"><i className="fa fa-smile-o"></i> </div>
                                    <div className="content">
                                        <div className="text">Smiley Faces</div>
                                        <h5 className="number">2,528</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Total Revenue</h2>
                            <ul className="header-dropdown">
                                <li><a className="tab_btn" href="javascript:void(0);" title="Weekly">W</a></li>
                                <li><a className="tab_btn" href="javascript:void(0);" title="Monthly">M</a></li>
                                <li><a className="tab_btn active" href="javascript:void(0);" title="Yearly">Y</a></li>
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-md-4">
                                    <div className="body bg_title_1 text-light">
                                        <h4><i className="icon-wallet"></i> 7,12,326$</h4>
                                        <span>Operation Income</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="body bg_title_2 text-light">
                                        <h4><i className="icon-wallet"></i> 25,965$</h4>
                                        <span>Pharmacy Income</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="body bg_title_3 text-light">
                                        <h4><i className="icon-wallet"></i> 14,965$</h4>
                                        <span>Hospital Expenses</span>
                                    </div>
                                </div>
                            </div>
                            <div id="total_revenue" className="ct-chart m-t-20"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Visitors Statistics</h2>
                            <ul class="header-dropdown">
                                <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Weekly">W</a></li>
                                <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Monthly">M</a></li>
                                <li><a class="tab_btn active" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Yearly">Y</a></li>
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div id="Visitors_chart" class="flot-chart m-b-20"></div>
                            <div class="row text-center">
                                <div class="col-lg-3 col-md-3 col-6">
                                    <div id="Visitors_chart1" class="carousel slide" data-ride="carousel" data-interval="2000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="body xl-turquoise">
                                                    <h4>2,025</h4>
                                                    <span>America</span>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="body xl-parpl">
                                                    <h4>1,100</h4>
                                                    <span>Canada</span>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="body xl-salmon">
                                                    <h4>680</h4>
                                                    <span>Brazil</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-6">
                                    <div id="Visitors_chart2" class="carousel slide" data-ride="carousel" data-interval="2200">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="body xl-parpl">
                                                    <h4>1,025</h4>
                                                    <span>UK</span>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="body xl-slategray">
                                                    <h4>582</h4>
                                                    <span>France</span>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="body xl-khaki">
                                                    <h4>128</h4>
                                                    <span>Georgia</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                <div class="col-lg-3 col-md-3 col-6">
                                    <div class="body xl-salmon">                                        
                                        <h4>3,845</h4>
                                        <span>India</span>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-6">
                                    <div class="body xl-slategray">                                        
                                        <h4>863</h4>
                                        <span>Other</span>
                                    </div>
                                </div>                      
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>ToDo List <small>This Month task list</small></h2>
                        </div>
                        <div class="body todo_list">
                            <ul class="list-unstyled">
                                <li>
                                    <label class="fancy-checkbox mb-0">
                                        <input type="checkbox" name="checkbox" />
                                        <span>A Brief History Of Anesthetics</span>
                                    </label>
                                    <div class="m-l-35 m-b-30">
                                        <small class="text-muted">SCHEDULED FOR 3:00 P.M. ON JUN 2018</small>
                                        <ul class="list-unstyled team-info">
                                            <li><img src="assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Chris Fox" alt="Avatar"/></li>
                                            <li><img src="assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Joge Lucky" alt="Avatar"/></li>
                                            <li><img src="assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Isabella" alt="Avatar"/></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <label class="fancy-checkbox mb-0">
                                        <input type="checkbox" name="checkbox"/>
                                        <span>Using Laser Teatment to Help</span>
                                    </label>
                                    <div class="m-l-35 m-b-30">
                                        <small class="text-muted">SCHEDULED FOR 4:30 P.M. ON JUN 2018</small>
                                    </div>
                                </li>
                                <li>
                                    <label class="fancy-checkbox mb-0">
                                        <input type="checkbox" name="checkbox"/>
                                        <span>Selecting the Apnea Treatment</span>
                                    </label>
                                    <div class="m-l-35 m-b-30">
                                        <small class="text-muted">SCHEDULED FOR 4:30 P.M. ON JUN 2018</small><br/>
                                        <small class="text-warning">ICU PATIENT - LAST 2 DAYS</small><br />
                                        <small>Patient Name: <a href="#">Hossein</a></small>                                        
                                    </div>
                                </li>
                                <li>
                                    <label class="fancy-checkbox mb-0">
                                        <input type="checkbox" name="checkbox"/>
                                        <span>Using Laser Teatment to Help</span>
                                    </label>
                                    <div class="m-l-35">
                                        <small class="text-muted">SCHEDULED FOR 4:30 P.M. ON JUN 2018</small>
                                        <ul class="list-unstyled team-info">
                                            <li><img src="assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Chris Fox" alt="Avatar"/></li>
                                            <li><img src="assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Dr. Joge Lucky" alt="Avatar"/></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
 
    </>
  );
}
