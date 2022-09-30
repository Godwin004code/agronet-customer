import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { handleToggleLoginPassword } from "../slice/password-slice";
import { handleLogin } from "../slice/login-slice";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "../Signup/Signup.scss";

const Login = () => {
  
  const loginRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <section className="account-container">
      <div className="account-container-banner" style={{ height: "100vh" }}>
        <h2>
          <Link to="/">
            <span>Agro</span>
            <span style={{ color: "white" }}>net</span>
          </Link>
        </h2>
        <h3>Farmers and buyers connect</h3>
        <p>
          Agronet has made it easier for food producers to get customers and for
          consumers to get fresh farm produce.
        </p>
      </div>
      <div className="account-container-form">
        <div className="account-container-form-option">
          <h2>No account yet?</h2>
          <button onClick={() => navigate('/get-started')}>
            <Link to="/get-started">Register</Link>
          </button>
        </div>
        <div className="account-container-form-children">
          <h2>Log in</h2>
          <button>Log in with Google</button>
          <div className="or">or</div>
          <form onSubmit={(e) => dispatch(handleLogin(e))}>
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="email">Enter Phone Number or Email Address</label>
              <input
                type="text"
                placeholder="Phone Number or Email Address"
                id="email"
                style={{ marginTop: 10 }}
              />
            </div>
            <div>
              <label htmlFor="pwd">Enter Password</label>
              <div className="pwd-container" style={{ marginTop: 10 }}>
                <input
                  type="password"
                  id="pwd"
                  ref={loginRef}
                  placeholder="Password"
                />
                <div
                  onClick={() => dispatch(handleToggleLoginPassword(loginRef))}
                  style={{ cursor: "pointer" }}
                >
                  <FaEye />
                </div>
              </div>
            </div>
            <button>Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
