import NflFantasyApi from './api.js';

export default class Teams extends NflFantasyApi {
  constructor(sessionId) {
    super(sessionId);
  }

  /**
   * fetch Snapshot of your own team
   */
  async teamSnapshot() {
    const response = await this.get('/fantasy_team/snapshot', {
      sid: this.sessionId,
    })

    return response.json();
  }

  /**
   * view your current team selection. includes weekly selections
   */
  async myTeam() {
    const response = await this.get('/fantasy_team/show_my', {
      sid: this.sessionId,
    });

    return response.json();
  }
}