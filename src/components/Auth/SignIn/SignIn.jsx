//react
import React, { useState } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//firebase-auth
import { signIn } from "../../../store/actions/auth/signInAction";
//firebase-storage
import { fileDownload } from "../../../firebase/fileDowload";
//redux
import { useDispatch } from "react-redux";
import store from "../../../store"; 

const SignIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(" ");
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(datos.email, datos.password));
    
  }; 

store.subscribe(updateData)
 function updateData () {
   setError(store.getState().authSlice.error);
 }
  function setImg(imgID, url) {
    fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  setImg("bg-img", "img/bg/SignIn.png");
  setImg("icon-card", "img/icons/SignIn.png");
  return (
    <div className="container__card">
      <img src="" id="bg-img" className="img-bg" alt="Background SignIn" />
      <div className="card">
        <div className="card-header">
          <img src="" id="icon-card" className="icon-card" alt="Icon account" />
        </div>
        <div className="card-body">
        {error && <p className="error">{error}</p>}
          <form className="container__form">
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              onChange={handleInputChange}
            />
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Ingresa tu Contraseña"
              onChange={handleInputChange}
            />
            <button className="cta" type="submit" onClick={handleSubmit}>
              <span>Sign in</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </form>
          <p className="text-redirect">
            Crear una cuenta?
            <Link to="/signUp" className="link-redirect">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
