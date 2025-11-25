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

  // async function formPost() {
  //   if (req.body) {
  //     try {
  //       const client = await clientPromise;
  //       const db = client.db("MccollinsMedia");

  //       const result = await db.collection("formSubmit").insert(req.body);
  //       console.log(result);

  //       return res.status(200).json({
  //         sucess: true,
  //         message: "Form Created",
  //       });
  //     } catch (error) {
  //       res.json(error);
  //       res.status(405).end();
  //     }
  //   }
  // }

  async function formPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        // Save in MongoDB
        const result = await db.collection("formSubmit").insertOne(req.body);
        console.log("Saved in DB:", result.insertedId);

        const {
          firstName,
          email,
          contact,
          services,
          company,
          date,
          page,
          source
        } = req.body;

        if (!firstName || !email) {
          return res.status(400).json({
            success: false,
            message: "Name and email are required",
          });
        }

        // const apiToken = process.env.PIPEDRIVE_API_TOKEN;
        const apiToken = "b245e0398271b9a5bcb8de9d296b5ece6f00b0ab";
        const baseUrl = "https://prowork.pipedrive.com/api/v1";

        // 1️⃣ Create Person
        const personResponse = await fetch(
          `${baseUrl}/persons?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: firstName,
              email,
              phone: contact,
            }),
          }
        );

        const personData = await personResponse.json();
        console.log("Person:", personData);

        if (!personResponse.ok) {
          return res.status(500).json({
            success: false,
            message: "Failed to create person",
            error: personData.error,
          });
        }

        const personId = personData.data.id;

        // 2️⃣ Create Lead
        const leadResponse = await fetch(
          `${baseUrl}/leads?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: `Lead from Website - ${firstName}`,
              person_id: personId,
            }),
          }
        );

        const leadData = await leadResponse.json();
        console.log("Lead:", leadData);

        if (!leadResponse.ok) {
          return res.status(500).json({
            success: false,
            message: "Failed to create lead",
            error: leadData.error,
          });
        }

        const leadId = leadData.data.id;

        // 3️⃣ Create a Note for full details (recommended)
        await fetch(
          `${baseUrl}/notes?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: `
              New Lead Details:
              Name: ${firstName}
              Email: ${email}
              Phone: ${contact}
              Services: ${services}
              Company: ${company}
              Source: ${source}
              Date: ${date}
            `,
              lead_id: leadId,
            }),
          }
        );

        return res.status(200).json({
          success: true,
          message: "Form saved and Pipedrive lead created",
        });

      } catch (error) {
        console.error("❌ Error:", error);
        return res.status(500).json({
          success: false,
          message: "Server error",
          error,
        });
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
