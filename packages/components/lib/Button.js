import React, { Fragment } from "react";

const Button = ({ children, ...rest }) => {
  return (
    <>
      <button {...rest} className="button">{children}</button>
      <style jsx="true">
        {`
          .button  {
            margin: 20px 0;
            background-color: #0070f3;
            border: 0;
            cursor: pointer;
            color: #FFFFFF;
            font-size: 1.3em;
            padding: 8px 16px;
          }
        `}
        </style>
    </>
  );
};

export default Button;