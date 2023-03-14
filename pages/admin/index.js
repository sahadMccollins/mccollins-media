import React from "react";
import dynamic from "next/dynamic";
import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const Index = ({ blog, portfolio, testimonials }) => {
  const { data: session } = useSession();
  const router = useRouter();

  // if (!session) {
  //   router.push("/admin/login");
  //   return <p>Loading...</p>;
  // }

  return (
    <Stack width={"100%"}>
      <Flex width={"100%"}>
        <Box width={{ base: "100%", md: "20%" }}>
          <SimpleGrid columns={1} spacing={5} width="100%">
            <Box bg="#f7cf5f" width={"100%"} height="150px" p={3}>
              <Text fontSize={"22px"}>Blogs</Text>
              <Text fontSize={"34px"}>{blog.length}</Text>
              <Text fontSize={"16px"}>
                <Link href={"/admin/blogs"}>View All</Link>
              </Text>
            </Box>
            <Box bg="#1dbb99" width={"100%"} height="150px" p={3}>
              <Text fontSize={"22px"}>Portfolio</Text>
              <Text fontSize={"34px"}>{portfolio.length}</Text>
              <Text fontSize={"16px"}>
                <Link href={"/admin/portfolio"}>View All</Link>
              </Text>
            </Box>
            <Box bg="#1f3953" width={"100%"} height="150px" p={3} color="#fff">
              <Text fontSize={"22px"}>testimonials</Text>
              <Text fontSize={"34px"}>{testimonials.length}</Text>
              <Text fontSize={"16px"}>
                <Link href={"/admin/testimonials"}>View All</Link>
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box width={{ base: "100%", md: "80%" }}></Box>
      </Flex>
    </Stack>
  );
};

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blog = await db.collection("blogs").find({}).toArray();
  blog = JSON.parse(JSON.stringify(blog));

  let portfolio = await db.collection("portfolio").find({}).toArray();
  portfolio = JSON.parse(JSON.stringify(portfolio));

  let testimonials = await db.collection("testimonials").find({}).toArray();
  testimonials = JSON.parse(JSON.stringify(testimonials));

  return {
    props: { blog, portfolio, testimonials },
  };
}

Index.getLayout = function getLayout(Index) {
  return <AdminLayout>{Index}</AdminLayout>;
};

export default Index;
