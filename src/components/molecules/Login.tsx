import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sinemaDispatch, useAppSelector } from "../../store";
import { fetchLogin } from "../../store/feature/authSlice";



function Login() {

  const dispatch = useDispatch<sinemaDispatch>();

  const[email,setMail] = useState('example@test.com');
  const[password,setPassword] = useState('');

  const doLogin = () => {
    dispatch(fetchLogin({email,password}))
  }


  return (
    <form className="shadow-lg p-4 mb-5 bg-body rounded">
      {/* <!-- Email input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="form2Example1" className="form-control" onChange={(evt)=>setMail(evt.target.value)}/>
        <label className="form-label">Email address</label>
      </div>

      {/* <!-- Password input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="form2Example2" className="form-control"  onChange={(evt)=>setPassword(evt.target.value)}/>
        <label className="form-label">Password</label>
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              
            />
            <label className="form-check-label"> Remember me </label>
          </div>
        </div>
        <div className="col">
          <Link to={"/forgot-password"}>
            {/* <!-- Simple link --> */}
            <p>Forgot password?</p>
          </Link>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button
        type="button"
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-primary btn-block mb-4"
        onClick={doLogin}
      >
        Login
      </button>

      {/* <!-- Register buttons --> */}
      <div className="text-center">
        <Link to="/register">
          <p>Register</p>
        </Link>
      </div>
    </form>
  );
}

export default Login;
