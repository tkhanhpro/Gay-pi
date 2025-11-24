'use client'
import { useEffect, useState, useRef } from 'react'
import './globals.css'

export default function Home() {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const texts = ['Developer', 'Junior', 'Senior', 'Full-stack']
  const period = 2000

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), period)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, loopNum, typingSpeed, texts])

  return (
    <div className="min-h-screen bg-black text-hub-text font-sans flex flex-col overflow-x-hidden">
      {/* Advanced Background Elements */}
      <div className="floating-shape w-64 h-64 -top-32 -left-32 animate-float" style={{animationDelay: '0s'}}></div>
      <div className="floating-shape w-96 h-96 -bottom-48 -right-48 animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="floating-shape w-80 h-80 top-1/2 left-1/4 animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Matrix Code Rain */}
      <MatrixRain />
      
      {/* Orbit Rings */}
      <div className="orbit-ring w-96 h-96 top-1/4 left-1/4 animate-orbit" style={{animationDuration: '25s'}}></div>
      <div className="orbit-ring w-64 h-64 bottom-1/4 right-1/4 animate-orbit" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
      
      {/* Orbit Dots */}
      <div className="orbit-dot animate-orbit" style={{animationDuration: '15s', top: '30%', left: '30%'}}></div>
      <div className="orbit-dot animate-orbit" style={{animationDuration: '18s', animationDirection: 'reverse', top: '60%', left: '70%'}}></div>
      
      {/* Morphing Shapes */}
      <div className="morph-element w-40 h-40 absolute top-1/4 right-10 opacity-30"></div>
      <div className="morph-element w-60 h-60 absolute bottom-1/4 left-10 opacity-20" style={{animationDelay: '2s'}}></div>
      
      {/* Hexagon Elements */}
      <div className="hexagon top-1/4 left-1/3 animate-hexagon-rotate" style={{animationDuration: '40s'}}></div>
      <div className="hexagon bottom-1/3 right-1/4 animate-hexagon-rotate" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
      <div className="hexagon top-1/2 left-1/6 animate-hexagon-rotate" style={{animationDuration: '45s'}}></div>
      
      {/* Grid Pattern */}
      <div className="grid-pattern"></div>
      
      {/* Glitch Particles */}
      <GlitchParticles />

      <header className="bg-hub-black/80 backdrop-blur border-b border-hub-gray sticky top-0 z-50 h-16 animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center group hover:scale-105 transition-transform duration-200 cursor-pointer select-none animate-bounce-in">
            <span className="text-2xl md:text-3xl font-bold text-white logo-text mr-1">TKhanh</span>
            <span className="text-2xl md:text-3xl font-bold bg-hub-orange text-black px-2 rounded-[4px] logo-text flex items-center justify-center pb-0.5 animate-pulse-glow">Hub</span>
          </div>

          <div className="flex items-center gap-4 text-sm font-bold">
            <button className="border border-hub-orange text-hub-orange hover:bg-hub-orange hover:text-black px-3 py-1 rounded-[4px] transition animate-pulse-slow hidden sm:block">
              Contact
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full relative z-10">
        {/* Profile Header */}
        <section className="mb-16 animate-slide-up">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="avatar-container flex-shrink-0 animate-bounce-in hover:scale-110 transition-transform duration-300 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-hub-gray relative z-10">
                <img 
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=TKhanh&size=160" 
                  alt="Avatar" 
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="avatar-glow"></div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white animate-wave">Trần Khánh</h1>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-6 h-6">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="text-xl md:text-2xl text-hub-orange font-semibold mb-3 h-8">
                <span className="rotating-text">
                  {currentText}
                  <span className="cursor">|</span>
                </span>
              </div>
              <p className="text-hub-text max-w-2xl animate-slide-up" style={{animationDelay: '0.3s'}}>
                Building scalable, high-performance systems with modern technologies. Passionate about clean code and solving complex problems.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-hub-gray animate-slide-in-left">Development Skills</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              <div className="space-y-4">
                <SkillBar name="Node.js" percentage={70} />
                <SkillBar name="Python" percentage={10} />
                <SkillBar name="HTML, CSS, JavaScript" percentage={45} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-hub-gray animate-slide-in-left">Projects</h2>
          
          <div className="space-y-6">
            <ProjectCard 
              title="E-commerce Platform" 
              year="2023"
              type="Full-stack Web Application"
              description={[
                "Built with Node.js, Express, and MongoDB",
                "Implemented payment gateway integration",
                "Responsive design with modern UI/UX"
              ]}
              delay="0.2s"
              accent={true}
            />
            
            <ProjectCard 
              title="Task Management App" 
              year="2022"
              type="React.js Application"
              description={[
                "Developed with React Hooks and Context API",
                "Real-time updates with WebSocket",
                "Drag and drop functionality for task organization"
              ]}
              delay="0.4s"
              accent={false}
            />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-hub-gray">Connect With Me</h2>
          
          <div className="flex justify-center space-x-6 mt-8">
            <SocialIcon 
              href="#" 
              delay="0.8s"
              svgPath="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
            <SocialIcon 
              href="#" 
              delay="1s"
              svgPath="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
            />
            <SocialIcon 
              href="#" 
              delay="1.2s"
              svgPath="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"
            />
            <SocialIcon 
              href="#" 
              delay="1.4s"
              svgPath="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            />
          </div>
        </section>
      </main>

      <footer className="bg-hub-dark/80 border-t border-hub-gray py-10 text-center backdrop-blur animate-slide-up" style={{animationDelay: '0.8s'}}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-hub-subtext">
            © 2024 TKhanh Hub. All rights reserved. <br />
            Personal programming portfolio website.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Component for Skill Bar
function SkillBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">{name}</span>
        <span className="text-sm text-hub-subtext">{percentage}%</span>
      </div>
      <div className="w-full bg-hub-gray rounded-full h-2 overflow-hidden">
        <div 
          className="skill-bar bg-hub-orange h-2 rounded-full animate-pulse-glow" 
          style={{ width: '0%' }}
          data-width={`${percentage}%`}
        ></div>
      </div>
    </div>
  )
}

// Component for Project Card
function ProjectCard({ title, year, type, description, delay, accent }) {
  return (
    <div 
      className={`bg-hub-dark/70 p-5 rounded-lg border-l-4 backdrop-blur animate-slide-up group ${
        accent ? 'border-hub-orange' : 'border-hub-gray'
      } hover:scale-[1.02] transition-transform duration-300`}
      style={{animationDelay: delay}}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h3 className={`text-lg font-semibold group-hover:text-hub-orange transition-colors ${
          accent ? 'text-white' : 'text-white'
        }`}>
          {title}
        </h3>
        <span className={`text-sm font-medium ${
          accent ? 'text-hub-orange' : 'text-hub-subtext'
        }`}>
          {year}
        </span>
      </div>
      <p className="text-hub-subtext mb-2 flex items-center gap-2">
        <span>◉</span>
        <span>{type}</span>
      </p>
      <ul className="list-none text-sm text-hub-text space-y-1">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-hub-orange mr-2">▶</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component for Social Icon
function SocialIcon({ href, delay, svgPath }) {
  return (
    <a 
      href={href} 
      className="w-12 h-12 rounded-full bg-hub-gray flex items-center justify-center hover:bg-hub-orange transition-all duration-300 animate-float svg-icon"
      style={{animationDelay: delay}}
    >
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPath} />
      </svg>
    </a>
  )
}

// Component for Matrix Rain
function MatrixRain() {
  useEffect(() => {
    const container = document.getElementById('matrix-container')
    const characters = '01'
    const codeCount = Math.floor(window.innerWidth / 20)
    
    for (let i = 0; i < codeCount; i++) {
      const code = document.createElement('div')
      code.classList.add('matrix-code')
      
      const left = Math.random() * 100
      const animationDuration = Math.random() * 10 + 10
      const animationDelay = Math.random() * 5
      const fontSize = Math.random() * 10 + 14
      const opacity = Math.random() * 0.5 + 0.1
      
      code.style.left = `${left}%`
      code.style.animation = `matrix ${animationDuration}s linear ${animationDelay}s infinite`
      code.style.fontSize = `${fontSize}px`
      code.style.opacity = opacity
      
      let codeText = ''
      const codeLength = Math.floor(Math.random() * 20) + 10
      for (let j = 0; j < codeLength; j++) {
        codeText += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      
      code.textContent = codeText
      container.appendChild(code)
    }
    
    return () => {
      container.innerHTML = ''
    }
  }, [])
  
  return <div id="matrix-container" className="fixed inset-0 overflow-hidden z-0"></div>
}

// Component for Glitch Particles
function GlitchParticles() {
  useEffect(() => {
    const container = document.getElementById('glitch-particles')
    const particleCount = 30
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      
      const size = Math.random() * 3 + 1
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const animationDuration = Math.random() * 20 + 10
      const animationDelay = Math.random() * 5
      const opacity = Math.random() * 0.3 + 0.1
      
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`
      particle.style.animation = `particleMove ${animationDuration}s linear ${animationDelay}s infinite`
      particle.style.opacity = opacity
      
      container.appendChild(particle)
    }
    
    return () => {
      container.innerHTML = ''
    }
  }, [])
  
  return <div id="glitch-particles" className="fixed inset-0 overflow-hidden z-0"></div>
}
