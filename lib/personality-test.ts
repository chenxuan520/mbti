import { Option, Result } from "@swan-io/boxed";
import { personalityTest } from "../data/personality-test";
import { personalityClassGroup } from "../data/personality-class-groups";

export interface TestQuestion {
  no: number;
  question: string;
  answerOptions: TestAnswerOption[];
}

export interface TestAnswerOption {
  type: "A" | "B";
  answer: string;
  score: PersonalityClass["type"];
}

export interface PersonalityClass {
  type:
    | Extroverted
    | Introverted
    | Sensing
    | Intuitive
    | Thinking
    | Feeling
    | Perceiving
    | Judging;
  description: string;
}

export interface PersonalityClassGroup {
  type: `${Extroverted | Introverted}${Sensing | Intuitive}${
    | Thinking
    | Feeling}${Perceiving | Judging}`;
  name: string;
  nameDescription: string;
  epithet: string;
  description: string;
  jungianFunctionalPreference: {
    dominant: string;
    auxiliary: string;
    tertiary: string;
    inferior: string;
  };
  generalTraits: string[];
  relationshipStrengths: string[];
  relationshipWeaknesses: string[];
  successDefinition: string;
  strengths: string[];
  gifts: string[];
  potentialProblemAreas: string[];
  explanationOfProblems: string;
  solutions: string;
  livingHappilyTips: string;
  suggestions?: string[];
  tenRulesToLive: string[];
}

export interface TestResult {
  timestamp: number;
  testAnswers: TestAnswerOption["type"][];
  testScores: PersonalityClass["type"][];
}

type Extroverted = "E";

type Introverted = "I";

type Sensing = "S";

type Intuitive = "N";

type Thinking = "T";

type Feeling = "F";

type Perceiving = "P";

type Judging = "J";

// localStorage-based functions for static site
const TEST_RESULT_KEY = "MBTI_TEST_RESULTS";

function getStoredTestResults(): TestResult[] {
  const stored = localStorage.getItem(TEST_RESULT_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error parsing test results from localStorage:", e);
    return [];
  }
}

function saveStoredTestResults(results: TestResult[]): void {
  try {
    localStorage.setItem(TEST_RESULT_KEY, JSON.stringify(results));
  } catch (e) {
    console.error("Error saving test results to localStorage:", e);
  }
}

export function getQuestionAnswerScore(
  questionNumber: number,
  answerOption: TestAnswerOption["type"]
) {
  const question = personalityTest.find(
    (question) => question.no === questionNumber
  )!;

  return question.answerOptions.find((option) => option.type === answerOption)!
    .score;
}

export function getPersonalityClassGroupByTestScores(
  testScores: PersonalityClass["type"][]
) {
  const scoreCount = testScores.reduce(
    (acc, score) => {
      return {
        ...acc,
        [score]: acc[score] + 1,
      };
    },
    {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    }
  );

  const personalityClassGroupType = `${
    scoreCount.E >= scoreCount.I ? "E" : "I"
  }${scoreCount.S >= scoreCount.N ? "S" : "N"}${
    scoreCount.T >= scoreCount.F ? "T" : "F"
  }${scoreCount.J >= scoreCount.P ? "J" : "P"}`;

  return personalityClassGroup.find(
    ({ type }) => personalityClassGroupType === type
  )!;
}

export function getSavedTestResult(id: number) {
  return new Promise<Result<Option<TestResult>, Error>>((resolve) => {
    try {
      const results = getStoredTestResults();
      const testResult = results.find(result => result.timestamp === id);
      resolve(Result.Ok(Option.fromNullable(testResult)));
    } catch (error) {
      resolve(Result.Error(error as Error));
    }
  });
}

export function saveTestResult(testResult: {
  timestamp: number;
  testAnswers: TestAnswerOption["type"][];
  testScores: PersonalityClass["type"][];
}) {
  return new Promise<Result<number, Error>>((resolve) => {
    try {
      const results = getStoredTestResults();
      const existingIndex = results.findIndex(result => result.timestamp === testResult.timestamp);
      if (existingIndex !== -1) {
        results[existingIndex] = testResult;
      } else {
        results.push(testResult);
      }
      saveStoredTestResults(results);
      resolve(Result.Ok(testResult.timestamp));
    } catch (error) {
      resolve(Result.Error(error as Error));
    }
  });
}
