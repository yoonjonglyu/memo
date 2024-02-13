'use strict';

const memoAnd = require('..');
const assert = require('assert').strict;

assert.strictEqual(memoAnd(), 'Hello from memoAnd');
console.info('memoAnd tests passed');
