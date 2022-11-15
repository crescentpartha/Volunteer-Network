import React from 'react';
import useDisplayActivities from '../../../hooks/useDisplayActivities';

const VolunteerRegisterList = () => {
    const [activities] = useDisplayActivities();

    return (
        <div className='p-4 border-bottom'>
            <h2 className='text-start'>Volunteer Register List {activities.length}</h2>
        </div>
    );
};

export default VolunteerRegisterList;