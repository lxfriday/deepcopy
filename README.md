# deepcopy

deep copy for javascript

## install

```bash
npm i @lxfriday/deepcopy -S
# or
yarn add @lxfriday/deepcopy
```

## params

one or more object

## return

the deep copy result

## usage

```js
var deepCopy = require('deepcopy');
var obj = { a: 1, b: 2, c: { cc: 3 } };
var result = deepCopy({}, obj);
console.log(result.c === obj.c); // false

obj.c.cc = 15;

console.log(result.c.cc); // 3
```
