import League from './league.js';
import Teams from './teams.js';
import Nfl from './nfl.js';


export default class RanFantasy {
  endpoints = {
    'league': League,
    'teams': Teams,
    'nfl': Nfl,
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId;
  }

  getSessionId() {
    return this.sessionId;
  }

  api(endpoint) {
    endpoint = endpoint.toLowerCase();

    if(!this.endpoints[endpoint]) {
      throw new Error('No such endpoint');
    }

    return new this.endpoints[endpoint](this.sessionId);
  }

  data(endpoint) {
  }
}