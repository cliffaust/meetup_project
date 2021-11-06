import axios from "axios";
import router from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetup() {
  const addMeetupHandler = async (enteredMeetup) => {
    const { data } = await axios.post("/api/new-meetup", enteredMeetup);

    console.log(data);

    router.push("/");
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </div>
  );
}

export default newMeetup;
