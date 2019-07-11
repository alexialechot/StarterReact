import React from 'react'
import ReactDOM from 'react-dom'

/** CSS */
/** custom */
import './index.css'
/** bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
/** font-awesome */
import 'font-awesome/css/font-awesome.min.css'
/** custom scss */
import './scss/index.scss'

/** APP */
import App from './App'

/** JS */
/** jQuery first, then Popper.js, then Bootstrap JS */
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper-utils.js'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(<App />, document.getElementById('root'))
