import  React from 'react'
import Button from '@mui/material/Button';

const CompanyInfoForm = ({steps,activeStep,handleBack,handleNext,handleReset,handleSkip,isStepOptional}) => {
    return (
        <>
            <body>
                <div className='card-container'>
                    <div className='inner-card-container'>
                        <div>
                            <h1>Borrower Company Info</h1>
                        </div>
                        <form className='form-section'>

                            <div className='row-main'>
                                <div className='row-one'>
                                    <label for='propertyname'>Property Name</label>
                                    <input type="text" id="propertyname" name="propertyName" placeholder="Property Name" />
                                </div>
                                <div className='row-two'>
                                    <label for='propertytype'>Property Type</label>
                                    <select id='propertytype'>
                                        <option value='ownhouse'>Own House</option>
                                        <option value='rented'>Rented</option>
                                    </select>
                                </div>
                                <div className='row-three'>
                                    <label for='noofunits'>Number of Units</label>
                                    <select id='noofunits'>
                                        <option value='one'>1</option>
                                        <option value='two'>2</option>
                                    </select>
                                </div>
                                <div className='row-four'>
                                    <label>Property Address</label>
                                    <textarea placeholder='Enter Borrower Name'>

                                    </textarea>
                                </div>
                                <div className='row-five'>
                                    <label>
                                        File attachment
                                    </label>
                                    <div className='inner-drag-drop' >
                                        <p><a className='link'>Browse </a> or Drag & Drop to Attach file</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='inner-card-bottom-container'>

                        <div className='inner-card-bottom'>
                            <div>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                
                                        <Button onClick={handleReset}>Reset</Button>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                        <button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className='button-2'
                                        >
                                            Back
                                        </button>
                                        {isStepOptional(activeStep) && (
                                            <button onClick={handleSkip} >
                                                Skip
                                            </button>
                                        )}

                                        <button className='button-1' onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </button>
                                </React.Fragment>
                            )}
                            </div>

                        </div>

                    </div>

                </div>
            </body>
        </>
    )
}

export default CompanyInfoForm