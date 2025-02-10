import React, { useState } from "react";
import { PaperclipIcon, SmileIcon, SendIcon, UserCircle } from "lucide-react";

const App = () => {
  const [message, setMessage] = useState("");

  const contacts = [
    {
      id: 1,
      name: "John Smith",
      status: "online",
      lastMessage: "Sure, let's discuss it tomorrow!",
      time: "10:45",
    },
    {
      id: 2,
      name: "Emma Wilson",
      status: "offline",
      lastMessage: "Thanks for the update!",
      time: "09:30",
    },
    {
      id: 3,
      name: "Michael Brown",
      status: "online",
      lastMessage: "I'll send you the files.",
      time: "Yesterday",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Smith",
      content: "Hi, how are you?",
      time: "10:30",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      content: "I'm good, thanks! How about you?",
      time: "10:32",
      isSent: true,
    },
    {
      id: 3,
      sender: "John Smith",
      content: "Great! Shall we discuss the project?",
      time: "10:33",
      isSent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50">
      <div className=" mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-soft min-h-[96vh] flex overflow-hidden">
          {/* Left Sidebar - Contact List */}
          <div className="w-80 border-r border-gray-100 p-4 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-geist font-semibold text-gray-800">
                Messages
              </h1>
              <button className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-colors">
                <UserCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3 rounded-lg hover:bg-soft-gray cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-light-purple rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {contact.name.charAt(0)}
                        </span>
                      </div>
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          contact.status === "online"
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {contact.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-light-purple rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">J</span>
                </div>
                <div>
                  <h2 className="font-medium text-gray-800">John Smith</h2>
                  <p className="text-sm font-semibold text-green-600">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isSent ? "justify-end" : "justify-start"
                  } animate-fade-in`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl shadow-message
                      ${
                        msg.isSent
                          ? "bg-primary text-white"
                          : "bg-soft-gray text-gray-800"
                      }`}
                  >
                    <p>{msg.content}</p>
                    <span
                      className={`text-xs ${
                        msg.isSent ? "text-white/80" : "text-gray-500"
                      } block mt-1`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-soft-gray rounded-full transition-colors">
                  <PaperclipIcon className="w-5 h-5 text-gray-500" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-3 rounded-full bg-soft-gray focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="p-2 hover:bg-soft-gray rounded-full transition-colors">
                  <SmileIcon className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors">
                  <SendIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - User Info */}
          <div className="w-80 border-l border-gray-100 p-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-light-purple rounded-full mx-auto flex items-center justify-center">
                <span className="text-primary text-xl font-medium">J</span>
              </div>
              <h2 className="mt-4 font-medium text-gray-800">John Smith</h2>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Email
                </h3>
                <p className="text-gray-800">john.smith@company.com</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Phone
                </h3>
                <p className="text-gray-800">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Location
                </h3>
                <p className="text-gray-800">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
