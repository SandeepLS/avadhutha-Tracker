import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avathar from '../../assets/avathar2.svg';
import { toast, Toaster } from 'react-hot-toast';
import { CgSpinner } from "react-icons/cg";
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import convertToBase64 from '../../helper/convert';
import OtpInput from "otp-input-react";

/** Phone Input */
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from '../../styles/Username.module.css';
import {auth} from './firebase.config';
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';


export default function Register() {

  const [file, setFile] = useState()
  const [otp,setOtp] = useState("")
  const [ph, setPh] = useState("")
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [userr, setUser] = useState(null);
  

  

    /**Phone Varification */
    function onCaptchVerify(){
      if(!window.recaptchaVerifier){

        window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
                onSignup()
          },
          'expired-callback': () => {
            
          }
        }, auth);
      }
    }

  function onSignup(){
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    /**firebas:-3rd steps(1) */
    signInWithPhoneNumber(auth, formatPh, appVerifier)/** */
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const formik = useFormik({
    initialValues : {
      email: '',
      username: '',
      password: '',
      // phone: ''
      // otp : ' '
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values)
      
    }
  })


   /** formik doensn't support file upload so we need to create this handler */
   const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }


  return (
    // <div>Password</div>    
    <div className="container max-auto">

    <Toaster position='top-center' reverseOrder={false} ></Toaster>
    
    <Toaster toastOptions={{ duration: 4000 }} />
    


      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{width: "25%", marginTop:"-5%"}}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              {/* Happy to join you. */}
            </span>
          </div>
          {/* className={styles} */}
          
          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>

                <label htmlFor='profile'>
                <img src={file || avathar} className={styles.profile_img} alt="avatar" />
                </label>

                <input onChange={onUpload} type='file' id='profile' name='profile'/>  
              </div>
            
              <div className="textbox flex flex-col items-center gap-2">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
                  {/* <input {...formik.getFieldProps('phone')} className={styles.textbox} type="text" placeholder='PhoneNo' /> */}

                  <div>
                    {/* <Toaster toastOptions={{ duration:400 }} /> */}
                    <div id='recaptcha-container'></div>
                        {
                         userr ? (
                            <h5 className='text-3xl font-bold' style={{paddingTop:"8%",paddingBottom:"4%"}}>
                              👍OTP Verified Success
                            </h5>
                            ):(
                          <div className=''>
                            {
                              showOTP ? (
                                
                                  <>
                                      <div className={styles.otpBackground}>
                                        <label htmlFor='otp' className=''>
                                          Enter Your OTP
                                        </label>

                                        <OtpInput {...formik.getFieldProps('phone')}
                                        value={otp}
                                        onChange={setOtp}
                                        OTPLength={6}
                                        otpType="number"
                                        disabled={false}
                                        autoFocous
                                        className={styles.optcontainer}
                                        ></OtpInput>
                                        <button onClick={onOTPVerify} className={styles.btn1} type='submit'>
                                          {
                                            loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                          }
                                            
                                            <span> Vaerify OTP</span>

                                        </button>
                                      </div>
                                  </>):(
                                  <>
                                      <div className={styles.otpBackground}>
                                        <label htmlFor='' className=''>
                                          Verify Your Phone number
                                        </label>

                                        {/* <input {...formik.getFieldProps('phone')} value={ph} onChange={e => setPh(e.target.value)} className={styles.textbox} type="text" placeholder='PhoneNo' /> */}


                                        <PhoneInput 
                                            {...formik.getFieldProps('phone')}
                                            country={"in"}
                                            value={ph}
                                            onChange={setPh}
                                            // onBlur={formik.handleBlur}
                                        />
                                      
                                        <button 
                                         onClick={onSignup}
                                         className={styles.btn2} type='submit'>
                                          {
                                            loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                          }

                                          <span>Send Code Via SMS</span>

                                        </button>
                                      </div>
                                  </>
                            )}

                            {/* <h5 >Otp Verified</h5> */}
                          </div>
                        )}

                  </div>
                
                  <button className={styles.btn} type="submit">Register</button>
              </div>




              <div className="text-center py-4">
                <span className='text-gray-500'>Already Register? <Link className='text-red-500' to='/'>Login now</Link></span>
              </div>
            

          </form>
        </div>

      </div>

    </div> 
  // </div>
  )
}
