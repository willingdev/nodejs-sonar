const hello = require('../src/hello');

test('Say hello to Somchai', () => {
  expect(hello.sayHello('Somchai')).toBe('Hello Somchai!');
});

test('Say hello to Foo', () => {
  expect(hello.helloFoo()).toBe('Hello Foo!');
});