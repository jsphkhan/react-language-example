import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import UserCard from './components/UserCard';

import { readAppLanguage, setAppLanguage } from './lang.utils';

function App() {
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    const lang = e.target.value;
    console.log('language choosen: ', lang);
    setLanguage(lang); //set in local state
    setAppLanguage(lang); //set in cookie
  }

  useEffect(() => {
    setLanguage(readAppLanguage());
  }, []);


  return (
    <>
      <Helmet htmlAttributes={{
        lang: language,
        dir: language === 'en' ? 'ltr' : 'rtl'
      }}>
        <meta charSet="utf-8" />
        <title>Language Example</title>
      </Helmet>
      <div className="App">
        <form>
          <label htmlFor="langlist">Language:</label>
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
