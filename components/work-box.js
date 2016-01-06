import React, { Component } from 'react';

const WorkBox = ({title, children, github = title, onClick}) => {
	return (
		<div className="work-box">
			<h2>{ children }</h2>
			<p>
				K vidění na <a href={`http://${title}.petrbazout.cz/`} target="_blank">{`${title}.petrbazout.cz`}</a>
			</p>
			<p>
				Kód dostupný na <a href={`https://github.com/Baza58/${github}`} target="_blank">github.com</a>
			</p>
			<img src={require(`../images/${title}-thumbnail.jpg`)} 
				 className="work-box-img"
				 onClick={(e) => onClick(e, title)} />
		</div>
	);
}

export default WorkBox;