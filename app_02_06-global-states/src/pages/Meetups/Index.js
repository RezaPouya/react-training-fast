import { useState, useEffect } from "react";
import MeetupList from "../../components/meetups/MeetupList";

// here we are using useEffect to avoid infite loop

const Index = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-started-877fd-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setMeetups(mapToMeetupData(data));
      });
  }, []); // put any extenral dependencies in second parameter

  if (isLoading) {
    return <section>Loading ... </section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

function mapToMeetupData(data) {
  const meetups = [];
  for (const key in data) {
    const meetup = {
      id: key,
      ...data[key], // spread operator _ default javascript operator
    };
    meetups.push(meetup);
  }

  return meetups;
}
export default Index;
