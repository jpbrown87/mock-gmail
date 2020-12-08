import React from "react";

class InboxView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      emails: [],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.emails.length > 0 ? (
            this.state.emails.map((email) => <li id={`${email.id}`} />)
          ) : (
            <p>Your inbox is empty.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default InboxView;
