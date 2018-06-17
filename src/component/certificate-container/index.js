'use strict'

import React from 'react'
import superagent from 'superagent'

import './certificate.scss'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

class CertificateContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      certificateArr: [],
    }

    this.getCertificateData = this.getCertificateData.bind(this)
    this.formatDate = this.formatDate.bind(this)
  }

  componentDidUpdate() {
    console.log('__CERTIFICATE_STATE__:', this.state)
  }

  componentDidMount() {
    this.getCertificateData()
  }

  formatDate(date1, date2) {
    let dateFormatted1 = new Date(date1)
    let dateFormatted2 = new Date(date2)

    if (dateFormatted1.getFullYear() == '2018'){
      return monthNames[dateFormatted1.getMonth()] + ' ' + dateFormatted1.getFullYear() + ' - Current'
    }

    if (dateFormatted1.getFullYear() == dateFormatted2.getFullYear()){
      return monthNames[dateFormatted1.getMonth()] + ' - ' + monthNames[dateFormatted2.getMonth()] + ' ' + dateFormatted2.getFullYear()
    }

    return monthNames[dateFormatted1.getMonth()] + ' ' + dateFormatted1.getFullYear() + ' - ' + monthNames[dateFormatted2.getMonth()] + ' ' + dateFormatted2.getFullYear()
  }

  getCertificateData() {
    superagent.get('https://djangoportfolioapi.herokuapp.com/api/certificate')
    .then(res => {
      console.log('TEST')
      this.setState({
        certificateArr: res.body
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let certificateArr = this.state.certificateArr || []

    return (
      <div>
        <div className="col-lg-3 col-md-3">
          <h4 className="title"> CERTIFICATES </h4>
        </div>

        <div className="col-lg-9 col-md-9">
          {certificateArr.map((item, i) =>
            <div key={i} className="inner-section">
              <h4 className="section-header"> {item.institution} </h4>
              <h5> {item.certificate} </h5>
              <h5> {this.formatDate(item.start_date, item.end_date)} </h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CertificateContainer
