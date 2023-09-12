
import axios from 'axios';
import config from 'config';

// register doctor  (Post)
const registerDoctorAndPatient =async(registioForm)=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/register`,registioForm,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// user Login (POST)
const loginUser =async(username,password)=>{
    try{
        const configData ={
            auth :{
                username,
                password 
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/login`,{},configData);
      if(registerResponse?.data?.success){
      localStorage.setItem('user-details',JSON.stringify(registerResponse?.data?.user));
    }
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// verify otp (Post)
const verifyOTP =async(otp)=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/verify/otp`,otp,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// resent otp (Post)
const resentOTP =async(userData)=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/resend/otp`,userData,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// update Counsellor Profile (POST)
const updateCounsellorProfile =async(userUpdateData)=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'multipart/form-data',
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/update?_method=PUT`,userUpdateData,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// update user details (POST)
const updateUserDetails =async(userUpdateData)=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'multipart/form-data',
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/update?_method=PUT`,userUpdateData,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// upload image user  (POST)
const uploadUserImage =async(userUpdateData)=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :"multipart/form-data",
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/update/photo?_method=PUT`,userUpdateData,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user Roles (GET)
const getUserRoles =async()=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/user/get/roles`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user language (GET)
const getUserLanguage =async()=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json',
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/api/get/languages`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user specialities (GET)
const getUserSpecialities =async()=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json',
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/get/specialities/1`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user type (GET)
const getUserType =async()=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json',
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/get/types`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user details (GET)
const getUserDetails =async()=>{
    const token = localStorage.getItem("token")
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json',
                Authorization : `Bearer ${token}`
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/user/details`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

// get user appointment type (GET)
const getUserAppointmentType =async()=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json',
            }
        }
      const registerResponse =  await axios.get(`${config.apiUrl}/get/appointment/types`,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}



//  ------------****Second Mile Stone****-------------//

// Login User (POST)
const loginUserWithMobileNumber =async(userMobile)=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/mobile/login`,userData,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}


// Register  patients (Post)
const registerPatient =async(registioForm)=>{
    try{
        const configData ={
            headers :{
                "Content-Type" :'application/json'
            }
        }
      const registerResponse =  await axios.post(`${config.apiUrl}/user/register`,registioForm,configData);
      return registerResponse?.data;
    }catch(error){
        console.log(error);
    }
}

export const registation ={
    registerDoctorAndPatient,
    verifyOTP,
    resentOTP,
    getUserDetails,
    updateUserDetails,
    getUserRoles,
    getUserType,
    loginUser,
    uploadUserImage,
    getUserSpecialities,
    getUserAppointmentType,
    updateCounsellorProfile,
    getUserLanguage,

    registerPatient,
    loginUserWithMobileNumber
}