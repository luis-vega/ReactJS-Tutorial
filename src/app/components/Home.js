import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.user.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
          status: 1
      })
    },3000);
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component Will Receive Props", nextProps);
  }

  shouldComponentUpdate(nextProps,nextStates) {
    console.log("Should Component Update", nextProps, nextStates);
    // if (nextStates.status === 1){
    //   return false;
    // }
    return true;
  }

  componentWillUpdate(nextProps,nextStates){
    console.log("Component Will Update", nextProps, nextStates);
  }

  componentDidUpdate(prevProps,prevStates){
    console.log("Component Did Update", prevProps, prevStates);
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event){
    this.setState({
      homeLink: event.target.value
    })
  }
  render() {
    return (
      <div>
        <p>In a new component!!!</p>
        <p>My name is {this.props.name} and my age is {this.state.age+2}</p>
        <p>And my wife name is {this.props.user.name} and she is {this.state.age}, almost {this.state.age + 1} :)</p>
        <p>Status: {this.state.status}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-secondary">Make us older</button>
        <hr/>
        <button onClick={this.props.alert} className="btn btn-primary">Alarm</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
        <hr/>
        <button onClick={() => this.onChangeLink()} className="btn btn-secondary">Change Name</button>
      </div>
    );
  }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    user: PropTypes.object,
    alert: PropTypes.func,
    initialLinkName: PropTypes.string
};
