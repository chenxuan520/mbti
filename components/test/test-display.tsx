import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import TestMenu from "./test-menu";
import TestInstructions from "./test-instructions";
import TestQuestion from "./test-question";

interface TestDisplayProps {
  onTestComplete?: (resultId: number) => void;
}

export default function TestDisplay({ onTestComplete }: TestDisplayProps) {
  const [showTestInstructions, setShowTestInstructions] = useState(true);

  function handleShowInstructionsButtonClick() {
    setShowTestInstructions(true);
  }

  function handleCloseTestInstructions() {
    setShowTestInstructions(false);
  }

  function handleTestComplete(resultId: number) {
    if (onTestComplete) {
      onTestComplete(resultId);
    } else {
      // Fallback behavior - for static usage
      window.location.hash = `#result-${resultId}`;
    }
  }

  return (
    <Flex
      alignSelf="flex-start"
      w="full"
      h="full"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      px={1}
    >
      <TestMenu
        onShowInstructionsButtonClick={handleShowInstructionsButtonClick}
      />
      <Flex
        w={{
          lg: "50%",
          base: "100%",
        }}
        h="full"
      >
        {showTestInstructions ? (
          <TestInstructions
            onCloseTestInstructions={handleCloseTestInstructions}
          />
        ) : (
          <TestQuestion onComplete={handleTestComplete} />
        )}
      </Flex>
    </Flex>
  );
}
