import React, { useState } from 'react';
import { 
  getAllUsers, 
  createUser 
} from './services/UserService';

// Components
import { Header } from './components/Header';
import { Users } from './components/Users';
import { DisplayBoard } from './components/DisplayBoard';
import CreateUser from './components/CreateUser';



const Mainpage = () => {
  const INITIAL_STATE = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };
  const [appState, setAppState] = useState(INITIAL_STATE);

  const handleCreateUser = (e) => {
    createUser(appState.user).then((response) => {
      console.log(response);
      setAppState({
        ...appState,
        numberOfUsers: appState.numberOfUsers + 1,
      });
    });
  };

  const handleGetAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setAppState({
        ...appState,
        users: users,
        numberOfUsers: users.length,
      });
    });
  };

  const handleFormChange = (e) => {
    let user = appState.user;
    if (e.target.name === 'firstname') {
      user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      user.email = e.target.value;
    }
    setAppState({
      ...appState,
      user,
    });
  };

  return (
    <div>
      <Header/>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={appState.user}
              onFormChange={handleFormChange}
              createUser={handleCreateUser}
            />
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={appState.numberOfUsers}
              getAllUsers={handleGetAllUsers}
            />
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={appState.users} />
      </div>
    </div>
  );
}
 
export default Mainpage;