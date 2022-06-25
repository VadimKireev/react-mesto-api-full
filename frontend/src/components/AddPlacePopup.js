import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = useState();
  const [link, setLink] = useState();

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
    props.onClose();
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={props.isOpen ? 'popup_opened' : ''}
      onClose={props.onClose}
      buttonText='Создать'
      onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <input
        className="popup__input"
        type="text"
        name="name"
        id="input-place"
        placeholder="Название места"
        required
        minLength="2"
        maxLength="30"
        value={name || ''}
        onChange={handleChangeName} />
        <span className="popup__error" id="input-place-error"></span>
        <input
        className="popup__input"
        type="url"
        name="link"
        id="input-link"
        placeholder="Ссылка на фотографию"
        required
        value={link || ''}
        onChange={handleChangeLink} />
        <span className="popup__error" id="input-link-error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
