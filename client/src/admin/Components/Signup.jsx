import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log("OTP-less authentication successful:", otplessUser);
      navigate("/productspage");
    };
  }, [navigate]);

  return <div id="otpless-login-page"></div>;
};

export default Signup;
