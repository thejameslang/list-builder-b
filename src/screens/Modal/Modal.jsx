import React from "react";
import { Button } from "../../components/Button";
import { Cells } from "../../components/Cells";
import { Checkbox } from "../../components/Checkbox";
import { InputField } from "../../components/InputField";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { Scrollbar } from "../../components/Scrollbar";
import { Search } from "../../components/Search";
import { DragIndicator1 } from "../../icons/DragIndicator1";
import "./style.css";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="left">
        <div className="state-default-device">
          <div className="search-box">
            <div className="text-wrapper-2">Search</div>
            <Search
              className="search-instance"
              search="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/search-10.svg"
              searchDefaultClassName="design-component-instance-node"
            />
          </div>
          <div className="div-2">
            <div className="frame">
              <PropertyDefaultWrapper buttonButtonLabel="Filter" className="button-3" property1="default" />
              <PropertyDefaultWrapper buttonButtonLabel="Sort" className="button-3" property1="default" />
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="overlap-group-3">
            <div className="table">
              <div className="select-all-accounts">
                <div className="div-2">
                  <div className="drag-indicator">
                    <img
                      className="checkbox-2"
                      alt="Checkbox"
                      src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/checkbox-14.svg"
                    />
                  </div>
                  <div className="label-2">Select All Accounts</div>
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="checkbox-wrapper">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-5">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-5">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-6" type="text" />
                <div className="cells-7">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-1-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
              <div className="row">
                <div className="cells-2">
                  <Checkbox className="checkbox-3" stateProp="default" type="unchecked" />
                </div>
                <div className="cells-3">
                  <div className="wrapper-2">
                    <div className="text-wrapper-3">Analysis Checking</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="cells-3">
                  <p className="p">Brown Bear of San Fransisco, CA</p>
                </div>
                <Cells cellText="USD" className="cells-instance" type="text" />
                <div className="cells-4">
                  <div className="wrapper-2">
                    <div className="text-2">SVB-US</div>
                  </div>
                  <div className="second-line">202049982</div>
                </div>
                <div className="drag-indicator-wrapper">
                  <DragIndicator1 className="drag-indicator" color="#757575" />
                </div>
              </div>
            </div>
            <div className="bottom-bar">
              <div className="text-wrapper-4">0 Accounts Selected</div>
              <Button
                buttonLabel="Add to Group"
                className="button-4"
                size="small"
                state="default"
                style="secondary"
                type="text"
              />
            </div>
          </div>
          <Scrollbar className="scrollbar-instance" />
        </div>
      </div>
      <div className="left">
        <div className="bottom-bar-2">
          <div className="text-wrapper-4">5 Accounts in Group</div>
          <div className="frame-2">
            <Button
              buttonLabel="Cancel"
              className="button-5"
              size="small"
              state="default"
              style="secondary"
              type="text"
            />
            <Button buttonLabel="Save" className="button-5" size="small" state="default" style="primary" type="text" />
          </div>
        </div>
        <div className="search-box-2">
          <div className="text-wrapper-5">Search</div>
          <Search
            className="search-2"
            search="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/search-10.svg"
            searchDefaultClassName="search-3"
          />
        </div>
        <InputField
          className="input-field-2"
          error={false}
          filled
          helpErrorText="Ex. My Operating Accounts"
          message="help"
          state="none"
          text="Generic Group"
          text1="Group Name"
        />
        <InputField
          className="input-field-3"
          error={false}
          filled
          helpErrorText="Ex. My Operating Accounts"
          message="help"
          state="none"
          text="This is a generic group"
          text1="Group Description"
        />
        <div className="frame-3">
          <div className="div-wrapper">
            <div className="div-2">
              <div className="highlight-off">
                <img
                  className="path"
                  alt="Path"
                  src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                />
                <img
                  className="shape-2"
                  alt="Shape"
                  src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                />
              </div>
              <div className="text-wrapper-3">Remove All Accounts</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="row">
              <div className="cells-2">
                <div className="highlight-off">
                  <img
                    className="path-2"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                  />
                  <img
                    className="shape-2"
                    alt="Shape"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                  />
                </div>
              </div>
              <div className="cells-3">
                <div className="wrapper-2">
                  <div className="text-wrapper-3">Analysis Checking</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="cells-3">
                <p className="p">Brown Bear of San Fransisco, CA</p>
              </div>
              <Cells cellText="USD" className="cells-instance" type="text" />
              <div className="cells-4">
                <div className="wrapper-2">
                  <div className="text-2">SVB-US</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="drag-indicator-wrapper">
                <DragIndicator1 className="drag-indicator" color="#757575" />
              </div>
            </div>
            <div className="row">
              <div className="cells-2">
                <div className="highlight-off">
                  <img
                    className="path-3"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                  />
                  <img
                    className="shape-2"
                    alt="Shape"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                  />
                </div>
              </div>
              <div className="cells-3">
                <div className="wrapper-2">
                  <div className="text-wrapper-3">Analysis Checking</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="cells-3">
                <p className="p">Brown Bear of San Fransisco, CA</p>
              </div>
              <Cells cellText="USD" className="cells-instance" type="text" />
              <div className="cells-4">
                <div className="wrapper-2">
                  <div className="text-2">SVB-US</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="drag-indicator-wrapper">
                <DragIndicator1 className="drag-indicator" color="#757575" />
              </div>
            </div>
            <div className="row">
              <div className="cells-2">
                <div className="highlight-off">
                  <img
                    className="path-4"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                  />
                  <img
                    className="shape-2"
                    alt="Shape"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                  />
                </div>
              </div>
              <div className="cells-3">
                <div className="wrapper-2">
                  <div className="text-wrapper-3">Analysis Checking</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="cells-3">
                <p className="p">Brown Bear of San Fransisco, CA</p>
              </div>
              <Cells cellText="USD" className="cells-instance" type="text" />
              <div className="cells-4">
                <div className="wrapper-2">
                  <div className="text-2">SVB-US</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="drag-indicator-wrapper">
                <DragIndicator1 className="drag-indicator" color="#757575" />
              </div>
            </div>
            <div className="row">
              <div className="cells-2">
                <div className="highlight-off">
                  <img
                    className="path-5"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                  />
                  <img
                    className="shape-2"
                    alt="Shape"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                  />
                </div>
              </div>
              <div className="cells-3">
                <div className="wrapper-2">
                  <div className="text-wrapper-3">Analysis Checking</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="cells-3">
                <p className="p">Brown Bear of San Fransisco, CA</p>
              </div>
              <Cells cellText="USD" className="cells-instance" type="text" />
              <div className="cells-4">
                <div className="wrapper-2">
                  <div className="text-2">SVB-US</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="drag-indicator-wrapper">
                <DragIndicator1 className="drag-indicator" color="#757575" />
              </div>
            </div>
            <div className="row">
              <div className="cells-2">
                <div className="highlight-off">
                  <img
                    className="path-6"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/path-20@2x.png"
                  />
                  <img
                    className="shape-2"
                    alt="Shape"
                    src="https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/shape-21.svg"
                  />
                </div>
              </div>
              <div className="cells-3">
                <div className="wrapper-2">
                  <div className="text-wrapper-3">Analysis Checking</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="cells-3">
                <p className="p">Brown Bear of San Fransisco, CA</p>
              </div>
              <Cells cellText="USD" className="cells-instance" type="text" />
              <div className="cells-4">
                <div className="wrapper-2">
                  <div className="text-2">SVB-US</div>
                </div>
                <div className="second-line">202049982</div>
              </div>
              <div className="drag-indicator-wrapper">
                <DragIndicator1 className="drag-indicator" color="#757575" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
