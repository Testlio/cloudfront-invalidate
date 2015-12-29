# Invalidate cloudfront distribution cache

> Creates a invalidation for cloudfront cache

## Install

`$ npm i -g cloudfront-invalidate`

## Usage

### Cli

`$ cloudfront-invalidate --help`


Example:

Create invalidate rule for `/build/*` directory.

```
$ cloudfront-invalidate -d DISTRIBUTION_ID '/build/*'
```

### Node

```
const invalidateCache = require('cloudfront-invalidate');
invalidateCache(distributionId, [ 'paths', 'to', 'invalidate' ], {
    callerReference: REFERENCE // optional
}, function(err, data) {});
```
