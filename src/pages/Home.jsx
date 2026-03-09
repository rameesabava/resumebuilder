import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      {/* landing */}
      <div style={{ height: '100vh', backgroundImage: 'url("/landingImage.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} className='d-flex justify-content-center align-items-center'>
        <div className='row container-fluid'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4 rounded shadow p-5 text-center text-light' style={{ backgroundColor: 'rgba(151,152,143,0.7' }}>
            <h3>Designed to Get Hired.
              Your Skills, Your Story,
              Your Next Job - All In One. </h3>
            <Link to={'/steps'} className='btn text-light' style={{ backgroundColor: '#7b5c44' }}>MAKE YOUR RESUME</Link>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </div>
      {/* tools */}
      <div className='container'>
        <h1 className='text-center my-5'>Tools</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p>Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job postings.</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img width={'100%'} height={'500px'} src="/resumes.avif" alt="resume" />
          </div>
        </div>

      </div>
      {/* image */}
      <div style={{ height: '80vh', backgroundImage: 'url("/background.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
      {/* testimony */}
      <div className='container'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <h5>Trusted by professionals worldwide.</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>

          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img  width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img  width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img  width={'100%'} src="/person1.webp" alt="" />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
              <div className='col-lg-3'>
                <img width={'100%'} src="/person1.webp" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home