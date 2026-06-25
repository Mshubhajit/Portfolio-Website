import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Happiest Mind Technology</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Engineered backend microservices for an enterprise e-commerce 
              platform serving thousands of employees, delivering reliable 
              product discovery, ordering, and inventory management capabilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Volkswagen Group Digital Solutions</h5>
              </div>
              <div className="career-year">
                <h3>2023</h3>
                <h5>Present</h5>
              </div>
            </div>
            <p>
              Developed and maintained a multi-service enterprise failure 
              analysis platform used by engineering and R&D teams for structured 
              investigation workflows and reporting processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
