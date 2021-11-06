import axios from "axios";
import { MongoClient } from "mongodb";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups}></MeetupList>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();
  console.log(meetups);

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },

    revalidate: 1,
  };
};

export default HomePage;
