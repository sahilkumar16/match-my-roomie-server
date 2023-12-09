import React from 'react';
import { Controller } from 'react-hook-form';
import './Display.css';


function Display({ formMethods }) {  
  return (
    <div className='display-container'>    
      <div className='profile-create-info'>   
        <div className='create-progress-bar'>
              <div className='rectangle' id='first'></div>
              <div className='rectangle' id='second'></div>
              <div className='rectangle' id='third'></div>
              <div className='rectangle' id='fourth'></div>
        </div>  
        <h2 className='profile-create-info-h2'>Create Your Profile</h2>
        <h3 className='profile-create-info-h3'>
          Your profile is an important part of the
          <span>matching process to help others get to </span>
          <span>know you.</span>
        </h3>
        <p className='profile-create-info-p'>
          The information you share will be used across
          <span>MatchMyRoomie to help potential roommates get to know</span>
          <span>you.</span>
        </p>
        <div className='display-form'>          
          <div className='name'>
            <div className='label-name-container'>
              <label className='label-name'>
                First Name
                <Controller
                  name='firstName'
                  control={formMethods.control}
                  defaultValue=''
                  rules={{ required: 'First Name is required.' }}
                  render={({ field }) => (
                    <input
                      className='label-name-input'
                      {...field}
                      type='text'
                      placeholder='Emily'
                    />
                  )}
                />
                {formMethods.formState.errors.firstName && (
                  <p className='error-message'>
                    {formMethods.formState.errors.firstName.message}
                  </p>
                )}
              </label>

              {/* last name */}
              <label className='label-name'>
                Last Name
                <Controller
                  name='lastName'
                  control={formMethods.control}
                  defaultValue=''
                  rules={{ required: 'Last Name is required.' }}
                  render={({ field }) => (
                    <input
                      className='label-name-input'
                      {...field}
                      type='text'
                      placeholder='Huang'
                    />
                  )}
                />
                {formMethods.formState.errors.lastName && (
                  <p className='error-message'>
                    {formMethods.formState.errors.lastName.message}
                  </p>
                )}
              </label>
            </div>

            {/* age */}
            <div className='age-label-container'>
              <label className='age'>
                Age
                <Controller
                  name='age'
                  control={formMethods.control}
                  defaultValue=''
                  rules={{ required: 'Age is required.' }}
                  render={({ field }) => (
                    <div className='age-label'>
                      <select id='age' {...field}>
                        <option value='' disabled></option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                        <option value='26'>26</option>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                        <option value='31'>31</option>
                        <option value='32'>32</option>
                        <option value='33'>33</option>
                        <option value='34'>34</option>
                        <option value='35'>35</option>
                        <option value='36'>36</option>\
                        <option value='37'>37</option>
                        <option value='38'>38</option>
                        <option value='39'>39</option>
                        <option value='40'>40</option>
                        <option value='41'>41</option>
                        <option value='42'>42</option>
                        <option value='43'>43</option>
                        <option value='44'>44</option>
                        <option value='45'>45</option>
                        <option value='46'>46</option>
                        <option value='47'>47</option>
                        <option value='48'>48</option>
                        <option value='49'>49</option>
                        <option value='50'>50</option>
                        <option value='51'>51</option>
                        <option value='52'>52</option>
                        <option value='53+'>53+</option>
                      </select>
                      {formMethods.formState.errors.age && (
                        <p className='error-message'>
                          {formMethods.formState.errors.age.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>           
            <p className='age-info'>
              All users must be at leats 18 years or older. We use age to ensure
              the most accurate matches.
            </p>           
          </div>
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
export default Display;
