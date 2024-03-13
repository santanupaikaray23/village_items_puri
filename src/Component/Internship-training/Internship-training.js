import React from 'react';
import InternshipandtrainingSearch from './Internship-trainingSearch';
import InternshipandtrainingQuickSearch from './Internship-trainingQuickSearch';

const Internshipandtraining = () => {
    return(
        <div className="internshipandtraining" id="internshipandtraining">
        <div>
            <InternshipandtrainingSearch/>
            <InternshipandtrainingQuickSearch/>
        </div>
        </div>
    )
}

export default Internshipandtraining;