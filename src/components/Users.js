import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

// all states must be groupped into one state object in class based components
class Users extends Component {
  constructor() {
    super(); //we need super() if we inherit from other class. Thus super() calls constuctor of parent class
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  // react merges updated state with the old one. it does not overwrite the state
  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
