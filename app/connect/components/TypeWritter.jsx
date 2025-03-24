"use client";

import { useEffect, useState } from "react";
import TypeWriterEffect from "./TypeWritterEffect";
import { IoIosSend } from "react-icons/io";
import { RiSparkling2Line } from "react-icons/ri";

// Array of question-response pairs
const conversationPairs = [
  {
    question: "Hello, can you help me with a coding question?",
    response:
      "Of course! I'd be happy to help with your coding question. What would you like to know?",
  },
  {
    question: "How do I create a responsive layout with Tailwind CSS?",
    response:
      "With Tailwind, you can use responsive prefixes like sm:, md:, lg:, and xl: before utility classes to make your layout adapt to different screen sizes.",
  },
  {
    question: "What's the difference between useState and useRef in React?",
    response:
      "useState triggers re-renders when the state changes, while useRef persists values between renders without causing re-renders. useRef is ideal for DOM references.",
  },
  {
    question: "Can you explain async/await in JavaScript?",
    response:
      "Async/await is syntactic sugar for Promises. The async keyword defines a function that returns a Promise, and await pauses execution until a Promise resolves, making asynchronous code look synchronous.",
  },
];

export default function TypeWritter() {
  const [showResponse, setShowResponse] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [pairIndex, setPairIndex] = useState(0);

  // Get current question and response based on the pair index
  const currentPair = conversationPairs[pairIndex];
  const { question, response } = currentPair;

  useEffect(() => {
    let inputTimer;
    let responseTimer;
    let resetTimer;

    // Show the question first
    inputTimer = setTimeout(() => {
      setShowResponse(true); // Show response after question is typed
    }, question.length * 100 + 500); // Wait for question typing + pause

    // After response is shown, wait for it to finish typing, then reset
    responseTimer = setTimeout(() => {
      setShowResponse(false); // Hide response to reset
      setPairIndex((prev) => (prev + 1) % conversationPairs.length); // Move to next pair
      setCycle((prev) => prev + 1); // Increment cycle to trigger new animation
    }, question.length * 100 + response.length * 100 + 2000); // Total typing time + pause

    return () => {
      clearTimeout(inputTimer);
      clearTimeout(responseTimer);
      clearTimeout(resetTimer);
    };
  }, [cycle, question, response]); // Re-run effect when cycle changes

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 ">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Response container */}
        {showResponse && (
          <div className="rounded-lg border shadow-sm p-6 min-h-40 animate-fadeIn">
            <div className="w-[600px] text-start">
              <TypeWriterEffect
                text={response}
                delay={100}
                key={`response-${cycle}`}
                className="text-white"
              />
            </div>
          </div>
        )}

        {/* Placeholder to prevent layout shift */}
        {!showResponse && (
          <div
            className="min-h-40 opacity-0 pointer-events-none"
            aria-hidden="true"
          ></div>
        )}

        {/* Question input */}
        <div className="relative">
          <div className="flex w-full items-center space-x-2">
            <div className="relative flex-1">
              <div className="min-h-10 w-[600px] text-start rounded-md border shadow-sm px-3 py-2 text-sm ring-offset-background">
                <TypeWriterEffect
                  text={question}
                  delay={100}
                  key={`input-${cycle}`}
                  className="text-white"
                />
              </div>
            </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-primary-foreground border h-10 px-4 py-2">
              <RiSparkling2Line size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
