const test = require('ava');
const { WORD_BOUNDARY } = require('./index');

test('exists', t => {
    t.is(typeof WORD_BOUNDARY, 'string', 'is a string')
})

test('number', t => {
    const reg = new RegExp(WORD_BOUNDARY + '\d');
    t.true(!reg.test('1'))
})

test('word', t => {
    const reg = new RegExp(WORD_BOUNDARY + '\S');
    t.true(!reg.test('a'))
    t.true(!reg.test('B'))
    t.true(!reg.test('X'))
    t.true(!reg.test('Б'))
    t.true(!reg.test('ъ'))
})

test('symbols', t => {
    const reg = new RegExp(WORD_BOUNDARY);
    t.true(reg.test('!'))
    t.true(reg.test('^'))
    t.true(reg.test('('))
    t.true(reg.test('-'))
    t.true(reg.test('.'))
})

test('end', t => {
    const reg = new RegExp('one' + WORD_BOUNDARY);
    t.true(!reg.test('one_'))
    t.true(reg.test('one-'))
    t.true(reg.test('one&'))
    t.true(reg.test('one+'))
    t.true(reg.test('one/'))
    t.true(reg.test('one'))
})

test('start', t => {
    const reg = new RegExp(WORD_BOUNDARY + 'two');
    t.true(!reg.test('_two'))
    t.true(reg.test('-two'))
    t.true(reg.test('two'))
})

test('България', t => {
    const reg = new RegExp(WORD_BOUNDARY + 'България' + WORD_BOUNDARY, 'i');
    t.true(reg.test('text България'))
})
