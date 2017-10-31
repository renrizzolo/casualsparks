import React from 'react';
import { Fade } from '../../animations/';
const releases = 
			[
				{
					'name': 'Every Time EP',
					'artist': 'Ren Riz',
					'imgSource': './img/every-time-cover.jpg',
					'previewHTML': '<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/44054952&amp;color=%23168dec&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"></iframe>',
					'links': [
						{
							name: 'iTunes',
							url: 'https://itunes.apple.com/au/album/every-time-ep/id892096132',
						},
						{
							name: 'Spotify',
							url: 'https://open.spotify.com/album/2UlNv3QKvo5xSHwCxtiuPj',
						},
						{
							name: 'beatport',
							url: 'https://www.beatport.com/release/every-time-ep/1331503',
						}
					]
				},
				// {
				// 	'name': 'Every Tone EP',
				// 	'artist': 'Bob Meiser',
				// 	'imgSource': './img/every-time-cover.jpg',
				// 	'links': [
				// 		{
				// 			name: 'iTunes',
				// 			url: 'https://itunes.apple.com/au/album/every-time-ep/id892096132',
				// 		},
				// 		{
				// 			name: 'Spotify',
				// 			url: 'https://open.spotify.com/album/2UlNv3QKvo5xSHwCxtiuPj',
				// 		},
				// 		{
				// 			name: 'beatport',
				// 			url: 'https://www.beatport.com/release/every-time-ep/1331503',
				// 		},
				// 		{
				// 			name: 'somewhere',
				// 			url: 'https://www.beatport.com/release/every-time-ep/1331503',
				// 		}
				// 	]
				// },
			];


const Releases = (props) => {
	return (
  <Fade key="circle-menu" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={!props.show || props.showOuter}>
  	<div className="background-cover background-cover__blue">
   		<main className="full-page-container flex-container__column">
				<h1 className="heading">Releases</h1>
				<section className="release-grid">
					{	releases.map((release) => (
						<Release
						key={release.name}
						data={release}/>
						))
					}
				</section>
			</main>	  
  	</div>
	</Fade>
	);
}

const Release = (props) => {
	return (
			<div className="release-item">
				<header>
					<img src={require('./img/every-time-cover.jpg')}/>
					<div className="release-info">
						<h1>{props.data.artist}</h1>
						<h2>{props.data.name}</h2>
						<div className="link-container">
							{props.data['links'].map((link) => (
								<a key={link.name} target="_blank" rel="noopener" className="button light-blue shop-link" href={link.url}>{link.name}</a>
							))
							}
						</div>
					</div>
				</header>
				{props.data.previewHTML &&
					<div dangerouslySetInnerHTML={{ __html: props.data.previewHTML }} />
				}
			</div>
	)
}

export default Releases;