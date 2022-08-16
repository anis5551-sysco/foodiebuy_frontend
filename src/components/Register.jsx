import React from "react";
import RegisterPage from "../assets/images/registerPage.jpg";

export default function Register() {
  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-md-11 col-xl-12">
          <div className="container">
            <div className="row h-100">
              <div className="col-md-6 col-lg-7 d-none d-md-block">
                <div className="card-body pt-5 text-black">
                  <h3 className="mb-5">Register here</h3>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example1m">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example1n">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example97"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example97">
                      Email
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
                    <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Confirm Password
                          </label>
                    </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form3Example8">
                      Address
                    </label>
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg ms-2"
                    >
                      Submit
                    </button>
                  </div>
                  <p className="mb-5 text-center pt-3 pb-lg-2" style={{color: '#393f81'}}>
                          Already have an account?{" "}
                          <a href="#!" style={{color: '#393f81'}}>
                            Login here
                          </a>
                    </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src={RegisterPage}
                  alt="login form"
                  className="img-fluid m-4"
                  style={{ borderRadius: "1rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
