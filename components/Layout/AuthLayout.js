import { Box } from "@chakra-ui/react";

export default function AuthLayout({ children }) {
  return (
    <Box height={"100vh"} width="100vw" minHeight={"fit-content"} bg="#FFDE11">
      {children}
    </Box>
  );
}
