import Letter from './letter';
import { letterGroups, LetterColours } from './config.js'

const letter = new Letter("A")

it('letter knows its character', () => {
  expect(letter.character).toBe('A')
});

it('letter knows its score', () => {
  expect(letter.score).toBe(1)
});

it('letter knows its colour', () => {
  expect(letter.colour).toBe('#FF17D1')
});

it('getScore gets a score for a character', () => {
  expect(letter.getScore('A')).toBe(1)
});

it('getColour gets a colour for a character', () => {
  expect(letter.getColour('A')).toBe('#FF17D1')
});
