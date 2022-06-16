import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "DELETE") return;

  try {
    const client = await clientPromise;
    const db = client.db("MccollinsMedia");

    const result = await db
      .collection("blogs-category")
      .deleteOne({ _id: ObjectId(req.body.id) });
    console.log(result);
    return res.status(200).json({
      sucess: true,
      message: "Category Deleted",
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
};
