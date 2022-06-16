import React from "react";
import dynamic from "next/dynamic";
import clientPromise from "../../lib/mongodb";

// import AdminLayout from "../../components/Layout/AdminLayout";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const Index = ({ users }) => {
  return <div>{users[0].test}</div>;
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
