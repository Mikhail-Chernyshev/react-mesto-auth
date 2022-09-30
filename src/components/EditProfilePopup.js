import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import useForm from "../hooks/useForm";

function EditProfilePopup({isOpen, onUpdateUser, isLoading, onClose}) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();

  React.useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    
    onUpdateUser({ name: values.name, about: values.about });
  
  }
  return (
    <PopupWithForm
      isFormValid={isFormValid}
      isLoading={isLoading}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
    >
      <div className="popup__container">
        <input
          type="text"
          id="name-input"
          minLength="2 "
          maxLength="40 "
          name="name"
          className="popup__input popup__input_data_name"
          required
          value={values.name || ""}
          onChange={handleChange}
          placeholder="Имя"
        />
        {errors.name && (
          <span className="popup__input-error popup__input-error_active name-input-error">
            {errors.name}
          </span>
        )}
      </div>
      <div className="popup__container">
        <input
          type="text"
          id="rank-input"
          minLength="2"
          maxLength="200 "
          name="about"
          className="popup__input popup__input_data_rank"
          required="required "
          value={values.about || ""}
          onChange={handleChange}
          placeholder="О себе "
        />
        {errors.rank && (
          <span className="popup__input-error popup__input-error_active rank-input-error">
            {errors.rank}
          </span>
        )}
      </div>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
