import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.js';

render( <AppContainer><App/></AppContainer>, document.getElementById("app"));

if (module && module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
