import React, { useState } from 'react';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {
  const [theme, setTheme] = useState(false);
  const [themeTxt, setThemeTxt] = useState('light');
  const [progress, setProgress] = useState(0)

  const themecontrol = () => {
    if (theme) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    setTheme(!theme);
    setThemeTxt(theme ? 'light' : 'dark');
  }

  const runLoading = (per) => {
    setProgress(per)
  }

  return (
    <BrowserRouter>
      <NavBar themecontrol={themecontrol} themeTxt={themeTxt} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>        
          <Route exact path="/" element={<NewsArea runProgress={runLoading}  key='mainGeneral' category={props.category}  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/business" element={<NewsArea runProgress={runLoading}  key='business' category='business'  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/entertainment" element={<NewsArea runProgress={runLoading}  key='entertainment' category='entertainment'  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/health" element={<NewsArea runProgress={runLoading}  key='health' category='health'  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/science" element={<NewsArea runProgress={runLoading}  key='science' category='science'  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/sports" element={<NewsArea runProgress={runLoading}  key='sports' category='sports'  themeMode={theme} themeTxt={themeTxt} />} />
          <Route exact path="/technology" element={<NewsArea runProgress={runLoading}  key='technology' category='technology'  themeMode={theme} themeTxt={themeTxt} />} />
        </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  category: 'general'
};

App.propTypes = {
  category: PropTypes.string,
};

export default App;
