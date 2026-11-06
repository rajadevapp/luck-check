
"use client";

import { useState } from "react";
import './model.css';
const modalContent = {
  success: {
    icon: "🏆",
    title: "You Won!",
    message: "Congratulations! You remembered every beat perfectly!",
    button: "Next Level",
    color: "green",
    animation: "success-pop",
  },

  almost: {
    icon: "🎯",
    title: "Almost There!",
    message: "You were so close! Just a little more practice and you'll master it.",
    button: "Try Again",
    color: "yellow",
    animation: "modal-pop",
  },

  failed: {
    icon: "💪",
    title: "Better Luck Next Time!",
    message: "Don't give up! Every attempt makes you better. Give it another shot!",
    button: "Play Again",
    color: "red",
    animation: "modal-pop",
  },

  completed: {
    icon: "🎵",
    title: "Challenge Completed!",
    message: "Fantastic effort! You've successfully completed this challenge.",
    button: "Back to Home",
    color: "blue",
    animation: "modal-pop",
  },
};

export default function ResultModal() {
  const [status, setStatus] = useState("success");

  const [open, setOpen] = useState(true);

  const data = modalContent[status];

  const colors = {
    green: "bg-green-600 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    red: "bg-red-600 hover:bg-red-700",
    blue: "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">

      {/* Demo buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(modalContent).map((item) => (
          <button
            key={item}
            onClick={() => {
              setStatus(item);
              setOpen(true);
            }}
            className="px-4 py-2 rounded-lg bg-gray-200
              text-gray-800 capitalize"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Result Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center
          justify-center bg-black/60 backdrop-blur-sm p-4">

          <div
            key={status}
            className={`w-full max-w-md bg-white rounded-3xl
              shadow-2xl p-8 text-center ${data.animation}`}
          >

            {/* Icon */}
            <div className="text-7xl mb-5 animate-bounce">
              {data.icon}
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-gray-800">
              {data.title}
            </h2>

            {/* Message */}
            <p className="text-gray-500 mt-3 leading-7">
              {data.message}
            </p>

            {/* Action */}
            <button
              onClick={() => setOpen(false)}
              className={`w-full mt-8 py-3.5 rounded-xl
                text-white font-bold transition-all
                duration-300 hover:scale-105
                ${colors[data.color]}`}
            >
              {data.button}
            </button>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-gray-400
                hover:text-gray-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
