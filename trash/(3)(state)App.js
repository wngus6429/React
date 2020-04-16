//import React from "react";
//import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    //이게 제일 좋은방법
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    //별로 좋지 않은 방법. 그냥 인식은 한다는거.
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm render");
    return (
      <h1>
        <div> The number is : {this.state.count} </div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </h1>
    );
  }
}

//export default App;
