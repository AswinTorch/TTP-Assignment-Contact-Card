import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    return (
      <div className="card">
        <p>
          <strong>Name:</strong> {this.props.name}
        </p>
        <p>Email: {this.props.email}</p>
        <p>Mobile: {this.props.mobile}</p>
        {this.props.work ? <p>Work: {this.props.work}</p> : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  work: PropTypes.string,
};

export default Contact;
