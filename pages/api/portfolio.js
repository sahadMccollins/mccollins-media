import clientPromise from "../../lib/mongodb";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    switch (req.method) {
      case "POST":
        return porfolioPost();
      case "PUT":
        return porfolioUpdate();
      case "DELETE":
        return porfolioDelete();
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }

  async function porfolioPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db.collection("portfolio").insert(req.body);
        console.log(result);

        res.status(200).json({
          sucess: true,
          message: "Portfolio Created",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }

  async function porfolioUpdate() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("portfolio")
          .updateOne(
            { _id: ObjectId(req.body.id) },
            { $set: { image: req.body.image } }
          );
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Portfolio Updated",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
  async function porfolioDelete() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("portfolio")
          .deleteOne({ _id: ObjectId(req.body.id) });
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Portfolio Delete",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
};
