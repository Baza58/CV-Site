import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './components/app';
import Education from './components/education';
import Skills from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import history from './components/history';
require('./style.scss');




render(
	<Router history={history} >
		<Route path="/" component={App} />
		<Route path="/vzdelani" component={Education} />
		<Route path="znalosti" component={Skills} />
		<Route path="prace" component={Work} />
		<Route path="kontakt" component={Contact} />
		<Route path="*" component={App} />
	</Router>,
	document.getElementById('app')
);