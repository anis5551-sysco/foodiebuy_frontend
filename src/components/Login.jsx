import React from "react";
import LoginPage from '../assets/images/loginPage.jpg'

export default function Login() {
  return (
    <div>
          <div className="row d-flex justify-content-center align-items-center py-5">
            <div className="col-md-11 col-xl-12">
              <div className="container">
                <div className="row h-100">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={LoginPage}
                      alt="login form"
                      className="img-fluid m-4"
                      style={{borderRadius: '1rem'}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h3
                          className="fw-normal mb-3 pb-3"
                          style={{letterSpacing: '1px'}}
                        >
                          Sign into your account
                        </h3>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>
                          Don't have an account?{" "}
                          <a href="#!" style={{color: '#393f81'}}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
