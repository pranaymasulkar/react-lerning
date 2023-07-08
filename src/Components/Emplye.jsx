import React, { Component } from "react";

export default class Emplye extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              {this.props.name} {this.props.surname}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
