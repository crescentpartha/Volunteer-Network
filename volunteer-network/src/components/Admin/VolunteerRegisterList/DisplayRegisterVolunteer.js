import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const DisplayRegisterVolunteer = ({ activity }) => {
    const { name, email, date, eventTitle, eventDescription } = activity;

    return (
        <tr className='text-start'>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{eventTitle}</td>
            <td>{eventDescription}</td>
            <td><FontAwesomeIcon className='bg-danger p-2 rounded text-light text-center' icon={faTrashCan} /></td>
        </tr>
    );
};

export default DisplayRegisterVolunteer;