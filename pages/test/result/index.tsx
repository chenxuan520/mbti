import { useEffect, useState } from "react";
import { Option, AsyncData, Result } from "@swan-io/boxed";
import { Flex, Text } from "@chakra-ui/react";

import MainLayout from "../../../components/layouts/main-layout";
import TestResultContent from "../../../components/test/test-result-content";
import {
  TestResult as ITestResult,
  getSavedTestResult,
  getPersonalityClassGroupByTestScores,
} from "../../../lib/personality-test";

interface TestResultPageProps {
  resultId?: number;
}

export default function TestResultPage({ resultId }: TestResultPageProps) {
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

  let pageTitle = "MBTI 测试结果";
  let pageDescription = "查看您的MBTI性格测试结果";

  if (testResult.match) {
    testResult.match({
      Done: (result) =>
        result.match({
          Ok: (value) =>
            value.match({
              Some: (data) => {
                const personalityClassGroup = getPersonalityClassGroupByTestScores(
                  data.testScores
                );
                pageTitle = `MBTI结果 - ${personalityClassGroup.type} ${personalityClassGroup.name}`;
                pageDescription = `您的MBTI性格类型是${personalityClassGroup.type} ${personalityClassGroup.name}，了解您的性格特征和优势`;
              },
              None: () => {}
            }),
          Error: () => {}
        }),
      Loading: () => {},
      NotAsked: () => {}
    });
  }

  return (
    <MainLayout title={pageTitle} description={pageDescription}>
      <TestResultContent resultId={resultId} />
    </MainLayout>
  );
}
