import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import UserCard from './components/UserCard';

import { readAppLanguage, setAppLanguage, refreshBrowser, translator } from './lang.utils';

function App() {
  const [language, setLanguage] = useState();

  const handleChange = (e) => {
    const lang = e.target.value;
    setAppLanguage(lang); //set in cookie
    refreshBrowser(); //reload browser
  }

  useEffect(() => {
    console.log('component mounted');
    setLanguage(readAppLanguage()); //set local state
  }, []);

  const direction = language === 'en' ? 'ltr' : 'rtl';

  return (
    <>
      <Helmet htmlAttributes={{
        lang: language,
        dir: direction
      }}>
        <meta charSet="utf-8" />
        <title>Language Example</title>
      </Helmet>
      <div>
        <form>
          <label htmlFor="langlist">{translator.gettext('language')}{': '}</label>
          <select name="langlist" value={language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </form>
        <UserCard />
      </div>
    </>
  );
}

export default App;
