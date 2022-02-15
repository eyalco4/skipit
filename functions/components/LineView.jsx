import * as React from "react";
import Card from "../components/Card";

const Wait = ({lineNumber}) => {
  return (
    <>
      {/* language=SCSS*/}
      <style jsx>{`

        h1 {
          margin: 40px auto;
        }

        .with-spacing {
          letter-spacing: 4px;
        }

        .line-no {
          font-size: 120px;
        }

      `}</style>
      <h1 className="with-spacing">YOU ARE</h1>
      <Card>
        <div className="line-no">{lineNumber}</div>
      </Card>
      <h1>In line</h1>
    </>
  );
};

export default Wait;
