import React from 'React';
const SocialLink = (props) => {
	return (
		<p>
			<a className="social-link" href={props.href} title={props.title}>
				{props.icon}
				{props.title}
			</a>
		</p>
	);
}
export default SocialLink;