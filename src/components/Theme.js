import React, { Component } from 'react'

export class Theme extends Component {

  render() {
    return (
        <div className="form-check form-switch " onClick={this.props.themeMode}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
        <label className="form-check-label" for="flexSwitchCheckChecked">{this.props.themeTxt}</label>
      </div>
    )
  }
}

export default Theme
