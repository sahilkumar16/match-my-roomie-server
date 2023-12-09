import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import './Biography.css';

function Biography({ formMethods }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='container'>
      {/* <div className='inner-container'> */}      
        <div className='biography-info-container'>
          <div className='create-progress-bar'>
            <div className='rectangle' id='first-bio'></div>
            <div className='rectangle' id='second-bio'></div>
            <div className='rectangle' id='third-bio'></div>
            <div className='rectangle' id='fourth-bio'></div>
          </div>
          <h2 className='biography-h2'>Create Your Profile</h2>
          <h3 className='biography-h3'>
            Write a brief introductory biography about yourself
          </h3>
          <p className='biography-p'>
            The information will be shown on your MatchMyRoomie
            <span>profile to help potential roommates get to know you.</span>
          </p>
          <div className='biography-form'>
            <div className='biography-label'>
              <label className='biography-label-label'>
                About Me
                <Controller
                  name='about'
                  control={formMethods.control}
                  defaultValue=''
                  rules={{ required: 'Please fill out your biography.' }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={8} // Set the initial number of rows
                      cols={54} // Set the initial number of columns
                      placeholder=' Where are you moving from? 
                                   What do you do for work? 
                                   What hobbies do you have? 
                                   Describe your cleaning habits, social habits. 
                                   Do you have any Pets? 
                                   Do you smoke or drink? 
                                   How do you tolerate overnight guests?'
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange(e); // Update inputValue state
                      }}
                      className='fixed-textarea'
                    />
                  )}
                />
                {formMethods.formState.errors.textInput && (
                  <p className='error-message'>
                    {formMethods.formState.errors.textInput.message}
                  </p>
                )}
              </label>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className='info-side'>
        <img
          src={require('../../assets/images/results-card.png')}
          alt='matched user profile with profile and details'
        />
      </div>
    </div>
  );
}

export default Biography;
