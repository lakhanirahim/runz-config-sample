import React, { Component } from "react";
import ionData from "./IonData.json";

class TemplatManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ion_fields: {
        fieldList: [
          "Position",
          "VMQBidSize",
          "VMQAskSize",
          "VMQAskPrice",
          "VMQBidPrice"
        ]
      }
    };
  }

  componentDidMount() {
    // console.log(ionData);
    // this.setState({ ion_fields: ionData });
  }

  buildSelectableFields() {
    console.log("inside buildSelectableFields", this.state.ion_fields);
    return (
      <select className="col-sm-6">
        {this.state.ion_fields.fieldList.map(ele => (
          <option value={ele}>{ele}</option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <span className="mt-4">RunzField1</span>
          {this.state.ion_fields && this.buildSelectableFields()}
        </div>
        <div className="row">
          <span className="mt-4">RunzField2</span>
          {this.state.ion_fields && this.buildSelectableFields()}
        </div>
        <div className="row">
          <span className="mt-4">RunzField3</span>
          {this.state.ion_fields && this.buildSelectableFields()}
        </div>
        <div className="row">
          <span className="mt-4">RunzField4</span>
          {this.state.ion_fields && this.buildSelectableFields()}
        </div>
      </div>
    );
  }
}

export default TemplatManager;
