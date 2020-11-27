import fetch from 'node-fetch';

export default class NflFantasyApi {
  lang = 'de'
  baseUrl = `https://backend-nfl.fanhubmedia.com.au/fantasy/${this.lang}/api`;
  sessionId = '';
  basicHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'de,en-US;q=0.7,en;q=0.3',
    'Referer': 'https://nflmanager.ran.de',
  }

  constructor(sessionId) {
    this.sessionId = sessionId;
  }

  _buildUrl(path, parameter) {
    let queryString = '';
    if(parameter) {
      Object
        .entries(parameter)
        .forEach(([key, value]) => {
          queryString += `&${key}=${value}`;
        });
    }

    //prevent caching
    queryString += ('&_=' + new Date().getTime());
    const finalUrl = this.baseUrl + path + (queryString.replace('&', '?'));

    return finalUrl;
  }

  get(path, parameter = {}, headers = {}, url = '') {
    console.log(this._buildUrl(path, parameter));
    return fetch(this._buildUrl(path, parameter), Object.assign(this.basicHeaders, headers));
  } 
}