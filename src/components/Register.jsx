import axios from "axios";
import React, { useState } from "react";
import RegisterPage from "../assets/images/registerPage.jpg";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateConfirmPassword,
  validateContact,
  validateAddress
} from "../utilities/validations/userValidation";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const [errorFirstName, setErrorFirstName] = useState({});
  const [errorLastName, setErrorLastName] = useState({});
  const [errorEmail, setErrorEmail] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const [errorConfirmPassword, setErrorConfirmPassword] = useState({});
  const [errorAddress, setErrorAddress] = useState("");
  const [errorContact, setErrorContact] = useState("");

  const [isErrorFirstName, setIsErrorFirstName] = useState(true);
  const [isErrorLastName, setIsErrorLastName] = useState(true);
  const [isErrorEmail, setIsErrorEmail] = useState(true);
  const [isErrorPassword, setIsErrorPassword] = useState(true);
  const [isErrorConfirmPassword, setIsErrorConfirmPassword] = useState(true);
  const [isErrorAddress, setIsErrorAddress] = useState(true);
  const [isErrorContact, setIsErrorContact] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorEmail(validateEmail(e.target.value));
    if(errorEmail) {
      setIsErrorEmail(true);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrorFirstName(validateFirstName(e.target.value));
    if(errorFirstName) {
      setIsErrorFirstName(true);
    }
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrorLastName(validateLastName(e.target.value));
    if(errorLastName) {
      setIsErrorLastName(true);
    }
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
    setErrorContact(validateContact(e.target.value));
    if(errorContact) {
      setIsErrorContact(true);
    }
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setErrorAddress(validateAddress(e.target.value));
    if(errorAddress) {
      setIsErrorAddress(true);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorPassword(validatePassword(e.target.value));
    if(errorPassword) {
      setIsErrorPassword(true);
    }
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorConfirmPassword(validateConfirmPassword(e.target.value));
    if(errorConfirmPassword) {
      setIsErrorConfirmPassword(true);
    }
  };

  const handleSubmit = async () => {
    // store the states in the form data
    if (password === confirmPassword) {
      try {
        const response = await axios({
          method: "post",
          url: "/customers/save",
          data: {
            customerName: firstName + " " + lastName,
            customerEmail: email,
            customerPassword: password,
            role: "USER",
            customerAddress: address,
            customerContact: contact,
          },
          headers: {},
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-md-11 col-xl-12">
          <div className="container">
            <div className="row h-100">
              <div className="col-md-6 col-lg-7 d-none d-md-block">
                <div className="card-body pt-5 text-black">
                  <h3 className="mb-5">Register here</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="customerFirstName"
                            name="customerFirstName"
                            value={firstName}
                            required
                            onChange={handleFirstNameChange}
                            error={errorFirstName.firstName}
                            className="form-control form-control-lg"
                          />
                          <div>{ isErrorFirstName ? <small className="text-danger ">{ errorFirstName.firstName }</small> : ''}</div>
                          <label className="form-label" htmlFor="customerFirstName">
                            First name
                          </label>
                         
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="customerLastName"
                            required
                            name="customerLastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className="form-control form-control-lg"
                          />
                          <div>{ isErrorLastName ? <small className="text-danger ">{errorLastName.lastName  }</small> : ''}</div>
                          <label className="form-label" htmlFor="customerLastName">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="customerEmail"
                        name="customerEmail"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="form-control form-control-lg"
                      />
                      <div>{ isErrorEmail ? <small className="text-danger ">{ errorEmail.email }</small> : ''}</div>
                      <label className="form-label" htmlFor="customerEmail">
                        Email
                      </label>
                      
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="customerPassword"
                        name="customerPassword"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control form-control-lg"
                      />
                      <div>{ isErrorPassword? <small className="text-danger ">{ errorPassword.password }</small> : ''}</div>
                      <label className="form-label" htmlFor="customerPassword">
                        Password
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        className="form-control form-control-lg"
                      />
                      <div>{ isErrorConfirmPassword ? <small className="text-danger ">{ errorConfirmPassword.confirmPassword }</small> : ''}</div>
                      <label className="form-label" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="customerAddress"
                        name="customerAddress"
                        required
                        value={address}
                        onChange={handleAddressChange}
                        className="form-control form-control-lg"
                      />
                      <div>{ isErrorAddress ? <small className="text-danger ">{ errorAddress.address }</small> : ''}</div>
                      <label className="form-label" htmlFor="customerAddress">
                        Address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="customerContact"
                        name="customerContact"
                        required
                        value={contact}
                        onChange={handleContactChange}
                        className="form-control form-control-lg"
                      />
                      <div>{  isErrorContact? <small className="text-danger ">{ errorContact.contact }</small> : ''}</div>
                      <label className="form-label" htmlFor="customerContact">
                        Contact
                      </label>
                    </div>

                    <div className="d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg ms-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                    <p
                      className="mb-5 text-center pt-3 pb-lg-2"
                      style={{ color: "#393f81" }}
                    >
                      Already have an account?{" "}
                      <a href="#!" style={{ color: "#393f81" }}>
                        Login here
                      </a>
                    </p>
                  </form>
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
