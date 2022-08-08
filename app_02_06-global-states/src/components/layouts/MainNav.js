import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../stores/FavoritesContext";

// now all things we define in Mainnave.module.css are properties of CssStyle object
import CssStyle from "./MainNav.module.css";

const MainNav = function () {
  const favoriteContext = useContext(FavoritesContext);
  return (
    <header className={CssStyle.header}>
      <div className={CssStyle.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/meetup/new">Create New Meetup</Link>
          </li>
          <li>
            <Link to="/meetup/favorites">
              My Meetups
              <span className={CssStyle.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
