import React from 'react';
import { Fade } from '../../animations/';

//these could be json files that can be edited directly on gitHub
const releases = [
	{
		'name': 'Every Time EP',
		'artist': 'Ren Riz',
		'imgSource': './img/covers/every-time-ep.jpg',
		'previewHTML': '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/44054952&amp;color=%23168dec&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false&amp;visual=true"></iframe>'
		,'links': [
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
];

const mixes = [
	{
		'name': 'Casual Sparks vinyl mix vol. II',
		'artist': 'Ren Riz',
		'previewHTML': '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158611186&amp;color=%230066cc&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false"></iframe>',
		'trackList': [
			'Leon Vynehall - Inside The Deku Tree [3024]',
			'Creative Swing Alliance - In My Arms [Wolf Music]',
			'Gerome Sportelli - Free Range [Sporty Limited]',
			'Glenn Astro & IMYRMiND - Got Me Shakin\' [Outernational]',
			'Max Graef & Labuzinski - Drums of Death [Tartelet]',
			'Iron Curtis - Love Commitment [Retreat]',
			'Juice Belushi - How Do You See? [Gator Boots]',
			'Fantastic Man - Sanctuary [Let’s Play House]',
			'VIBES Ltd.VoL 3 - Untitled A1 [Vibes Ltd]',
			'Detroit Swindle - Woman [Free Range]',
			'André Laos - Yield [Let’s Play House]',
			'Greymatter - Night Soldier ft. Sophie Brown [Wolf Music]',
			'Francis Inferno Orchestra - Vibrations [Let’s Play House]',
			'HNNY - Always (Short Edit) [Omena]',
			'E.S.P - It’s You (vocal) [Underground]',
			'Mr Fingers - Can You Feel It (original instrumental mix) [Trax]',
			'Psychotropic - Get Your Thing Together [02]',
		]
	},
	{
		'name': 'Casual Sparks vinyl mix vol. I',
		'artist': 'Ren Riz',
		'previewHTML': '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/137472879&amp;color=%230066cc&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false"></iframe>',

	}
];

const freebies = [
	{
		'name': 'Marmalade',
		'artist': 'Ren Riz',
		'imgSource': './img/covers/marmalade.jpg',
		'previewHTML': '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/226389239&amp;color=%230066cc&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false"></iframe>',				
	},
];

function expandList(e) {
	e.target.parentElement.classList.toggle('expanded');
}

const Music = (props) => {
	return (
  <Fade key="circle-menu" mountOnEnter unmountOnExit onEntered={props.handleIntro} in={!props.show || props.showOuter}>
  	<div className="background-cover background-cover__blue">
   		<main className="full-page-container flex-container__column">
				<section className="item-grid">
					<h1 className="heading item-grid__heading"><span className="dark-blue-bkg">Releases</span></h1>
						{	releases.map((release) => (
								<Item
									key={release.name}
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
  	</div>
	</Fade>
	);
}

const Item = (props) => {
	const { data } = props;

	return (
			<div className="item">
				<header>
					{data.imgSource && <img src={require(`${data.imgSource}`)}/>}
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