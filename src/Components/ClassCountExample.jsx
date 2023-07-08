import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ClassCounterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }

  IncrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementCount2 = () => {
    this.setState({
      count2: this.state.count2 + 1,
    });
  };
  render() {
    return (
      <>
        <Button onClick={this.IncrementCount}>
          Count Example {this.state.count}
        </Button>

        <Button onClick={this.incrementCount2}>
          Count Increase {this.state.count2}
        </Button>
      </>
    );
  }
}

export default ClassCounterExample;
