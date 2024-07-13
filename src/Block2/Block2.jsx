import React from "react";
import './block2.module.css'; 

const Block2 = () => {
  return (
    <section className="information">
      <div className="container grid">
        <div className="information-text">
          <h2 className="information-title">
            We are a non-profit that partners with state criminal justice
            agencies to advance their use of data and reduce incarceration.
          </h2>
        </div>
        <ul className="information-list">
          <li className="information-item">
            <h3 className="information-num">1</h3>
            <p className="information-description">
            intake an agencys disjointed data
            </p>
          </li>
          <li className="information-item">
            <h3 className="information-num">2</h3>
            <p className="information-description">
            deploy tools for all levels of decision making
            </p>
          </li>
          <li className="information-item">
            <h3 className="information-num">3</h3>
            <p className="information-description">
            improve outcomes for justice-impacted individuals
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Block2;
