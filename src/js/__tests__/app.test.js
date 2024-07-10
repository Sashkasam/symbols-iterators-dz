/* eslint-disable no-undef */
import { Character } from "../character.js";

test('new Character', () => {
  const person = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const expected = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
  expect(person).toEqual(expected);
});