import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default async (req, res) => {

  // ✅ CORS HERE (TOP)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

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

        // Save in MongoDB
        const result = await db.collection("formSubmit").insertOne(req.body);
        console.log("✅ Saved in DB:", result.insertedId);

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

        const apiToken = "e32456b268778b5098d84df214072fbf3af06425";
        const baseUrl = "https://prowork.pipedrive.com/api/v1";

        // -------------------------------
        // ✅ 1️⃣ Create Organization
        // -------------------------------
        let organizationId = null;

        if (company) {
          const orgResponse = await fetch(
            `${baseUrl}/organizations?api_token=${apiToken}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: company,
              }),
            }
          );

          const orgData = await orgResponse.json();
          console.log("🏢 Organization:", orgData);

          if (orgResponse.ok) {
            organizationId = orgData.data.id;
          }
        }

        // -------------------------------
        // ✅ 2️⃣ Create Person
        // -------------------------------
        const personResponse = await fetch(
          `${baseUrl}/persons?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: firstName,
              email,
              phone: contact,
              org_id: organizationId || null,
            }),
          }
        );

        const personData = await personResponse.json();
        console.log("👤 Person:", personData);

        if (!personResponse.ok) {
          return res.status(500).json({
            success: false,
            message: "Failed to create person",
            error: personData.error,
          });
        }

        const personId = personData.data.id;

        // -------------------------------
        // ✅ 3️⃣ Create Deal (Directly)
        // -------------------------------
        const dealResponse = await fetch(
          `${baseUrl}/deals?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: `Deal - ${firstName}`,
              person_id: personId,
              org_id: organizationId || null,
              value: 0,
              currency: "AED",
            }),
          }
        );

        const dealData = await dealResponse.json();
        console.log("💼 Deal:", dealData);

        if (!dealResponse.ok) {
          return res.status(500).json({
            success: false,
            message: "Failed to create deal",
            error: dealData.error,
          });
        }

        const dealId = dealData.data.id;

        // -------------------------------
        // ✅ 4️⃣ Add Note to Deal
        // -------------------------------
        await fetch(
          `${baseUrl}/notes?api_token=${apiToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: `
New Deal Details:
Name: ${firstName}
Email: ${email}
Phone: ${contact}
Company: ${company}
Services: ${services}
Source: ${source}
Date: ${date}
            `,
              person_id: personId,
              deal_id: dealId,
            }),
          }
        );

        return res.status(200).json({
          success: true,
          message: "Organization, Person & Deal created successfully",
          dealId: dealId,
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
