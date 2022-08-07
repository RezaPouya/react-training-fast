import { Link } from "react-router-dom";

const MainNav = function () {
  return (
    <header>
      <div>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/meetup/new">Create New Meetup</Link>
          </li>
          <li>
            <Link to="/meetup/favorites">My Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
