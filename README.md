## rework-palette [![Build Status](https://travis-ci.org/fgnass/rework-palette.png)](https://travis-ci.org/fgnass/rework-palette)

[Rework](https://github.com/visionmedia/rework) plugin to resolve custom CSS
color names. By default it uses the beautiful [clrs.cc](http://clrs.cc) palette.

### Example

```css
.foo {
  color: navy;
  background: 1px solid blue;
}
```

Yields:

```css
.foo {
  color: #0074d9;
  border: 1px solid #001f3f;
}
```

### Usage

```js
  var rework = require('rework');
  var palette = require('rework-palette');

  // Use the default palette
  rework(css).use(palette())

  // Use a custom palette
  rework(css).use(palette({
    red: '#EE0000',
    green: '#00EE00'
  }));
```

### The MIT License (MIT)

Copyright (c) 2014 Felix Gnass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
