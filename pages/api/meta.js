import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    switch (req.method) {
      case "POST":
        return metaPost();
      case "PUT":
        return metaUpdate();
      case "DELETE":
        return metaDelete();
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }

  async function metaPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db.collection("meta").insert(req.body);
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "metas Created",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }

  async function metaUpdate() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("meta")
          .updateOne(
            { _id: ObjectId(req.body.id) },
            { $set: { name: req.body.name, content: req.body.content } }
          );
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "meta Updated",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
  async function metaDelete() {
    console.log(req.body);
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("meta")
          .deleteOne({ _id: ObjectId(req.body.id) });
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "meta Deleted",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
};
