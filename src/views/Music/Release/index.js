import React from 'react';
import { Fade } from '../../../animations/';
import releases from '../releases.json';
import {
  Link
} from 'react-router-dom';

function expandList(e) {
	e.target.parentElement.classList.toggle('expanded');
}

const Release = (props) => {
	console.log(props);
	return (
		 <div className="background-cover background-cover__pearl">
 	   		<main className="full-page-container flex-container__column">
				<section className="single-release">
				{	releases.map((release) => (
								release.id === props.match.params.id ? 
								<ReleaseItem
									key={release.id}
									data={release}
								/>
								:
								<div>
									<h1>Sorry, you've followed the wrong path</h1>
									<Link to="/">Back to reality</Link>
								</div>						
							))
						}
					</section>
			</main>	
			</div>  
	);
}

const ReleaseItem = (props) => {
	const { data } = props;

	return (
			<div className="item">
				<header>
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
					<div className="item-info">
						<h1>{data.artist}</h1>
						<h2>{data.name}</h2>
						<div className="link-container">
							{data.links && data.links.map((link) => (
								<a key={link.name} target="_blank" rel="noopener" className="button light-blue shop-link" href={link.url}>{link.name}</a>
							))
							}
						</div>
					</div>
					{data.imgSource && <img src={require(`../img/covers/${data.imgSource}`)}/>}
				</header>
				{data.description &&
					<p className="description">{data.description}</p>
				}
				{data.previewHTML &&
					<div dangerouslySetInnerHTML={{ __html: data.previewHTML }} />
				}

			</div>
	)
}

export default Release;