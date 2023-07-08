import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>
          <Button variant="primary" onClick={this.incrementCount}>
            Count {this.state.count}
          </Button>
        </div>
      </>
    );
  }
}

export default ClassCounter;
