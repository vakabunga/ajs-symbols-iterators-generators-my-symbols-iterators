// TODO: write your code here
import Character from './character';

export default class Team {
  [Symbol.iterator]() {
    const persons = Object.values(this);
    let index = -1;
    return {
      next() {
        if (index < persons.length) {
          index += 1;
          return {
            done: false,
            value: persons[index],
          };
        }
        return { done: true };
      },
    };
  }
}

const team = new Team();
team.vaka = new Character('Vaka');
team.bunga = new Character('Bunga');
team.zauber = new Character('Zauber');
team.thrall = new Character('Thrall');
team.zombie = new Character('Zombie');

/* export default class Team {
constructor() {
    this.team = [];
  }

  add(person) {
    this.team.push(person);
  }

  [Symbol.iterator]() {
    const persons = this.team;
    let index = -1;
    return {
      next() {
        if (index < persons.length) {
          index += 1;
          return {
            done: false,
            value: persons[index],
          };
        }
        return { done: true };
      },
    };
  }
}

const team = new Team();

team.add(new Character('Vaka'));
team.add(new Character('Bunga'));
team.add(new Character('Thrall'));
team.add(new Character('Zauber'));
team.add(new Character('Zombie'));

for (const unit of team) {
  console.log(unit);
}
*/
