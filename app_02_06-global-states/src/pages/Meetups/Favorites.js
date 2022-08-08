import { useContext } from "react";
import FavoritesContext from "../../stores/FavoritesContext";
import MeetupList from "../../components/meetups/MeetupList";

const Favorites = function () {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <section>
      <h1>The Favorites Meetups</h1>
      {getConent()};
    </section>
  );

  function getConent() {
    if (favoriteContext.totalFavorites === 0) {
      return <p>You don't have any favorite meetup yet.</p>;
    }

    return <MeetupList meetups={favoriteContext.favorites} />;
  }
};

export default Favorites;
