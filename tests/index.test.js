const index = require('../src/index');

test('test of capitalize function', () => {
  expect(index.capitalize('moose')).toBe('Moose');
  expect(index.capitalize("we got married")).toBe("We got married");
  expect(index.capitalize(" dogs are bests")).toBe(" dogs are bests");
})

test('test of allCaps function', () => {
  expect(index.allCaps('what is this foo bar')).toBe("WHAT IS THIS FOO BAR");
  
})