import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </Theme>
  );
}

export default App;
