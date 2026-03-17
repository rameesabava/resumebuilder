import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { getDownloadResumeAPI } from '../services/allResumeApiService';

function Downloads() {

  const [allDownloads, setAllDownloads] = useState([])

  console.log(allDownloads);
  
  useEffect(()=>{
    getAllDownloads()
  },[])

  const getAllDownloads = async()=>{
    const result = await getDownloadResumeAPI()
    if(result.status==200){
      setAllDownloads(result.data)
    }
  }
  return (
    <div className='container'>
      <div className='d-flex my-5 justify-content-center align-items-center'>
        <h1>Downloaded Resume History</h1>
        <Link to='/forms'><IoArrowBackSharp />Back</Link>
      </div>
      <div className='row mb-5'>
        <div className="col-lg-4">
          <div style={{ height: '400px' }} className="shadow p-3 rounded">
            <div className="d-flex justify-content-between">
              <h5>Review at: time</h5>
              <button className='btn fs-5 text-danger'><MdDelete /></button>

            </div>
            <div className='mt-3 text-center'>
              <img height={'300px'} width={'200px'} src="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg" alt="cv" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads