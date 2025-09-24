import { Team } from '../app.js';

describe('Class Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  describe('add', () => {
    test('it should add a player to the team', () => {
      team.add('Hero1');
      expect(team.toArray()).toContain('Hero1');
    });
  });
});
