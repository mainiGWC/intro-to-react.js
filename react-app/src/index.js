import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const currentUser = {
  id: 1234,
  profileImg: "human-profile.png",
  name: "Maya the Villager",
  birthday: "June 13th",
}