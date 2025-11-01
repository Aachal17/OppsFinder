// src/pages/student/practice-pages.tsx

import React, { useState } from 'react';
import { PracticeItem, mockPracticeItems, mockQuizQuestions } from '../../data/mock-data';
import { PracticeCard } from '../../components/practice-card';
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui';
import { CheckCircleIcon, XCircleIcon } from '../../components/icons';

/**
 * Practice Page Component
 */
export const PracticePage = ({
  onStartPractice,
}: {
  onStartPractice: (id: number) => void;
}) => {
  return (
    <main className="flex-grow dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-gray-100">
          Practice <span className="text-indigo-500 dark:text-indigo-400">Modules</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-500 dark:text-gray-400">
          Get ready for your interviews and competitions with our practice modules.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockPracticeItems.map((item) => (
            <PracticeCard
              key={item.id}
              item={item}
              onStartPractice={onStartPractice}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

/**
 * Practice Detail Page (Quiz) (Added Progress Bar)
 */
export const PracticeDetailPage = ({
  item,
  onQuit,
}: {
  item: PracticeItem;
  onQuit: () => void;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const q = mockQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuizQuestions.length) * 100;

  const handleSelectAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedAnswer(option);
    if (option === q.answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestion + 1 < mockQuizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setIsCorrect(null);
  };

  if (isFinished) {
    const finalScore = (score / mockQuizQuestions.length) * 100;
    const passed = finalScore >= 75;

    return (
      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl dark:text-gray-100">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {passed ? (
                <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" />
              ) : (
                <XCircleIcon className="mx-auto h-20 w-20 text-red-500" />
              )}
              <p className="text-2xl font-semibold dark:text-gray-100">Your Score</p>
              <p className={`text-6xl font-bold ${passed ? 'text-green-500' : 'text-red-500'}`}>
                {score} / {mockQuizQuestions.length}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {passed ? "Great job! You passed." : "Keep practicing! You can do better."}
              </p>
            </CardContent>
            <CardFooter className="flex-col gap-4 p-6">
              <Button className="w-full" size="lg" onClick={handleRestart}>
                Try Again
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={onQuit}>
                Back to Practice
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl dark:text-gray-100">{item.title}</CardTitle>
              <Button variant="link" onClick={onQuit} className="text-gray-500">Quit</Button>
            </div>
            <CardDescription>
              Question {currentQuestion + 1} of {mockQuizQuestions.length}
            </CardDescription>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl font-semibold dark:text-gray-100">{q.question}</p>
            <div className="space-y-3">
              {q.options.map((option) => {
                const isSelected = selectedAnswer === option;
                let optionClass = "border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100";
                if (isSelected) {
                  optionClass = isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/50 ring-2 ring-green-500 text-green-700 dark:text-green-300" : "border-red-500 bg-red-50 dark:bg-red-900/50 ring-2 ring-red-500 text-red-700 dark:text-red-300";
                } else if (isCorrect !== null && option === q.answer) {
                  optionClass = "border-green-500 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300";
                }
                
                return (
                  <button
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={isCorrect !== null}
                    className={`flex w-full rounded-lg border p-4 text-left transition-all ${optionClass} ${isCorrect !== null ? 'cursor-not-allowed' : ''}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              disabled={isCorrect === null}
            >
              {currentQuestion + 1 === mockQuizQuestions.length ? "Finish" : "Next Question"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};