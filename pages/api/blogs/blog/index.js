import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("MccollinsMedia");

    if (req.method === "POST") {
      if (!req.body) {
        return res
          .status(400)
          .json({ success: false, message: "No data provided" });
      }

      const result = await db.collection("blogs").insertOne(req.body);
      console.log(result);

      return res.status(200).json({
        success: true,
        message: "Blog Created",
      });
    }

    if (req.method === "GET") {
      const blogs = await db
        .collection("blogs")
        .find()
        .sort({ _id: -1 })
        .toArray();
      return res.status(200).json(blogs);
    }

    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
