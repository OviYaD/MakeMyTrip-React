import axios from "axios";

export const getCheckUser = async (email) => {
  console.log(email);
  const user = await axios.post(
    "https://f6219402-b819-4a26-a094-d328462092b8.mock.pstmn.io/auth/check-user",
    { email: email }
  );
  // console.log(user);
  return user.exist;
};

export const getVerificationOtp = async (email) => {
  console.log(email);
  const opt = await axios.get(
    "https://f6219402-b819-4a26-a094-d328462092b8.mock.pstmn.io/auth/otp-verify",
    { email: email }
  );

  console.log("otp:", opt);
};
