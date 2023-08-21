/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrowdropdown } from "../../icons/Arrowdropdown";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { InputField } from "../InputField";
import { Placeholder } from "../Placeholder";
import "./style.css";

export const Cells = ({ pending, cellText = "Text", icon, secondLine, type, className }) => {
  return (
    <div className={`cells type-${type} ${className}`}>
      {["multiple-actions", "number", "status", "text-link", "text"].includes(type) && (
        <div className="wrapper">
          {type === "number" && <>Value</>}

          {type === "status" && (
            <img
              className="oval"
              alt="Oval"
              src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/oval.svg"
            />
          )}

          {["status", "text-link", "text"].includes(type) && (
            <div className="label">
              {type === "status" && <>Status</>}

              {type === "text" && <>{cellText}</>}

              {type === "text-link" && <>Text Link</>}
            </div>
          )}

          {type === "multiple-actions" && (
            <>
              <div className="text-wrapper">Actions</div>
              <div className="right-icon">
                <div className="more-default">
                  <img
                    className="more"
                    alt="More"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/more.svg"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {type === "text-field" && (
        <InputField
          className="instance-node"
          error={false}
          filled={false}
          message="none"
          placeholderClassName="input-field-instance"
          state="none"
          text1="Field Label"
        />
      )}

      {type === "icon" && <Placeholder className="placeholder-instance" />}

      {type === "single-action" && (
        <Button
          buttonLabel="Single Action"
          className="button-2"
          size="small"
          state="default"
          style="text"
          type="text"
        />
      )}

      {type === "checkbox" && <Checkbox className="checkbox-instance" stateProp="default" type="unchecked" />}

      {type === "caret" && <Arrowdropdown className="arrow-drop-down" color="#757575" />}
    </div>
  );
};

Cells.propTypes = {
  pending: PropTypes.bool,
  cellText: PropTypes.string,
  icon: PropTypes.bool,
  secondLine: PropTypes.bool,
  type: PropTypes.oneOf([
    "text-link",
    "icon",
    "status",
    "checkbox",
    "number",
    "blank",
    "single-action",
    "caret",
    "text-field",
    "multiple-actions",
    "text",
  ]),
};
