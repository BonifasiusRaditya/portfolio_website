import { useState } from 'react'
import './App.css'
import photo_profile from './assets/photo_profile.png'
import profile2 from './assets/profile2.png'
import rental from './assets/RentalManagement.jpeg'
import tekken from './assets/TekkenKeyboard.jpeg'
import transporter from './assets/Transporter.jpeg'

function App() {
  const [projectType, setProjectType] = useState<'software' | 'hardware'>('software')

  type Project = {
    desc?: string
    title?: string
    items?: string[]
    image?: string
  }

  const software_projects: Project[] = [
    {
      desc: "Skills: React, nodeJS, Dockerized, TypeScript, AI Integration, Web Scrapping, Database Management, Virtual Machine"
    },
    {
      title: "Web scrapping for Job Listing in Lintas Kode",
      items: [
        "Developed an automated web scraping tool to aggregate remote job listings from LinkedIn worldwide, enhancing job searching efficiency",
        "AI based job listing data maintenance to ensure it meets the expected criteria before entering the production website"
      ]
    },
    {
      title: "Website Ranking Evaluation Mining using AI Engine",
      items: [
        "Developed an AI driven ranking system to evaluate and analyze questionnaire data from mining companies regarding operational quality",
        "Architected a robust backend database and integrated it with a dynamic frontend for streamlined data visualization and reporting",
        "Optimized the evaluation process by applying automated data mining techniques to assess company performance metrics"
      ]
    },
    {
      title: "WA-bot Chatbot (Dockerized Container)",
      items: [
        "Developed a secure and scalable authentication system using TypeScript to manage automated bot login and logout processes",
        "Containerized application environments using Docker to ensure seamless and consistent deployment across Linux production servers",
        "Maintained high system availability and performance through proactive Linux server monitoring and resource optimization"

      ]
    },
    {
      title: "Website MAKNA for Meaning of Indonesian culture",
      items: [
        "Developed an interactive website platform to preserve and display Indonesian cultural heritage through immersive digital content",
        "Integrated a QR Code hardware (Arduino) system with the web interface to provide seamless access to localized cultural information",
        "Implemented an AI-powered chatbot to deliver real-time, automated cultural explanations and enhance user engagement"
      ]
    },
    {
      title: "John Garage workshop Website",
      items: [
        "Debugged and optimized the John Garage website to resolve functional issues and enhance overall system stability using TypeScript",
        "Developed a dynamic payment order interface, ensuring a seamless and secure transaction experience for users"
      ]
    }
  ]

  const hardware_projects: Project[] = [
    {
      desc: "Skills: ESP32, Arduino, Network Protocols, IoT Communication, AI Integration"
    },
    {
      title: "Anti-cheat Tracking & Location Attendance System (ATLAS)",
      items: [
        "Building a communication system between ESPs using MQTT for fast, real-time data transfer and attendance data integrity using student ID card scanning and Bluetooth connectivity between student devices",
        "Creating a simple database to store student ID numbers and ID cards.",
        "Building a dashboard monitoring system to track student activity in class (duration, number of students, attendance percentage)."
      ]
    },
    {
      title: "Transportater Robot with IoT Monitoring System",
      image: transporter,
      items: [
        "Building a transporter from scratch using an ESP-CAM as a camera sensor and an ESP32 as the robot's control center",
        "Building a website controller using the HTTP and MQTT protocols for wireless network communication between the robot and the controller.",
        "Creating an AI system on the ESP-CAM to identify the type of waste (plastic bottles) being thrown away using machine learning."
      ]
    },
    {
      title: "Management Rental Playstation",
      image: rental,
      items: [
        "Architected an MQTT-based messaging system for efficient data exchange between IoT devices and web APIs via a central broker.",
        "Optimized network frequency and device communication to ensure maximum stability for high-traffic rental management.",
        "Integrated hardware-to-cloud synchronization to monitor device status and rental duration in real-time."
      ]
    },
    {
      title: "Keyboard Tekken Modding with Arduino",
      image: tekken,
      items: [
        "Creating a dedicated keyboard for playing Tekken using an Arduino Pro Micro as the main chip.",
        "Assembling simple wiring for each switch and button component with soldering irons to ensure reliable input detection and responsiveness",
        "Implementing custom key mapping and macros to enhance gameplay experience and efficiency."
      ]
    }
  ]   

  const experiences = [
    {
      title: "Assistant Lecturer of Linear Algebra and Statistics",
      company: "University of Indonesia",
      period: "Jan 2025 - Present",
      items: [
        "Checking student assignments and quizzes with the help of a custom-built AI bot (LM Gemini) for detailed and objective analysis.",
        "Creating an AI-powered grading system to provide consistent and efficient evaluation of student work.",
        "Conducting assistance sessions to prepare students for exam week."
      ]
    },
    {
      title: "Head of Hardware Engineer",
      company: "Exercise FTUI 2025",
      period: "Jan 2025 - Dec 2025",
      items: [
        "Led a team in a hardware project with a client, achieving 70% improvement in efficiency and performance through innovative design and implementation.",
        "Managed team to deliver 4 successful internal and external projects, ensuring on time completion and alignment with organizational goals.",
        "Programming specialist especially network communication and flow management protocols",
        "Make an internal training for staff to improve their skills especially in network communication, microcontroller programming, dan AI integration."
      ]
    },
    {
      title: "Internship IT - Development Engineer",
      company: "PT Ceria Nugraha Indotama",
      period: "Jun 2025 - Aug 2025",
      items: [
        "Developed foundational expertise in Odoo and ERP systems within a company environment, contributing to streamlined business operations.",
        "Created a clean ERD documentation for the company's virtual machine",
        "Created a WA-bot chatbot for login and logout processes using Node.js and typeScript",
        "Implemented RPC for Odoo access via terminal/code"
      ]
    },
    {
      title: "Internship Software Engineer",
      company: "Rafiul’s Company",
      period: "Feb 2024 - March 2024",
      items: [
        "Debugging several transaction pages",
        "Developed expertise in backend systems utilizing NodeJS and JavaScript.",
        "Creating checkout and booking pages"
      ]
    }
  ]

  const currentProjects = projectType === 'software' ? software_projects : hardware_projects
  const projectsToShow = currentProjects.slice(1) // Skip the description item

  return (
      <section style={{ width: '100%', overflow: 'auto' }}>
        {/* First Page - Profile */}
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div className="profile-container" style={{ width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="header-content" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 'none', position: 'relative', height: '100%' }}>
              <div className="profile-header">
                <div className="profile-picture">
                  <img src={photo_profile} alt="Profile" className="profile-photo" />
                </div>
                <div className="profile-info" style={{ 
                  justifyContent: 'center', 
                  display: 'flex', 
                  flexDirection: 'column',
                  flex: 1,
                  textAlign: 'center',
                  alignItems: 'center'
                }}>
                    <div>
                    <p className="greeting" style={{ textAlign: 'left' }}>Hey, I'm</p>
                    <h2 className="name">Bonifasius Raditya Pandu H.</h2>
                    <p className="role" style={{ textAlign: 'right' }}>Computer Engineering</p>
                    <div className="next-button" >
                      <button className="talk-button" onClick={() => { 
                        document.querySelector('.about-section')?.scrollIntoView({ behavior: 'smooth' })
                      }}>
                        Let's talk
                        <span className="arrow">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stats-grids" style={{ bottom: '40px', left: 0, right: 0, justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', marginTop: '20px'}}>
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Software Project</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Hardware Project</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Network Project</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Experience</div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="about-section" style={{ width: '100%', minHeight: '100vh', position: 'relative', padding: '80px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', position: 'relative', zIndex: 1, marginLeft: '100px', marginBottom: '80px' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ 
              width: 'auto', 
              height: 'auto', 
              background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img src={profile2} alt="Profile" style={{ height: '400px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>

          <div style={{ marginLeft: '40px', paddingRight: '200px' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#FF0004'
            }}>About Me</h2>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.8', 
              color: '#666',
              textAlign: 'justify'
            }}>
              Computer Engineering student with expertise in network protocols, website projects, and AI (Artificial Intelligence). Experienced in numerous hardware and software projects, particularly in website development using React and Node.js, as well as managing complex hardware and software communications, specifically targeting advanced connectivity and system efficiency. Leading teams in completing projects with a 90% success rate.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div style={{ width: '100%', padding: '0 100px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#FF0004',
            textAlign: 'center',
            marginBottom: '60px'
          }}>Experience</h2>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                marginBottom: '40px',
                position: 'relative',
                paddingLeft: '40px'
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px #FF0004'
                }}></div>

                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '7px',
                    top: '24px',
                    width: '2px',
                    height: 'calc(100% + 16px)',
                    background: 'linear-gradient(180deg, #FF0004 0%, #FF1285 100%)',
                    opacity: 0.3
                  }}></div>
                )}

                {/* Content */}
                <div style={{
                  background: '#fff',
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 0, 4, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)'
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div>
                      <h3 style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '5px'
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{ 
                        fontSize: '1rem', 
                        color: '#666',
                        fontWeight: '500'
                      }}>
                        {exp.company}
                      </p>
                    </div>
                    <span style={{
                      background: 'rgba(255, 0, 4, 0.1)',
                      color: '#FF0004',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: '#555'
                  }}>
                    {exp.items.map((item, i) => (
                      <li key={i} style={{ 
                        marginBottom: '10px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '9px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#FF0004'
                        }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div style={{ 
        width: '100%', 
        minHeight: '100vh', 
        position: 'relative', 
        padding: '100px 80px', 
        background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '10%',
          background: 'linear-gradient(135deg, rgba(255, 0, 4, 0.05) 0%, rgba(255, 18, 133, 0.05) 100%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '10%',
          background: 'linear-gradient(135deg, rgba(255, 18, 133, 0.05) 0%, rgba(255, 0, 4, 0.05) 100%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header with Toggle */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            marginBottom: '50px',
            gap: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
              borderRadius: '5px',
              padding: '6px',
              display: 'flex',
              gap: '6px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              width: '100%'
            }}>
              <button 
                onClick={() => {
                  setProjectType('software')
                }}
                style={{ 
                  background: projectType === 'software' ? '#fff' : 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: projectType === 'software' ? '#1a1a1a' : '#fff',
                  padding: '12px 32px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flex: 1,
                  opacity: projectType === 'software' ? 1 : 0.5
                }}
              >
                Software Projects
              </button>
              <button 
                onClick={() => {
                  setProjectType('hardware')
                }}
                style={{ 
                  background: projectType === 'hardware' ? '#fff' : 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: projectType === 'hardware' ? '#1a1a1a' : '#fff',
                  padding: '12px 32px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flex: 1,
                  opacity: projectType === 'hardware' ? 1 : 0.5
                }}
              >
                Hardware Projects
              </button>
            </div>

          <p style={{ 
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '0 auto 70px',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
            fontWeight: '400'
          }}>
            {projectType === 'software' ? software_projects[0].desc : hardware_projects[0].desc}
          </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '35px',
          padding: '0 20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {projectsToShow.map((project, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 0, 4, 0.15)'
              e.currentTarget.style.borderColor = 'rgba(255, 0, 4, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)'
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)'
            }}
            >
              <div style={{
                width: '100%',
                height: '220px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 0, 4, 0.03) 0%, rgba(255, 18, 133, 0.03) 100%)'
                }}></div>
                
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '3px solid rgba(255, 0, 4, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                      opacity: 0.2
                    }}></div>
                  </div>
                )}

                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(255, 0, 4, 0.3)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#fff'
                }}>
                  {index + 1}
                </div>
              </div>

              <div style={{ padding: '28px 24px' }}>
                <h3 style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: '700',
                  marginBottom: '18px',
                  color: '#1a1a1a',
                  lineHeight: '1.4',
                  minHeight: '60px'
                }}>
                  {project.title}
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.9rem',
                  lineHeight: '1.7',
                  color: '#666'
                }}>
                  {project.items?.slice(0, 3).map((item, i) => (
                    <li key={i} style={{ 
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
                        boxShadow: '0 0 4px rgba(255, 0, 4, 0.4)'
                      }}></span>
                      {item.length > 85 ? item.substring(0, 85) + '...' : item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Gradient Line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FF0004 0%, #FF1285 100%)'
              }}></div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default App
