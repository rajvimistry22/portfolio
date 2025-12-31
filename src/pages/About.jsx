import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .page-content {
          height: 70vh;
          padding: 30px;
          overflow-y: auto;
          animation: fadeIn 0.5s ease;
        }

        /* Scrollbar */
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

        .title {
        text-align:center;
          color: #ff2f7d;
          margin-bottom: 10px;
        }

        .subtitle {
        text-align:center;
          color: #df5d8d;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .card {
          background: #fff1f7;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(53, 7, 30, 0.2);
        }

        .text {
          color: #b03060;
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .sections {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .box {
          flex: 1 1 200px;
          background: #ffe3f0;
          border-radius: 14px;
          padding: 18px;
        }

        .box-title {
          margin-bottom: 8px;
          color: #ff2f7d;
          font-size: 15px;
        }

        .box-text {
          color: #a82c5a;
          font-size: 14px;
          line-height: 1.5;
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
      `}</style>

      <div className="page-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Explorer
        </button>

        <div className="edu-icon">👤</div>
        <h2 className="title">About Me</h2><br/><br/>
       
        <div className="card">
          <h1 style={{ color: "#ff2f7d", marginBottom: "15px" }}>
            I’m Rajvi Mistry
          </h1>

          <p className="text">
            I’m a React-focused frontend developer who enjoys transforming ideas
            into fast, scalable, and visually polished web applications. I work
            with component-driven architecture, clean code practices, and modern
            UI principles to create seamless user experiences.
          </p>

          <div className="sections">
            <div className="box">
              <h4 className="box-title">⚛️ Frontend Development</h4>
              <p className="box-text">
                React, modern JavaScript, reusable components, clean structure.
              </p>
            </div>

            <div className="box">
              <h4 className="box-title">🎨 UI Craftsmanship</h4>
              <p className="box-text">
                Pixel-perfect layouts, smooth interactions, perfect designs.
              </p>
            </div>

            <div className="box">
              <h4 className="box-title">🚀 Growth Mindset</h4>
              <p className="box-text">
                Continuous learning, real-world projects, improving every day.
              </p>
            </div>
          </div>

          <p className="text">
            Currently, I’m focusing on strengthening my React skills, building
            meaningful projects, and preparing for frontend opportunities where
            I can grow while delivering real value.
          </p>
        </div>
      </div>
    </>
  );
}
