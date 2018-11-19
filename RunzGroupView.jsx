import React, { Component } from "react";
import jsonData from "./RunzData.json";

class RunzGroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raw_data: []
    };
  }

  componentDidMount() {
    this.setState({ raw_data: jsonData });
  }

  renderConditionally() {
    console.log(this.state.raw_data);
    return (
      this.state.raw_data &&
      this.state.raw_data.map(ele => (
        <tr>
          <td>{ele.GrpName}</td>
          <td>
            <select className="col-sm-6">
              <option selected={ele.Template[0]} />
              {ele.Template.map(templateEle => (
                <option value={templateEle}>{templateEle}</option>
              ))}
            </select>
          </td>
          <td>
            <select className="col-sm-6">
              <option selected={ele.BondFilter[0]} />
              {ele.BondFilter.map(bondFilterEle => (
                <option value={bondFilterEle}>{bondFilterEle}</option>
              ))}
            </select>
          </td>
          <td>{ele.Recepients}</td>
          <td>
            <input type="checkbox" unchecked />
          </td>
          <td>
            <button className="btn btn-secondary btn-sm">Send to Me</button>
          </td>
          <td>
            <button className="btn btn-secondary btn-sm">Send</button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <select className="mt-2 col-sm-4">
            <option selected>Automatic Send Frequency</option>
            <option value="1">30 mins</option>
            <option value="2">45 mins</option>
            <option value="3">60 mins</option>
          </select>
        </div>
        <div className="row">
          <div className="mt-4 table-responsive">
            <table className="table table-dark table-striped table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">Groups</th>
                  <th scope="col">Template</th>
                  <th scope="col">Bond Filter</th>
                  <th scope="col">Recipients</th>
                  <th scope="col">Automatically Send?</th>
                  <th scope="col">Preview</th>
                  <th scope="col">Send Now</th>
                </tr>
              </thead>
              <tbody>{this.renderConditionally()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RunzGroupView;
