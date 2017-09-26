import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import App from './app';

class AppWrap extends React.Component {
  render() {
    return (
    <Router>
    	<App/>
    </Router>
    )
  }
}

render( <AppContainer><AppWrap/></AppContainer>, document.getElementById("app"));

if (module && module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <AppWrap/>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
