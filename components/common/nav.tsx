import Link from "next/link";
import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import AboutModal from "./about-modal";

export default function Nav() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);

  return (
    <>
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
            href="https://github.com/chenxuan520/mbti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="//img.shields.io/github/stars/chenxuan520/mbti"
              alt="GitHub Repo stars"
            />
          </a>
        </Flex>
        <Flex gap={3} alignItems="center">
          <Button
            bg="white"
            color="gray.800"
            _hover={{ bg: "gray.50" }}
            size="sm"
            onClick={openAboutModal}
            border="1px"
            borderColor="gray.200"
          >
            关于
          </Button>
        </Flex>
      </Flex>
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </>
  );
}
