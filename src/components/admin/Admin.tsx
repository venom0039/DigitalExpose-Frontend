import {useState} from 'react';


export default function Admin(){
    const [drower, setDrower] = useState(true);
    const [activeSlider, setActiveSlider] = useState(0);

    return(
        <>
            <div className="w-100 h-100">
                <div className="row">
                    <div className="col-2 sliderBackground">
                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white sliderBackground" style={{width: "280px", height: "100vh"}}>
                            <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-4">Sidebar</span>
                            </a>
                            <hr/>
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item" style={{marginBottom: "-15px"}}>
                                    <p className={"nav-link " + ((activeSlider==0) ? "active" : "link-light")} aria-current="page" onClick={(e) => {setActiveSlider(0)}}>
                                        <i className="bi bi-speedometer2"></i> Dashboard
                                    </p>
                                </li>
                                <li className="nav-item" style={{marginBottom: "-15px"}}>
                                    <p className={"nav-link " + ((activeSlider==1) ? "active" : "link-light")} aria-current="page" onClick={(e) => {setActiveSlider(1)}}>
                                        <i className="bi bi-postcard"></i> Post
                                    </p>
                                </li>
                            </ul>
                            <hr/>
                            <div className="dropdown">
                                <a href="" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                                    <strong>mdo</strong>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="">New project...</a></li>
                                    <li><a className="dropdown-item" href="">Settings</a></li>
                                    <li><a className="dropdown-item" href="">Profile</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="adminBody">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}