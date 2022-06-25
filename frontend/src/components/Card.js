import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some(i => i === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__trash-button ${isOwn ? 'element__trash-button_visible' : 'element__trash-button_hidden'}`
  );

  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return(
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
    </li>
  );
}

export default Card;
