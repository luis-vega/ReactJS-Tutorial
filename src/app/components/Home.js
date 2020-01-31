import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.user.initialAge,
      status: 0
    };
  }
  onMakeOlder(){
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    return (
      <div>
        <p>In a new component!!!</p>
        <p>My name is {this.props.name} and my age is {this.state.age+2}</p>
        <p>And my wife name is {this.props.user.name} and she is {this.state.age}, almost {this.state.age + 1} :)</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make her older</button>
        <div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};
