//reads the lang from the URL or cookie and sets it back
import Cookies from 'js-cookie';
import LangStrings from './lang';

class LangUtils {
    language = null;

    readAppLanguage() {
        //read from cookie
        const cookieLang = Cookies.get('language') || 'en';
        this.language = cookieLang;
        return cookieLang;
    }

    setAppLanguage(language) {
        //set to cookie
        Cookies.set('language', language);
    }

    refreshBrowser() {
        window.location.reload();
    }

    getText(key) {
        //console.log(key);
        return LangStrings[this.language][key];
    }
}

export default new LangUtils();

