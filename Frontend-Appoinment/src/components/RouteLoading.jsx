import React from "react";

export default function RouteLoading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 overflow-hidden bg-indigo-50">
      <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-loading-bar"></div>
      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(-30%); }
          100% { transform: translateX(0%); }
        }
        .animate-loading-bar {
          animation: loadingBar 1.2s infinite ease-in-out;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
