import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blogs = await db.collection("blogs").find({}).toArray();

  let salman = { test2: "hi hello" };

  const result = await db.collection("blogs").insertOne(salman);

  res.json(blogs);
};
