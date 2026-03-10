import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function UserInputs() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField id="standard-basic-loc" label="Location" variant="standard" />
                        <FormControl variant="standard">
                            <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"

                                label="Age"
                            >

                                <MenuItem value={10}>Ten</MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h3>Contact Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic-email" label="Email" variant="standard" />
                        <TextField id="standard-basic-phone" label="Phone" variant="standard" />

                        <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                        <TextField id="standard-basic-gitHub" label="GitHub Link" variant="standard" />
                    </div>
                </div>
            )
            case 2: return (
                <div>
                    <h3>Educational Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-basic-college" label="University/College Name" variant="standard" />

                        <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />

                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h6>Our AI will generate Skills & Summary according to your job role. Click the <b>AI Skill & Summary</b> button to proceed.</h6>
                </div>
            )
            default: return null
        }
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button>Finish</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {/* render form according to activeStep count */}
                    <Box>
                        {
                            renderStepContent(activeStep)
                        }
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        {
                            activeStep === steps.length - 1 ?
                                <Button>Generate AI Skills & SUmmary</Button>
                                :
                                <Button onClick={handleNext}>Next</Button>

                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInputs