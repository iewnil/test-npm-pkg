const semver = require('semver');

// const compareRes = semver.gt('0.5.30-fishx-alpha.1', '0.5.30-fishx-alpha.2'); // false
// const compareRes = semver.gt('0.5.30-fishx-alpha.1', '0.5.30-alpha.25'); // true
const compareRes = semver.gt('0.5.30-alpha.25', '0.5.30-alpha.fishx.1'); // true
// const compareRes = semver.gt('0.7.30-uddp.0', '0.7.30-alpha.2'); // true

console.log(compareRes);