export default function AddDoctors(){
    return (
        <>
        <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Doctor Schedule</h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>                            
                            <li class="breadcrumb-item">Doctor</li>
                            <li class="breadcrumb-item active">Doctor Schedule</li>
                        </ul>
                    </div>            
                   
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="body">
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="body">
                            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#addevent">Add New Event</button>
                        </div>
                    </div>
                    <div class="card profile-header">
                        <div class="body">
                            <div class="text-center">
                                <img src="assets/images/user.png" class="rounded-circle m-b-15" alt="" />
                                <div>
                                    <h4 class="m-b-0">Dr. <strong>Chandler</strong> Bing</h4>
                                    <span>Washington, d.c.</span>
                                </div>
                                <div class="progress progress-xs m-b-25 m-t-25">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}>
                                        <span class="sr-only">60% Complete</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <h6>17</h6>
                                        <span>Completed</span>
                                    </div>
                                    <div class="col-4">
                                        <h6>34</h6>
                                        <span>ToDo</span>
                                    </div>
                                    <div class="col-4">
                                        <h6>78</h6>
                                        <span>All Tasks</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <span class="badge badge-default mb-2">Pulmonology</span>
                            <span class="badge badge-primary mb-2">Gynecology</span>
                            <span class="badge badge-success mb-2">Neurology</span>
                            <span class="badge badge-info mb-2">Urology</span>
                            <hr />
                            <h6>Team</h6>
                            <ul class="list-unstyled team-info m-t-20">                                
                                <li><img src="assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                <li><img src="assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                <li><img src="assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                <li><img src="assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                <li><img src="assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addevent" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="title" id="defaultModalLabel">Add Event</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="form-line">
                        <input type="number" class="form-control" placeholder="Event Date" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-line">
                        <input type="text" class="form-control" placeholder="Event Title" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-line">
                        <textarea class="form-control no-resize" placeholder="Event Description..." ></textarea>
                    </div>
                </div>       
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Add</button>
                <button type="button" class="btn btn-simple" data-dismiss="modal">CLOSE</button>
            </div>
        </div>
    </div>
</div>


        </>
    )
}