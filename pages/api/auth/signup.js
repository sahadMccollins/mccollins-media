import clientPromise from "../../../lib/mongodb";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password, name } = req.body;
    //Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    const client = await clientPromise;
    const db = client.db("MccollinsMedia");
    //Check existing
    const checkExisting = await db
      .collection("users")
      .findOne({ email: email });
    //Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      return;
    }
    //Hash password
    const status = await db.collection("users").insertOne({
      email,
      password: await hash(password, 12),
      name,
    });
    //Send success response
    res.status(201).json({ message: "User created", ...status });
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}
