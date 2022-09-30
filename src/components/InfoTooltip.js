import React from "react";
import RegisterOk from "../images/RegistrationOK.svg";
import RegisterError from "../images/RegistrationError.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup  ${isOpen && "popup_opened"}`}>
      <div className="popup__content register__popup">
        <button
          className="popup-bigpic__close popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="register__image"
          src={isSuccess ? RegisterOk : RegisterError}
          alt={isSuccess ? "Успешно" : "Не очень"}
        ></img>
        <div className="register__confirm-text">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;