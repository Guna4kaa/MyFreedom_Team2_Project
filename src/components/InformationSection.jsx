import React from "react";
import "../css/InformationSection.css"; // Import your CSS file

const InformationSection = () => {
  return (
    <section className="information">
      <div className="container grid">
        <div className="information-text">
          <h2 className="information-title">
            Get the right information to the right person at the right time.
          </h2>
        </div>
        <ul className="information-list">
          <li className="information-item">
            <h3 className="information-subtitle">For Leaders</h3>
            <p className="information-description">
              Set goals, forecast the impact of policy or practice changes, and
              track their outcomes across your agency.
            </p>
          </li>
          <li className="information-item">
            <h3 className="information-subtitle">For Line Staff</h3>
            <p className="information-description">
              Track probation and parole outcomes, see what’s leading to
              success, and reduce recidivism with our case management system.
            </p>
          </li>
          <li className="information-item">
            <h3 className="information-subtitle">For the Public</h3>
            <p className="information-description">
              Use open source code, public data, interactive tools, and data
              visualizations to understand the state of incarceration, promote
              accountability, and conduct research.
            </p>
          </li>
          <li className="information-item">
            <h3 className="information-subtitle">
              For Policymakers and Advocates
            </h3>
            <p className="information-description">
              Project the impact of policies on carceral, fiscal, and community
              outcomes. Understand where disparities begin, where they grow, and
              whether a policy is likely to increase or reduce them.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InformationSection;
