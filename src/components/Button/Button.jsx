/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AddCircleOutline } from "../AddCircleOutline";
import "./style.css";

export const Button = ({
  showLeadingicon,
  showTrailingicon,
  buttonLabel = "Button",
  size,
  style,
  state,
  type,
  className,
}) => {
  return (
    <div className={`button ${size} ${type} ${style} ${state} ${className}`}>
      {type === "text" && <div className="button-label">{buttonLabel}</div>}

      {type === "icon" && (
        <AddCircleOutline
          addDefaultClassName={`${size === "small" && "class-3"}`}
          className={`${size === "small" ? "class-5" : "class-6"}`}
          overlapGroupClassName={`${size === "small" && "class"}`}
          rectangleClassName={`${size === "small" && "class-4"}`}
          shape={
            state === "default" && style === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-1.svg"
              : state === "default" && style === "primary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-2.svg"
              : state === "disabled" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-11.svg"
              : size === "small" && state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-12.svg"
              : size === "small" && state === "default" && ["secondary", "text"].includes(style)
              ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-10.svg"
              : "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-9.svg"
          }
          shapeClassName={`${size === "small" && "class-2"}`}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  showLeadingicon: PropTypes.bool,
  showTrailingicon: PropTypes.bool,
  buttonLabel: PropTypes.string,
  size: PropTypes.oneOf(["large", "small"]),
  style: PropTypes.oneOf(["primary", "text", "secondary"]),
  state: PropTypes.oneOf(["disabled", "default"]),
  type: PropTypes.oneOf(["text", "icon"]),
};
