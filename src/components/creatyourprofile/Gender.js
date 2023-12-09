import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import './Gender.css';

function Gender({ formMethods }) {
  const question = 'Which gender do you identify with?';
  const options = ['Female', 'Male', 'Transgender', 'Nonbinary'];
  const [selectedOption, setSelectedOption] = useState('');
  const [isCustomOption, setCustomOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCustomOptionChange = (event) => {
    setSelectedOption('Other');
    setCustomOption(event.target.value);
  };

  return (
    <div className='container'>
      <div className='gender-info-container'>
        <div className='create-progress-bar'>
          <div className='rectangle' id='first-gender'></div>
          <div className='rectangle' id='second-gender'></div>
          <div className='rectangle' id='third-gender'></div>
          <div className='rectangle' id='fourth-gender'></div>
        </div>
        <h2 className='inner-h2'>Create Your Profile</h2>
        <h3 className='inner-h3'>{question}</h3>
        <p className='inner-p'>
          The information will be shown on your MatchMyRoomie
          <span>profile to help potential roommates get to know you.</span>
        </p>
        <div className='gender-form'>
          {options.map((option) => (
            <label key={option}>
              <Controller
                name='gender'
                control={formMethods.control}
                defaultValue=''
                rules={{ required: 'Please select a gender.' }}
                render={({ field }) => (
                  <div>
                    <input
                      type='radio'
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => {
                        field.onChange(e);
                        handleOptionChange(e);
                      }}
                    />
                    {option}
                  </div>
                )}
              />
              {formMethods.formState.errors.gender && ( // Display error message
                <p className='error-message'>
                  {formMethods.formState.errors.gender.message}
                </p>
              )}
            </label>
          ))}
          <label>
            <Controller
              name='gender'
              control={formMethods.control}
              defaultValue=''
              rules={{ required: 'Please select a gender.' }}
              render={({ field }) => (
                <input
                  className='other-input'
                  type='radio'
                  value='Other'
                  checked={selectedOption === 'Other'}
                  onChange={(e) => {
                    field.onChange(e);
                    handleOptionChange(e);
                  }}
                />
              )}
            />
            Other{' '}
            <Controller
              name='customOption'
              control={formMethods.control}
              defaultValue=''
              rules={{
                required:
                  selectedOption === 'Other'
                    ? 'Custom option is required.'
                    : undefined,
              }}
              render={({ field }) => (
                <div>
                  <input
                    type='text'
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      handleCustomOptionChange(e);
                    }}
                    disabled={selectedOption !== 'Other'}
                  />
                  {formMethods.formState.errors.customOption && ( // Display error message
                    <p className='error-message'>
                      {formMethods.formState.errors.customOption.message}
                    </p>
                  )}
                </div>
              )}
            />
          </label>
        </div>
      </div>
      <div className='info-side'>
        <img
          src={require('../../assets/images/results-card-blurry.png')}
          alt='matched user profile with profile and details'
        />
      </div>
    </div>
  );
}

export default Gender;
