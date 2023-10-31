import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGraduationCap, faLaptopCode, faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";
import { useState } from "react";
import { Element, Link } from "react-scroll";

function App() {
  const [showLabSkills, setShowLabSkills] = useState(false);

  // console.log(labSkills)

  // console.log()
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      <nav className="main_navbar">
        <Link
          className="main_navbar_link"
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Academic Research
        </Link>
        <Link
          className="main_navbar_link"
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
          onSetActive={handleSetActive}
        >
          Education
        </Link>
        <Link
          className="main_navbar_link"
          activeClass="active"
          to="awards"
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
          onSetActive={handleSetActive}
        >
          Awards
        </Link>
        <Link
          className="main_navbar_link"
          activeClass="active"
          to="labskills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Lab Skills
        </Link>
      </nav>
      <div className="main">
        <div className="main_title">{data?.name}</div>
        <div className="main_image">
          <img className="main_image_img" src="/profile.jpg" alt="" />
        </div>
        <div className="main_bio">{data.bio}</div>

        <div className="main_research">
          <span className="main_section_header">
            <span>Academic Research</span>
            <FontAwesomeIcon icon={faMicroscope} />
          </span>
          {data.research.map(({ content, url }, i) => {
            return (
              <div key={i} className="main_research_item">
                <span className="main_research_item_number">{i + 1}. </span>
                <a href={url} className="main_research_item_content" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            );
          })}
        </div>
        <Element name="education" className="main_education">
          <span className="main_section_header">
            <span>Education</span>
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          {data.education.map(({ institute, location, degree, period, grade }, i) => {
            return (
              <div key={i} className="main_education_item">
                <span className="main_education_item_institute">{institute}</span>
                <span className="main_education_item_location">{location}</span>
                <span className="main_education_item_degree">{degree}</span>
                <span className="main_education_item_period">{period}</span>
                <span className="main_education_item_grade">{grade}</span>
              </div>
            );
          })}
        </Element>
        <Element name="awards" className="main_awards">
          <span className="main_section_header">
            <span>Awards</span>
            <FontAwesomeIcon icon={faAward} />
          </span>
          {data.awards.map(({ label, content }, i) => {
            return (
              <div key={i} className="main_awards_item">
                <span className="main_awards_item_number">&#8226;</span>
                <span className="main_awards_item_label">{label}</span>
                <span className="main_awards_item_content">{content}</span>
              </div>
            );
          })}
        </Element>
        <div className="main_lab">
          <Element className="main_section_header" name="labskills" >
            <span className="main_section_header_title">Lab Skills</span>
            <FontAwesomeIcon icon={faLaptopCode} />
            <span
              className="main_section_header_view"
              onClick={() => setShowLabSkills(!showLabSkills)}
            >
              View More
            </span>
          </Element>
          {data.lab.map(({ label, content }, i) => {
            return (
              <div key={i} className="main_lab_item">
                <span className="main_lab_item_label">{label}</span>
                {showLabSkills ? <span className="main_lab_item_content">{content}</span> : null}
              </div>
            );
          })}
        </div>
      </div></>
  );
}

export default App;
