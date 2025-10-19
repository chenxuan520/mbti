import { useState } from "react";
import MainLayout from "../../components/layouts/main-layout";
import TestDisplay from "../../components/test/test-display";
import TestResultContent from "../../components/test/test-result-content";

export default function TestPage() {
  const [resultId, setResultId] = useState<number | null>(null);

  const handleTestComplete = (id: number) => {
    setResultId(id);
  };

  return (
    <>
      {resultId ? (
        <MainLayout title="MBTI 测试结果" description="查看您的MBTI性格测试结果">
          <TestResultContent resultId={resultId} />
        </MainLayout>
      ) : (
        <MainLayout title="MBTI 测试 - 开始测试" description="进行MBTI性格测试，了解自己的性格类型">
          <TestDisplay onTestComplete={handleTestComplete} />
        </MainLayout>
      )}
    </>
  );
}
