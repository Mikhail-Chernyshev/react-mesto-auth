import React from "react";
import { useEffect } from "react";
function ImagePopup({ card, onClose, isPopupOpened }) {
  useEffect(() => {
    function closeByEscape(evt) {
      console.log(card)
      if (evt.key === "Escape") {
        onClose();
      }
    }
    if (isPopupOpened) {
      document.addEventListener("keydown", closeByEscape);
      return () => document.removeEventListener("keydown", closeByEscape);
    }
  }, [isPopupOpened]);

  function handleClickOverlay(event) {
    if (event.target === event.currentTarget) onClose(event);
  }
  return (
    <div
      className={`popup popup-bigpic ${card && "popup_opened"}`}
      onClick={handleClickOverlay}
    >
      <div className="popup-bigpic__content">
        <img src={card.link} alt={card.name} className="popup-bigpic__pic" />
        <p className="popup-bigpic__title">{card.name}</p>
        <button
          className="popup-bigpic__close popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;