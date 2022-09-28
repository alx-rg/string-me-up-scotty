const index = require('../src/index');

test('capitalize - function tests', () => {
  expect(index.capitalize('moose')).toBe('Moose');
  expect(index.capitalize('we got married')).toBe('We got married');
  expect(index.capitalize(' dogs are bests')).toBe(' dogs are bests');
})

test('allCaps - function tests', () => {
  expect(index.allCaps('what is this foo bar')).toBe('WHAT IS THIS FOO BAR');
  expect(index.allCaps('ALL CAPS')).toBe('ALL CAPS');
  expect(index.allCaps('Do DOGS dream')).toBe('DO DOGS DREAM')
})

test('capitalizeWords - function tests', () => {
  expect(index.capitalizeWords('of Electric sheeps')).toBe('Of Electric Sheeps');
  expect(index.capitalizeWords('bamboozeled iTS cRAzy')).toBe('Bamboozeled ITS CRAzy');
  expect(index.capitalizeWords('love iS bLIND')).toBe('Love IS BLIND');
})

test('capitalizedHeadline - function tests', () => {
  expect(index.capitalizeHeadline('happy sailor was swimming')).toBe('Happy Sailor Was Swimming')
  expect(index.capitalizeHeadline('but HE COULDNT see the shore')).toBe('But He Couldnt See the Shore')
  expect(index.capitalizeHeadline('so he rode a dolphin home')).toBe('So He Rode a Dolphin Home')
})

test('removeExtraSpaces - function tests', () => {
  expect(index.removeExtraSpaces('    what   is   moose    cheewing?   ')).toBe('what is moose cheewing?')
  expect(index.removeExtraSpaces('    whats up doc   ')).toBe('whats up doc')
  expect(index.removeExtraSpaces('       doggo')).toBe('doggo')
})

test('kebobCase - function tests', () => {
  expect(index.kebobCase('I like chicken kebobs', '-')).toBe('i-like-chicken-kebobs')
  expect(index.kebobCase('Moose IS JUST THE BEST')).toBe('moose-is-just-the-best')
  expect(index.kebobCase('   and he     eats his     veggies!')).toBe('and-he-eats-his-veggies')
})

test('snakeCase - function tests', () => {
  expect(index.snakeCase('Moose likes to eat salmon', '_')).toBe('moose_likes_to_eat_salmon')
  expect(index.snakeCase('    can we     go play    in the park?', '_')).toBe('can_we_go_play_in_the_park')
  expect(index.snakeCase('swim swim in the DoGGO pool', '_')).toBe('swim_swim_in_the_doggo_pool')
})

// (snakeCase('      snakeCase_this and - remove the other 23@@#characters!'));
// (camelCase('This is moose BOBBY alex MAXIMUSIMUS'));
// (shift('what is going on here?', 2));
// (makeHashTag('this is a bambooozeled mooose MAXIMILIUS'));
// (isEmpty('    \n\r\t     ')); // true
// (isEmpty('abc def')); // false


