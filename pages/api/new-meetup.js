import { MongoClient } from "mongodb";

async const handler = (req, res) => {
  if (req.method == "POST") {
    const data = req.body;


    const client = await MongoClient.connect(
      "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db()

    const meetupCollection = db.collection("meetups")

    const result = await meetupCollection.insertOne(data)

    console.log(result)

    client.close()

    res.statusCode(200).json('Meetup has been inserted!')
  }
};

export default handler;
