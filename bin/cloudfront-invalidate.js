#!/usr/bin/env node
const program = require('commander');

const invalidateCache = require('../index.js');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .usage('[options] <directory>')
    .option('-d, --distribution-id <id>', 'Distribution id. Required')
    .option('-r, --reference <reference id>', 'Caller reference id')
    .parse(process.argv);

const opts = {
    callerReference: program.reference
};

console.log('Invalidating cache for paths: ', program.args);

invalidateCache(program.distributionId, program.args, opts, function(err, data) {
    if (err) {
        console.error('Failed: ', err);
    } else {
        console.log(data);
    }
});
