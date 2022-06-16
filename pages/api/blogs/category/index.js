import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "POST") return;
  if (req.body.name) {
    try {
      const client = await clientPromise;
      const db = client.db("MccollinsMedia");

      const result = await db.collection("blogs-category").insertOne(req.body);
      console.log(result);

      return res.status(200).json({
        sucess: true,
        message: "Category Created",
      });
    } catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
};
