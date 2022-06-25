function PopupWithForm(props) {
  return (
      <div className={`popup ${props.isOpen}`} id={`popup-${props.name}`}>
        <div className="popup__container" id={`${props.name}-container`}>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`${props.name}-form`} id={`${props.name}-form`} onSubmit={props.onSubmit} noValidate>
            {props.children}
            <button className="popup__submit-button" type="submit">{props.buttonText}</button>
          </form>
          <button className="popup__close-button" type="button" id={`${props.name}-popup-close-button`} onClick={props.onClose}></button>
        </div>
      </div>
  );
}

export default PopupWithForm;
