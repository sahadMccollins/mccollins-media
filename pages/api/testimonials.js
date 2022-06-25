import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { unstable_getServerSession } from "next-auth/next";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    switch (req.method) {
      case "POST":
        return testimonialPost();
      case "PUT":
        return testimonialUpdate();
      case "DELETE":
        return testimonialDelete();
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }

  async function testimonialPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db.collection("testimonials").insert(req.body);
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Testimonials Created",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }

  async function testimonialUpdate() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("testimonials")
          .updateOne(
            { _id: ObjectId(req.body.id) },
            { $set: { name: req.body.name } }
          );
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Testimonial Updated",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
  async function testimonialDelete() {
    console.log(req.body);
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db
          .collection("testimonials")
          .deleteOne({ _id: ObjectId(req.body.id) });
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Testimonial Deleted",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }
};
