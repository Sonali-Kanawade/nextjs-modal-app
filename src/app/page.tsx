"use client";
import { useState } from "react";
import ChatBox from "./chatbox/page";
import { Dialog } from "@headlessui/react";
import { MessageSquare, Plus, SparkleIcon, X } from "lucide-react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center h-screen">
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Open Modal
        </button>
        <Dialog
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          className="relative z-50"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          {/* Dialog Panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              className={`${
                isSidebarOpen ? "p-0" : "p-6"
              } bg-white rounded-lg shadow-lg ${
                isSidebarOpen
                  ? "w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2"
                  : "w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2"
              } max-h-[90vh]  overflow-y-auto`}
            >
              {!isSidebarOpen && (
                <div className="flex justify-between">
                  <div className="flex justify-start items-right pb-2">
                    <SparkleIcon
                      fill="blue"
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      size={20}
                    ></SparkleIcon>
                  </div>
                  <div className="flex gap-3 justify-end items-right pb-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Plus size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <MessageSquare size={20} />
                    </button>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Dialog Content */}
              <div>
                <ChatBox
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
