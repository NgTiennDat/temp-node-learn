// CommonJs, everu file is module (bu default)
// Module - Encapsulated Code (only share minimum)

const name = require('./4-names');
const sayhi = require('./5-utils');
const data = require('./6-alternatice-flavor')
require('./7-Mind-Genade');
sayhi('susan');
sayhi(name.john);
sayhi(name.peter);