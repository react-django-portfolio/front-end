'use strict'

import React from 'react'
import superagent from 'superagent'

import './skill.scss'

class SkillContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skillArr: []
    }

    this.getSkillData = this.getSkillData.bind(this)
  }

  componentDidMount() {
    this.getSkillData()
  }

  getSkillData() {
    superagent.get('http://localhost:8000/api/skill')
    .then(res => {
      console.log('SKILLS BODY: ', res.body)
      this.setState({
        skillArr: res.body
      })
    })
    .catch(err => {
      console.log('SKILLS ERR: ', err)
    })
  }

  render() {
    let skillArr = this.state.skillArr || []

    return (
      <div>
        <div className="col-lg-3 col-md-3">
          <h4 className="title">SKILLS</h4>
        </div>
        <div className="col-lg-9 col-md-9 inner-section">
          <div className="row">
            {skillArr.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h4 className="section-header"> {item.skill.toUpperCase()} </h4>

                {item.skilltype.map((type, j) =>
                  <div key={j}>
                    <h5 className="skill-type"> {type} </h5>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default SkillContainer
