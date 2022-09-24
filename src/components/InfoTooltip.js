import React from "react";
import RegisterOk from '../images/RegistrationOK.svg'
import RegisterError from '../images/RegistrationError.svg'


function InfoTooltip({isOpen, onClose, registerWellDone}) {
    return (
        <div className={`popup  ${isOpen && 'popup_opened'}`}>
        <div className="popup__content register__popup">
        <button
          className="popup-bigpic__close popup__close"
          type="button"
          onClick={onClose}
        ></button>
          <img className="register__image" 
          src={registerWellDone ? RegisterOk : RegisterError} 
          alt={registerWellDone ? 'Успешно' : 'Не очень'
          }></img>
          <div className="register__confirm-text">
            {registerWellDone ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
          </div>
        </div>
      </div>
    )
}

export default InfoTooltip
// import successIcon from '../images/success-icon.svg';
// import unsuccessIcon from '../images/unsuccess-icon.svg';

// const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
//   return (
//     <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
//       <div className="popup__container">
//         <button type="button" className="popup__close" onClick={onClose} />
//         <img
//           src={isSuccess ? successIcon : unsuccessIcon}
//           alt={
//             isSuccess ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
//           }
//           className="popup__signup-icon"
//         />
//         <h3 className="popup__signup-title">
