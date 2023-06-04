import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('check object sort', () => {
  const inp = orderByProps(obj, ['name', 'health']);
  const res = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ];

  expect(inp).toEqual(res);
});
