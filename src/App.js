import React from "react";
import InboxView from "./components/InboxView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      emails: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/emails")
      .then((response) => response.json())
      .then((data) => this.setState({ emails: data }));
  }

  render() {
    return (
      <div>
        <header>
          <h4>GeeMail</h4>
          <input id="search-bar" type="text" placeholder="Search..." />
          <a href="http://localhost:3001/search">
            <button id="search-buttton">Search</button>
          </a>
        </header>

        <body>
          <InboxView emails={this.state.emails} />
        </body>
      </div>
    );
  }
}

export default App;
