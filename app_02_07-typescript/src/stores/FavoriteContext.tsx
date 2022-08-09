import IMeetup from "../types/meetup";
import React, { createContext, useState } from "react";
import IFavoriteContext from "../types/stores/ifavoritecontext";

export function FavoritesContextProvider(props: any) {
  const [userFavorites, setUserFavorites] = useState<IMeetup[]>([]);

  const context: IFavoriteContext = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    add: addFavoriteHandler,
    remove: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );

  function addFavoriteHandler(meetup: IMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(meetup);
    });
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
}

const favContext: IFavoriteContext = {
  favorites: [],
  totalFavorites: 0,
  add: (meetup: IMeetup) => {},
  remove: (meetupId: string) => {},
  itemIsFavorite: (meetupId: string) => {},
};

const FavoritesContext = createContext(favContext);

export default FavoritesContext;
