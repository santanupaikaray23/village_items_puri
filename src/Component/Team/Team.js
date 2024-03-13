import React from 'react';
import TeamSearch from './TeamSearch';
import TeamQuickSearch from './TeamQuickSearch';
const Team = () => {
    return(
        <div className="career" id="career">
        <div>
            <TeamSearch/>
            <TeamQuickSearch/>
        </div>
        </div>
    )
}

export default Team;