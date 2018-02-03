import * as React from 'react';

import { Link } from 'react-router-dom';

export const Frontpage = () => (
  <div>
    <h1>Hello, World!</h1>
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </div>
);