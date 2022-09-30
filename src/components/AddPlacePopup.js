import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useForm from "../hooks/useForm";

function AddPlacePopup({onClose, isOpen, isLoading, onAddPlace }) {
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();
  React.useEffect(() => {
    resetForm();
  }, [resetForm, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: values.name, link: values.link });
  }
  return (
    <PopupWithForm
      isFormValid={isFormValid}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="post"
      title="Новое место"
      buttonText={isLoading ? "Сохранение..." : "Добавить"}
    >
      {" "}
      <div className="popup__container">
        <input
          type="text "
          id="post-name-input"
          minLength="2 "
          maxLength="30 "
          name="name"
          onChange={handleChange}
          value={values.name || ""}
          className="popup__input popup-post__input popup-post__input_data_name"
          required="required "
          placeholder="Название "
        />
        {errors.name && (
          <span className="popup__input-error popup__input-error_active post-name-input-error">
            {errors.name}
          </span>
        )}
      </div>
      <div className="popup__container">
        <input
          type="url"
          id="post-url-input"
          name="link"
          onChange={handleChange}
          value={values.link || ""}
          className="popup-post__input popup__input popup-post__input_data_link"
          required="required "
          placeholder="Ссылка на картинку "
        />
        {errors.link && (
          <span className="popup__input-error popup__input-error_active post-url-input-error">
            {errors.link}
          </span>
        )}
      </div>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
