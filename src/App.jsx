import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Jason Richards</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img src={`${import.meta.env.BASE_URL}jason.jpeg`} alt="Jason Richards" className="profile-photo" />
          <h2>Head of Digital Learning</h2>
          <p className="tagline">
            Award-Winning Team Builder | Learning Technology Leader | 10+ Years Transforming L&amp;D in Automotive
          </p>
          <div className="highlights">
            <div className="highlight-card">
              <span className="highlight-number">18</span>
              <span className="highlight-label">Team Members</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">350+</span>
              <span className="highlight-label">Projects / Year</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">150+</span>
              <span className="highlight-label">UK Locations</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href={`${import.meta.env.BASE_URL}Jason_Richards_CV.pdf`} download className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Strategic digital learning leader with 10+ years driving learning technology
            transformation in the automotive sector. Proven track record of scaling
            high-performing teams (2 to 18 people), delivering business-critical content
            programmes (350+ projects annually), and building technical infrastructure
            that drives operational efficiency.
          </p>
          <p>
            Combining deep technical expertise in video production, eLearning development,
            and systems engineering with strong people leadership and stakeholder management.
          </p>
          <div className="award">
            Bronze Award &mdash; Best Team, Learning Technologies Awards 2022
          </div>
        </section>

        <section id="looking-for" className="section">
          <h2>What I&rsquo;m Looking For</h2>
          <p>
            Ready for the next challenge. Looking for a senior digital learning or L&amp;D
            leadership role where I can scale teams, build infrastructure, and deliver
            measurable impact. Open to automotive, EdTech, higher education, corporate
            L&amp;D, or professional services &mdash; anywhere that values hands-on
            leadership and technical problem-solving.
          </p>
          <p>
            Open to opportunities across sectors. Happy to travel for the right role.
          </p>
        </section>

        <section id="achievements" className="section">
          <h2>Key Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <span className="achievement-icon">&#9650;</span>
              <h3>Scaled Team 800%</h3>
              <p>Grew the digital learning team from 2 to 18 people, building a multi-disciplinary operation spanning video, eLearning, and technical training.</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">&#9889;</span>
              <h3>100+ Videos in 12 Months</h3>
              <p>Delivered business-critical content for Mercedes-Benz&rsquo;s franchise-to-agency model transition with just a 2-person team under tight deadlines.</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">&#9881;</span>
              <h3>3.5x Output Increase</h3>
              <p>Scaled annual video production from approximately 100 to 350+ projects while maintaining quality standards across 150+ UK locations.</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">&#163;</span>
              <h3>&pound;400k+ Equipment Strategy</h3>
              <p>Influenced and guided procurement investment over 3 years, ensuring technical capability matched evolving business needs.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Dec 2024 &ndash; Present</div>
              <h3>Technical Training &amp; Development Lead</h3>
              <p className="company">Calex UK for Mercedes-Benz</p>
              <p>
                Leading comprehensive technical training and digital learning function across
                the UK retail network. Managing 18-person multi-disciplinary team delivering
                in-person training, eLearning content, and video production.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Apr 2021 &ndash; Dec 2024</div>
              <h3>Digital Development Lead</h3>
              <p className="company">Calex UK for Mercedes-Benz</p>
              <p>
                Built and scaled digital content production capability from a 2-person startup
                to a 7-person high-performing team delivering 350+ projects annually. Led
                business-critical agency model transition delivering 100+ videos in 12 months.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Oct 2018 &ndash; Apr 2021</div>
              <h3>Digital Development Specialist</h3>
              <p className="company">Calex UK for Mercedes-Benz</p>
              <p>
                Pioneered digital learning transformation, converting face-to-face training
                to virtual delivery and establishing video content production capability.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Sep 2014 &ndash; Oct 2018</div>
              <h3>Technical Trainer</h3>
              <p className="company">RAC UK for Mercedes-Benz</p>
              <p>
                Delivered technical training across UK retail network, specialising in
                high-voltage vehicle systems and diagnostic strategies. Designed and
                delivered approximately 120 days of in-person training annually.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Leadership</h3>
              <div className="skill-tags">
                <span className="skill-tag">Team Building</span>
                <span className="skill-tag">Stakeholder Management</span>
                <span className="skill-tag">Change Management</span>
                <span className="skill-tag">Performance Management</span>
                <span className="skill-tag">Recruitment</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Learning Tech</h3>
              <div className="skill-tags">
                <span className="skill-tag">eLearning Development</span>
                <span className="skill-tag">Instructional Design</span>
                <span className="skill-tag">LMS / MDM</span>
                <span className="skill-tag">Virtual Classrooms</span>
                <span className="skill-tag">Adobe Connect</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Production</h3>
              <div className="skill-tags">
                <span className="skill-tag">Video Production</span>
                <span className="skill-tag">Live Broadcasting</span>
                <span className="skill-tag">Voice Over</span>
                <span className="skill-tag">Studio Management</span>
                <span className="skill-tag">Video Editing</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Technical</h3>
              <div className="skill-tags">
                <span className="skill-tag">Monday.com Automation</span>
                <span className="skill-tag">QNAP NAS</span>
                <span className="skill-tag">Process Automation</span>
                <span className="skill-tag">Network Infrastructure</span>
                <span className="skill-tag">Capacity Planning</span>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <h2>What People Say</h2>
          <div className="testimonials">
            <blockquote className="testimonial">
              <p>&ldquo;Jason brings professionalism and creativity to the team. The value he has added is evident.&rdquo;</p>
              <cite>&mdash; Team Member</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;A valued member of the team.&rdquo;</p>
              <cite>&mdash; Team Member</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Approachable and accommodating.&rdquo;</p>
              <cite>&mdash; Team Member</cite>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Get in Touch</h2>
          <p>Based in Daventry, UK. Open to new opportunities.</p>
          <div className="contact-links">
            <a href="mailto:jasonprichards@yandex.com" className="contact-link">
              jasonprichards@yandex.com
            </a>
            <a href="https://www.linkedin.com/in/jason-richards-a3783977/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Jason Richards &copy; 2026</p>
      </footer>
    </div>
  )
}

export default App
