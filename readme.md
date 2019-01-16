# supports-input-type

Tiny library for testing browser support of type attributes on input tags written in typescript.

## Usage

Install package:

```
npm install supports-input-type
```

Test if the browser support an input type:

```js
import supportsInputType from 'supports-input-type';

if (supportInputType('date')) {
  // render a native <input type="date" />
} else {
  // render a custom date input field
}
```

## License

This library is licensed under the [Mozilla Public License Version 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
