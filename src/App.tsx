import { useState } from 'react'
import './App.css'
import photo_profile from './assets/photo_profile.png'
import profile2 from './assets/profile2.png'
import vectorRight from './assets/vector-right.png'

function App() {
  // const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  // const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [projectType, setProjectType] = useState<'software' | 'hardware'>('software')

  const software_projects = [
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

  const hardware_projects = [
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
                <div className="profile-info" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <p className="greeting">Hey, I'm</p>
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

              <div className="stats-grids" style={{ bottom: '40px', left: 0, right: 0, justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', marginTop: '20px'}}>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Project Internal</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">internship</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Project Internal</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Project Internal</div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="about-section" style={{ width: '100%', height: '', overflow: 'hidden' }}>
        <div className="vector-right-container" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: 'auto', zIndex: 0, pointerEvents: 'none' }}>
          <img 
            src={vectorRight} 
            style={{ 
              objectFit: 'contain',
              height: '100%',
              width: 'auto'
            }} 
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', height: '100%', position: 'relative', zIndex: 1, marginLeft: '100px' }}>
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
      </div>

      {/* Portfolio Section */}
      <div style={{ width: '100%', minHeight: '100vh', position: 'relative', padding: '80px 100px', background: '#fff' }}>
        {/* Title with Arrow Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '60px', gap: '40px' }}>
          {/* Left Arrow */}
          <button 
            onClick={() => setProjectType('hardware')}
            style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '3rem',
              color: '#FF0004',
              transform: 'rotate(180deg)',
              transition: 'transform 0.3s'
            }}
          >
            ▶
          </button>

          {/* Title */}
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#fff',
            background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
            padding: '20px 60px',
            borderRadius: '50px',
            margin: 0
          }}>
            {projectType === 'software' ? 'Software Engineer' : 'Hardware Engineer'}
          </h2>

          {/* Right Arrow */}
          <button 
            onClick={() => setProjectType('software')}
            style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '3rem',
              color: '#FF0004',
              transition: 'transform 0.3s'
            }}
          >
            ▶
          </button>
        </div>

        {/* Description */}
        <p style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 60px',
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#666'
        }}>
          Focused on websites, especially backend and servers. Enthusiastic backend engineer and AI engineer, focused on website logic and dynamic flow.
        </p>

        {/* Project Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {(projectType === 'software' ? software_projects : hardware_projects).slice(0, 3).map((project, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #FF0004 0%, #FF1285 100%)',
              borderRadius: '20px',
              padding: '30px',
              color: '#fff',
              minHeight: '250px'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                {project.title}
              </h3>
              <ul style={{ 
                listStyle: 'disc',
                paddingLeft: '20px',
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}>
                {project.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vector Right Bottom */}
        <div style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: 'auto',
          height: '40%',
          zIndex: 0,
          pointerEvents: 'none'
        }}>
        </div>
      </div>
    </section>
  )
}

export default App
