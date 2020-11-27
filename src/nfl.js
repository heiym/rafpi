import NflFantasyApi from './api.js';

// TODO: seperate from parent because this one needs no sessionId
// TODO: stupid name
export default class Nfl extends NflFantasyApi {
  constructor() {
    super();
    this.baseUrl = 'https://nfl-prod-data.s3.amazonaws.com/json';
  }

  async fetchRounds() {
    const response = await this.get('/rounds.json');
    return response.json();
  }

  async fetchSquads() {
    const response = await this.get('/squads.json');
    return response.json();
  }

  async fetchPlayers() {
    const response = await this.get('/players.json');
    return response.json();
  }
}