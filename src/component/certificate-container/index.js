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
  }

  componentDidUpdate() {
    console.log('__CERTIFICATE_STATE__:', this.state)
  }

  componentDidMount() {
    this.getCertificateData()
  }

  getCertificateData() {
    superagent.get('http://localhost:8000/api/certificate')
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
              <h5> {item.start_date} to  {item.end_date} </h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CertificateContainer
