import toast from 'react-hot-toast'

/** validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}


/** validate page password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
    // phoneVerify(errors, values);
    
    // otpVerify(errors, values);
    return errors;
}


/** ################ ********************/


/** validate password */
function passwordVerify(errors = {}, values){
     
    // const specialChars = /[`!@#$%^&*()_+\-=\\]{};':"\\|,.<>\/?~]/;
    
    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }
    
    // else if(!specialChars.test(values.password)){
    //     errors.password = toast.error("Password must have special character");
    // }

    return errors;
}

// Validate UserName 
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!')
    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid Username...!")
 }

 return error;
}

/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

/** validate phoneno */
// function phoneVerify(error = {}, values){
//     if(!values.phone){
//         error.phone = toast.error('PhoneNo Required...!')
//     }else if(values.phone.includes(" ")){
//         error.phone = toast.error("Invalid PhoneNo...!")
//  }

//  return error;
// }



/** validate otp */
// function otpVerify(error = {}, values){
//     if(!values.otp){
//         error.otp = toast.error('OTP Required...!')
//     }else if(values.otp.includes(" ")){
//         error.otp = toast.error("Invalid OTP...!")
//  }

//  return error;
// }

