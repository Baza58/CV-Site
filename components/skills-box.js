import React, { Component } from 'react';

const SkillsBox = ({children, logo, extension = 'svg'}) => {
	return (
		<div className="skills-box">
			<h2>{children}</h2>
			<img src={require(`../images/${logo}-logo.${extension}`)} />
		</div>
	);
}

export default SkillsBox;