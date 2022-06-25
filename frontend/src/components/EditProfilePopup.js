import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
    props.onClose();
  }

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      isOpen={props.isOpen ? 'popup_opened' : ''}
      onClose={props.onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
          className="popup__input"
          type="text"
          name="name"
          id="name"
          placeholder="Ваше имя"
          required minLength="2"
          maxLength="40"
          value={name || ''}
          onChange={handleChangeName} />
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__label">
          <input
          className="popup__input"
          type="text"
          name="about"
          id="about"
          placeholder="Ваша работа"
          required minLength="2"
          maxLength="200"
          value={description || ''}
          onChange={handleChangeDescription} />
          <span className="popup__error" id="about-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
