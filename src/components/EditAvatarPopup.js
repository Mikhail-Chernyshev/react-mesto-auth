import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useForm from "../hooks/useForm";

function EditAvatarPopup(props) {
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();
React.useEffect(() => {
  resetForm();
}, [resetForm, props.isOpen])
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
        link: values.link
    });
  }
  return (
    <PopupWithForm
      isFormValid={isFormValid}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      buttonText={props.isLoading ? 'Сохранение...' : 'Обновить'}
    >
      <div className="popup__container popup-avatar__container">
        <input
          type="url"
          id="avatar-name-input"
          minLength="2 "
          maxLength="200"
          name="link"
          value={values.link || ""}
          className="popup__input popup-avatar__input popup-avatar__input_data_name"
          required="required"
          placeholder="Введите ссылку"
          onChange={handleChange}
        />
       {errors.link && (<span className="popup__input-error popup__input-error_active -name-input-error">{errors.link}</span>)}
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
