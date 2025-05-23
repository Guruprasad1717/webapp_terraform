import React, { useState, useEffect, useRef } from "react";
import "./chat.css";
import Robo from "./robo.png";
import Send from "./send.jpg";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [customReplies, setCustomReplies] = useState({});
  const inputRef = useRef(null); 

  const botReplies = [
    "I'm here to help!",
    "Can you please clarify?",
    "That's interesting!",
    "Let me think about that...",
    "I'm not sure, but I'll try!",
  ];

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCustomReplies(data));
    
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    const lowerInput = input.trim().toLowerCase();

    const botReply =
      customReplies[lowerInput] ||
      botReplies[Math.floor(Math.random() * botReplies.length)];

    const botMessage = { sender: "bot", text: botReply };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-container">
      <img src={Robo} alt="robot" id="robo" />
      <h2 id="heading">Chatbot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend} id="btn">
          <img src={Send} alt="sendbutton" id="st" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
