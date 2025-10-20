import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={2}
      w="100%"
      h="full"
      bg="black"
      color="white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        本网站上的所有测试都基于此{" "}
        <Link
          href="https://github.com/chenxuan520/mbti/blob/main/MBTI-personality-test.pdf"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            来源
          </Button>
        </Link>
      </Text>
      <Text>
        Made origin by{" "}
        <Link
          href="https://github.com/vsme"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            vsme
          </Button>
        </Link>
      </Text>
    </Flex>
  );
}
