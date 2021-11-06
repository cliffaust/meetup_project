import { MongoClient } from "mongodb";
import Meetup from "../../components/meetups/MeetupDetail";

function MeetUpDetail() {
  return (
    <div>
      <Meetup meetup={meetup}></Meetup>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetup = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetup.map(() => ({ params: { meetupId: meetup._id.toString() } })),
    props: {
      meetup: meetup,
    },
  };
};

export default MeetUpDetail;
