import * as React from "react";

import {colors} from "../styles";

const Card = ({margin = "auto", borderRadius = "4px", main, children, onClick = ()=> {}}) => {
  const boxShadow = main ?
    "0 40px 40px -40px rgba(192, 192, 192, 0.5)" :
    "0 0px 0px 0 rgba(188, 187, 187, 0.5)";

  return (
    <React.Fragment>
      {/* language=SCSS*/}
      <style jsx>{`
        .card-wrapper {
          background-color: ${colors.black};
          color: ${colors.white};
          border-radius: ${borderRadius};
          border: 1px solid ${colors.gray};
          box-shadow: ${boxShadow};
          margin: auto;
          width: 320px;
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

      `}</style>

      <div className="card-wrapper" onClick={onClick}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Card;
