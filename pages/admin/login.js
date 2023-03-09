import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Image,
  Input,
  FormLabel,
  FormControl,
  Button,
} from "@chakra-ui/react";

const AuthLayout = dynamic(() => import("../../components/Layout/AuthLayout"), {
  ssr: false,
});

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
      return;
    }
    return router.push("/admin");
  };

  if (!session) {
    return (
      <>
        <Stack width={"100%"}>
          <Container maxWidth={"lg"}>
            <Flex direction={"column"} justifyContent="center" height={"100vh"}>
              <Box bg="#fff" p={10} borderRadius="10%">
                <Image
                  alt="McCollins Media"
                  margin={"auto"}
                  width={"209px"}
                  height="47px"
                  src="/assets/image/navbar/logo-yellow.svg"
                />
                <Flex direction={"column"}>
                  <Heading mt={5} fontSize={"30px"}>
                    Get Started with your Dashboard
                  </Heading>
                  {/* <Text mt={5}>Sign in to your account</Text> */}
                </Flex>
                <Box>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <FormControl isRequired mt={5}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type={"email"}
                        id="email"
                        name="email"
                        borderRadius={"50px"}
                        required
                      />
                    </FormControl>
                    <FormControl isRequired mt={5}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type={"password"}
                        id="password"
                        name="password"
                        borderRadius={"50px"}
                        required
                      />
                    </FormControl>
                    <p style={{ color: "red", paddingTop: "10px" }}>
                      {message}
                    </p>
                    <Button
                      mt={5}
                      colorScheme="yellow"
                      background={"#FFDE11"}
                      type="submit"
                      borderRadius={"50px"}
                      fontSize={"18px"}
                      fontWeight="bold"
                    >
                      Login
                    </Button>
                  </form>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Stack>
      </>
    );
  } else {
    router.replace("/admin");
  }
};

Login.getLayout = function getLayout(Login) {
  return <AuthLayout>{Login}</AuthLayout>;
};

export default Login;
