import React from "react";
import projects from "../../data/projects.json";
import education from "../../data/education.json";
import { PageLayout } from "../../components/Body/PageLayout";
import { getImageUrl } from "../../utils";
import styles from './Education.module.css';

export const Education = () => {
  return (
    <PageLayout title="Education">
      <div className="container">
      <div className="row">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card bg-light1 bg-dark mb-5 p-3 shadow-lg border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-mortarboard-fill me-3 text-primary fs-2"></i> 
                  <h5 className="card-title mb-0">{edu.level}</h5>
                </div>

                <hr className="w-100" />

                <div className="mb-2">
                  <h6 className="mb-0">{edu.institution}</h6>
                  <small className="text-muted">
                    <em>{edu.degree}</em> • {edu.year}
                  </small>
                </div>

                <p className="card-text mt-3">{edu.description}</p>
              </div>

              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-12">
            <h4 className="fw-bold border-bottom pb-2">Academic Projects</h4>
          </div>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card bg-dark h-100 shadow-lg border-0">
                  <img
                    src={getImageUrl(project.imageSrc || "https://dummyimage.com/600x400/000/fff")}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title pb-2">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div>
                      <div className="d-flex flex-wrap gap-4 justify-content-center">
                      {project.icons.map((icon, idx) => (
                        <i key={idx} className={`fs-1 devicon-${icon} colored`}></i>
                      ))}
                    </div>
                    </div>
                  </div>
                  <div className={`text-center bg-dark card-footer ${styles.cardFooter}`}>
                    <a href={project.link} className="btn btn-gradient-primary text-white fw-bold shadow-sm" rel="noopener noreferrer">
                      <i className="bi bi-box-arrow-up-right me-2"></i> View Project
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};