import Tone from 'tone';

const synth = new Tone.Synth({
  oscillator: {
    partials: [3, 2, 1],
    type: 'custom',
    frequency: 'C#4',
    volume: -12,
  },
  envelope: {
    attack: 0.11,
    decay: 0.21,
    sustain: 1,
    release: 1.71,
    attackCurve: 'exponential',
    decayCurve: 'exponential',
    releaseCurve: 'exponential',
  },
}).toMaster();

const playKey = (key) => synth.triggerAttackRelease(key, '8n');

export default playKey;
