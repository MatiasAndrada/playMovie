import React from 'react';
import Search from './Search';
import { FavoriteList } from './favorite/FavoriteList';
import { Dropdown, Navbar as NavbarUI } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/actions/auth/logOutAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activo, user } = useSelector((state) => state.auth);

  function logOutUser() {
    dispatch(logOut());
  }

  // Rutas de imágenes locales
  const accountIcon = activo ? '/icons/user-accepted.png' : '/icons/SignIn.png';
  const favoriteListIcon = '/icons/favorite-list.png';
  const headerIcon = '/icons/Header.png';

  return (
    <NavbarUI className="container__navbar ">
      <NavbarUI.Brand>
        <div onClick={() => navigate('/', { replace: true })}>
          <img src={headerIcon} className="navbar__logo" alt="React Bootstrap logo" />
        </div>
      </NavbarUI.Brand>
      <Search />
      {activo === true && (
        <Dropdown className="dropdownFavoriteList" drop={'start'}>
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img src={favoriteListIcon} alt="icon favorite list" className="favoriteListIcon" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropDownMenu" flip={true}>
            <div className="dropDownItem">
              <FavoriteList idUser={user.uid} />
            </div>
          </Dropdown.Menu>
        </Dropdown>
      )}

      <Dropdown className="dropdownAccount">
        <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
          <img src={accountIcon} alt="icon account" className="accountIcon" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropDownMenuAccount" flip={true} align={'end'} variant={'dark'}>
          {activo ? (
            <Dropdown.Item onClick={logOutUser} className="dropdownItem">
              Log Out
            </Dropdown.Item>
          ) : (
            <>
              {' '}
              <Dropdown.Item
                onClick={() => {
                  navigate('/login', { replace: true });
                }}
                className="dropdownItem"
              >
                Iniciar Sesión
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate('/register', { replace: true });
                }}
                className="dropdownItem"
              >
                Crear Usuario
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </NavbarUI>
  );
};

export default Navbar;
