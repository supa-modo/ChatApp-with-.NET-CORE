import React, { useState } from "react";
import {
  PaperclipIcon,
  SmileIcon,
  SendIcon,
  UserCircle,
  Bell,
  BellOff,
  Star,
  Ban,
  Mail,
  Phone,
  MapPin,
  Clock,
  MoreHorizontal,
  Image,
  FileText,
  Link2,
} from "lucide-react";
import {
  PiBellDuotone,
  PiBellSlashBold,
  PiBellSlashDuotone,
  PiCloudArrowDownDuotone,
  PiExportDuotone,
  PiPhoneDuotone,
  PiStarDuotone,
} from "react-icons/pi";
import { FaBan, FaBell, FaRegBell } from "react-icons/fa";
import { LuBan } from "react-icons/lu";

const App = () => {
  const [message, setMessage] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
    <div className="h-screen bg-gradient-to-br from-purple-100 to-purple-50">
      <div className="mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-soft max-h-[97vh] flex overflow-hidden">
          {/* Left Sidebar - Contact List */}
          <div className="w-[21rem] border-r border-gray-100 flex flex-col">
            {/* Fixed Header */}
            <div className="p-4 space-y-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-geist font-semibold text-gray-800">
                  Messages
                </h1>
                <button className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-colors">
                  <UserCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Contacts List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3 rounded-lg hover:bg-primary/30 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/70 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
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
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-800">
                          {contact.name}
                        </h3>
                        <span className="text-xs text-gray-400">
                          {contact.time}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
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

            {/* Messages Container - Made scrollable */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Messages - Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
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

              {/* Input Area - Fixed at bottom */}
              <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-white">
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
          </div>

          {/* Right Sidebar - User Info */}
          <div className="w-96 font-nunito border-l border-gray-100 flex flex-col">
            {/* Profile Section */}
            <div className="p-6 text-center border-b-2 border-gray-100">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-primary text-2xl font-medium">J</span>
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-700">
                John Smith
              </h2>
              <p className="text-sm text-gray-500 mt-1">Product Manager</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-2 p-4 border-b-2 border-gray-100">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                  isMuted
                    ? "bg-red-100 text-red-600 "
                    : "hover:bg-gray-50 text-gray-600"
                }`}
              >
                {isMuted ? (
                  <PiBellSlashDuotone className="w-6 h-6 mb-1" />
                ) : (
                  <FaRegBell className="w-6 h-6 mb-1" />
                )}
                <span className="text-xs font-medium">
                  {isMuted ? "Unmute" : "Mute"}
                </span>
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                  isFavorite
                    ? "bg-yellow-50 border text-yellow-600"
                    : "hover:bg-gray-50 text-gray-600"
                }`}
              >
                <PiStarDuotone className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">Favorite</span>
              </button>
              <button className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-50 text-gray-600">
                <LuBan className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">Block</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-10">
                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Contact Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-sm font-medium text-gray-800">
                          john.smith@company.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <PiPhoneDuotone className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-sm font-medium text-gray-800">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shared Media */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Shared Media
                    </h3>
                    <button className="text-sm text-primary font-medium hover:text-primary/80">
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Link2 className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {/* <button className="w-full p-3 flex items-center justify-between rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700">
                      Search in Conversation
                    </span>
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button> */}
                  <button className="w-full p-3 flex items-center justify-between rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <PiCloudArrowDownDuotone
                        size={22}
                        className="text-primary"
                      />
                      <span className="text-sm font-bold font-nunito text-gray-500">
                        Export Chat History
                      </span>
                    </div>

                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
