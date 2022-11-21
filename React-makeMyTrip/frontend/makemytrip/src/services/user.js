import axios from "axios";

export const getCheckUser = async (email) => {
  console.log(email);
  const user = await axios.post(
    "http://192.168.1.135:3000/auth/check-user",
    { email: email }
  );
  console.log(user.data.exists);
  return user.data.exists;
  // return false;
};

export const getVerificationOtp = async (email) => {
  console.log(email);
  const opt = await axios.get(
    "http://192.168.1.135:3000/auth/otp-verify",
    { email: email }
  );

  console.log("otp:", opt);
};

export const loginOtp = async (email) =>{
  const res= await axios.post("192.168.1.135:3000/auth/otp-login",{email});
  console.log(res);
  localStorage.setItem("token",res.data.token);
  return res.status!==404?true:false;
}

export const loginPassword = async (email,password) => {
  console.log(email,password);
  const response = await axios.post(
    "192.168.1.135:3000/auth/login-password",{email:email, password:password});
    console.log(response);
    localStorage.setItem("token",response.data.token);
    return response.status!==404?true:false;
}

export const getUserDetails = async()=>{
  // const response = await axios.get(
  //   "192.168.1.135:3000/auth/profile"
  // );
  // console.log(response);
  return {
    "id": 1001,
    "firstName": "Richard Joel",
    "lastName": "G",
    "avatar": "/home/yeswanth/Desktop/projects/makemytrip/uploads/users/1001.jpeg",
    "phone": "9876543210",
    "dob": "2002-02-08T18:30:00.000Z",
    "gender": "male",
    "createdAt": "2022-10-19T10:00:03.000Z",
    "updatedAt": "2022-10-19T10:41:08.000Z",
    "userId": 1001
  };
}