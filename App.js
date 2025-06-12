import './App.css'
 import Projects from './projects'
 import Certifications from './certifications'
 import Experience from './experience'
 import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'




  function App(){
    return(
    <>
        
    <BrowserRouter>
      <main>
      <nav>
    
          <a href='https://linkedin.com'>Home</a>
           <a href='https://linkedin.com'>Skills</a>
            <a href='https://linkedin.com'>Explore</a>
            <div className='linkedin-buttons'>
            <a href="https://www.linkedin.com/in/kondalwadi-deepika-60b159315/" target="_blank" rel="noopener noreferrer" className="linkedin">in</a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">in</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">in</a>
</div>
         
            <button id='btn'>Let's Connect</button>
      </nav>
       <br></br>
       <br></br>
       <h5 >Welcome to my Portfolio</h5>
          
          <img src="/my_photo.jpg" alt="My Profile" style={{ float: 'right', marginLeft:'100px' }}/>
      <h2>Hi! I'm Kondalwadi Deepika</h2>
      <p style={{ textAlign: 'justify',fontSize:'20px' }}>
         Open Source Enthusiast | Finalist in National Hackathon | 2⭐ CodeChef | Proficient 
         in Java, Python, Web Development, SQL, Data Structures & Algorithms | Computer Science Student at Anurag University</p>
     <h3> About:</h3>
<p style={{ textAlign: 'justify',fontSize:'20px' }}>As a dedicated and high-achieving Computer Science student (CGPA 9.66) 
  at Anurag University, I combine strong academic grounding with practical experience in software development
   and problem-solving. I’ve built applications like a Java-based Library Management System and a Weather App using 
   modern web technologies. With certifications in Java, SQL, and Web Development, and over 100 problems solved on
    LeetCode, I continuously strive to grow my skills. Whether through national hackathons or solo projects, 
    I’m passionate about technology, innovation, and contributing to real-world solutions. Let’s connect and 
    explore how I can bring value to your team!</p>

   <h3>Personal Details:</h3>
<p style={{textAlign:'justify',fontSize:'20px'}}><span>Email:</span>kondalwadi8@gmail.com</p>

<p style={{textAlign:'justify',fontSize:'20px'}}><span>Phone No:</span>8106944954</p>
   <button id='res-id'>Resume</button>
</main>

{/* Skills Section */}

<section >
  <div className='neon-border'>
     <div className='skill'>
      <div className='skill-bx'>
      <h2>Skills</h2>
     <p>Each skill I acquire is a step toward innovation. From creative problem-solving 
      to building real-world solutions, my journey is driven by curiosity, passion, and purpose.</p>
      <button type='button' >&#8249;</button>
       <img src="/python1.png" className='img-logo' />
       <img src='/java-logo.jpg' className='img-logo'/>
       <img src='web-logo.png' className='img-logo'/>
        <img src='/sql-logo.png' className='img-logo'/>
        <img src='/react-logo.png' className='img-logo'/>
        <img src='/git-logo.png' className='img-logo'/>
        <button type='button' >&#8250;</button>
     </div>
     </div>
     </div>
   
     </section>
     <div className='explore'>
     <h2 >Explore</h2>
     <p>Explore my work, achievements, and certifications — each one reflects the skills 
      I've developed and the value I bring to every project.</p>
     
   
 
      <div className="nav-pills nav nav-pills justify-content-center align-items-center mb-5" role="tablist"> 
  <div className="nav-item">
    <Link className="nav-link active" id="projects-tabs-tab-first" data-rr-ui-event-key="first" to='/'>Projects</Link>
  </div>
  <div className="nav-item">
    <Link className="nav-link" id="projects-tabs-tab-second" data-rr-ui-event-key="second" to='/experience' role="tab">Experience</Link>
  </div>
  <div className="nav-item">
    <Link className="nav-link" id="projects-tabs-tab-third" data-rr-ui-event-key="third" to='/certifications' role="tab">Certification</Link>
  </div>

</div>
</div>

  <Routes>
      <Route path='/' element={<Projects/>} />
        <Route path='/certifications' element={<Certifications/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
     

   <section className="contact" id="connect">
  <div className="container">
    <h1 id="head1">Contact</h1>
    <div className="row align-items-center">
      {/* Left Side: Image */}
      <div className="col-md-6">
        <div id="divi">
          <img
            src="https://cdn.dribbble.com/users/1604313/screenshots/6905805/contact-illustration.gif"
            alt="Contact"
            className="cont-img img-fluid"
          />
        </div>
      </div>
      

      {/* Right Side: Form */}
      <div className="col-md-6">
        <form className="forms">
          <div className="mb-3">
            <label className="form-label" htmlFor="formName">Name</label>
            <input placeholder="Enter your name" name="name" type="text" id="formName" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formEmail">Email address</label>
            <input placeholder="Enter your email" name="email" type="email" id="formEmail" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formPhone">Phone Number</label>
            <input placeholder="Enter your phone number" name="phone" type="tel" id="formPhone" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="formMessage">Message</label>
            <textarea rows="3" placeholder="Enter your message" name="message" id="formMessage" className="form-control"></textarea>
          </div>

          <div className="sub">
            <button type="submit" className="btn btn-light">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</BrowserRouter>

</>

    )
  }



export default App;

