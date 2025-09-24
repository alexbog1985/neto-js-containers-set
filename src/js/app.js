export class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(character);
  }
  addAll(...characters) {
    for (const character of characters) {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    }
  }
  toArray() {
    return [...this.members];
  }
}
