import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function SignIn() {
    function facebookLogin() {
        
    }
  
    function googleLogin() {
    }

    return(
        <>
            <div className="auth-box bg-body-tertiary">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="Image" className="img-fluid"/>
                            </div>
                            <div className="col-md-6 contents">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <div className="d-flex justify-content-center mb-4">
                                            <h3>Sign In</h3>
                                        </div>
                                        <form>
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                                                <label htmlFor="email">Email address</label>
                                            </div>
                                            <div className="form-floating mb-5">
                                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

                                            <div className="d-flex justify-content-center">
                                                <div>
                                                    <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
                                                    <div className="social-login">
                                                        <div className="facebook" onClick={() => {facebookLogin()}}>
                                                            <span className="bi bi-facebook mr-3"></span>
                                                        </div>
                                                        {/* <div className="twitter">
                                                            <span className="bi bi-twitter mr-3"></span>
                                                        </div> */}
                                                        <div className="google">
                                                            <span className="bi bi-google mr-3"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}