import NflFantasyApi from './api.js';

export default class League extends NflFantasyApi {

  constructor(sessionId) {
    super(sessionId);
  }

  // TODO: promises for user usability
  /**
   * fetches weekly scores of given league.
   * @param {int} leagueId 
   * @param {int} round
   * @param {string} order order by element
   * @param {string} order_dir order direction
   */
  async leagueScores(leagueId, round, order = 'overall_rank', order_dir = 'asc')  {
    if(!leagueId || !(leagueId > 0)) {
      throw new Error('Missing or invalid LEAGUE_ID. Please provide.');
    }
    
    const parameters = {
      id: leagueId,
      sid: this.sessionId,
      order: order,
      order_dir: order_dir,
    }

    if(round > 0) {
      parameters = { ...parameters, round };
    }

    const response = await this.get('/fantasy_league/ladder', parameters);
    return response.json();
  }

  async teamScores(teamId, round = 1) {
    const response = await this.get('/fantasy_team/show', {
      sid: this.sessionId,
      id: teamId,
      round: round,
    });

    return response.json();
  }

  /**
   * view your current league selection.
   */
  async myLeagues() {
    const response = await this.get('/fantasy_league/show_my', {
      sid: this.sessionId,
    });

    return response.json();
  }

  async leagueInfo(leagueId) {
    const response = this.get('/fantasy_league/show', {
      sid: this.sessionId,
      id: leagueId,
    });

    return response.json();
  }
}
