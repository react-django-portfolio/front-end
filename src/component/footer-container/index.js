'use strict'

// Code for Icons in Footer: https://codepen.io/1wdtv/pen/ojKxaE

import React from 'react'
import Icon from '@material-ui/core/Icon'

import './footer.scss'

class FooterContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      github: '' ,
    }
  }

  render() {
    return (
      <footer className="row" id="lab_social_icon_footer">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h5> Developed by Munir Ibrahim | 2018 </h5>
        </div>
        <div id="icons-section" className="col-lg-8 col-md-8 col-sm-12 text-center">

          <a href="mailto:mibrah04@gmail.com" target="_black">
            <i className="fa fa-envelope-square fa-3x social" id="social-em"></i>
          </a>

          <a href="https://mobile.twitter.com/dev_mcfly" target="_black">
            <i className="fa fa-twitter-square fa-3x social" id="social-tw"></i>
          </a>

          <a href="https://www.linkedin.com/in/muniribrahim/" target="_black">
            <i className="fa fa-linkedin-square fa-3x social" id="social-link"></i>
          </a>

          <a href="https://www.instagram.com/munirmcfly/" target="_black">
            <i className="fa fa-instagram fa-3x social" id="social-insta"></i>
          </a>

          <a href="https://github.com/muniri92" target="_black">
            <i className="fa fa-github-square fa-3x social" id="social-gh"></i>
          </a>
        </div>
      </footer>
    )
  }
}

export default FooterContainer
