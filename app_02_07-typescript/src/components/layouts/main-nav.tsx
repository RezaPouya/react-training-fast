import { Link } from "react-router-dom";
import { useContext } from "react";
import CssStyle from "../layouts/main-nav.module.css";

const MainNav = (props: any) => {
  //const favoriteContext = useContext(FavoritesContext);
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
              {/* <span className={CssStyle.badge}>
                {favoriteContext.totalFavorites}
              </span> */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
