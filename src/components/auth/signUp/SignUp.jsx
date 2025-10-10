//react
import React, { useState, useEffect } from 'react';
//react-router-dom
import { Link, useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../store/actions/auth/signUpAction';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    email: '',
    password: '',
  });
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.activo) {
      navigate('/');
    }
  }, [auth, navigate]);

  function handleInputChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(datos.email, datos.password));
  };

  // Rutas de imágenes locales
  const bgImage = '/bg/SignUp.webp';
  const iconCard = '/icons/SignUp.png';

  return (
    <div className="container__card">
      <img src={bgImage} className="img-bg" alt="Background SignUp" />
      <div className="card-d">
        <div className="card-header">
          <img src={iconCard} className="icon-card" alt="Icon account" />
        </div>
        <div className="card-body">
          <h2 className="title">Crear cuenta</h2>
          {auth.error && (
            <div className="alert alert-danger" role="alert">
              {auth.error}
            </div>
          )}
          <form className="container___form">
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
              <svg viewBox="0 0 13 10" height="15px" width="25px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </form>
          <p className="text-redirect">
            Ya tienes una cuenta?
            <Link to="/login" className="link-redirect">
              signIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
