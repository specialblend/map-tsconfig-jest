const { compose, concat, head, invertObj, map, replace } = require('ramda');

const mapAlias = replace(/\*/, '(.*)');
const mapTarget = compose(concat('<rootDir>'), replace(/\*/, '$1'), head);

const mapAliases = compose(invertObj, map(mapAlias), invertObj);
const mapTargets = map(mapTarget);

const mapPaths = compose(mapAliases, mapTargets);

module.exports = mapPaths;
