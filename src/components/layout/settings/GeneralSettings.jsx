import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import InputGroup from './InputGroup';
import SettingsLayout from './SettingsLayout';
import { getUserSettings, selectCurrentUserSettings } from '@/redux/reducers/settingsSlice';

const settingsSchema = Yup.object().shape({
  // email: Yup.string().email('Invalid email').required('required!'),
  // backupEmail: Yup.string().email('Invalid email').required('required!'),
  // firstName: Yup.string().min(2, 'too short!').max(25, 'too long!').required('required'),
  // lastName: Yup.string().min(2, 'too short!').max(25, 'too long!').required('required'),
  // address: Yup.string().min(6, 'too short').max(200, 'too long')
});

const GeneralSettings = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  const settings = useSelector(selectCurrentUserSettings)

  return (
    <SettingsLayout tab='1' id='general-settings' title='General Settings'>
      <Formik
        initialValues={settings}
        validationSchema={settingsSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => (
          <Form className='grid grid-cols-4 gap-x-4'>
            <InputGroup start='0' end='4' />

            <div className='field !pb-0 col-span-4'>
              <label htmlFor='address'>ADDRESS</label>
              <textarea
                name='address'
                className='w-full bg-transparent border-0 -mt-1 translate-y-2 h-full text-[.9rem] outline-none px-4 dark:text-white'
                placeholder='Fill in your address...'
                cols='30'
                rows='3'></textarea>

            </div>

            <p className='form-text col-span-4'>
              Be sure to fill out your location settings. This will help us suggest you
              relevant friends and places you could like.
            </p>

            <InputGroup start='4' end='6' />

            <div className='settings-buttons mt-5 col-span-4'>
              <button type='submit' className='bg-green-600 col-span-2 text-white hover:bg-green-700'>
                Save changes
              </button>
              <button type='button' className='bg-gray-100 col-span-2 hover:bg-gray-200'>
                Advanced
              </button>
            </div>

            
          </Form>
        )}

      </Formik>
    </SettingsLayout >
  );
};

export default GeneralSettings;
