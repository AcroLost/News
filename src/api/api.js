import * as axios from 'axios';

export const getNews = () => {
    return axios.get('http://www.json-generator.com/api/json/get/cgmZxwcBFe?indent=2'
    );
}