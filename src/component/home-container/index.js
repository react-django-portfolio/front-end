'use strict'

import React from 'react'
import superagent from 'superagent'

import './home.scss'

class HomeContainer extends React.Component {
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
      console.log(res.body[0]);
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
      <div className="row">
        <div id="home-container" className="page text-center">
          <h1 id="home-name" className="text-center"> Munir Ibrahim </h1>
          <h1 id="home-title" className="text-center"> {'software engineer'.toUpperCase()} </h1>
        </div>
      </div>
    )
  }
}

export default HomeContainer
