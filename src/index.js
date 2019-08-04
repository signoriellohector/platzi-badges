import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(
  <BadgeNew
    firstName="Lilly"
    lastName="Kaufman"
    avatarUrl="https://s.gravatar.com/avatar/c2c8209165dc3dfecb119f4939627bb1?s=80"
    jobTitle="Kickass senior Dev"
    twitter="asparragus"
  />,
  container
);
