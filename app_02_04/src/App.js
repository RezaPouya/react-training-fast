import { Routes, Route } from "react-router-dom";

import MeetupIndex from "./pages/Meetups/Index";
import MeetupNew from "./pages/Meetups/New";
import MeetupFavorites from "./pages/Meetups/Favorites";
import Layout from "./components/layouts/Layout";

const App = function () {
  // localhost:300
  // rpouya.ir

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MeetupIndex />} exact />
        <Route path="/meetup/new" element={<MeetupNew />} exact />
        <Route path="/meetup/favorites" element={<MeetupFavorites />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
