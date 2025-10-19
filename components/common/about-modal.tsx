import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>关于本项目</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} alignItems="flex-start">
            <Text>
              这是一个开源的MBTI性格测试项目，基于Next.js和Chakra UI构建。
            </Text>
            <Text>
              MBTI（迈尔斯-布里格斯类型指标）是一种人格类型评估工具，
              通过四个维度对人的性格进行分类：
            </Text>
            <Box pl={4}>
              <Text>• 外向 (E) - 内向 (I)</Text>
              <Text>• 感觉 (S) - 直觉 (N)</Text>
              <Text>• 思考 (T) - 情感 (F)</Text>
              <Text>• 判断 (J) - 知觉 (P)</Text>
            </Box>
            <Text>
              通过这个测试，您可以更好地了解自己的性格特征和偏好，
              从而在职业规划、人际交往和个人成长方面做出更明智的决策。
            </Text>
            <Text>
              本项目完全开源，代码托管在GitHub上，欢迎贡献和反馈。
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button colorScheme="primary" onClick={onClose}>
            确认
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}