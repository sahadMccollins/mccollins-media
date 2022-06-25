import React from "react";
import dynamic from "next/dynamic";
import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const Index = ({ users }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/admin/login");
    return <p>Loading...</p>;
  }

  return <div>hello</div>;
};

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let users = await db.collection("blogs").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}

Index.getLayout = function getLayout(Index) {
  return <AdminLayout>{Index}</AdminLayout>;
};

export default Index;
