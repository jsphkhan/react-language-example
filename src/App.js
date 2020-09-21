import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import UserCard from './components/UserCard';

import translator from './lang.utils';

function App() {
  //select list change handler
  const handleChange = (e) => {
    const lang = e.target.value;
    translator.setAppLanguage(lang); //set in cookie
    translator.refreshBrowser(); //reload browser
  }
  
  const language = translator.readAppLanguage(); //read from cookie
  const direction = (language === 'ar') ? 'rtl' : 'ltr';

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
          <label htmlFor="langlist">{translator.getText('label')}{': '}</label>
          <select name="langlist" value={language} onChange={handleChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="es">Spanish</option>
          </select>
        </form>
        <UserCard />
      </div>
    </>
  );
}

export default App;
