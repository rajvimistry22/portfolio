import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const EMAIL = "rajvimistry22@gmail.com";
  const WHATSAPP_NUMBER = "919313471616";

  const handleSend = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields ✨");
      return;
    }

    alert("Message sent successfully 💖");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <style>{`
        .page-content {
          height: 70vh;
          padding: 30px;
          overflow-y: auto;
          animation: fadeIn 0.5s ease;
        }

        .page-content::-webkit-scrollbar {
          width: 6px;
        }
        .page-content::-webkit-scrollbar-thumb {
          background: #ff9acb;
          border-radius: 10px;
        }

        .back-btn {
          background: white;
          border: 1px solid #ff9acb;
          color: #ff4f9a;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-btn:hover {
          background: #ffe3f0;
        }

        .edu-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff7eb3, #ff65a3);
          color: white;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 12px;
        }

        .title {
          text-align: center;
          color: #ff2f7d;
          margin-bottom: 10px;
        }

        .subtitle {
          text-align: center;
          color: #df5d8d;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .card {
          background: #fff1f7;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(53, 7, 30, 0.2);
          max-width: 700px;
          margin: auto;
        }

        .field {
          margin-bottom: 18px;
        }

        .field label {
          font-size: 14px;
          color: #a82c5a;
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }

        .field input,
        .field textarea {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: 2px solid #ffd1e6;
          font-size: 14px;
          outline: none;
        }

        .field textarea {
          height: 120px;
          resize: none;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #ff5fa2;
        }

        .send-btn {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #ff7eb3, #ff4f9a);
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
        }

        .send-btn:hover {
          transform: translateY(-2px);
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .social-btn {
          text-decoration: none;
          background: white;
          border: 1px solid #ff9acb;
          color: #ff4f9a;
          padding: 8px 14px;
          border-radius: 18px;
          font-size: 14px;
          transition: 0.2s;
        }

        .social-btn:hover {
          background: #ffe3f0;
        }

        .footer-text {
          margin-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #ff5fa2;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .page-content {
            padding: 16px;
          }
          .card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="page-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Explorer
        </button>

        <div className="edu-icon">✉️</div>
        <h2 className="title">Get in Touch</h2>

        <div className="card">
          <div className="field">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
            />
          </div>

          <button className="send-btn" onClick={handleSend}>
            ✈️ Send Message
          </button>
          </div><br/><br/>

          <div className="socials">
            <a className="social-btn" href={`mailto:${EMAIL}`}>
              📧 Email
            </a>

            <a
              className="social-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>

            <a
              className="social-btn"
              href="https://github.com/rajvimistry22/"
              target="_blank"
              rel="noreferrer"
            >
              🐙 GitHub
            </a>

            <a
              className="social-btn"
              href="https://www.linkedin.com/in/rajvi-mistry-982ba82a8/"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>
          
        </div>
      </div>
    </>
  );
}
