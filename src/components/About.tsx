import * as React from 'react';

import { Link } from 'react-router-dom';

export const About = () => (
  <div>
    <h1>Welcome to the about page!</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </ul>
  </div>
);