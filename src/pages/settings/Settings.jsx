const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings-sidebar'>
        <div className='user-block'></div>
      </div>

      <div id='genral-settings' className='settings-section'>
        <div className='settings-panel'>
          <div className='title-wrap text-start'>
            <h2 className='font-montserrat text-[1.2rem] font-medium text-[#999]'>
              General Settings
            </h2>
          </div>

          <div className='settings-form-wrapper'>
            <div className='settings-form'>
              <div className='grid'>
                <div className='field'>
                  <label htmlFor='first-name'>FIRST NAME</label>
                  <div className='control'>
                    <div className='form-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input type='text' name='first-name' />
                  </div>
                </div>
                <div className='field'>
                  <label htmlFor='first-name'>FIRST NAME</label>
                  <div className='control'>
                    <div className='form-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input type='text' name='first-name' />
                  </div>
                </div>
                <div className='field'>
                  <label htmlFor='first-name'>FIRST NAME</label>
                  <div className='control'>
                    <div className='form-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input type='text' name='first-name' />
                  </div>
                </div>
                <div className='field'>
                  <label htmlFor='first-name'>FIRST NAME</label>
                  <div className='control'>
                    <div className='form-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input type='text' name='first-name' />
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
