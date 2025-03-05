import {Plus,  SparkleIcon, } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Sidebar({ handleNewChat, messages, isSidebarOpen, setIsSidebarOpen }: any) {
  return (
    <>
      {isSidebarOpen && (
        <div className="flex flex-col max-h-[90vh] overflow-y-auto">
          <div className="flex justify-start items-right pb-2 m-4">
            <SparkleIcon fill="blue" onClick={() => setIsSidebarOpen(!isSidebarOpen)} size={20}></SparkleIcon>
          </div>
          {/* New Chat Button */}
          <button
            onClick={handleNewChat}
            className="flex items-center w-[108px] ml-5 border border-black border-solid justify-center bg-gray-200 p-1 rounded-md hover:bg-gray-300 mb-4"
          >
            <Plus size={20} />
            New Chat
          </button>

          {/* Recent Chats */}
          <h2 className="text-gray-400 text-sm ml-6">Recent</h2>
          <ul className="space-y-2 ml-5">
            {messages
              .filter((msg) => msg.sender === "user")
              .map((chat, index) => (
                <li
                  key={index}
                  className="p-2 text-black-300 hover:bg-gray-800 rounded-md cursor-pointer"
                >
                  {chat.text}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
