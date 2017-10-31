import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import AppWrapper from './AppWrapper';

render( <AppContainer><AppWrapper/></AppContainer>, document.getElementById("app"));

if (module && module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <AppWrapper/>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
