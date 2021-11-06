import axios from "axios";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetup() {
  async const addMeetupHandler = (enteredMeetup) => {
    const response = await axios.post('/api/new-meetup', enteredMeetup)

    const data = await response.json()

    console.log(data)
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </div>
  );
}

export default newMeetup;
