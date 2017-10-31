import React from 'react';
import { Fade } from '../../animations/';

const NoMatch = (props) => {
	return (
		<Fade key="circle-text" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={props.showOuter}>
     	<div className="circle-text flex-center flex-container__column">
    		Hmmm, there's nothing here :(
    	</div>
  	</Fade>
	);
}
export default NoMatch;