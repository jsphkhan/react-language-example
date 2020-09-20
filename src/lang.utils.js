//reads the lang from the URL or cookie and sets it back
import Cookies from 'js-cookie';

export const readAppLanguage = () => {
   //read from cookie
   const cookieLang = Cookies.get('language');
   return cookieLang;
}

export const setAppLanguage = (language) => {
    //set the cookie
    Cookies.set('language', language);
}

