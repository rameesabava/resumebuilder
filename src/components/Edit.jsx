import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import jobTypes from '../assets/jobRole.json'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Edit({ resumeData, setResumeData }) {

    const skillRef=useRef()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resumeData);

    const removeSkill = (skill) => {
        setResumeData({ ...resumeData, skills: resumeData?.skills?.filter(item => item != skill) })
    }

    const addSkill=(skill)=>{
        if(skill){
            if(resumeData?.skills.map(item=>item.toLowerCase())?.includes(skill.toLowerCase())){
                alert("Given skill is already available. Add another!!!")
            }else{
                setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
            }
            skillRef.current.value = ""

        }else{
            alert("Input valid skill!!!!")
        }
    }
    return (
        <div>
            <Button onClick={handleOpen} className='btn text-primary fs-2 me-2'><MdEditDocument /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* basic details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeData.fullName} onChange={e => setResumeData({ ...resumeData, fullName: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField value={resumeData.location} onChange={e => setResumeData({ ...resumeData, location: e.target.value })} id="standard-basic-loc" label="Location" variant="standard" />
                                <FormControl variant="standard">
                                    <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                    <Select onChange={e => setResumeData({ ...resumeData, job: e.target.value })} value={resumeData?.job}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"

                                        label="Age"
                                    >
                                        {jobTypes.jobRoles.map(role => (
                                            <MenuItem key={role} value={role}>{role}</MenuItem>

                                        )

                                        )}

                                    </Select>
                                </FormControl>

                            </div>
                        </div>
                        {/* contact details */}
                        <div>
                            <h3>Contact Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeData.email} onChange={e => setResumeData({ ...resumeData, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                                <TextField value={resumeData.phone} onChange={e => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-basic-phone" label="Phone" variant="standard" />

                                <TextField value={resumeData.linkedin} onChange={e => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                                <TextField value={resumeData.github} onChange={e => setResumeData({ ...resumeData, github: e.target.value })} id="standard-basic-gitHub" label="GitHub Link" variant="standard" />
                            </div>
                        </div>
                        {/* educational details */}
                        <div>
                            <h3>Educational Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeData.degree} onChange={e => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                                <TextField value={resumeData.university} onChange={e => setResumeData({ ...resumeData, university: e.target.value })} id="standard-basic-college" label="University/College Name" variant="standard" />
                                <TextField value={resumeData.passOut} onChange={e => setResumeData({ ...resumeData, passOut: e.target.value })} id="standard-basic-year" label="Year of Graduation" variant="standard" />

                            </div>
                        </div>
                        {/* skills */}
                        <div>
                            <h3>Skills</h3>
                            <div className='p-3 d-flex justify-content-center align-items-center'>
                                <input ref={skillRef} type="text" placeholder='Add Skill' className='form-control' />
                                <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>Add</Button>

                            </div>
                            {/* Added skills */}
                            <h5>Added Skills: </h5>
                            <div className='p-3 d-flex justify-content-between flex-wrap'>

                                {
                                    resumeData?.skills?.map(skill => (
                                        <Button onClick={() => removeSkill(skill)} key={skill} variant='contained' className='my-1'>{skill} <FaXmark className='ms-1' /></Button>
                                    ))
                                }

                            </div>
                        </div>
                        {/* summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeData?.summary} onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })} id='standard-basic-degree' label='summary' multiline varient="standard" />

                            </div>
                        </div>
                        {/* update */}
                        <button className='btn btn-primary'>Update</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );

}

export default Edit