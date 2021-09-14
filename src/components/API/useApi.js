import axios from "axios";
export default function useApi() {

    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'accept-encoding': 'application/gzip',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'x-rapidapi-key': '7c96c27ef3msh1f674d101bdf825p1f22bcjsnf4a36ace24e1'
        }
    };

    async function lang() { 
        let lan = await axios.request(options);
        return lan;
    }
    return lang();
}