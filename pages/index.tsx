import { Heading, Text, Highlight, Flex, Button, Image } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  const handleStartTest = () => {
    window.location.href = "/test";
  };

  return (
    <MainLayout title="MBTI 性格测试" description="参加MBTI性格测试，通过这个性格测试更好地了解自己">
      <Flex
        position="relative"
        w={{
          base: "full",
          lg: "50%",
        }}
        alignSelf="center"
        px={4}
        pt={20}
        gap={8}
        h="calc(100vh - 80px)"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        zIndex={1}
      >
        <Heading
          as="h1"
          lineHeight="tall"
          textAlign="center"
        >
          <Highlight
            query="MBTI"
            styles={{
              py: 1,
              px: 4,
              rounded: "full",
              bg: "primary.500",
              color: "white",
            }}
          >
            参加 MBTI 性格测试 
          </Highlight>
        </Heading>
        <Text
          fontSize="xl"
          align="center"
        >
          通过这个性格测试更好地了解自己
          (完全免费开源)
        </Text>
        <Button
          w="min-content"
          colorScheme="primary"
          variant="solid"
          rightIcon={<FiArrowRight size={20} />}
          onClick={handleStartTest}
        >
          开始测试
        </Button>
      </Flex>
      <Image
        src={`/images/home-bottom.png`}
        alt="illustration"
        style={{
          position: "absolute",
          zIndex: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
          height: "auto",
        }}
      />
    </MainLayout>
  );
}
