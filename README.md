# unicode-wb

Unicode regexp string for detecting Word Boundary.

## Usage

```js

const { WORD_BOUNDARY } = require('unicode-wb');

const reg  = new RegExp(WORD_BOUNDARY + 'България' + WORD_BOUNDARY, 'i');

reg.test('text България') // true

```
