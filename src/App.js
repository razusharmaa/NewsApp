import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsArea from './components/NewsArea'
import Spinner from './components/Spinner'
import PropTypes from 'prop-types'


export default class App extends Component {

  static defaultProps = {
    category:'general'

  };
  static propTypes = {
    category:PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      mode1: false,
      theme: false,
      themeTxt: 'light'
    };
    this.spinnerMode = this.spinnerMode.bind(this);
    this.themecontrol = this.themecontrol.bind(this);
  }
  themecontrol() {
    if (this.state.theme) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    this.setState(prevState => ({
      theme: !prevState.theme,
      themeTxt: this.state.theme ? 'light' : 'dark'
    }) );
  }


  spinnerMode() {
    this.setState(prevState => ({
      mode1: !prevState.mode1
    }));
  }

  render() {
    return (
      <div>
        <NavBar themecontrol={this.themecontrol} themeTxt={this.state.themeTxt} />
        <Spinner mode={this.state.mode1} themeMode={this.props.theme} themeTxt={this.state.themeTxt} />
        <NewsArea category='sports' turnS={this.spinnerMode} themeMode={this.props.theme} themeTxt={this.state.themeTxt} />

      </div>
    )
  }
}
