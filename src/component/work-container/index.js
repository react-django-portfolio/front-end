'use strict'

import React from 'react'
import superagent from 'superagent'

import Icon from '@material-ui/core/Icon'

import './work.scss'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

class WorkContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workArr: []
    }

    this.getWorkData = this.getWorkData.bind(this)
    this.formatDate = this.formatDate.bind(this)
  }

  componentDidMount() {
    this.getWorkData()
  }

  formatDate(date1, date2) {
    let dateFormatted1 = new Date(date1)
    let dateFormatted2 = new Date(date2)

    if (dateFormatted1.getFullYear() == dateFormatted2.getFullYear()){
      return monthNames[dateFormatted1.getMonth()] + '-' + monthNames[dateFormatted2.getMonth()] + ' ' + dateFormatted2.getFullYear()
    }

    return monthNames[dateFormatted1.getMonth()] + ' ' + dateFormatted1.getFullYear() + '-' + monthNames[dateFormatted2.getMonth()] + ' ' + dateFormatted2.getFullYear()
  }

  getWorkData() {
    superagent.get('http://localhost:8000/api/work')
    .then(res => {
      console.log(res.body)
      this.setState({
        workArr: res.body.reverse()
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    let workArr = this.state.workArr || []

    return(
      <div>
        <div className="col-lg-3 col-md-3">
          <h4 className="title"> EXPERIENCE </h4>
        </div>

        <div className="col-lg-9 col-md-9">
          {workArr.map((item, i) =>
            <div key={i} className="inner-section">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                  <h4 className="section-header"> {item.company} </h4>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 text-right work-date">
                  <h6> {this.formatDate(item.start_date, item.end_date)} </h6>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <h5 className="position-title">
                    {item.position}
                    <a data-toggle="collapse" href={"#collapse" + i} role="button" aria-expanded="false" aria-controls="collapseExample">
                      <Icon className="expand_more" data-toggle="collapse">expand_more</Icon>
                    </a>
                  </h5>
                </div>
              </div>

              <div className="collapse" id={"collapse" + i}>
                <div className="card card-body">
                  {
                    item.workdesc.map((desc, j) =>
                      <ul className="work-section" key={j}>
                        <li className="work-desc"> {desc} </li>
                      </ul>
                    )
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default WorkContainer
