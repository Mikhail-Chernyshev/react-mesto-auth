import React from "react";
import { useEffect } from "react";
function PopupWithForm({
  name,
  isOpen,
  title,
  onSubmit,
  children,
  onClose,
  buttonText,
  isFormValid
}) {
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape' ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => document.removeEventListener("keydown", closeByEscape);
    }
  }, [isOpen]);
  function handleClickOverlay(event) {
    if (event.target === event.currentTarget) onClose(event);
  }
  return (
    <div className={`popup popup-${name} ${isOpen && "popup_opened"}`} onClick={handleClickOverlay}>
      <div className="popup__content">
        <button
          className={`popup__close popup-${name}__close `}
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          noValidate
          action="#"
          className={`popup__data popup-${name}__data`}
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit "
            className="popup__delivery"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
