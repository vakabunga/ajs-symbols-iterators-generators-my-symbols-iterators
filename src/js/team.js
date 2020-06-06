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

// export default class Team {
//   constructor() {
//     this.team = [];
//   }

//   add(person) {
//     this.team.push(person);
//   }

//   [Symbol.iterator]() {
//     const persons = this.team;
//     let index = -1;
//     return {
//       next() {
//         if (index < persons.length) {
//           index += 1;
//           return {
//             done: false,
//             value: persons[index],
//           };
//         }
//         return { done: true };
//       },
//     };
//   }
// }
