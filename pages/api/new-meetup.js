import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    client.close();

    res.status(200).json("Meetup has been inserted!");

    console.log(data);
  }
};

export default handler;
