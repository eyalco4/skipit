import React from 'react';
import Card from '../components/Card';

const Register = ({handler}) => {
  return (
    <>
      {/* language=SCSS*/}
      <style jsx>{`
        .join {
          width: 100%;
          font-size: 60px;
          margin: auto;
        }

        .join:hover,
        .join:focus,
        .join:active {
          cursor: pointer;
          font-weight: bold;
        }

      `}</style>
      <Card onClick={handler}>
        <div className="join">JOIN THE LINE</div>
      </Card>
    </>
  );
};

export default Register;
