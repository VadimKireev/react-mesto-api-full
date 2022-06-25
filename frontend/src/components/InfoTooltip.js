import React from "react";

function InfoTooltip(props) {

  return(
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} id="popup-info-tooltip">
      <div className="popup__container" id="info-tooltip-container">
        <img className="popup__image" src={props.statusImage} alt={`картинка регистрации: ${props.status}`} />
        <h2 className="popup__title popup__title_centered">{props.title}</h2>
        <button className="popup__close-button" type="button" id="info-tooltip-popup-close-button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;
