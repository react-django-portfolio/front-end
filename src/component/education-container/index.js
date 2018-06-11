'use strict'

import React from 'react'
import superagent from 'superagent'

import Icon from '@material-ui/core/Icon'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

class EducationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      educationArr: [],
    }

    this.getEducationData = this.getEducationData.bind(this)
    this.getDate = this.getDate.bind(this)
  }

  componentDidUpdate() {
    console.log('__EDU_STATE__:', this.state)
  }

  componentDidMount() {
    this.getEducationData()
  }

  getDate(date) {
    let dateFormatted = new Date(date)
    return monthNames[dateFormatted.getMonth()] + ' ' + dateFormatted.getFullYear()
  }

  getEducationData() {
    superagent.get('http://localhost:8000/api/education')
    .then(res => {
      this.setState({
        educationArr: res.body
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let educationArr = this.state.educationArr || []

    return (
      <div>
        <div className="col-lg-3 col-md-3">
          <h4 className="title"> EDUCATION </h4>
        </div>

        <div className="col-lg-9 col-md-9 inner-section">
          {educationArr.map((item, i) =>
            <div key={i}>
              <h4 className="section-header"> {item.institution} </h4>
              <h5> {item.major} </h5>
              <h5> {item.minor} </h5>
              <h5> {item.certificate} </h5>

              <h5> {this.getDate(item.start_date)} - {this.getDate(item.end_date)} </h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EducationContainer
