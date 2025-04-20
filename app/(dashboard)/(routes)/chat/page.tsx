"use client";
import React, { useState } from "react";

function Page() {
  const [messages, setMessages] = useState<
    { text: string; timestamp: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      timestamp: new Date().toISOString(),
      sender: "user" as const,
    };

    const botResponse = {
      text: "Hey Hi, I am Alice AI, What you want from me?", // <- You can change this to anything like "Here's what I think..." or generate from API
      timestamp: new Date().toISOString(),
      sender: "bot" as const,
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="p-8">
      <div className="p-4 m-4 w-full mx-auto bg-gray-50 shadow-xl rounded-xl h-full flex flex-col">
        <div className="text-xl font-bold mb-4 text-center">AI Chatbot</div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-xl max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-blue-100 self-start"
                  : "bg-green-100 self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
