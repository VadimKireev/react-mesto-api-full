import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const userAvatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: userAvatarRef.current.value
    });
    props.onClose();
  }

  useEffect(() => {
    userAvatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
    title='Обновить аватар'
    name='avatar'
    isOpen={props.isOpen ? 'popup_opened' : ''}
    onClose={props.onClose}
    buttonText='Сохранить'
    onSubmit={handleSubmit}>
    <fieldset className="popup__fieldset">
      <label className="popup__label">
        <input className="popup__input" type="url" name="avatar" id="input-avatar-link" placeholder="Ссылка на фотографию" ref={userAvatarRef} required />
        <span className="popup__error" id="input-avatar-link-error"></span>
      </label>
    </fieldset>
  </PopupWithForm>
  )
}

export default EditAvatarPopup;
