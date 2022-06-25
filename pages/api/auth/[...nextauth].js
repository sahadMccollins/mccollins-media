import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { compare } from "bcryptjs";

export const authOptions = {
  //Configure JWT

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // console.log(req);
        // console.log(credentials);
        //Connect to DB
        const client = await clientPromise;
        //Get all the users
        const users = await client.db("MccollinsMedia").collection("users");
        //Find user with the email
        const result = await users.findOne({
          email: credentials.email,
        });
        // console.log(result);
        //Not found - send error res
        if (!result) {
          throw new Error("No user found with the email");
        }
        // console.log(credentials.passowrd, result.password);
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        console.log(checkPassword);
        //Incorrect password - send response
        if (!checkPassword) {
          throw new Error("Password doesnt match");
        }
        //Else send success response
        return { email: result.email };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.JWT_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

export default NextAuth(authOptions);
