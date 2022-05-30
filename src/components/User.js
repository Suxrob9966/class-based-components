import { Component } from 'react';
import classes from './User.module.css';

// class based componenet can work with functional component. We need extends Component in order to be able to use props.
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
