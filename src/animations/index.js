import React from 'react';

import { CSSTransition } from 'react-transition-group';

export const Zoom = (props) => {
	return( 
		<CSSTransition
      classNames="zoom"
      appear={true}
      timeout={1500}
      {...props}
    >
    </CSSTransition>
  );
}

export const FadeZoom = (props) => {
	return( 
		<CSSTransition
      classNames="fadeZoom"
      appear={true}
      timeout={500}
      {...props}
    >
    </CSSTransition>
  );
}

export const Fade = (props) => {
	return( 
		<CSSTransition
      classNames="fade"
      appear={true}
      timeout={500}
      {...props}
    >
    </CSSTransition>
  );
}
export const MenuTranslate = (props) => {
	return( 
		<CSSTransition
      classNames="menuTranslate"
      timeout={500}
      {...props}
    >
    </CSSTransition>
  );
}