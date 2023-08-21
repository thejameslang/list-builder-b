/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Checkbox = ({ showLabel, label = "Label", type, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "unchecked",
    state: stateProp || "default",
  });

  return (
    <div
      className={`checkbox ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="div">
        {["checked", "unchecked"].includes(state.type) && (
          <img
            className="img-2"
            alt="Checkbox"
            src={
              state.type === "checked" && state.state === "disabled"
                ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/checkbox-2.svg"
                : state.state === "disabled" && state.type === "unchecked"
                ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/checkbox-3.svg"
                : state.state === "default" && state.type === "unchecked"
                ? "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/checkbox-14.svg"
                : "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/checkbox-1.svg"
            }
          />
        )}

        {state.type === "indeterminate" && (
          <div className={`overlap-group state-0-${state.state}`}>
            <div className="rectangle" />
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "checked") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "unchecked",
        };
    }
  }

  if (state.state === "default" && state.type === "unchecked") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "checked",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["indeterminate", "checked", "unchecked"]),
  stateProp: PropTypes.oneOf(["disabled", "default"]),
};
