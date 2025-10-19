import { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";

import Nav from "../common/nav";
import Footer from "../common/footer";
import Metadata from "../common/Metadata";

interface MainLayoutProps {
  children: ReactNode;
  hideBackground?: boolean;
  title?: string;
  description?: string;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Metadata title={props.title || 'MBTI 性格测试'} description={props.description || 'MBTI 性格测试'} />
      <Box
        w="full"
        minH="100vh"
        background={props.hideBackground ? 'transparent' : 'linear-gradient(to bottom, rgba(66, 152, 255, 1) 0%, rgba(66, 152, 255, 0.6) 80px, rgba(127, 187, 255, 0.6), rgba(244, 244, 180, 0.6), rgba(252, 242, 59, 0.6))'}
      >
        <Nav />
        <Flex
          as="main"
          w="100%"
          minH="calc(100vh - 80px)"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          {props.children}
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
