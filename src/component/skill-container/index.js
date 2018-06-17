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
    superagent.get('https://djangoportfolioapi.herokuapp.com/api/skill')
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
      <div className="">
        <div className="col-lg-13 col-md-3 col-sm-12">
          <h4 className="title">SKILLS</h4>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 inner-section">
            {skillArr.map((item, i) =>
              <div key={i} id="skill-section" className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
    )
  }
}

export default SkillContainer
