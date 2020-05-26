import React from 'react';
import { render } from '@testing-library/react';

jest.mock('../../../service/audio');
jest.mock('tone');
import playKey from '../../../service/audio';
import Tone from 'tone';
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

test('render one key', () => {
  const { getByTestId, getAllByTestId } = render(<Key type={oneNote} />);

  expect(getByTestId('key-0')).toBeTruthy();
  expect(getAllByTestId(/key/).length).toBe(1);
});

test('render two keys', () => {
  const { getByTestId, getAllByTestId } = render(<Key type={twoNotes} />);

  expect(getByTestId('key-0')).toBeTruthy();
  expect(getByTestId('key-1')).toBeTruthy();
  expect(getAllByTestId(/key/).length).toBe(2);
});
