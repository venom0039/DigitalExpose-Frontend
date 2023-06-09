import { useState } from 'react';

export default function GeneralNavBar(){
    const [navMenuSelected, setNavMenuSelected] = useState(0)

    function rederectToLogin(){
        window.location.replace("/login");
    }
    
    function navbarSelected(num: number){
        setNavMenuSelected(num);
    }
  
    return( 
        <>
            <nav className="navbar navbar-expand-lg navBody" style={{'width': '100vw', 'position':'fixed', 'top': 0}}>
                <div className="container-fluid px-4">
                    <h1>
                        <div className="row justify-content-center px-4">
                            <p className="h5 logotextShadow">Digital <strong className="text-warning">Expose</strong></p>
                        </div>
                    </h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <p className={`nav-link navItem ${navMenuSelected === 0 ? 'active text-warning fw-bolder': ''}`} onClick={() => navbarSelected(0)}>Home</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link navItem ${navMenuSelected === 1 ? 'active text-warning fw-bolder': ''}`} onClick={() => navbarSelected(1)}>About</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link navItem ${navMenuSelected === 2 ? 'active text-warning fw-bolder': ''}`} onClick={() => navbarSelected(2)}>Services</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link navItem ${navMenuSelected === 3 ? 'active text-warning fw-bolder': ''}`} onClick={() => navbarSelected(3)}>Contact</p>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-4">
                        <button type="button" className="btn btn-warning text-white" style={{'marginTop':'-15px'}} onClick={() => rederectToLogin()}>Login</button>
                    </div>
                </div>
            </nav>
        </>
    );
}