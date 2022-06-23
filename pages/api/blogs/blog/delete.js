import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "DELETE") return;

  try {
    const client = await clientPromise;
    const db = client.db("MccollinsMedia");

    const result = await db
      .collection("blogs")
      .deleteOne({ _id: ObjectId(req.body.id) });
    console.log(result);
    return res.status(200).json({
      sucess: true,
      message: "Blog Deleted",
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
};
