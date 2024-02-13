import React, { Component } from 'react'
// import load2 from './load2.gif'

export class Spinner extends Component {
  render() {
    return (
      // <div>
      //   <img className='' src={load2} alt='loading'></img>
      // </div>



this.props.mode &&
      <div className="d-flex justify-content-center mt-4">
      <div className="spinner-border text-dark " role="status">
      <span className="sr-only"></span>
      </div>
      </div>

    )
  }
}

export default Spinner
