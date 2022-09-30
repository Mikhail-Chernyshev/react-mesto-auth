import React from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";

function Register(props) {
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(values);
    resetForm();
  }

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="popup__data popup-login__data login__data" noValidate>
        <div className="popup__container">
          <input
            type="text"
            id="email-input"
            minLength="2 "
            maxLength="400"
            name="email"
            className="popup__input popup__input_data_email login__input"
            required
            value={values.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && (
            <span className="popup__input-error popup__input-error_active register__input-error">
              {errors.email}
            </span>
          )}
        </div>
        <div className="popup__container">
          <input
            type="password"
            id="password-input"
            minLength="2 "
            maxLength="400"
            name="password"
            className="popup__input popup__input_data_password login__input"
            required
            value={values.password || ""}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && (
            <span className="popup__input-error popup__input-error_active register__input-error">
              {errors.password}
            </span>
          )}
        </div>
        <button
          type="submit "
          className="popup__delivery login__delivery"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <Link to="/signin" className="login__infoforuser">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
