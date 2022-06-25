import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
      <div className="profile__avatar-group">
        {currentUser.avatar && (<img className="profile__avatar" src={currentUser.avatar} alt="Ваш аватар" />)}
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
      </div>
      <div className="profile__editor">
        <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button type="button" aria-label="edit profile" className="profile__edit-button" onClick={props.onEditProfile}></button>
        <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </div>
      </section>
      <ul className="elements">
        {
          props.cards.map((card) => (
              <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}/>
          ))
        }
      </ul>
    </main>
  );
}

export default Main;
