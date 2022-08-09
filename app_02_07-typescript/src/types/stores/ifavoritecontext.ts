import Meetup from "../meetup";

interface IFavoriteContext {
  favorites: Meetup[];
  totalFavorites: number;
  add: (favoriteMeetup: Meetup) => void;
  remove: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => void;
}

export default IFavoriteContext;
