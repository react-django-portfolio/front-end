'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Switch from '@material-ui/core/Switch'
import Icon from '@material-ui/core/Icon'

import HomeContainer from './component/home-container'
import BackgroundContainer from './component/background-container'
import EducationContainer from './component/education-container'
import WorkContainer from './component/work-container'
import SkillContainer from './component/skill-container'
import CertificateContainer from './component/certificate-container'

import './index.scss'

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.3;

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1500);
      }
    });
  });
});


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      day: true,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(){
    console.log('__DARK/LIGHT__:', this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.value]: e.target.checked,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className={(this.state.day ? 'day' : 'night')}>
          <main className="container">
            <div id="light-toggle">
              <Icon className="toggle-icons">brightness_2</Icon>
              <Switch
                className="switch"
                checked={this.state.day}
                onChange={this.handleChange}
                value="day"
                color="secondary"
              />
              <Icon className="toggle-icons">wb_sunny</Icon>
            </div>
            <div id="home" className="container">
              <HomeContainer />
            </div>
            <div id="background" className="container page-section">
              <BackgroundContainer />
            </div>
            <div className="container page-section hideme">
              <SkillContainer />
            </div>
            <div className="container page-section hideme">
              <WorkContainer />
            </div>
            <div className="container page-section hideme">
              <EducationContainer />
            </div>
            <div className="container page-section hideme">
              <CertificateContainer />
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'))
