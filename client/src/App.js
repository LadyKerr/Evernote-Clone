import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Hello from APP</h1>
      </div>
    );
  }
}

export default App;
