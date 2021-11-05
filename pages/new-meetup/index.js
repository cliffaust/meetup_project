import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetup() {
  const addMeetupHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </div>
  );
}

export default newMeetup;
