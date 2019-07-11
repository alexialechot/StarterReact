import React, { Component, Fragment } from 'react'
// Add # (anchor link) to router
import { HashLink as Link } from 'react-router-hash-link'
// Scroll animation
import { animateScroll as scroll } from 'react-scroll'
// Add active class to li when their # is visible
import Scrollspy from 'react-scrollspy'

/** Images */
import { logo } from '../../../img'

/** CSS */
import './NavBar.css'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasScrolled: false,
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = event => {
		const scrollTop = window.pageYOffset
		// If the page scroll hasScrolled become true
		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

	scrollToTop() {
		//scroll at top of the page
		scroll.scrollToTop()
	}

	render() {
		return (
			<Fragment>
				<nav
					className={
						// if hasScrolled is true
						this.state.hasScrolled
							? 'NavbarScrolled navbar navbar-expand-lg navbar-dark navi mb-5 fixed-top AnimationNav'
							: 'navbar navbar-expand-lg navbar-dark navi mb-5 fixed-top AnimationNav'
					}
				>
					<div className="container">
						<Link className="navbar-brand" to="/" onClick={this.scrollToTop}>
							<img src={logo} alt={logo} height="30" />
						</Link>
						<button
							className="navbar-toggler btn"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse text-center" id="navbarNav">
							<Scrollspy
								className="navbar-nav ml-auto"
								items={['1', '2', '3']}
								currentClassName="active"
							>
								<li className="nav-item">
									<Link
										className="nav-link" to="#1" smooth={true}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">1</h3>
										</button>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link" to="#2" smooth={true}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">2</h3>
										</button>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link" to="#3" smooth={true}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">3</h3>
										</button>
									</Link>
								</li>
							</Scrollspy>
						</div>
					</div>
				</nav>
			</Fragment>
		)
	}
}
