import React from 'react';
import { Fade } from '../../animations/';
import SocialLink from '../../components/SocialLink';
const Contact = (props) => {
	return (
  <Fade key="circle-menu" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={!props.show || props.showOuter} >
   	<div className="circle-text flex-container__column">
				<h1 className="heading">Contact</h1>
				<div className="social">
					<SocialLink title="/casualsparks" href="https://facebook.com/casualsparks" icon={require('../../img/social/facebook-round.svg')}/>
					<SocialLink title="@casualsparks" href="https://twitter.com/casualsparks" icon={require('../../img/social/twitter-round.svg')}/>
					<SocialLink title="/casualsparks" href="https://soundcloud.com/casualsparks" icon={require('../../img/social/soundcloud-round.svg')}/>
				</div>			  
  	</div>
	</Fade>
	);
}
export default Contact;