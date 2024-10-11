import Link from "next/link";
import { Flex, Button } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

export default function Nav() {
  return (
    <Flex
      as="nav"
      py={2}
      px={5}
      w="full"
      h={20}
      justifyContent="space-between"
      alignItems="center"
      overflowX="hidden"
    >
      <Flex
        gap={5}
        alignItems="center"
        overflowX="hidden"
      >
        <Link href="/">
          <Button
            colorScheme="black"
            variant="link"
            fontWeight="bold"
            textTransform="uppercase"
          >
            MBTI 性格测试
          </Button>
        </Link>
        {/* GitHub Repo stars */}
        <a
          href="https://github.com/vsme/mbti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="//img.shields.io/github/stars/vsme/mbti"
            alt="GitHub Repo stars"
          />
        </a>
      </Flex>
      <Link href="/test/result/history">
        <Button
          variant="solid"
          leftIcon={<BiHistory size={24} />}
        >
          测试历史
        </Button>
      </Link>
    </Flex>
  );
}
