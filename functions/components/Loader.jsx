import React from 'react';
import {colors} from '../styles';

const Register = () => {
  return (
    <>
      {/* language=SCSS*/}
      <style jsx>{`
      
        .loader-contaier {
          width: 100%;
          text-align: center;  
          display: flex;
          justify-content: center; 
        }

        .loader {
          border: 16px solid ${colors.white1};
          border-top: 16px solid ${colors.blue};
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }

      `}</style>
      <div className="loader-container">
        <div className="loader"/>
      </div>
    </>
  );
};

export default Register;
