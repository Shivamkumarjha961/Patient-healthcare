import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

// -------- CONFIG --------
const API_KEY = "AIzaSyClRJVFkK1nBPVMQ984ZsHzlCOUcuZe7YY"; // your key
const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;
// ------------------------

export default function MedicalAssistantChatbot() {
  const [messages, setMessages] = useState([
    {
      from: "assistant",
      text:
        "Namaste! Main aapka medical assistant hoon. Aap apne symptoms ya health-related sawal pooch sakte hain. (Disclaimer: Main doctor nahi hoon.)",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // -------- GEMINI API CALL (WORKING 2025 FORMAT) --------
  async function callGemini(userText) {
    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: userText }],
        },
      ],
    };

    const response = await axios.post(ENDPOINT, body, {
      headers: { "Content-Type": "application/json" },
    });

    // New Response Format (2025)
    const output =
      response?.data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join("\n") || "Unable to generate a response.";

    return output;
  }
  // --------------------------------------------------------

  // Send message handler
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await callGemini(
        `You are a medical assistant. Give helpful guidance, but add a disclaimer you are not a doctor.\nUser: ${userMsg.text}`
      );

      const botMsg = { from: "assistant", text: reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          from: "assistant",
          text: "Error: API request failed. Check API key or quota.",
        },
      ]);
    }

    setLoading(false);
  };

  // Quick-question buttons
  const quickAsk = (sym) => {
    setInput(sym);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl border overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex justify-center items-center text-emerald-700 font-bold">
            MD
          </div>
          <div>
            <h2 className="text-lg font-semibold">Medical Assistant</h2>
            <p className="text-sm text-slate-500">
              Health info assistant — not a medical professional.
            </p>
          </div>
          {/* <span className="ml-auto text-xs text-slate-400">Model: {MODEL}</span> */}
        </div>

        {/* Chat Area */}
        <div className="p-4 h-96 overflow-y-auto space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.from === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`p-3 text-sm max-w-[80%] rounded-xl border ${
                  m.from === "assistant"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-blue-600 text-white border-blue-700"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && <p className="text-sm text-slate-500">Typing...</p>}
          <div ref={bottomRef} />
        </div>

        {/* Input Box */}
        <div className="p-4 border-t">
          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-300"
              placeholder="Describe your symptoms or ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              disabled={loading}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </form>

          {/* Quick Ask Buttons */}
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => quickAsk("I have fever and cough. What should I do?")}
              className="px-3 py-1 bg-slate-100 rounded"
            >
              Fever + Cough
            </button>

            <button
              onClick={() => quickAsk("I have headache and nausea.")}
              className="px-3 py-1 bg-slate-100 rounded"
            >
              Headache
            </button>

            <button
              onClick={() =>
                quickAsk("I have stomach pain and vomiting. What could it be?")
              }
              className="px-3 py-1 bg-slate-100 rounded"
            >
              Stomach Pain
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs mt-3 text-slate-500">
            <strong>Disclaimer:</strong> This assistant provides general health
            information only. It is not a substitute for professional medical
            advice. For emergencies, contact local medical services immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
