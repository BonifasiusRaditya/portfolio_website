// import { useState, useRef } from 'react'
import './App.css'
import photo_profile from './assets/photo_profile.png'

function App() {
  // const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  // const scrollContainerRef = useRef<HTMLDivElement>(null)

  // const software_projects = [
  //   {
  //     title: "Web scrapping for Job Listing in Lintas Kode",
  //     items: [
  //       "Developed an automated web scraping tool to aggregate remote job listings from LinkedIn worldwide, enhancing job searching efficiency",
  //       "AI based job listing data maintenance to ensure it meets the expected criteria before entering the production website"
  //     ]
  //   },
  //   {
  //     title: "Website Ranking Evaluation Mining using AI Engine",
  //     items: [
  //       "Developed an AI driven ranking system to evaluate and analyze questionnaire data from mining companies regarding operational quality",
  //       "Architected a robust backend database and integrated it with a dynamic frontend for streamlined data visualization and reporting",
  //       "Optimized the evaluation process by applying automated data mining techniques to assess company performance metrics"
  //     ]
  //   },
  //   {
  //     title: "WA-bot Chatbot (Dockerized Container)",
  //     items: [
  //       "Developed a secure and scalable authentication system using TypeScript to manage automated bot login and logout processes",
  //       "Containerized application environments using Docker to ensure seamless and consistent deployment across Linux production servers",
  //       "Maintained high system availability and performance through proactive Linux server monitoring and resource optimization"
  //
  //     ]
  //   },
  //   {
  //     title: "Website MAKNA for Meaning of Indonesian culture",
  //     items: [
  //       "Developed an interactive website platform to preserve and display Indonesian cultural heritage through immersive digital content",
  //       "Integrated a QR Code hardware (Arduino) system with the web interface to provide seamless access to localized cultural information",
  //       "Implemented an AI-powered chatbot to deliver real-time, automated cultural explanations and enhance user engagement"
  //     ]
  //   },
  //   {
  //     title: "John Garage workshop Website",
  //     items: [
  //       "Debugged and optimized the John Garage website to resolve functional issues and enhance overall system stability using TypeScript",
  //       "Developed a dynamic payment order interface, ensuring a seamless and secure transaction experience for users"
  //     ]
  //   }
  // ]

  // const hardware_projects = [
  //   {
  //     title: "Web scrapping for Job Listing in Lintas Kode",
  //     items: [
  //       "Developed an automated web scraping tool to aggregate remote job listings from LinkedIn worldwide, enhancing job searching efficiency",
  //       "AI based job listing data maintenance to ensure it meets the expected criteria before entering the production website"
  //     ]
  //   },
  //   {
  //     title: "Website Ranking Evaluation Mining using AI Engine",
  //     items: [
  //       "Developed an AI driven ranking system to evaluate and analyze questionnaire data from mining companies regarding operational quality",
  //       "Architected a robust backend database and integrated it with a dynamic frontend for streamlined data visualization and reporting",
  //       "Optimized the evaluation process by applying automated data mining techniques to assess company performance metrics"
  //     ]
  //   },
  //   {
  //     title: "WA-bot Chatbot (Dockerized Container)",
  //     items: [
  //       "Developed a secure and scalable authentication system using TypeScript to manage automated bot login and logout processes",
  //       "Containerized application environments using Docker to ensure seamless and consistent deployment across Linux production servers",
  //       "Maintained high system availability and performance through proactive Linux server monitoring and resource optimization"
  //
  //     ]
  //   },
  //   {
  //     title: "Website MAKNA for Meaning of Indonesian culture",
  //     items: [
  //       "Developed an interactive website platform to preserve and display Indonesian cultural heritage through immersive digital content",
  //       "Integrated a QR Code hardware (Arduino) system with the web interface to provide seamless access to localized cultural information",
  //       "Implemented an AI-powered chatbot to deliver real-time, automated cultural explanations and enhance user engagement"
  //     ]
  //   },
  //   {
  //     title: "John Garage workshop Website",
  //     items: [
  //       "Debugged and optimized the John Garage website to resolve functional issues and enhance overall system stability using TypeScript",
  //       "Developed a dynamic payment order interface, ensuring a seamless and secure transaction experience for users"
  //     ]
  //   }
  // ]

   

  return (
    <section style={{ width: '100%', height: '100vh' }}>
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
                  <button className="talk-button">
                    Let's talk
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="stats-grid" style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', gap: '20px' }}>
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
    </section>
  )
}

export default App
