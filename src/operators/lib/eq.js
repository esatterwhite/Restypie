'use strict';

/***********************************************************************************************************************
 * Dependencies
 **********************************************************************************************************************/
let Restypie = require('../../');

/***********************************************************************************************************************
 * @namespace Restypie.Operators
 * @class Eq
 * @extends Restypie.Operators.AbstractOperator
 **********************************************************************************************************************/
module.exports = class Eq extends Restypie.Operators.AbstractOperator {
  static get filteringWeight() { return 100; }
};