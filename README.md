[![Build status](https://img.shields.io/github/workflow/status/maxmilton/parallel/ci)](https://github.com/maxmilton/parallel/actions)
[![Coverage status](https://img.shields.io/codeclimate/coverage/maxmilton/parallel)](https://codeclimate.com/github/maxmilton/parallel)
[![NPM version](https://img.shields.io/npm/v/@maxmilton/parallel.svg)](https://www.npmjs.com/package/@maxmilton/parallel)
[![NPM bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@maxmilton/parallel.svg)](https://bundlephobia.com/result?p=@maxmilton/parallel)
[![License](https://img.shields.io/github/license/maxmilton/parallel.svg)](https://github.com/maxmilton/parallel/blob/master/LICENSE)

# @maxmilton/parallel

Run NPM scripts in parallel. No fancy features, no dependencies, just run scripts in parallel as simply as possible.

## Installation

```sh
npm add -D @maxmilton/parallel
```

## Usage

`parallel [options] <script_name ...>`

### Options

`-n`: Print script name on each output. Makes it more clear which script an output belongs to. However, it also typically disables colour in the output (because `process.stdout.isTTY` and `process.stderr.isTTY` will be false).

### Examples

`package.json`:

```json
{
  "scripts": {
    "one": "echo 'one'",
    "two": "echo 'two'",
    "both": "parallel one two"
  },
  "devDependencies": {
    "@maxmilton/parallel": "*"
  }
}
```

## Bugs

Please report any bugs you encounter on the [GitHub issue tracker](https://github.com/maxmilton/parallel/issues).

## Changelog

See [releases on GitHub](https://github.com/maxmilton/parallel/releases).

## License

MIT license. See [LICENSE](https://github.com/maxmilton/parallel/blob/master/LICENSE).

---

© 2021 [Max Milton](https://maxmilton.com)
