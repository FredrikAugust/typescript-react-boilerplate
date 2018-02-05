/**
 * This file is only to apply the material-ui theme.
 */
import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { Theme } from 'material-ui/styles/createMuiTheme';
import Reboot from 'material-ui/Reboot';

// We need to import this to use the font throughout the app
import 'typeface-roboto';

import { Routes } from './Routes';

// Necessary now, can supply customization
const theme: Theme = createMuiTheme();

export const Root = () => (
  <MuiThemeProvider theme={ theme }>
    {/* This is similar to normalize.css, just materialized */}
    <Reboot />
    <Routes />
  </MuiThemeProvider>
);