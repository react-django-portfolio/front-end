'use strict'

const express = require('express')
const app = express()
let server

const serverControl = module.exports = {};

app.use(express.static(`${__dirname}/build`))

serverControl.start = () => {
  return new Promise((resolve, reject) => {
    if (!server || !server.isOn) {
      server = app.listen(process.env.PORT, () => {
        console.log('server up :: ', process.env.PORT)
        server.isOn = true
        resolve()
      })
      return
    }
    reject()
  })
}

serverControl.stop = () => {
  return new Promise((resolve, reject) => {
    if (server && server.isOn) {
      server.close(() => {
        console.log('server down')
        server.isOn = false
        resolve()
      })
      return
    }
    reject()
  })
}
