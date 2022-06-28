import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "PUT") return;
  if (req.body.id) {
    try {
      const client = await clientPromise;
      const db = client.db("MccollinsMedia");

      const result = await db
        .collection("blogs")
        .update({ _id: ObjectId(req.body.id) }, { $set: req.body });
      console.log(result);

      return res.status(200).json({
        sucess: true,
        message: "Blog Updated",
      });
    } catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
};
