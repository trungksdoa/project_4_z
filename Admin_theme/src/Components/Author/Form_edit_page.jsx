import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Au_API from '../../api/AuthorAPI';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Create_Form from './Form_Create.jsx';

import CK_editor from './CK_Editor.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['First information', 'Writing information'];

const FormPage = () => {
    const initialValues = { Au_name: "", Au_Published: "", Au_Information: "", Au_images: "21312312" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [fromStep, setFromStep] = useState(0);
    const navigate = useNavigate();


    // ---------------------
    // Step
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleCKEditor = (event, editor) => {
        const data = editor.getData();
        console.log(data);
        setFormValues({ ...formValues, "Au_Information": data });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { errors, froms } = validate(formValues);
        setFromStep(froms.step)
        setFormErrors(errors);
        setIsSubmit(true);
    };

    async function EditAuthor() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("isOk")
            handleReset();
            // await Au_API.Create().then(response => {
            //     alert(response.msg);
            //     // sendEmail(response.data.userID,"vohoangtrung")
            //     // navigate("/login")
            // }).catch(e => {
            //     alert(e.msg);
            // });
        } else {
            setActiveStep(fromStep)
        }
    }
    useEffect(() => {
        EditAuthor();
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const froms = {};
        if (!values.Au_name) {
            errors.Au_name = "Author name is required!";
            froms.step = 0;
        }
        else if (values.Au_name.trim().length <= 0) {
            errors.Au_name = "Author name not be blank";
            froms.step = 0;
        } else if (values.Au_name.trim().length <= 3) {
            errors.Au_name = "Author name not be blank";
            froms.step = 0;
        }
        if (!values.Au_Published) {
            errors.Au_Published = "Number of pulished book is required!";
            froms.step = 0;
        } else if (values.Au_Published.trim().length <= 0) {
            errors.Au_Published = "Number of pulished book not be blank";
            froms.step = 0;
        }
        if (!values.Au_Information) {
            errors.Au_Information = "Author information is required!";
            froms.step = 1;
        } else if (values.Au_Information.trim().length <= 0) {
            errors.Au_Information = "Author information not be blank";
            froms.step = 1;
        }

        return { errors, froms };
    };


    // ---------------------
    // Step

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };

    const BackToPrevious = () => {
        navigate("/admin/author")
    }
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <a style={{ cursor: 'pointer' }} onClick={BackToPrevious}><ArrowBackIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Edit Authors</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <Container component="main" maxWidth="xl">
                                <Box sx={{ width: '100%' }}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = (
                                                    <Typography variant="caption">Optional</Typography>
                                                );
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                    <React.Fragment>
                                        <Box component="form" onSubmit={handleSubmit}>
                                            {activeStep === 0 ? (
                                                <Create_Form OnKeyPress={handleChange} Error={formErrors} values={formValues} />
                                            ) : <CK_editor OnKeyPress={handleCKEditor} Error={formErrors} values={formValues} />}
                                            {activeStep === steps.length ? (
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    <Button type="submit">
                                                        Complete
                                                    </Button>
                                                </Box>
                                            ) : (
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
                                                    <Button type="button" onClick={handleNext}>
                                                        Next
                                                    </Button>
                                                </Box>
                                            )}
                                        </Box>
                                    </React.Fragment>
                                </Box>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default FormPage