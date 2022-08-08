import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const New = function () {
  return (
    <section>
      <h1>Create New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );

  function addMeetupHandler(inputData) {
    // by default fetch send get request
    fetch(
      "https://react-started-877fd-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export default New;
