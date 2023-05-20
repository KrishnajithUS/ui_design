import { React, useState } from 'react'
import "../../Components/Ui/CompanyInfo.css"
import Navbar from '../../Components/Navbar/Navbar'
import CompanyInfoForm from '../../Components/Forms/CompanyInfoForm'
import HorizontalLinearStepper from '../../Components/UIComponents/HorizontalLinearStepper'
import "../../Components/Ui/Navbarstyle.css"

const CompanyInfo = () => {
  const steps = ['Borrower Company Info', 'Director info', 'Financial info', 'Past Performance Details', 'Document Upload'];

  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set());
  console.log(activeStep)

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
    console.log(activeStep)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Navbar />

      <div className='main-container'>
        <HorizontalLinearStepper isStepSkipped={isStepSkipped} isStepOptional={isStepOptional} steps={steps} activeStep={activeStep} skipped={skipped} />
        <CompanyInfoForm steps={steps} isStepSkipped={isStepSkipped} isStepOptional={isStepOptional} handleReset={handleReset} handleNext={handleNext} handleBack={handleBack} handleSkip={handleSkip} setActiveStep={setActiveStep} />
      </div>
    </>
  )
}

export default CompanyInfo