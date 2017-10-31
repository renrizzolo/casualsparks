import React from 'react';
import { Fade } from '../../animations/';

const About = (props) => {
	return (
  <Fade key="circle-menu" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={props.showOuter} >
   	<div className="circle-text flex-container__column">
				<h1 className="heading">About</h1>
				<div>
					<p>
					Casual Sparks is a record label headed by Melbourne based producer Ren Riz.
					</p>
					<p>
						We're all about <em>Casual beats & sparkling house.</em>
					</p>
				</div>			  
  	</div>
	</Fade>
	);
}
export default About;