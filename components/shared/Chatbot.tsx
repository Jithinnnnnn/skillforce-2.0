"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

type FAQ = {
  question: string;
  answer: string;
  keywords: string[];
};

const faqs: FAQ[] = [
  {
    question: "What is Skill Force?",
    answer: "Skill Force is a streamlined manpower platform that connects job seekers, providers, and admins. We help you find work, hire fast, and get things done with verified workers and smart matching technology.",
    keywords: ["what", "skill force", "platform", "about"]
  },
  {
    question: "How does the matching process work?",
    answer: "Our advanced algorithm connects you with local opportunities based on your location, skills, and preferences. We use location-based matching to find work within your radius for maximum convenience.",
    keywords: ["matching", "algorithm", "how", "process", "work"]
  },
  {
    question: "How long does it take to get hired?",
    answer: "Our average fill time is just 48 hours! We specialize in instant hiring to close the gap between need and fulfillment. You can start with one role and scale up as needed.",
    keywords: ["time", "hire", "fast", "quick", "how long"]
  },
  {
    question: "Are all workers verified?",
    answer: "Yes! We background-check all workers and maintain verified profiles. Our platform has a 94% on-time completion rate, ensuring reliable and trustworthy workforce solutions.",
    keywords: ["verified", "background", "check", "reliable", "trust"]
  },
  {
    question: "What types of jobs are available?",
    answer: "We offer opportunities in Operations & Logistics, Customer & Field Teams, and roles requiring Compliance & Quality management. From warehousing to sales teams, we cover diverse workforce needs.",
    keywords: ["jobs", "types", "categories", "operations", "logistics", "customer", "field"]
  },
  {
    question: "How do payments work?",
    answer: "We offer flexible payments with daily wage settlements. No long contracts required - you get paid quickly and reliably for your work.",
    keywords: ["payment", "pay", "wage", "money", "salary"]
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Just sign up and create your profile in 60 seconds. Our system will then match you with opportunities, and you can get to work with verified jobs, instant payments, and 24/7 support.",
    keywords: ["start", "sign up", "register", "begin", "how"]
  },
  {
    question: "Is there customer support?",
    answer: "Yes! We provide 24/7 support to help you with any questions or issues. Our team is always ready to assist both job seekers and employers.",
    keywords: ["support", "help", "customer service", "contact"]
  },
  {
    question: "What makes Skill Force different?",
    answer: "We offer verified profiles, location-based matching, flexible daily payments, and instant hiring. With a 87% first-match success rate and 94% on-time completion, we're built for speed, trust, and scale.",
    keywords: ["different", "unique", "why", "better", "advantage"]
  }
];

function findBestMatch(userInput: string): FAQ | null {
  const input = userInput.toLowerCase();
  
  // First, try to find exact keyword matches
  for (const faq of faqs) {
    for (const keyword of faq.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return faq;
      }
    }
  }
  
  // If no keyword match, try partial matching
  for (const faq of faqs) {
    if (input.includes(faq.question.toLowerCase().substring(0, 10))) {
      return faq;
    }
  }
  
  return null;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn about Skill Force. Ask me anything about our platform, how it works, or getting started!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const bestMatch = findBestMatch(inputValue);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: bestMatch 
          ? bestMatch.answer 
          : "I'm not sure about that specific question. You can ask me about how Skill Force works, getting started, payments, job types, or our verification process. You can also contact our 24/7 support team for more detailed assistance!",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How does Skill Force work?",
    "How do I get started?",
    "What types of jobs are available?",
    "How do payments work?"
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary shadow-[var(--clay-shadow)] hover:opacity-90"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Image
          src="/businessman.svg"
          alt="Chat Assistant"
          width={28}
          height={28}
          className="text-white sm:w-8 sm:h-8"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 left-4 z-50 sm:bottom-24 sm:right-6 sm:left-auto sm:w-80 md:w-96"
          >
            <div className="rounded-2xl border border-blue-200/60 bg-blue-50/95 shadow-[var(--clay-shadow)] backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-blue-200/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/businessman.svg"
                      alt="Assistant"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-blue-900">Skill Force Assistant</h3>
                    <p className="text-xs text-blue-700">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-blue-600 hover:bg-blue-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-64 sm:h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                        message.isBot
                          ? "bg-blue-100 text-blue-900"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-blue-100 px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="border-t border-blue-200/30 p-4">
                  <p className="text-xs text-blue-700 mb-2">Try asking:</p>
                  <div className="space-y-1">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInputValue(question)}
                        className="block w-full text-left text-xs text-blue-600 hover:underline"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="border-t border-blue-200/30 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 rounded-2xl border border-blue-200 bg-white px-3 py-2 text-sm text-blue-900 placeholder-blue-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="rounded-2xl bg-primary p-2 text-primary-foreground shadow-[var(--clay-shadow)] hover:opacity-90 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}