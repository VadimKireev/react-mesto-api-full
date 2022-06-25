function ImagePopup(props) {
  return (
    <div className={`popup popup_type_large-image ${props.isOpen}`}>
      <div className="popup__large-image-container" id="large-image-container">
        <img className="popup__large-image" src={props.card.link} alt={props.card.name} />
        <p className="popup__subtitle">{props.card.name}</p>
        <button className="popup__close-button" type="button" id="large-image-popup-close-button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
