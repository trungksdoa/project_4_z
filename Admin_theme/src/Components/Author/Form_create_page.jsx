// ----------------Core---------------
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Create_Form from './Form_Create.jsx';
// ----------------End Core---------------

// ----------------Material---------------
import Box from '@mui/material/Box';
import Au_API from '../../api/AuthorAPI';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CK_editor from './CK_Editor.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'react-toastify/dist/ReactToastify.css';
// ----------------End Material---------------



const steps = ['First information', 'Writing information'];

const FormPage = () => {
    const initialValues = {
        Au_name: "", Au_Published: "", Au_Information: "", Au_images: {
            lastModified: 0,
            lastModifiedDate: new Date(),
            name: "",
            size: 0,
            type: ""
        }
    };
    const { ...initValue } = initialValues;
    const [formValues, setFormValues] = useState(initValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [fromStep, setFromStep] = useState(0);
    const ref = useRef();
    const navigate = useNavigate();


    // ---------------------
    // Step
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const Only_number = /^[0-9\b]+$/;

    const [imgData, setImgData] = useState(null);
    const handleChange = (e) => {
        var file = {}
        const { name, value, files } = e.target;
        if (name === "Au_images") {
            if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
                for (let index = 0; index < files.length; index++) {
                    const element = files[index];
                    file.lastModified = element.lastModified
                    file.lastModifiedDate = element.lastModifiedDate
                    file.name = element.name
                    file.size = element.size
                    file.type = element.type
                }
                setFormValues(preValue => ({
                    ...preValue,
                    Au_images: { ...preValue.Au_images, name: file.name, lastModified: file.lastModified, lastModifiedDate: file.lastModifiedDate, size: file.size, type: file.type }
                }));
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  setImgData(reader.result);
                });
                reader.readAsDataURL(files[0]);
            } else {
                alert("Invalid type");
                ref.current.value = "";
            }
        } else if (name === "Au_Published") {
            if (Only_number.test(value)) {
                if (value.length < 999999)
                    setFormValues({ ...formValues, [name]: value });
            }
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
        // console.log(value);
    };
    const handleChangeCKEditor = (event, editor) => {
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

    async function CreateAuthor() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            await Au_API.Create(formValues)
        } else {
            setActiveStep(fromStep)
        }
    }
    useEffect(() => {
        CreateAuthor();
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
                                <h6 className="text-white text-capitalize ps-3">CREATE Authors</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <Container component="main" maxWidth="xl">
                                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
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
                                                <Create_Form
                                                    OnKeyPress={handleChange}
                                                    Error={formErrors}
                                                    resetFile={ref}
                                                    values={formValues}
                                                    Image={imgData}
                                                />
                                            ) : <CK_editor
                                                OnKeyPress={handleChangeCKEditor}
                                                Error={formErrors}
                                                values={formValues}
                                            />}
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