import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import { withRouter } from 'react-router';
import { SvgLogo, LogoSmall } from './components/logo';
import Home from './views/home';
import Contact from './views/Contact';
import About from './views/About';
import Music from './views/Music';
import Release from './views/music/Release';

import NoMatch from './views/NoMatch';
import { Zoom, FadeZoom, MenuTranslate } from './animations';
import '../styles/index.scss';

class App extends React.Component {
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
	  	switch (nextProps.location.pathname) {
	  		case '/music':
	  				this.setState({showZoom: false});
	  			break;
	  		case '/about':
	  				this.setState({showZoom: false});
	  		case '/contact':
	  				this.setState({showZoom: false});
	  		case '/':
	  				this.setState({showZoom: true});
	  			break;
	  		default:
	  				this.setState({showZoom: true});
	  	}

	  }
	}
	stripSlash = (path) => {     
    return path.replace(/^\//, "");
	} 
  render() {
  	const { pathname } = this.props.location;
    return (
      <div>
       <span className={ this.state.showMenu ? `menu-button open ${this.stripSlash(pathname)}` : `menu-button ${this.stripSlash(pathname)}`}>
       	<a onClick={() => this.setState({showMenu:!this.state.showMenu})}>{this.state.showMenu ? "close" : "menu"}</a>
       </span>
				<MenuTranslate key="nav" mountOnEnter unmountOnExit in={this.state.showMenu}>
        	<Menu className={`mobile ${this.stripSlash(pathname)}`}/>
      	</MenuTranslate>
    		<Menu className={`desktop ${this.stripSlash(pathname)}`}/>
	      {!this.state.intro &&
	      	<LogoSmall/>
				}
				<Route path="/music" render={ props => 
	      	<Music handleIntro={this.handleIntro.bind(this)} showOuter={this.state.showOuter} show={this.state.show} {...props}/> }
	      />
	      <Route path="/release/:id" component={Release}/>

     		<div className="flex-center flex-container__row viewport-half">
          <Zoom key="circle" onEntered={() => this.setState({showOuter:true})} mountOnEnter unmountOnExit in={this.state.showZoom}>
      			<div 
      				className="cs-circle darker" 
      				id="cs-circle" 
      				style={{backgroundImage: 'url(\'https://unsplash.it/700/?random\')', backgroundSize:'cover', backgroundBlendMode: 'overlay'}}>
      			</div>
          </Zoom>
					<Switch>
					  <Route exact path="/" render={ props => 
					  	<Home show={this.state.show} handleIntro={this.handleIntro.bind(this)} showOuter={this.state.showOuter} {...props} />}
					  />
			      <Route path="/contact" render={ props => 
			      	<Contact handleIntro={this.handleIntro.bind(this)}  showOuter={this.state.showOuter} show={this.state.show} {...props}/> }
			      />
			      <Route path="/about" render={ props => 
			      	<About handleIntro={this.handleIntro.bind(this)}  showOuter={this.state.showOuter} show={this.state.show} {...props}/> }
			      />
			      <Route path="/music"/>
			      <Route path="/release"/>
			      <Route render={ props => 
			      	<NoMatch handleIntro={this.handleIntro.bind(this)}  showOuter={this.state.showOuter} show={this.state.show} {...props}/> }
			      />
		      </Switch>
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
export default withRouter(App);

const Menu = (props) => {
	return ( 
		<ul className={`nav ${props.className}`}>
    	<li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
    	<li><NavLink to="/music" activeClassName="active">Music</NavLink></li>
    	<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    	<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
  	</ul>
	);
}
