import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className="text-center bg-dark text-white" id="Footer">
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
			</Fragment>
		)
	}
}
