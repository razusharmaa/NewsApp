import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';
import Spinner from './components/Spinner';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Routes } from "react-router-dom";

class App extends Component {
  static defaultProps = {
    category: 'general'
  };

  static propTypes = {
    category: PropTypes.string,
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
      themeTxt: prevState.theme ? 'light' : 'dark'
    }));
  }

  spinnerMode() {
    this.setState(prevState => ({
      mode1: !prevState.mode1
    }));
  }

  render() {

    return (
      <BrowserRouter>
        <NavBar themecontrol={this.themecontrol} themeTxt={this.state.themeTxt} />
        <Spinner mode={this.state.mode1} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />
        <Routes>        
            <Route exact path="/" element={<NewsArea key='mainGeneral' category={this.props.category} turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/business" element={<NewsArea key='business' category='business' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/entertainment" element={<NewsArea key='entertainment' category='entertainment' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/health" element={<NewsArea key='health' category='health' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/science" element={<NewsArea key='science' category='science' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/sports" element={<NewsArea key='sports' category='sports' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
            <Route exact path="/technology" element={<NewsArea key='technology' category='technology' turnS={this.spinnerMode} themeMode={this.state.theme} themeTxt={this.state.themeTxt} />} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
