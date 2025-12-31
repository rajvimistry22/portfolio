import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A beautiful and responsive portfolio website built with React and Tailwind CSS",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/rajvimistry22/portfolio-website",
      live: "/"
    },
    {
      title: "CodeVizAI",
      desc: "Built a full-stack platform for code visualization with execution tracing, flowchart generation, DSA animations, and AIpowered explanations",
      tags: ["React", "Tailwind", "Framer Motion","FastAPI"],
      github: "https://github.com/Dhruvi1523/CodeVizAi2026",
      live: "https://code-viz-ai2026.vercel.app"
    }
  ];

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

        .skills-header {
          text-align: center;
          margin-bottom: 40px;
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

        .card {
          background: #fff1f7;
          border-radius: 20px;
          padding: 22px 26px;
          box-shadow: 0 10px 30px rgba(53, 7, 30, 0.2);
          margin-bottom: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 40px rgba(53, 7, 30, 0.3);
        }

        .card h3 {
          color: #a71c5f;
          margin-bottom: 6px;
        }

        .card p {
          color: #a71c5f;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .tag {
          background: #ffd1e6;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          color: #a71c5f;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .stats {
          font-size: 13px;
          color: #a71c5f;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-live {
          background: #ff4f9a;
          color: white;
        }

        .btn-live:hover {
          background: #ff2f7d;
        }

        .btn-github {
          border: 1px solid #ff4f9a;
          color: #ff4f9a;
          background: white;
        }

        .btn-github:hover {
          background: #ffe3f0;
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
        }
      `}</style>

      <div className="page-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Explorer
        </button>

        <div className="skills-header">
          <div className="skills-icon">💼</div>
          <h1>Projects</h1>
        </div>

        {projects.map((proj, idx) => (
          <div className="card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>

            <div className="tags">
              {proj.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>

            <div className="project-footer">
              <div className="stats">
                 🧩 {proj.tags.length} Tech
              </div>

              <div className="actions">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-live"
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
