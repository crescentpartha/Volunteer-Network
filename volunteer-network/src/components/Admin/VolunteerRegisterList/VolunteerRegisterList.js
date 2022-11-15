import React from 'react';
import { Table } from 'react-bootstrap';
import useDisplayActivities from '../../../hooks/useDisplayActivities';
import DisplayRegisterVolunteer from './DisplayRegisterVolunteer';

const VolunteerRegisterList = () => {
    const [activities] = useDisplayActivities();

    return (
        <div className='p-4 border-bottom'>
            <h2 className='text-start'>Volunteer Register List</h2>
            <div>
                <Table responsive>
                    <thead className='bg-light'>
                        <tr className='text-start'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Registering Date</th>
                            <th>Event Title</th>
                            <th>Event Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activities.map(activity => <DisplayRegisterVolunteer
                                key={activity._id}
                                activity={activity}
                            ></DisplayRegisterVolunteer>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default VolunteerRegisterList;