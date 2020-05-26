import React from 'react';
import { render } from '@testing-library/react';
import Key from '../Key';

const oneNote = ['E3'];
const twoNotes = ['C3', 'C#3'];

test('one white key snapshot', () => {
  const { asFragment } = render(<Key type={oneNote} />);
  expect(asFragment()).toMatchSnapshot();
});

test('one white and one black key snapshot', () => {
  const { asFragment } = render(<Key type={twoNotes} />);
  expect(asFragment()).toMatchSnapshot();
});
