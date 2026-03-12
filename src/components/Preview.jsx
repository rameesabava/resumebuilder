import { Divider, Button } from '@mui/material'
import React from 'react'

function Preview({resumeData}) {
    return (
        <div className='w-100'>
            <h2>{resumeData?.fullName}</h2>
            <p className='fs-6'>Phone: {resumeData?.phone}</p>
            <p className='fs-6'>Email: {resumeData?.email}</p>
            <p className='fs-6'>LinkedIn: <a href="">{resumeData?.linkedin}</a></p>
            <p className='fs-6'>Github: <a href="">{resumeData?.github}</a></p>
            <p className='fs-6'>Location: {resumeData?.location}</p>
            <Divider className='bg-dark my-3' />
            <h4>Professional Summary</h4>
            <p>{resumeData?.summary}</p>
                        <Divider className='bg-dark' />
            <h4 className='mt-3'>Technical Skills</h4>
            {/* duplicate aacording to user skill */}
            {
                resumeData?.skills?.map((item,index)=>(
            <Button key={index} variant="outlined" className='text-dark border-dark m-1'>{item}</Button>
                ))
            }
            <Divider className='bg-dark my-3' />
<h4>Education</h4>
            <p className='fs-6'>Bachelor's Degree in <b>{resumeData?.degree}</b></p>
            <p className='fs-6'>University/College name: {resumeData?.university}</p>
            <p className='fs-6'>Year of Graduation: {resumeData?.passOut}</p>

        </div>
    )
}

export default Preview