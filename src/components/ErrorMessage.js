import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
    const navigate = useNavigate()
  return (
    <div className='error'>
        <img src={'/404.jpeg'} />
      <button onClick={() => navigate('/')}>Return to Homepage</button>
    </div>
  );
};

export default ErrorMessage;
