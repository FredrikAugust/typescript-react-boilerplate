import * as React from 'react';

import { Link } from 'react-router-dom';

import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';

export const About = () => (
  <div>
    <Typography type='headline'>
      Welcome to the about page!
    </Typography>
    <List>
      <ListItem>
        <Typography type='body1'>
          <Link to='/'>Home</Link>
        </Typography>
      </ListItem>
    </List>
  </div>
);