import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;

    try {
      try {
        const client = await MongoClient.connect(
          "mongodb+srv://cliffaust:$Gingerpepper2018@cluster0.v3xzu.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        const meetupCollection = db.collection("meetups");
      } catch (error) {
        console.log("Database error");
        console.log(error);
      }

      try {
        const result = await meetupCollection.insertOne(data);
        console.log(result);
      } catch (error) {
        console.log("Insertion Error");
        console.log(error);
      }
      client.close();
    } catch (error) {
      console.log("an error occurred");
      console.log(error);
    }

    res.statusCode(200).json("Meetup has been inserted!");
  }
};

export default handler;
