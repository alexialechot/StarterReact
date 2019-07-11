import React, { Component, Fragment } from 'react'

/** Images */
import { logo } from '../../../img'

export default class ReactStarter extends Component {
	render() {
		return (
			<Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
				<div className="App" id="1">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							<code>id="1"</code> React-scroll
						</p>
						<a
							className="App-link"
							href="https://www.npmjs.com/package/react-scroll"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn react-scroll
						</a>
					</header>
				</div>
				<div className="App" id="2">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							<code>id="2"</code> Hash link
						</p>
						<a
							className="App-link"
							href="https://www.npmjs.com/package/react-router-hash-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn react-router-hash-link
						</a>
					</header>
				</div>
				<div className="App" id="3">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							<code>id="3"</code> Scrollspy
						</p>
						<a
							className="App-link"
							href="https://makotot.github.io/react-scrollspy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn scrollspy
						</a>
					</header>
				</div>
			</Fragment>
		)
	}
}
