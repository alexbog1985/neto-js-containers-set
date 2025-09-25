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
    test('it should throw an error if the player is already in the team', () => {
      team.add('Hero1');
      expect(() => team.add('Hero1')).toThrow('Такой персонаж уже есть');
    });
  });

  describe('addAll', () => {
    test('it should add multiple players to the team', () => {
      team.addAll('Hero1', 'Hero2', 'Hero3');
      expect(team.toArray()).toEqual(['Hero1', 'Hero2', 'Hero3']);
    });
    test('it should not add duplicate players', () => {
      team.addAll('Hero1', 'Hero2', 'Hero1');
      const teamArr = team.toArray();
      expect(teamArr).toEqual(['Hero1', 'Hero2']);
      expect(teamArr.length).toBe(new Set(teamArr).size);
    });
  });

  describe('toArray', () => {
    test('it should return an array of players', () => {
      team.addAll('Hero1', 'Hero2', 'Hero3');
      expect(team.toArray()).toEqual(['Hero1', 'Hero2', 'Hero3']);
    });
  });
});
