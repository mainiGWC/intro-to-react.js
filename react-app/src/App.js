import React from 'react';
import './App.css';

import { NewsFeed } from './components/NewsFeed';
import { SideBar } from './components/SideBar';
import { currentUser, users, posts } from './data/data';
import { Header } from './components/Header';

function App(props) {
  const [curUser, setCurrUser] = React.useState(currentUser);
  const [usersData, setUsers] = React.useState(users);

  return (<div>

    <main>
      <SideBar currentUser={curUser} />
      <NewsFeed currentUser={curUser} users={usersData} />
    </main>
  </div>);
}

export default App;