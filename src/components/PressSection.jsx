import React from "react";
import "../css/PressSection.css";

const PressSection = () => {
  return (
    <section className="press">
      <div className="container">
        <div className="press-header">
          <h2 className="press-title">Recidiviz in the Press</h2>
          <a href="#" className="btn press-link">
            See All
          </a>
        </div>
        <ul className="press-list grid">
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-1.png"
                  alt="Ted Talks"
                  className="press-card-image"
                />
                <div className="press-card-author">TED TALKS</div>
                <p className="press-card-date">2.22.22</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  Meet the 2022 class of TED Fellows
                </a>
              </h3>
            </article>
          </li>
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-3.png"
                  alt="Correctional News"
                  className="press-card-image"
                />
                <div className="press-card-author">CORRECTIONAL NEWS</div>
                <p className="press-card-date">2.22.22</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  New Partnership Aims to Help Transform Prison Conditions
                </a>
              </h3>
            </article>
          </li>
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-4.png"
                  alt="Department of Justice"
                  className="press-card-image"
                />
                <div className="press-card-author">DEPARTMENT OF JUSTICE</div>
                <p className="press-card-date">1.26.22</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  Justice Department Establishes Initiative to Strengthen
                  States’ Use of Criminal Justice Data
                </a>
              </h3>
            </article>
          </li>
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-2.png"
                  alt="The New York Times"
                  className="press-card-image"
                />
                <div className="press-card-author">THE NEW YORK TIMES</div>
                <p className="press-card-date">12.27.21</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  The 2021 Good Tech Awards
                </a>
              </h3>
            </article>
          </li>
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-5.png"
                  alt="Corrections1"
                  className="press-card-image"
                />
                <div className="press-card-author">CORRECTIONS1</div>
                <p className="press-card-date">11.18.21</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  Maine DOC to better harness correctional data to improve
                  outcomes
                </a>
              </h3>
            </article>
          </li>
          <li className="press-item">
            <article className="press-card">
              <div className="press-card-top">
                <img
                  src="/src/assets/press/press-6.png"
                  alt="Right on Crime"
                  className="press-card-image"
                />
                <div className="press-card-author">RIGHT ON CRIME</div>
                <p className="press-card-date">9.9.21</p>
              </div>
              <h3 className="press-card-title">
                <a href="#" className="press-card-link">
                  Together, We Can Make Mississippi Safer and Reentry-Ready
                </a>
              </h3>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PressSection;
