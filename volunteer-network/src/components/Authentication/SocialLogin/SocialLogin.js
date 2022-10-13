import React from 'react';
import google from '../../../images/google30.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center my-4'>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
                <span className='mx-2 text-secondary'>Or</span>
                <div style={{ height: '1px', backgroundColor: 'lightgray' }} className='w-50'></div>
            </div>
            <div className='container p-0'>
                <button type="button"
                    style={{ borderColor: 'lightgray' }}
                    class="m-0 mx-auto px-0 d-flex align-items-center row btn btn-outline-secondary w-75 rounded-pill">
                    <img className='col-2' src={google} width='30' alt="Google Icon" />
                    <span className='col-10 fw-semibold fs-5'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;