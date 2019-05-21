import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/** Components */
import { NavBar, Footer, NotFound, ReactStarter } from './components'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				{/* like index.js - default page that are implemented in all pages */}

				<Router>
					<div className="body">
						{/* NAVBAR */}
						<NavBar />

						{/* CONTENT */}

						{/* ROUTER */}
						{/* Select page for each path */}

						<Switch>
							{/* MENU - NAVBAR */}
							<Route exact path="/" component={ReactStarter} />

							{/* 404 */}
							<Route path="" component={NotFound} />
						</Switch>
					</div>
				</Router>

				{/* FOOTER */}
				<Footer />
			</Fragment>
		)
	}
}
