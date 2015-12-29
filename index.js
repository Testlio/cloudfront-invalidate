'use strict';

const Aws = require('aws-sdk');
const assert = require('assert');

function createCallerReference() {
    return Date.now().toString();
}

function createPayload(distributionId, invalidations, opts) {
    return {
        DistributionId: distributionId,
        InvalidationBatch: {
            CallerReference: opts.callerReference || createCallerReference(),
            Paths: {
                Quantity: invalidations.length,
                Items: invalidations
            }
        }
    };
}

module.exports = function(distributionId, invalidations, opts, cb) {
    opts = opts || {};
    invalidations = invalidations || {};
    assert(distributionId, 'Distribution ID not set');
    assert(invalidations.length, 'No invalidation rules defined');
    const cloudfront = new Aws.CloudFront();
    const payload = createPayload(distributionId, invalidations, opts);
    cloudfront.createInvalidation(payload, cb);
};
