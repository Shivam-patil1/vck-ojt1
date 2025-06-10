import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      duration: "4 Years",
      image: "/images/courses/cse.jpg",
      description: "Learn advanced computing principles, software development, and emerging technologies.",
      features: ["Modern Lab Facilities", "Expert Faculty", "Industry Projects"]
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      duration: "4 Years",
      image: "/images/courses/mechanical.jpg",
      description: "Study mechanical systems, design, and manufacturing processes.",
      features: ["Advanced Workshops", "Practical Training", "Industry Visits"]
    },
    {
      id: 3,
      title: "Electrical Engineering",
      duration: "4 Years",
      image: "/images/courses/electrical.jpg",
      description: "Master electrical systems, power generation, and control systems.",
      features: ["Modern Labs", "Hands-on Experience", "Industry Collaboration"]
    },
    {
      id: 4,
      title: "Civil Engineering",
      duration: "4 Years",
      image: "/images/courses/civil.jpg",
      description: "Learn structural design, construction management, and infrastructure development.",
      features: ["Design Studios", "Field Work", "Professional Training"]
    },
    {
      id: 5,
      title: "Information Technology",
      duration: "4 Years",
      image: "/images/courses/it.jpg",
      description: "Study data management, networking, and information systems.",
      features: ["Computer Labs", "Software Training", "Industry Projects"]
    },
    {
      id: 6,
      title: "Electronics Engineering",
      duration: "4 Years",
      image: "/images/courses/electronics.jpg",
      description: "Focus on electronic systems, circuit design, and communication.",
      features: ["Electronics Lab", "Project Work", "Industry Training"]
    }
  ];

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Discover Your Perfect Learning Path</p>
        </div>
      </section>

      <section className="courses-grid">
        <div className="container">
          <div className="grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-duration">{course.duration}</div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul className="course-features">
                    {course.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/admission" className="enroll-button">Enroll Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Our Courses?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <img src="/images/courses/quality.jpg" alt="Quality Education" />
              <h3>Quality Education</h3>
              <p>Learn from industry experts and experienced faculty members.</p>
            </div>
            <div className="benefit-card">
              <img src="/images/courses/placement.jpg" alt="Placement Support" />
              <h3>Placement Support</h3>
              <p>Get career guidance and placement assistance throughout your course.</p>
            </div>
            <div className="benefit-card">
              <img src="/images/courses/facilities.jpg" alt="Modern Facilities" />
              <h3>Modern Facilities</h3>
              <p>Access state-of-the-art labs and learning resources.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
