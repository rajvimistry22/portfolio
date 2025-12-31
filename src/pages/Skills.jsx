import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();

  const skills = [
    { name: "React.js", confidence: "🚀 Project-ready", percent: 90, icon: "⚛️" },
    { name: "JavaScript", confidence: "🌟confident", percent: 78, icon: "✨" },
    { name: "HTML5", confidence: "💕 Love using daily", percent: 92, icon: "📄" },
    { name: "CSS / Tailwind", confidence: "🎨 Design-focused", percent: 85, icon: "🎨" },
    { name: "Git & GitHub", confidence: "🔧 Comfortable", percent: 75, icon: "🐙" },
    { name: "UI/UX Thinking", confidence: "🧠 Strong sense", percent: 90, icon: "💡" },
    { name: "Problem Solving", confidence: "🧩 Practice-driven", percent: 80, icon: "🔥" }
  ];

  return (
    <>
      <style>{`
        .page-content {
          height: 70vh;
          padding: 30px;
          overflow-y: auto;
          animation: fadeIn 0.6s ease;
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
          color: #ff2f7d;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .back-btn:hover {
          background: #ffe3f0;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .skills-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #ff7eb3, #ff4f9a);
          color: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin: 0 auto 12px;
          box-shadow: 0 10px 30px rgba(255,105,180,0.5);
        }

        .skills-header h1 {
          color: #ff2f7d;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 26px;
        }

        .skill-card {
          background: white;
          border-radius: 20px;
          padding: 26px;
          border: 2px solid transparent;
          background-image: 
            linear-gradient(white, white),
            linear-gradient(135deg, #ff7eb3, #b983ff, #ff4f9a);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: all 0.4s ease;
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255,105,180,0.4);
        }

        .skill-icon {
          font-size: 34px;
          animation: float 3s ease-in-out infinite;
        }

        .skill-name {
          font-size: 18px;
          font-weight: 600;
          color: #a82c5a;
          margin-top: 10px;
        }

        .skill-confidence {
          margin-top: 10px;
          font-size: 13px;
          color: #ff2f7d;
          font-weight: 600;
        }

        .skill-bar {
          margin-top: 14px;
          background: #ffe3f0;
          border-radius: 999px;
          height: 10px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7eb3, #ff4f9a);
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(255,105,180,0.6);
          transition: width 0.6s ease;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
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
      `}</style>

      <div className="page-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Explorer
        </button>

        <div className="skills-header">
          <div className="skills-icon">⚡</div>
          <h1>Skills</h1>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-confidence">{skill.confidence}</div>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
