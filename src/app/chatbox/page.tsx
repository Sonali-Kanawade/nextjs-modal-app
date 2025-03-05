"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Sidebar from "./sidebar/sidebar";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChatBox({ isSidebarOpen, setIsSidebarOpen }: any) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a bot response!", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };
  return (
    <div className="flex justify-between">
      {isSidebarOpen && (
        <div className="w-60 max-h-[90vh] overflow-y-auto bg-gray-200">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            messages={messages}
            setIsSidebarOpen={setIsSidebarOpen}
            handleNewChat={handleNewChat}
          />
        </div>
      )}

      <div
        className={`${
          !isSidebarOpen ? "w-[500px]" : ""
        } flex flex-col grow  items-center justify-center  p-4`}
      >
        <h1 className="text-2xl font-bold text-center text-purple-600">
          Hello, Hadi
        </h1>
        <p className="text-center text-gray-600">
          What would you like to know?
        </p>

        <div className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Prompt One"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Prompt One"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="h-58 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-purple-500 text-white self-end"
                  : "bg-gray-200 text-gray-500 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex p-2 border-t">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
            placeholder="Ask me anything.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 text-white px-4 py-2 rounded-r-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
