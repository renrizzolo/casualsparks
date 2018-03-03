import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import { withRouter } from 'react-router';
import { SvgLogo, LogoSmall } from 'components/logo';
//import { Home, About, Contact } from 'views';
import './styles/index.scss';

class Mainz extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.state = { show: false, showZoom: false, showOuter: false, intro: true, showMenu: false, };
  }
	componentWillMount(){
		this.setState({show:true, intro:true, showZoom: true})
	}
	handleIntro(){
		console.log('handleint');
		this.setState({intro:false, show: false, showMenu: false })
	}
	componentWillReceiveProps(nextProps) {
	  if (nextProps.location !== this.props.location) {
	    console.log(nextProps.location.pathname);
	  }
	}
  render() {
    return (
      <div>
         <span className="menu-button"><a onClick={() => this.setState({showMenu:!this.state.showMenu})}>{this.state.showMenu ? "close" : "menu"}</a></span>
					
					<MenuTranslate key="nav" mountOnEnter unmountOnExit in={this.state.showMenu}>
	        	<Menu className="mobile"/>
	      	</MenuTranslate>
	      		<Menu className="desktop"/>
      {!this.state.intro &&
      	<LogoSmall/>
			}
     		<div className="flex-center flex-container__row viewport-half">

          <Zoom key="circle" onEntered={() => this.setState({showOuter:true})} mountOnEnter unmountOnExit in={this.state.showZoom}>
      			<div className="cs-circle darker" id="cs-circle">
      			</div>
          </Zoom>

		  <Route exact path="/" render={props => <Home show={this.state.show} handleIntro={this.handleIntro.bind(this)} showOuter={this.state.showOuter} {...props} />}/>
      <Route path="/contact" render={props => <Contact handleIntro={this.handleIntro.bind(this)} showOuter={this.state.showOuter} show={this.state.show} {...props}/> }/>
      <Route path="/about" render={props => <About handleIntro={this.handleIntro.bind(this)} showOuter={this.state.showOuter} show={this.state.show} {...props}/> }/>

		    	 <FadeZoom key="circle-outer-1" timeout={500} mountOnEnter unmountOnExit in={!this.state.intro}>
		    		<div className="cs-circle cs-circle__outer-1">
		    		</div>
		    	</FadeZoom>
		    	<FadeZoom key="circle-outer-2"  timeout={700} mountOnEnter unmountOnExit in={!this.state.intro}>
		    		<div className="cs-circle cs-circle__outer-2">
		    		</div>
		    	</FadeZoom>
		    	<FadeZoom key="circle-outer-3"  timeout={900} mountOnEnter unmountOnExit in={!this.state.intro}>
		    		<div className="cs-circle cs-circle__outer-3">
		    		</div>
		    	</FadeZoom>
	      </div>
      </div>
    )
  }
}
export default withRouter(Main);






const Menu = (props) => {
	return ( 
		<ul className={`nav ${props.className}`}>
    	<li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
    	<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    	<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
  	</ul>
	);
}

const SocialLink = (props) => {
return (
	<a className="social-link" href={props.href} title={props.title}>
		<img src={props.icon}/>
		{props.title}
	</a>
	);
}

const Zoom = (props) => {
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

const FadeZoom = (props) => {
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

const Fade = (props) => {
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
const MenuTranslate = (props) => {
	return( 
		<CSSTransition
      classNames="menuTranslate"
      timeout={500}
      {...props}
    >
    </CSSTransition>
  );
}


