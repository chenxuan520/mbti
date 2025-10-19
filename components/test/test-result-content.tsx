import { useEffect, useState } from "react";
import { Option, AsyncData, Result } from "@swan-io/boxed";
import { Flex, Show, Text } from "@chakra-ui/react";

import TestResult from "./test-result";
import TestResultTableOfContent from "./test-result-table-of-content";
import TestResultStats from "./test-result-stats";
import {
  TestResult as ITestResult,
  getSavedTestResult,
  getPersonalityClassGroupByTestScores,
} from "../../lib/personality-test";

interface TestResultContentProps {
  resultId?: number;
}

export default function TestResultContent({ resultId }: TestResultContentProps) {
  const [testResult, setTestResult] = useState<
    AsyncData<Result<Option<ITestResult>, Error>>
  >(AsyncData.NotAsked());

  useEffect(() => {
    const id = resultId || getTestIdFromHash() || getTestIdFromURL();
    if (id) {
      setTestResult(AsyncData.Loading());
      
      getSavedTestResult(id).then((result) =>
        setTestResult(AsyncData.Done(result))
      );
    }
  }, [resultId]);

  function getTestIdFromHash(): number | null {
    const hash = window.location.hash;
    if (hash.startsWith('#result-')) {
      const id = parseInt(hash.substring(8));
      return isNaN(id) ? null : id;
    }
    return null;
  }

  function getTestIdFromURL(): number | null {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('testResultId');
    if (id) {
      const numId = parseInt(id);
      return isNaN(numId) ? null : numId;
    }
    return null;
  }

  return (
    <Flex w="full" maxW="7xl" mx="auto" px={4} justifyContent="center">
      {testResult.match({
        NotAsked: () => <Text>加载中</Text>,
        Loading: () => <Text>加载中</Text>,
        Done: (result) =>
          result.match({
            Error: () => <Text>出现错误！请刷新页面！</Text>,
            Ok: (value) =>
              value.match({
                Some: (data) => (
                  <Flex
                    w="full"
                    h="full"
                    direction={{
                      base: "column",
                      lg: "row",
                    }}
                    justifyContent={{ base: "center", lg: "center" }}
                    alignItems="stretch"
                    gap={8}
                  >
                    <Show above="lg">
                      <Flex w={{ base: "100%", md: "25%" }}>
                        <TestResultStats testResult={data} />
                      </Flex>
                    </Show>
                    <Flex w={{ base: "100%", lg: "50%" }}>
                      <TestResult testResult={data} />
                    </Flex>
                    <Show above="lg">
                      <Flex w={{ base: "100%", md: "25%" }}>
                        <TestResultTableOfContent />
                      </Flex>
                    </Show>
                  </Flex>
                ),
                None: () => <Text>没有数据</Text>,
              }),
          }),
      })}
    </Flex>
  );
}