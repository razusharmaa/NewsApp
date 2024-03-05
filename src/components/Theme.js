import React from 'react'

export default function Theme() {
  return (
    <div className="form-check form-switch " onClick={this.props.themeMode}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
    <label className="form-check-label" for="flexSwitchCheckChecked">{this.props.themeTxt}</label>
  </div>
  )
}
