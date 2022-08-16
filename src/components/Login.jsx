import React, {useState} from "react";
import axios from "axios";
import LoginPage from '../assets/images/loginPage.jpg'
import qs from 'qs';
import { useDispatch, useSelector} from 'react-redux'
import { loginStart } from "../redux/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState([]);
  
  const dispatch = useDispatch();
  const tryLogin = (tokens, email) => {
    dispatch(loginStart(tokens, email));
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
      try {
        const data = { 'email':email, 'password':password};
        const response = await axios({
          method: "post",
          url: "/login",
          data: qs.stringify(data),
          headers: {
          },
        });
        
        const tokens = response.data;
        // const currentEmail = email
        tryLogin(tokens, email);
      } catch (error) {
        console.log(error);
      }
  };
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
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="passsword"
                            name="passsword"
                            value={password}
                            onChange={handlePasswordChange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleSubmit}
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
