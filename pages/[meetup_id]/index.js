import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetail() {
  const meetup = {
    id: 1,
    title: "Programming is the future",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80",
    address: "343 Danlogo, Italy",
    description: "This is the first meetup",
  };
  return (
    <div>
      <MeetUpDetail meetup={meetup}></MeetUpDetail>
    </div>
  );
}

export default MeetUpDetail;
