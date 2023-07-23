import React from 'react'
import { Link } from 'react-router-dom'
import avathar from '../../assets/avathar2.svg';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../../helper/validate';
import axios from 'axios'

import styles from '../../styles/Username.module.css';

export default function Password() {

  const formik = useFormik({
    initialValues : {
      password : 'admin@123'
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      const dataToSend = {
        userName: localStorage.getItem('username'),
        password: values.password,
      };
      axios.post(`http://localhost:3010/login`, dataToSend)
      .then((response) => {
        console.log('Response:', response.data);
        alert('Login Successful')
        window.location.href = '/map'
      })
      .catch((error) => {
        console.error('Error:', error.response ? error.response.data : error.message);
        alert("Wrong Password")
      }); 
      
    }
  })



  return (
    // <div>Password</div>    
    <div className="container max-auto">

    <Toaster position='top-center' reverseOrder={false}></Toaster>


      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>  Password</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Authentication
            </span>
          </div>
          {/* className={styles} */}
          
          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avathar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
                  <button className={styles.btn} type='submit'>Sign in</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to=''>Recover Now</Link></span>
              </div>

          </form>
        </div>

      </div>

    </div> 
  // </div>
  )
}
