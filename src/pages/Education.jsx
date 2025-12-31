import { useNavigate } from "react-router-dom";

export default function Education() {
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

        .page-content::-webkit-scrollbar {
          width: 6px;
        }
        .page-content::-webkit-scrollbar-thumb {
          background: #ff9acb;
          border-radius: 10px;
        }

        .page-top {
          margin-bottom: 30px;
        }

        .back-btn {
          background: white;
          border: 1px solid #ff9acb;
          color: #ff2f7d;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
        }

        .back-btn:hover {
          background: #ffe3f0;
        }

        .edu-header {
          text-align: center;
          margin-bottom: 40px;
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

        .edu-header h1 {
          color: #ff2f7d;
          margin: 0;
        }


        .timeline {
          position: relative;
          margin-top: 40px;
          padding-left: 50%;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 3px;
          height: 100%;
          background: #ffc1dc;
        }

        .timeline-item {
          position: relative;
          width: 70%;
          padding: 20px;
        }

        .timeline-item.left {
          left: -70%;
        }

        .timeline-item.right {
          left: 0;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          top: 32px;
          width: 14px;
          height: 14px;
          background: #ff5fa2;
          border-radius: 50%;
          z-index: 2;
        }

        .timeline-item.left::before {
          right: -7px;
        }

        .timeline-item.right::before {
          left: -7px;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 10px 25px rgba(255, 105, 180, 0.2);
        }

        .card h3 {
          color: #ff2f7d;
          margin-top: 0;
        }

        .company {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          color: white;
          margin-bottom: 8px;
        }

        .company.pink { background: #ff7eb3; }
        .company.purple { background: #b983ff; }
        .company.coral { background: #ff8a8a; }

        .date {
          font-size: 12px;
          color: #b03060;
          margin-bottom: 10px;
          display: block;
        }

        .card p,
        .card li {
          font-size: 14px;
          color: #a82c5a;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .timeline {
            padding-left: 40px;
          }

          .timeline::before {
            left: 40px;
          }

          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding-left: 40px;
          }

          .timeline-item::before {
            left:-5px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 600px) {
          .page-content {
            padding: 20px;
            height: auto;
          }

          .edu-header h1 {
            font-size: 22px;
          }

          .card {
            padding: 20px;
          }

          .card h3 {
            font-size: 16px;
          }

          .card p,
          .card li {
            font-size: 13px;
          }
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
        <div className="page-top">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Explorer
          </button>
        </div>

        <div className="edu-header">
          <div className="edu-icon">🎓</div>
          <h1>Education</h1>
        </div>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="card">
              <h3>Bachelor of Computer Science & Engineering</h3>
              <span className="company pink">
                Maharaja Sayajirao University of Vadodara
              </span>
              <span className="date">📅 2022 – 2026</span>
              <p>
                Strong foundation in frontend development, modern web
                technologies, problem-solving, and software engineering.
              </p>
              <p><strong>🎯 Percentage:</strong> 79.03%</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="card">
              <h3>12th Standard (HSC)</h3>
              <span className="company purple">L.P. Savani School</span>
              <span className="date">📅 2021 – 2022</span>
              <ul>
                <li>📘 Science Stream</li>
                <li>📊 Percentage: 80%</li>
                <li>💡 Mathematics & Physics</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="card">
              <h3>10th Standard (SSC)</h3>
              <span className="company coral">Lilaba Kanya Vidhyalay</span>
              <span className="date">📅 2019 – 2020</span>
              <ul>
                <li>📊 Percentage: 85.33%</li>
                <li>📚 Strong academic basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
