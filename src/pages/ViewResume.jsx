import React, { useEffect, useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getResumeAPI } from '../services/allResumeApiService';

function ViewResume() {
  const {id} = useParams()
  //console.log(id);
const [resumeData,setResumeData]=useState({})
console.log(resumeData);

useEffect(()=>{
  getResumeDetails()
},[])

const getResumeDetails=async ()=>{
  if(id){
    const result=await getResumeAPI(id)
    //console.log(result);
    setResumeData(result.data)
    
  }
}
  
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* icon set */}
          <div className="d-flex justify-content-center align-items-center">
            {/* download */}
            <button className='btn text-primary fs-2 me-2'><FaFileDownload /></button>
            {/* edit */}
            <Edit/>
            {/* history */}
            <Link to={'/downloads'} className='btn text-danger fs-2 me-2'><IoMdRefresh /></Link>
            {/* back */}
            <Link to={'/form'} className='btn text-success fs-2 me-2'><FaBackward /></Link>

          </div>
          <div className='mt-5'><Preview resumeData={resumeData}/></div>
        </div>
        <div className="col-lg-2"></div>


      </div>
    </div>
  )
}

export default ViewResume