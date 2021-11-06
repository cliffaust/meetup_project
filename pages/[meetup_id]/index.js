import { MongoClient } from "mongodb";
import Meetup from "../../components/meetups/MeetupDetail";

function MeetUpDetail(props) {
  return (
    <div>
      <h3>{props.meetup.title}</h3>
    </div>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetup = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetup.map((meetup) => ({
      params: { meetup_id: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetup_id;
  const client = await MongoClient.connect(
    "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findById(meetupId);

  console.log("This is the meetup ", selectedMeetup);

  client.close();

  return {
    props: {
      meetup: selectedMeetup,
    },
  };
};

export default MeetUpDetail;
