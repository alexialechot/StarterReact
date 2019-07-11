import React, { Component, Fragment } from 'react'
import { Events, animateScroll as scroll, scroller } from 'react-scroll'
import { NavLink } from 'react-router-dom'

/** Images */
import { logo } from '../../../img'

/** CSS */
import './NavBar.css'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.scrollToTop = this.scrollToTop.bind(this)
	}
	componentDidMount() {
		Events.scrollEvent.register('begin', function() {
			console.log('begin', arguments)
		})
	}
	scrollToTop() {
		scroll.scrollToTop()
	}
	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
		})
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin')
		Events.scrollEvent.remove('end')
	}

	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark navi mb-5 fixed-top AnimationNav">
					<div className="container">
						<NavLink className="navbar-brand" to="/" onClick={this.scrollToTop}>
							<img src={logo} alt={logo} height="30" />
						</NavLink>
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
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/tutos"
										onClick={this.scrollToTop}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">TUTOS</h3>
										</button>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/themes"
										onClick={this.scrollToTop}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">THEMES</h3>
										</button>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/profile"
										onClick={this.scrollToTop}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h3 className="">PROFIL</h3>
										</button>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</Fragment>
		)
	}
}
