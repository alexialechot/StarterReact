import React, { Component } from 'react'

/** CSS */
import './Footer.css'

/** Images */

export default class Footer extends Component {
	render() {
		return (
			<div>
				<div className="Footer text-center bg-dark text-white">
					{/* COPYRIGHT */}
					<div className=" py-2">
						<h3>
							© 2019{' '}
							<a
								className="App-link"
								href="https://krakenwave.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								KRAKENWAVE
							</a>
						</h3>
					</div>
				</div>
			</div>
		)
	}
}
