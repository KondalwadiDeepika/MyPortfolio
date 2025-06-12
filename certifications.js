function Certifications(){
    return(
        <>
    
      <div className="row justify-content-center">
        <div style={{width:'400px',height:'400px'}}>
    <div className="card">
        <img src="/cisco-logo.jpg" alt="Certificate 3" />
    <button type="button" className="mt-2 btn btn-primary"
  onClick={() => window.open("/nptel-logo.jpg")}>
  View Certificates</button>
    </div>
    </div>

     <div style={{width:'400px',height:'600px'}}>
    <div className="card">
        <img src="/nptel-logo.jpg" alt="Certificate 3"
         style={{maxWidth: '100%', height: 'auto'}}/>
    <button type="button" className="mt-2 btn btn-primary">View Certificates</button>
    </div>
    </div>

      <div style={{width:'400px',height:'400px'}}>
    <div className="card">
        <img src="/udemy-logo.jpeg" alt="Certificate 3"
         style={{maxWidth: '100%', height: 'auto'}}/>
    <button type="button" className="mt-2 btn btn-primary">View Certificates</button>
    </div>
    </div>

 <div style={{width:'400px',height:'600px'}}>
    <div className="card">
        <img src="/infosys-logo.jpg" alt="Certificate 3"
         style={{maxWidth: '100%', height: 'auto'}}/>
    <button type="button" className="mt-2 btn btn-primary">View Certificates</button>
    </div>
    </div>

 <div style={{width:'400px',height:'600px'}}>
    <div className="card">
        <img src="/HackerRank-logo.jpeg" alt="Certificate 3"
         style={{maxWidth: '100%', height: 'auto'}}/>
    <button type="button" className="mt-2 btn btn-primary">View Certificates</button>
    </div>
    </div>

    <div style={{width:'400px',height:'600px'}}>
    <div className="card">
        <img src="/Infosys-Logo.png" alt="Certificate 5"
         style={{maxWidth: '100%', height: 'auto'}}/>
    <button type="button" className="mt-2 btn btn-primary">View Certificates</button>
    </div>
    </div>


  </div>

        </>
    )
}

export default Certifications;

