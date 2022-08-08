import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.Childern}
    </FavoritesContext.Provider>
  );

  function addFavoriteHandler(favorite) {
    // if you depeend on previouse state , call it like this ...
    //
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favorite);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((previousUserFavorites) => {
      // create new array and return it
      return previousUserFavorites.filter((p) => p.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((p) => p.id === meetupId);
  }
}

export default FavoritesContext;
