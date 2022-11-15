import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import cloudUpload from '../../../images/cloud-upload-outline.png';
import './AddEvent.css';

const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        // POST a new event from client-side to server-side (database) | Create a new event POST API
        const url = `https://volunteer--network--server.herokuapp.com/event`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        navigate('/home');
    }

    return (
        <div className='p-4 border-bottom'>
            <h2 className='text-start'>Add Event</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex flex-row flex-wrap gap-2 align-items-top justify-content-between bg-light rounded p-4'>
                    <div className='' style={{ width: '48%' }}>
                        <div className='text-start pb-3'>
                            <label className='fw-semibold pb-2' htmlFor="">Event Title</label> <br />
                            <input style={{ border: '1px solid #d6d6d6'}} className='d-block w-100 px-2 py-1 rounded' placeholder='Event Title' {...register("title", { required: true, maxLength: 30 })} />
                        </div>
                        <div className='text-start'>
                            <label className='fw-semibold pb-2' htmlFor="">Description</label> <br />
                            <textarea style={{ border: '1px solid #d6d6d6' }} className='d-block w-100 px-2 py-1 rounded' placeholder='Description' type="textarea" rows="5" {...register("description", { required: true, maxLength: 50 })} />
                        </div>
                    </div>
                    <div className='' style={{ width: '48%' }}>
                        <div className='text-start pb-3'>
                            <label className='fw-semibold pb-2' htmlFor="">Event Date</label> <br />
                            <input style={{ border: '1px solid #d6d6d6' }} className='d-block w-100 px-2 py-1 rounded' placeholder='Event Date' type="date" {...register("date", { required: true })} />
                        </div>
                        <div className='text-start'>
                            <label className='fw-semibold pb-2' htmlFor="">Banner</label> <br />
                            <div className='d-flex flex-column gap-2'>
                                <button className='upload-button p-1 px-3 rounded d-block' disabled style={{ border: '1px solid #0084FF', backgroundColor: '#E8F0FE', width: '' }}>
                                    <img className='pe-2' src={cloudUpload} width='30px' alt="Cloud Upload" />
                                    <span style={{ color: '#0084FF' }}>Upload image</span>
                                </button>
                                <input style={{ border: '1px solid #d6d6d6' }} className='d-block w-100 px-2 py-1 rounded' placeholder='Photo URL' type="url" {...register("bannerImg", { required: true })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <input className='d-block btn btn-primary' type="submit" value="Add Event" />
                </div>
            </form>
        </div>
    );
};

export default AddEvent;