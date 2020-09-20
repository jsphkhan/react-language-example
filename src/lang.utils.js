//reads the lang from the URL or cookie and sets it back
import Cookies from 'js-cookie';
import LangStrings from './lang';

export const readAppLanguage = () => {
    console.log('read app language');
   //read from cookie
   const cookieLang = Cookies.get('language');
   return cookieLang;
}

export const setAppLanguage = (language) => {
    //set the cookie
    Cookies.set('language', language);
}

export const refreshBrowser = () => {
    window.location.reload();
}

export const translator = {
    gettext: (key) => {
        console.log(key);
        let language = readAppLanguage() || language;
        return LangStrings[language][key];
    }
}

