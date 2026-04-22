import { useEffect, useState } from "react";
import "./styles/CodeArchitecture.css";

const CodeArchitecture = () => {
  const [reportData, setReportData] = useState<string>("");

  useEffect(() => {
    // Fetch the graph report
    fetch("/graphs/GRAPH_REPORT.md")
      .then((res) => res.text())
      .then((data) => setReportData(data))
      .catch((err) => console.error("Error loading report:", err));
  }, []);

  return (
    <div className="code-architecture">
      <div className="code-architecture-header">
        <h1>Code Architecture</h1>
        <p>Project structure and architecture analysis</p>
      </div>

      <div className="code-architecture-content">
        <div className="report-container">
          <div className="report-content">
            {reportData ? (
              <>
                <h2>Project Analysis Report</h2>
                <pre>{reportData}</pre>
              </>
            ) : (
              <p>Loading report...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeArchitecture;
