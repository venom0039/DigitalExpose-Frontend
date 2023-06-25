import {useState, useEffect} from 'react';
import Dashboard from './adminComps/Dashboard';
import Post from './adminComps/Post';
import PostCreate from './adminComps/PostCreate';
import { useNavigate } from "react-router-dom";

export default function Admin(){
    const [activeSlider, setActiveSlider] = useState(0);
    const [section, setSection] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Hi");
        console.log(localStorage.getItem("token") === undefined);
        console.log(localStorage.getItem("token") === "");
        console.log(localStorage.getItem("token"));
        if((localStorage.getItem("token") === undefined) || (localStorage.getItem("token") === "") || (localStorage.getItem("token") === null)){
            navigate("/admin-login");
        }
    }, [])

    function sendData(data: number){
        setSection(data);
    }

    return(
        <>
            <div className="w-100 h-100" style={{overflow: "hidden"}}>
                <div className="row">
                    <div className="col-md-2 sliderBackground" style={{height: "100vh"}}>
                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" style={{height: "100vh"}}>
                            <a href="/admin" className="d-flex align-items-center justify-content-center mb-0 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-4"><p className="h5 logotextShadow">Digital <strong className="text-warning">Expose</strong></p></span>
                            </a>
                            <hr/>
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item atop">
                                    <p className={"nav-link " + ((activeSlider===0) ? "active" : "link-light")} aria-current="page" onClick={(e) => {setActiveSlider(0); setSection(0);}}>
                                        <i className="bi bi-speedometer2"></i> Dashboard
                                    </p>
                                </li>
                                <li className="nav-item atop">
                                    <p className={"nav-link " + ((activeSlider===1) ? "active" : "link-light")} aria-current="page" onClick={(e) => {setActiveSlider(1); setSection(0);}}>
                                        <i className="bi bi-postcard"></i> Post
                                    </p>
                                </li>
                            </ul>
                            <hr/>
                            <div className="dropdown">
                                <div className="d-flex align-items-center text-white text-decoration-none dropdown-toggle atop" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                                    <strong>mdo</strong>
                                </div>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><p className="dropdown-item">New project...</p></li>
                                    <li><p className="dropdown-item">Settings</p></li>
                                    <li><p className="dropdown-item">Profile</p></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><p className="dropdown-item">Sign out</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 adminBody">
                        <div className="adminBodySqure" style={{height: "100vh"}}>
                            <div className="adminBodyUsable"> 
                                {
                                    (activeSlider === 0) && <Dashboard/>
                                }
                                {
                                    ((activeSlider === 1) && (section === 0)) && <Post sendData={sendData}/>
                                }
                                {
                                    ((activeSlider === 1) && (section === 1)) && <PostCreate sendData={sendData}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}