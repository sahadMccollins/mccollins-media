import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  switch (req.method) {
    case "POST":
      return formPost();
    case "DELETE":
      return formDelete();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function formPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        const result = await db.collection("formSubmit").insert(req.body);
        console.log(result);

        return res.status(200).json({
          sucess: true,
          message: "Form Created",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }

  async function formDelete() {
    if (session) {
      if (req.body) {
        try {
          const client = await clientPromise;
          const db = client.db("MccollinsMedia");

          const result = await db
            .collection("formSubmit")
            .deleteOne({ _id: ObjectId(req.body.id) });
          console.log(result);

          return res.status(200).json({
            sucess: true,
            message: "Form Deleted",
          });
        } catch (error) {
          res.json(error);
          res.status(405).end();
        }
      }
    } else {
      res.send({
        error: "You must be sign in to Delete the form",
      });
    }
  }
};
