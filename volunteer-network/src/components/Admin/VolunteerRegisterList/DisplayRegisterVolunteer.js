import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import useDisplayActivities from '../../../hooks/useDisplayActivities';

const DisplayRegisterVolunteer = ({ activity }) => {
    const { _id: id, name, email, date, eventTitle, eventDescription } = activity;
    const [activities, setActivities] = useDisplayActivities();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('Deleting a volunteerActivity with id = ', id);

            // delete a particular volunteerActivity data in client-side and send to the server-side
            const url = `http://localhost:5000/activity/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // console.log(data?.deletedCount);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted volunteerActivity from the state in client-side for better user experience
                    const remaining = activities.filter(activity => activity._id !== id);
                    setActivities(remaining);
                }
            });
        }
    }

    return (
        <tr className='text-start'>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{eventTitle}</td>
            <td>{eventDescription}</td>
            <td>
                <button className='btn p-0 border-0' onClick={() => handleDelete(id)}>
                    <FontAwesomeIcon className='bg-danger p-2 rounded text-light text-center' icon={faTrashCan} />
                </button>
            </td>
        </tr>
    );
};

export default DisplayRegisterVolunteer;