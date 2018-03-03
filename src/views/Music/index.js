import React from 'react';
import { Fade } from '../../animations/';
import releases from './releases.json';
import freebies from './freebies.json';
import mixes from './mixes.json';
import {
  Route,
  Link
} from 'react-router-dom';
import '../../styles/common/item-grid.scss';

function expandList(e) {
	e.target.parentElement.classList.toggle('expanded');
}

const Music = (props) => {
	return (
  <Fade key="circle-menu" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={!props.show || props.showOuter}>
  	<div className="background-cover background-blue">
  	  <div className="page-header">
  	  	<h1 className="jumbo-heading">Music</h1>
  	  </div>
    	<Route exact path={`${props.match.url}`} component={Grid}/>
  	</div>
	</Fade>
	);
}
const Grid = (props) => {
		return (
	   		<main className="full-page-container flex-container__column">
				<section className="item-grid">
					<h1 className="heading item-grid__heading"><span className="dark-blue-bkg">Releases</span></h1>
						{	releases.map((release) => (
								<Item
									key={release.id}
									data={release}
								/>
							))
						}
					</section>
						<section className="item-grid">
						<h1 className="heading item-grid__heading"><span className="dark-blue-bkg">Freebies</span></h1>
								{	freebies.map((freebie) => (
								<Item
									key={freebie.name}
									data={freebie}
								/>
							))
						}
					</section>
					<section className="item-grid">
						<h1 className="heading item-grid__heading"><span className="dark-blue-bkg">Mixes</span></h1>
							{	mixes.map((mix) => (
								<Item
									key={mix.name}
									data={mix}
								/>
							))
						}
					</section>
			</main>	
			);
}
const Item = (props) => {
	const { data } = props;
	return (
			<div className="item background-pearl">
				<header>
					{/*data.imgSource && <img src={require(`./img/covers/${data.imgSource}`)}/>*/}
					<div className="item-info">
						<h1 className="item-heading">{data.artist}</h1>
					{data.id ? <Link to={`/release/${data.id}`}><h2 className="item-sub-heading">{data.name}</h2></Link>
						:
						<h2 className="item-sub-heading">{data.name}</h2>
					}
						<div className="link-container">
							{data.links && data.links.map((link) => (
								<a key={link.name} target="_blank" rel="noopener" className="button light-blue shop-link" href={link.url}>{link.name}</a>
							))
							}
						</div>
					</div>
				</header>
				{data.previewHTML &&
					<div dangerouslySetInnerHTML={{ __html: data.previewHTML }} />
				}
				{data.trackList &&
					<aside>
						<div className="track-list">
							<h2 onMouseUp={(e) => {expandList(e)}}>Track list <span></span></h2>
							<ol>
						{	data.trackList.map((track, i) => (
								<li key={i}>{track}</li>
								))
						}
							</ol>
						</div>
					</aside>
				}
			</div>
	)
}

export default Music;