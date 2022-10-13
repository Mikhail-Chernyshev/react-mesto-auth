import { Link, useLocation } from "react-router-dom";
import React from "react";
function Header({ loggedIn, email, onClick }) {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__container">
        {loggedIn && (
          <div className="header__info">
            <p className="header__email">{email}</p>
            <Link to="/signin" onClick={onClick} className="header__button">
              Выйти
            </Link>
          </div>
        )}
        {location.pathname === "/signin" && (
          <Link to="/signup" className="header__button">
            Регистрация
          </Link>
        )}
        {location.pathname === "/signup" && (
          <Link to="/signin" className="header__button">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
