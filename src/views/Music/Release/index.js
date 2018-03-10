import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from '../../../animations/';
import releases from '../releases.json';
import { WatchConnection, OfflineError, ToggleClass } from '../../../components';

function expandList(e) {
	e.target.parentElement.classList.toggle('expanded');
}

const Release = (props) => {
	const release = releases.find(release => release.id === props.match.params.id );

	console.log(release);
	return (
		 <div className="background-cover background-pearl">
		   	<div className="page-header flex-container">
			 
			   	{release ? 
				   	<div className="flex-3">
							<h2>{release.artist}</h2>
				   		<h1>{release.name}</h1>
				   	</div>
			   		:
				   	<div>
				   		<h2>Somebody</h2>
				   		<h1>Something</h1>
				   	</div>
			   	}
				   	<div className="flex-1 release-cover__container">
				   		{release && release.imgSource && <img src={require(`../img/covers/${release.imgSource}`)}/>}
				   	</div>
			   	</div>

 	   		<main className="full-page-container flex-container__column">
					<section className="single-release">
					{	release ? 
						<ReleaseItem
							key={release.id}
							data={release}
						/>
						:
						<div>
							<h1>{`Sorry, you\'ve followed the wrong path`}</h1>
							<Link to="/">Back to reality</Link>
						</div>
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
					<div className="item-info">
						<div className="link-container">
							{data.links && data.links.map((link) => (
								<a key={link.name} target="_blank" rel="noopener" className="button light-blue shop-link" href={link.url}>{link.name}</a>
							))
							}
						</div>
					</div>
				</header>
				{data.description &&
					<div>
						<h2 className="heading heading-dark">Info</h2>
						<p className="description">{data.description}</p>
					</div>
				}
				{ data.trackList &&
				<aside>
					<ToggleClass className="track-list" toggleClass="expanded">
					{toggle => 
						<div>
							<h2 onMouseUp={toggle}>Track list <span></span></h2>
							<ol>
							{	data.trackList.map((track, i) => (
								<li key={i}>{track}</li>
								))
							}
							</ol>
						</div>
					}
					</ToggleClass>
				</aside>
				}
				{data.previewHTML &&
					<div>
						<h2 className="heading heading-dark">Preview</h2>
						<WatchConnection render={ online => (
							online ?
							<div dangerouslySetInnerHTML={{ __html: data.previewHTML }} />
							:
							<OfflineError/>
						)}/>
					</div>
				}

			</div>
	)
}

export default Release;