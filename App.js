import React, { Component } from "react";
import RunzGroupView from "./component/RunzGroupView";
import TemplateManager from "./component/TemplateManager";
import { Tabs, Tab } from "react-bootstrap-tabs";

class App extends Component {
  render() {
    return (
      <Tabs selected="RUNZ Group View">
        <Tab label="RUNZ Group View">
          <RunzGroupView />
        </Tab>
        <Tab label="Template Manager">
          <TemplateManager />
        </Tab>
      </Tabs>
    );
  }
}

export default App;
