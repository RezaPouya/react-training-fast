import { Routes, Route } from "react-router-dom";

import MainNav from "./components/layouts/MainNav";
import MeetupIndex from "./pages/Meetups/Index";
import MeetupNew from "./pages/Meetups/New";
import MeetupFavorites from "./pages/Meetups/Favorites";

const App = function () {
  // localhost:300
  // rpouya.ir

  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<MeetupIndex />} exact />
        <Route path="/meetup/new" element={<MeetupNew />} exact />
        <Route path="/meetup/favorites" element={<MeetupFavorites />}></Route>
      </Routes>
    </div>
  );
};

export default App;
