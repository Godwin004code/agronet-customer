import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { handleTogglePassword} from "../slice/password-slice";
import { Link, useNavigate  } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "./Signup.scss";


const Signup = () => {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <section className="account-container">
      <div className="account-container-banner">
        <h2>
          <Link to="/">
          <span>Agro</span><span style={{color: 'white'}}>net</span>
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
          <h2>Already have an account?</h2>
          <button onClick={() => navigate('/login')}>
            <Link to="/login">Login</Link>
          </button>
        </div>
        <div className="account-container-form-children">
          <h2>Create an account</h2>
          <button>Register with Google</button>
          <div className="or">or</div>
          <form>
            <div className="name-container" style={{ marginBottom: 20 }}>
              <div>
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  style={{ marginTop: 10 }}
                />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  style={{ marginTop: 10 }}
                />
              </div>
            </div>
            <div className="name-container" style={{ marginBottom: 20 }}>
              <div>
                <label htmlFor="fname">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  style={{ marginTop: 10 }}
                />
              </div>
              <div>
                <label htmlFor="lname">State/Province</label>
                <input
                  type="text"
                  placeholder="State/Province"
                  style={{ marginTop: 10 }}
                />
              </div>
            </div>
            <div className="name-container" style={{ marginBottom: 20 }}>
              <div>
                <label htmlFor="fname">City</label>
                <input
                  type="text"
                  placeholder="City"
                  
                  style={{ marginTop: 10 }}
                />
              </div>
              <div>
                <label htmlFor="lname">Street</label>
                <input
                  type="text"
                  placeholder="Street"
                  id="lname"
                  style={{ marginTop: 10 }}
                />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="business-name">Business Name (For sellers)</label>
              <input
                type="text"
                placeholder="Business Name"
                id="business-name"
                style={{ marginTop: 10 }}
              />
            </div>
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
                  ref={passwordRef}
                  placeholder="Password"
                />
                <div
                  onClick={() => dispatch(handleTogglePassword(passwordRef))} style={{cursor:'pointer'}}
                >
                  {" "}
                  <FaEye />
                </div>
              </div>
            </div>
            <button>Create Account</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
