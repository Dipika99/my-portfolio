import skills from "../../data/skills.json";
import about from "../../data/about.json";
import { PageLayout } from "../../components/Body/PageLayout";

export const About = () => {
  return (
    <PageLayout title="About Me">
      {/* My Journey Card */}
      
      <div className="card bg-light1 bg-dark mb-5 p-3 shadow-lg border-0">
        <div className="row g-3 align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/about/aboutImage.png"
              alt="My Profile"
              className="img-fluid"
              style={{ maxWidth: '250px' }}
            />
          </div>
          <div className="col-md-8">
            <h5 className="card-title fw-bold mb-3">My Journey</h5>
            <div className="card-text">
              {about.map((about, index) => (
                <p key={index}>
                  {about.paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-12">
          <h4 className="fw-bold border-bottom pb-2">Skills</h4>
        </div>

          {skills.map((skill, index) => (
          <div key={index} className="col-md-6 col-lg-6">
            <div className="card h-100 bg-light1 bg-dark p-3 shadow-lg border-0">
              <h6 className="fw-bold mb-2">{skill.title}</h6>
              <p className="text-muted mb-3">{skill.description}</p>
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                {skill.icons.map((icon, idx) => (
                  <i key={idx} className={`fs-1 devicon-${icon} colored`}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};