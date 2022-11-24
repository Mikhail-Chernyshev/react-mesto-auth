import trashUp from "../images/Vectortrashup.png";
import trashDown from "../images/Vectortrashdown.png";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Card({ card, onCardClick, onCardLike, onCardDeleteClick }) {
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick(evt) {
    evt.preventDefault();
    onCardDeleteClick(card._id);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
console.log(card)
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "element__trash_active" : "element__trash"
  }`;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : "element__like"
  }`;
  return (
    <div className="element">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      >
        <img
          src={trashUp}
          alt="кнопка удаления верх"
          className="element__trasher-up"
        />
        <img
          src={trashDown}
          alt="кнопка удаления низ"
          className="element__trasher-down"
        />
      </button>
      <img
        alt={card.name}
        className="element__image"
        src={card.link}
        onClick={handleClick}
      />
      <div className="element__atribute">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__score">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
