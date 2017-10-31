import React from 'react';
import { Fade } from '../../animations/';
import { SvgLogo } from '../../components/logo';

const Home = (props) => {
	return (
		<Fade key="circle-text" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={props.showOuter}>
     	<div className="circle-text flex-center flex-container__column">
    		<SvgLogo/>
    	</div>
  	</Fade>
	);
}
export default Home;