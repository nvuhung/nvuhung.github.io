import React from 'react'
import { data } from './constants'

const Header = ({ data }) => (
  <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
      <img className="mr-3 img-fluid picture mx-auto" src="/avatar.jpg" alt="Avatar" />
      <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{data.name}</h1>
          <div className="title mb-3">{data.title}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={`mailto:${data.email}`}>
                <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>
                {data.email}
              </a>
            </li>
            <li>
              <a href={`tel:${data.phone}`}>
                <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>
                {data.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="secondary-info ml-md-auto mt-2">
          <ul className="resume-social list-unstyled">
            {(data.links || []).map(link => (
              <li className="mb-3" key={link.link}>
                <a href={link.link} rel="noopener noreferrer" target="_blank">
                  <span className="fa-container text-center mr-2">
                    <i className={link.icon}></i>
                  </span>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </header>
)

const Projects = ({ projects, title }) => (
  <section className="resume-section experience-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{title}</h2>
    <div className="resume-section-content">
      <div className="resume-timeline position-relative">
        {projects.map(item => (
          <article className="resume-timeline-item position-relative pb-5" key={item.company + item.time}>
            <div className="resume-timeline-item-header mb-2">
              <div className="d-flex flex-column flex-md-row">
                <h3 className="resume-position-title font-weight-bold mb-1">{item.title}</h3>
                <div className="resume-company-name ml-auto" dangerouslySetInnerHTML={{ __html: item.company }} />
              </div>
              <div className="resume-position-time">{item.time}</div>
            </div>
            <div className="resume-timeline-item-desc">
              <p>{item.description}</p>
              <ul>
                {item.projects.map(project => (
                  <li key={project}>
                    <div dangerouslySetInnerHTML={{ __html: project }}></div>
                  </li>
                ))}
              </ul>
              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
              <ul className="list-inline">
                {item.technologies_used.map(tech => (
                  <li key={tech} className="list-inline-item">
                    <span className="badge badge-primary badge-pill">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

const Body = ({ data }) => (
  <div className="resume-body p-5">
    {data.career_summary && (
      <section className="resume-section summary-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
        <div className="resume-section-content">
          <p className="mb-0">{data.career_summary}</p>
        </div>
      </section>
    )}

    <div className="row">
      <div className="col-lg-9">
        <Projects projects={data.work_experience} title="WORK EXPERIENCE" />
      </div>

      <div className="col-lg-3">
        <section className="resume-section skills-section mb-5">
          {/* Skill Tools */}
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
          <div className="resume-section-content">
            {(data.skills_tools || []).map(skill => (
              <div className="resume-skill-item" key={skill.title}>
                <h4 className="resume-skills-cat font-weight-bold">{skill.title}</h4>
                <ul className="list-unstyled mb-4">
                  {(skill.items || []).map(item => (
                    <li className="mb-2" key={item.name}>
                      <div className="resume-skill-name">{item.name}</div>
                      <div className="progress resume-progress">
                        <div
                          className="progress-bar theme-progress-bar-dark"
                          role="progressbar"
                          style={{ width: `${item.level}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Others */}
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Others</h4>
              <ul className="list-inline">
                {data.others.map(item => (
                  <li className="list-inline-item" key={item}>
                    <span className="badge badge-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section education-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled">
              {data.educations.map(item => (
                <li className="mb-2" key={item.name + item.time}>
                  <div className="resume-degree font-weight-bold">{item.name}</div>
                  <div className="resume-degree-org">{item.description}</div>
                  <div className="resume-degree-time">{item.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Languages */}
        <section className="resume-section language-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled resume-lang-list">
              {data.language.map(item => (
                <li className="mb-2" key={item.name}>
                  <span className="resume-lang-name font-weight-bold">{item.name}</span>{' '}
                  <small className="text-muted font-weight-normal">({item.level})</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="resume-section interests-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">WORKING ATTITUDE</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled">
              {data.working_attitude.map(item => (
                <li className="mb-1" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-9">
        <Projects projects={data.other_projects} title="OTHER PROJECTS" />
      </div>
    </div>
  </div>
)

const FloatButton = () => (
  <a
    title="Download CV"
    rel="noopener noreferrer"
    target="_blank"
    href="/CV.pdf"
    download="CV_NguyenVuHung"
    className="float-btn"
  >
    <i className="fa fa-download"></i>
  </a>
)

const App = () => (
  <article className="resume-wrapper text-center position-relative">
    <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
      <Header data={data} />
      <Body data={data} />
    </div>
    <FloatButton />
  </article>
)

export default App
