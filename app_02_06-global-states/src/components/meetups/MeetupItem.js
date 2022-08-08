import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../stores/FavoritesContext";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoriteContext = useContext(FavoritesContext);
  let isFavorite = favoriteContext.itemIsFavorite(props.id);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteItemHandler}>
            {isFavorite ? "Remove from favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );

  function toggleFavoriteItemHandler() {
    if (isFavorite) {
      favoriteContext.remove(props.id);
      return;
    }

    favoriteContext.add({
      id: props.id,
      title: props.title,
      address: props.address,
      image: props.image,
      description: props.description,
    });
  }
}

export default MeetupItem;
