
export default function SignUp() {
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
                                                <input type="text" className="form-control" id="fname" placeholder="name@example.com"/>
                                                <label htmlFor="fname">First Name</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="lname" placeholder="name@example.com"/>
                                                <label htmlFor="lname">First Name</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                                                <label htmlFor="email">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <div className="form-floating mb-5">
                                                <input type="date" className="form-control" id="dob" placeholder="_" 
                                                    onFocus={(e) => {e.target.type = "date"}}
                                                    onBlur={(e) => {e.target.type = "text"}}
                                                />
                                                <label htmlFor="dob">Date of Birth</label>
                                            </div>
                                            <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
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