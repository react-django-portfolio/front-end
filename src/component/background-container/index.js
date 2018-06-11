'use strict'

import React from 'react'
import superagent from 'superagent'

import './background.scss'

class BackgroundContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }

    this.getData = this.getData.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  getData() {
    superagent.get('http://localhost:8000/api/about')
    .then(res => {
      this.setState({
        title: res.body[0].title,
        description: res.body[0].description
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <div className="col-lg-3 col-md-3">
          <h4 className="title">BACKGROUND</h4>
        </div>
        <div className="col-lg-9 col-md-9 inner-section">
          <p className="background-info">
            While I am experienced in full stack software development, I have a keen interest in backend development.
            I enjoy working in small agile teams, helping to solve problems in a creative and efficient way.
            I thrive in fast-paced environments with challenging problems and I’m constantly seeking to grow technically and professionally.
          </p>
        </div>
      </div>
    )
  }
}

export default BackgroundContainer
