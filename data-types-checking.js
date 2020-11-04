const isString = (value) =>
  typeof value === 'string' || value instanceof String;

const isNumber = (value) => typeof value === 'number' && isFinite(value);

const isArray = (value) =>
  value && typeof value === 'object' && value.constructor === Array;

/* For ES5+
 * Array.isArray(value);
 */

const isFunction = (value) => typeof value === 'function';

const isObject = (value) =>
  value && typeof value === 'object' && value.constructor === Object;

const isNull = (value) => value === null;

const isUndefined = (value) => typeof value === 'undefined';

const isBoolean = (value) => typeof value === 'boolean';

const isRegExp = (value) =>
  value && typeof value === 'object' && value.constructor === RegExp;

const isError = (value) =>
  value instanceof Error && typeof value.message === 'undefined';

const isDate = (value) => value instanceof Date;

const isSymbol = (value) => typeof value === 'symbol';

module.exports = {
  isString,
  isNumber,
  isArray,
  isFunction,
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  isRegExp,
  isError,
  isDate,
  isSymbol
};
