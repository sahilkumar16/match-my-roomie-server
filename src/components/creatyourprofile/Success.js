import React from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import './Success.css';

function Success() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = () => {
    console.log(userId)
    navigate(`/quiz/${userId}`);
  };

  return (
    <div className='success-container'>   
      <div className='success-inner-container'>       
        <h2 className='success-h2'>Success!</h2>
        <h3 className='success-h3'>
          Next, take our proven
          <span className='success-h3-middle'>
            roommate matching quiz
          </span>
          <span> to speed up your search!</span>
        </h3>

        <button type='button' className='submit-button' onClick={onSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
}
export default Success;
