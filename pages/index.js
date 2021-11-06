import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: 1,
    title: "Programming is the future",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80",
    address: "343 Danlogo, Italy",
    description: "This is the first meetup",
  },
  {
    id: 2,
    title: "Virtual Reality",
    image:
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80",
    address: "213 James, Italy",
    description: "This is the second meetup",
  },
];

function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups}></MeetupList>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      meetups: meetups,
    },
  };
};

export default HomePage;
