import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'http://example.com'
      })
      res.end()
      res.finished = true
    } else {
      Router.replace('http://example.com')
    }
    return {}
  }
}