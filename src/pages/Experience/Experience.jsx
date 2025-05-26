import history from "../../data/history.json";
import { PageLayout } from "../../components/Body/PageLayout";

export const Experience = () => {
  return (
<PageLayout title="Work Experience">
      <div className="container">
        {/* Resume Download */}
        <div className="mb-4 text-end">
        <a
          href="https://drive.google.com/uc?export=download&id=1QqvWZBj_tPULSG56Hj5ezMn1TakrJACx"
          className="btn btn-primary text-white"
        >
          <i className="bi bi-download me-2"></i>
          Download Resume
        </a>

        </div>

        {/* Work Experience Cards */}
        <div className="row g-4">
          {history.map((job, index) => (
          <div key={index} className="col-md-12">
            <div className="card h-100 p-3 bg-light1 bg-dark shadow-lg border-0">
            <div className="d-flex align-items-start">
                <i className="bi bi-building fs-3 text-secondary me-3"></i>
                <div>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold text-decoration-none text-light d-block mb-1 fs-5"
                  >
                    {job.organisation}
                  </a>
                  <div className="small text-muted">
                    {job.role} • {job.startDate} – {job.endDate}
                  </div>
                </div>
              </div>
              <hr className="w-100" />
              <ul className="mb-2 ps-3">
                {job.achievements.map((point, i) => (
                  <li key={i} className="mb-2">{point}</li>
                ))}
              </ul>
              
              <div className="d-flex flex-wrap align-items-center">
              <span className="fw-italic me-2">Tools and Technologies:</span>
              {job.technologies.map((tech, i) => (
                <span key={i} className="text-dark1 text-primary me-2 fst-italic">
                  {tech}{i < job.technologies.length - 1 && ','}
                </span>
              ))}
            </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
