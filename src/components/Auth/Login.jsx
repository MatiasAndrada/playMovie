import React from "react";

const Login = () => {

  return (
    <div className="container">
      <img src="/BgLogin.png" className="img-control" alt="background auth" />
      <form className="container__form">
        <h3 className="form__title">-SVG-</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label
              className="custom-control-label-check"
              htmlFor="customCheck1"
            >
              Remember me
            </label>
          </div>
        </div>

        <button className="cta">
          <span>Sign in</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
