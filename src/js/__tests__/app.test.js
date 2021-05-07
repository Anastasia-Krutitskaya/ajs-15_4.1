import getHelth from '../app';

test('critical <15', () => {
  const result = getHelth({ name: 'Маг', health: 12 });
  expect(result).toBe('critical');
});
test('wounded 15', () => {
  const result = getHelth({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('wounded 25', () => {
  const result = getHelth({ name: 'Маг', health: 25 });
  expect(result).toBe('wounded');
});
test('wounded 50', () => {
  const result = getHelth({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});
test('healthy 75', () => {
  const result = getHelth({ name: 'Маг', health: 75 });
  expect(result).toBe('healthy');
});
