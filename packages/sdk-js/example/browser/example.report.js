(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __asyncGenerator = (__this, __arguments, generator) => {
    var resume = (k, v, yes, no) => {
      try {
        var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
        Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
      } catch (e) {
        no(e);
      }
    }, method = (k, call, wait, clear) => it[k] = (x) => (call = new Promise((yes, no, run) => (run = () => resume(k, x, yes, no), q ? q.then(run) : run())), clear = () => q === wait && (q = 0), q = wait = call.then(clear, clear), call), q, it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw") throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x = obj[k](v);
            if (!(x instanceof Object)) __typeError("Object expected");
            resolve(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/is.js
  var require_is = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/is.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var is_exports = {};
      __export(is_exports, {
        array: () => array,
        boolean: () => boolean,
        date: () => date,
        extension: () => extension,
        fn: () => fn,
        integer: () => integer,
        iterable: () => iterable,
        large: () => large,
        nan: () => nan,
        negative: () => negative,
        nil: () => nil,
        number: () => number,
        object: () => object,
        positive: () => positive,
        regexp: () => regexp,
        string: () => string,
        undef: () => undef,
        zeroLengthString: () => zeroLengthString
      });
      module.exports = __toCommonJS(is_exports);
      function number(candidate) {
        return typeof candidate === "number" && !isNaN(candidate);
      }
      function nan(candidate) {
        return typeof candidate === "number" && isNaN(candidate);
      }
      function integer(candidate) {
        return typeof candidate === "number" && !isNaN(candidate) && (candidate | 0) === candidate;
      }
      function large(candidate) {
        return typeof candidate === "number" && !isNaN(candidate) && isFinite(candidate) && Math.floor(candidate) === candidate;
      }
      function positive(candidate) {
        return number(candidate) && candidate > 0;
      }
      function negative(candidate) {
        return number(candidate) && candidate < 0;
      }
      function iterable(candidate) {
        return !nil(candidate) && !undef(candidate) && fn(candidate[Symbol.iterator]);
      }
      function string(candidate) {
        return typeof candidate === "string";
      }
      function date(candidate) {
        return candidate instanceof Date;
      }
      function regexp(candidate) {
        return candidate instanceof RegExp;
      }
      function fn(candidate) {
        return typeof candidate === "function";
      }
      function array(candidate) {
        return Array.isArray(candidate);
      }
      function boolean(candidate) {
        return typeof candidate === "boolean";
      }
      function object(candidate) {
        return typeof candidate === "object" && candidate !== null;
      }
      function nil(candidate) {
        return candidate === null;
      }
      function undef(candidate) {
        return candidate === void 0;
      }
      function zeroLengthString(candidate) {
        return string(candidate) && candidate.length === 0;
      }
      function extension(parent, child) {
        return fn(parent) && fn(child) && child.prototype instanceof parent;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/assert.js
  var require_assert = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/assert.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var assert_exports = {};
      __export(assert_exports, {
        areEqual: () => areEqual,
        areNotEqual: () => areNotEqual,
        argumentIsArray: () => argumentIsArray,
        argumentIsOptional: () => argumentIsOptional,
        argumentIsRequired: () => argumentIsRequired,
        argumentIsValid: () => argumentIsValid
      });
      module.exports = __toCommonJS(assert_exports);
      var is = __toESM(require_is());
      var nativeTypes = [String, Number, Function, Boolean, Date, Array, Object, RegExp];
      function checkArgumentType(variable, variableName, type, typeDescription, index) {
        if (type === String) {
          if (!is.string(variable)) {
            throwInvalidTypeError(variableName, "string", index);
          }
        } else if (type === Number) {
          if (!is.number(variable)) {
            throwInvalidTypeError(variableName, "number", index);
          }
        } else if (type === Function) {
          if (!is.fn(variable)) {
            throwInvalidTypeError(variableName, "function", index);
          }
        } else if (type === Boolean) {
          if (!is.boolean(variable)) {
            throwInvalidTypeError(variableName, "boolean", index);
          }
        } else if (type === Date) {
          if (!is.date(variable)) {
            throwInvalidTypeError(variableName, "date", index);
          }
        } else if (type === RegExp) {
          if (!is.regexp(variable)) {
            throwInvalidTypeError(variableName, "RegExp", index);
          }
        } else if (type === Array) {
          if (!is.array(variable)) {
            throwInvalidTypeError(variableName, "array", index);
          }
        } else if (!(variable instanceof (type || Object))) {
          throwInvalidTypeError(variableName, typeDescription, index);
        }
      }
      function throwInvalidTypeError(variableName, typeDescription, index) {
        let message;
        if (typeof index === "number") {
          message = `The argument [ ${variableName || "unspecified"} ], at index [ ${index.toString()} ] must be a [ ${typeDescription || "unknown"} ]`;
        } else {
          message = `The argument [ ${variableName || "unspecified"} ] must be a [ ${typeDescription || "Object"} ]`;
        }
        throw new Error(message);
      }
      function throwCustomValidationError(variableName, predicateDescription) {
        throw new Error(`The argument [ ${variableName || "unspecified"} ] failed a validation check [ ${predicateDescription || "No description available"} ]`);
      }
      function argumentIsRequired(variable, variableName, type, typeDescription) {
        checkArgumentType(variable, variableName, type, typeDescription);
      }
      function argumentIsOptional(variable, variableName, type, typeDescription, predicate, predicateDescription) {
        if (variable === null || variable === void 0) {
          return;
        }
        checkArgumentType(variable, variableName, type, typeDescription);
        if (is.fn(predicate) && !predicate(variable)) {
          throwCustomValidationError(variableName, predicateDescription);
        }
      }
      function argumentIsArray(variable, variableName, itemConstraint, itemConstraintDescription) {
        argumentIsRequired(variable, variableName, Array);
        if (itemConstraint) {
          let itemValidator;
          if (nativeTypes.includes(itemConstraint)) {
            itemValidator = (value, index) => checkArgumentType(value, variableName, itemConstraint, itemConstraintDescription, index);
          } else {
            itemValidator = (value, index) => {
              if (itemConstraint.prototype !== void 0 && value instanceof itemConstraint) {
                return;
              }
              itemConstraint(value, `${variableName}[${index}]`);
            };
          }
          variable.forEach((v, i) => {
            itemValidator(v, i);
          });
        }
      }
      function argumentIsValid(variable, variableName, predicate, predicateDescription) {
        if (!predicate(variable)) {
          throwCustomValidationError(variableName, predicateDescription);
        }
      }
      function areEqual(a, b, descriptionA, descriptionB) {
        if (a !== b) {
          throw new Error(`The objects must be equal [${descriptionA || a.toString()}] and [${descriptionB || b.toString()}]`);
        }
      }
      function areNotEqual(a, b, descriptionA, descriptionB) {
        if (a === b) {
          throw new Error(`The objects cannot be equal [${descriptionA || a.toString()}] and [${descriptionB || b.toString()}]`);
        }
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Disposable.js
  var require_Disposable = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Disposable.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Disposable_exports = {};
      __export(Disposable_exports, {
        default: () => Disposable
      });
      module.exports = __toCommonJS(Disposable_exports);
      var assert = __toESM(require_assert());
      var _disposed;
      var _Disposable = class _Disposable {
        constructor() {
          __privateAdd(this, _disposed);
          __privateSet(this, _disposed, false);
        }
        /**
         * Indicates if the dispose action has been executed.
         *
         * @public
         * @returns {boolean}
         */
        get disposed() {
          return __privateGet(this, _disposed);
        }
        /**
         * Invokes end-of-life logic. Once this function has been
         * invoked, further interaction with the object is not
         * recommended.
         *
         * @public
         */
        dispose() {
          if (__privateGet(this, _disposed)) {
            return;
          }
          __privateSet(this, _disposed, true);
          this._onDispose();
        }
        /**
         * @protected
         * @abstract
         * @ignore
         */
        _onDispose() {
        }
        /**
         * Returns true if the {@link Disposable#dispose} function has been invoked.
         *
         * @public
         * @deprecated
         * @returns {boolean}
         */
        getIsDisposed() {
          return __privateGet(this, _disposed);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Disposable]";
        }
        /**
         * Creates and returns a {@link Disposable} object with end-of-life logic
         * delegated to a function.
         *
         * @public
         * @static
         * @param {Function} disposeAction
         * @returns {Disposable}
         */
        static fromAction(disposeAction) {
          assert.argumentIsRequired(disposeAction, "disposeAction", Function);
          return new DisposableAction(disposeAction);
        }
        /**
         * Creates and returns a {@link Disposable} object whose end-of-life
         * logic does nothing.
         *
         * @public
         * @static
         * @returns {Disposable}
         */
        static getEmpty() {
          return _Disposable.fromAction(() => {
          });
        }
      };
      _disposed = new WeakMap();
      var Disposable = _Disposable;
      var _disposeAction;
      var DisposableAction = class extends Disposable {
        /**
            * @param {Function} disposeAction
            */
        constructor(disposeAction) {
          super();
          __privateAdd(this, _disposeAction);
          __privateSet(this, _disposeAction, disposeAction);
        }
        /**
         * @protected
         * @override
         */
        _onDispose() {
          __privateGet(this, _disposeAction).call(this);
          __privateSet(this, _disposeAction, null);
        }
        toString() {
          return "[DisposableAction]";
        }
      };
      _disposeAction = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Enum.js
  var require_Enum = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Enum.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Enum_exports = {};
      __export(Enum_exports, {
        default: () => Enum
      });
      module.exports = __toCommonJS(Enum_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var types = /* @__PURE__ */ new Map();
      var _code, _description, _mapping;
      var _Enum = class _Enum {
        /**
         * @param {string} code - The unique code of the enumeration item.
         * @param {string} description - A description of the enumeration item.
         * @param {number=} mapping - An alternate key value (used when external systems identify enumeration items using integer values).
         */
        constructor(code, description, mapping) {
          __privateAdd(this, _code);
          __privateAdd(this, _description);
          __privateAdd(this, _mapping);
          assert.argumentIsRequired(code, "code", String);
          assert.argumentIsRequired(description, "description", String);
          assert.argumentIsOptional(mapping, "mapping", Number);
          if (is.number(mapping)) {
            assert.argumentIsValid(mapping, "mapping", is.integer, "must be an integer");
          }
          __privateSet(this, _code, code);
          __privateSet(this, _description, description);
          if (is.number(mapping)) {
            __privateSet(this, _mapping, mapping);
          } else {
            __privateSet(this, _mapping, null);
          }
          const c = this.constructor;
          if (!types.has(c)) {
            types.set(c, []);
          }
          const valid = _Enum.fromCode(c, __privateGet(this, _code)) === null && (__privateGet(this, _mapping) === null || _Enum.fromMapping(c, __privateGet(this, _mapping)) === null);
          if (valid) {
            types.get(c).push(this);
          }
        }
        /**
         * The unique code.
         *
         * @public
         * @returns {string}
         */
        get code() {
          return __privateGet(this, _code);
        }
        /**
         * The description.
         *
         * @public
         * @returns {string}
         */
        get description() {
          return __privateGet(this, _description);
        }
        /**
         * An alternate key value (used when external systems identify enumeration items
         * using numeric values). This value will not be present for all enumerations.
         *
         * @public
         * @returns {number|null}
         */
        get mapping() {
          return __privateGet(this, _mapping);
        }
        /**
         * Returns true if the provided {@link Enum} argument is equal
         * to the instance.
         *
         * @public
         * @param {Enum} other
         * @returns {boolean}
         */
        equals(other) {
          return other === this || other instanceof _Enum && other.constructor === this.constructor && other.code === this.code;
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {string}
         */
        toJSON() {
          return this.code;
        }
        /**
         * Looks up an enumeration item; given the enumeration type and the enumeration
         * item's value. If no matching item can be found, a null value is returned.
         *
         * @public
         * @static
         * @param {Function} type - The enumeration type.
         * @param {string} code - The enumeration item's code.
         * @returns {Enum|null}
         */
        static fromCode(type, code) {
          return _Enum.getItems(type).find((x) => x.code === code) || null;
        }
        /**
         * Looks up an enumeration item; given the enumeration type and the enumeration
         * item's value. If no matching item can be found, a null value is returned.
         *
         * @public
         * @static
         * @param {Function} type - The enumeration type.
         * @param {number} mapping - The enumeration item's mapping value.
         * @returns {Enum|null}
         */
        static fromMapping(type, mapping) {
          if (mapping === null) {
            return null;
          }
          return _Enum.getItems(type).find((x) => x.mapping === mapping) || null;
        }
        /**
         * Returns the enumeration's items (given an enumeration type).
         *
         * @public
         * @static
         * @param {Function} type - The enumeration to list.
         * @returns {Array}
         */
        static getItems(type) {
          return types.get(type) || [];
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Enum]";
        }
      };
      _code = new WeakMap();
      _description = new WeakMap();
      _mapping = new WeakMap();
      var Enum = _Enum;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Credentials.js
  var require_Credentials = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Credentials.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Credentials_exports = {};
      __export(Credentials_exports, {
        default: () => Credentials
      });
      module.exports = __toCommonJS(Credentials_exports);
      var is = __toESM(require_is());
      var _usernameExtractor, _passwordExtractor;
      var Credentials = class {
        /**
         * @param {Function=} usernameExtractor
         * @param {Function=} passwordExtractor
         */
        constructor(usernameExtractor, passwordExtractor) {
          __privateAdd(this, _usernameExtractor);
          __privateAdd(this, _passwordExtractor);
          __privateSet(this, _usernameExtractor, usernameExtractor);
          __privateSet(this, _passwordExtractor, passwordExtractor);
        }
        /**
         * The password extractor.
         *
         * @public
         * @returns {Function}
         */
        get usernameExtractor() {
          return __privateGet(this, _usernameExtractor);
        }
        /**
         * The password extractor.
         *
         * @public
         * @returns {Function}
         */
        get passwordExtractor() {
          return __privateGet(this, _passwordExtractor);
        }
        /**
         * Throws an {@link Error} if the instance is invalid.
         *
         * @public
         */
        validate() {
          if (!is.fn(this.usernameExtractor)) {
            throw new Error("Credentials username extractor must be a function.");
          }
          if (!is.fn(this.passwordExtractor)) {
            throw new Error("Credentials password extractor must be a function.");
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Credentials]`;
        }
      };
      _usernameExtractor = new WeakMap();
      _passwordExtractor = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/CredentialsBuilder.js
  var require_CredentialsBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/CredentialsBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var CredentialsBuilder_exports = {};
      __export(CredentialsBuilder_exports, {
        default: () => CredentialsBuilder
      });
      module.exports = __toCommonJS(CredentialsBuilder_exports);
      var assert = __toESM(require_assert());
      var import_Credentials = __toESM(require_Credentials());
      var _credentials;
      var CredentialsBuilder = class {
        constructor() {
          __privateAdd(this, _credentials);
          __privateSet(this, _credentials, new import_Credentials.default());
        }
        /**
         * The {@link Credentials} object, given all the information provided thus far.
         *
         * @public
         * @returns {Credentials}
         */
        get credentials() {
          return __privateGet(this, _credentials);
        }
        /**
         * Sets a literal username.
         *
         * @public
         * @param {string} username
         * @returns {CredentialsBuilder}
         */
        withLiteralUsername(username) {
          assert.argumentIsOptional(username, "username", String);
          return this.withDelegateUsername((ignored) => username);
        }
        /**
         * Sets a function which returns a username.
         *
         * @public
         * @param {Function} delegate
         * @returns {CredentialsBuilder}
         */
        withDelegateUsername(delegate) {
          __privateSet(this, _credentials, new import_Credentials.default(delegate, __privateGet(this, _credentials).passwordExtractor));
          return this;
        }
        /**
         * Sets a literal password.
         *
         * @public
         * @param {string} password
         * @returns {CredentialsBuilder}
         */
        withLiteralPassword(password) {
          assert.argumentIsOptional(password, "password", String);
          return this.withDelegatePassword((ignored) => password);
        }
        /**
         * Sets a function which returns a password.
         *
         * @public
         * @param {Function} delegate
         * @returns {CredentialsBuilder}
         */
        withDelegatePassword(delegate) {
          __privateSet(this, _credentials, new import_Credentials.default(__privateGet(this, _credentials).usernameExtractor, delegate));
          return this;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[CredentialsBuilder]";
        }
      };
      _credentials = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/attributes.js
  var require_attributes = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/attributes.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var attributes_exports = {};
      __export(attributes_exports, {
        erase: () => erase,
        has: () => has,
        read: () => read,
        write: () => write
      });
      module.exports = __toCommonJS(attributes_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      function getPropertyNameArray(propertyNames, separator = ".") {
        let returnRef;
        if (is.array(propertyNames)) {
          returnRef = propertyNames;
        } else {
          returnRef = propertyNames.split(separator);
        }
        return returnRef;
      }
      function getPropertyTarget(target, propertyNameArray, create) {
        let propertyTarget = target;
        for (let i = 0; i < propertyNameArray.length - 1; i++) {
          let propertyName = propertyNameArray[i];
          if (Object.prototype.hasOwnProperty.call(propertyTarget, propertyName) && !is.nil(propertyTarget[propertyName]) && !is.undef(propertyTarget[propertyName])) {
            propertyTarget = propertyTarget[propertyName];
          } else if (create) {
            propertyTarget = propertyTarget[propertyName] = {};
          } else {
            propertyTarget = null;
            break;
          }
        }
        return propertyTarget;
      }
      function last(array) {
        if (array.length !== 0) {
          return array[array.length - 1];
        } else {
          return null;
        }
      }
      function has(target, propertyNames, separator) {
        assert.argumentIsRequired(target, "target", Object);
        if (is.array(propertyNames)) {
          assert.argumentIsArray(propertyNames, "propertyNames", String);
        } else {
          assert.argumentIsRequired(propertyNames, "propertyNames", String);
        }
        const propertyNameArray = getPropertyNameArray(propertyNames, separator);
        const propertyTarget = getPropertyTarget(target, propertyNameArray, false);
        return propertyTarget !== null && Object.prototype.hasOwnProperty.call(propertyTarget, last(propertyNameArray));
      }
      function read(target, propertyNames, separator) {
        assert.argumentIsRequired(target, "target", Object);
        if (is.array(propertyNames)) {
          assert.argumentIsArray(propertyNames, "propertyNames", String);
        } else {
          assert.argumentIsRequired(propertyNames, "propertyNames", String);
        }
        const propertyNameArray = getPropertyNameArray(propertyNames, separator);
        const propertyTarget = getPropertyTarget(target, propertyNameArray, false);
        let returnRef;
        if (propertyTarget) {
          const propertyName = last(propertyNameArray);
          returnRef = propertyTarget[propertyName];
        } else {
          returnRef = void 0;
        }
        return returnRef;
      }
      function write(target, propertyNames, value, separator) {
        assert.argumentIsRequired(target, "target", Object);
        if (is.array(propertyNames)) {
          assert.argumentIsArray(propertyNames, "propertyNames", String);
        } else {
          assert.argumentIsRequired(propertyNames, "propertyNames", String);
        }
        const propertyNameArray = getPropertyNameArray(propertyNames, separator);
        const propertyTarget = getPropertyTarget(target, propertyNameArray, true);
        const propertyName = last(propertyNameArray);
        propertyTarget[propertyName] = value;
      }
      function erase(target, propertyNames, separator) {
        if (!has(target, propertyNames)) {
          return;
        }
        const propertyNameArray = getPropertyNameArray(propertyNames, separator);
        const propertyTarget = getPropertyTarget(target, propertyNameArray, true);
        const propertyName = last(propertyNameArray);
        delete propertyTarget[propertyName];
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Parameter.js
  var require_Parameter = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Parameter.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Parameter_exports = {};
      __export(Parameter_exports, {
        default: () => Parameter
      });
      module.exports = __toCommonJS(Parameter_exports);
      var is = __toESM(require_is());
      var _description, _key, _extractor, _optional;
      var Parameter = class {
        /**
         * @param {string} description
         * @param {string} key
         * @param {parameterValueCallback} extractor
         * @param {boolean=} optional
         */
        constructor(description, key, extractor, optional) {
          __privateAdd(this, _description);
          __privateAdd(this, _key);
          __privateAdd(this, _extractor);
          __privateAdd(this, _optional);
          __privateSet(this, _description, description || null);
          __privateSet(this, _key, key || null);
          __privateSet(this, _extractor, extractor || null);
          __privateSet(this, _optional, is.boolean(optional) && optional);
        }
        /**
         * The human-readable description of the parameter.
         *
         * @public
         * @returns {string}
         */
        get description() {
          return __privateGet(this, _description);
        }
        /**
         * The name of the parameter.
         *
         * @public
         * @returns {string}
         */
        get key() {
          return __privateGet(this, _key);
        }
        /**
         * A function for extracting the parameter's value.
         *
         * @public
         * @returns {parameterValueCallback}
         */
        get extractor() {
          return __privateGet(this, _extractor);
        }
        /**
         * Indicates if the parameter is required.
         *
         * @public
         * @returns {boolean}
         */
        get optional() {
          return __privateGet(this, _optional);
        }
        /**
         * Throws an {@link Error} if the instance is invalid.
         *
         * @public
         */
        validate() {
          if (!is.string(this.key) || this.key.length === 0) {
            throw new Error("Parameter key must be a non-zero length string");
          }
          if (!is.fn(__privateGet(this, _extractor))) {
            throw new Error("Parameter extractor must be a function.");
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Parameter]`;
        }
      };
      _description = new WeakMap();
      _key = new WeakMap();
      _extractor = new WeakMap();
      _optional = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Parameters.js
  var require_Parameters = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Parameters.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Parameters_exports = {};
      __export(Parameters_exports, {
        default: () => Parameters
      });
      module.exports = __toCommonJS(Parameters_exports);
      var is = __toESM(require_is());
      var import_Parameter = __toESM(require_Parameter());
      var _parameters;
      var _Parameters = class _Parameters {
        /**
         * @param {Parameter[]=} parameters
         */
        constructor(parameters) {
          __privateAdd(this, _parameters);
          __privateSet(this, _parameters, parameters || []);
        }
        /**
         * The list of {@link Parameter} items.
         *
         * @public
         * @returns {Parameter[]}
         */
        get parameters() {
          return __privateGet(this, _parameters);
        }
        /**
         * Throws an {@link Error} if the instance is invalid.
         *
         * @public
         */
        validate() {
          if (!is.array(__privateGet(this, _parameters))) {
            throw new Error("Parameters must be an array.");
          }
          if (__privateGet(this, _parameters).some((p) => !(p instanceof import_Parameter.default))) {
            throw new Error("All parameter items must be instances of Parameters.");
          }
          __privateGet(this, _parameters).forEach((p) => p.validate());
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Parameters]`;
        }
        /**
         * Merges two {@link Parameters} collections.
         *
         * @public
         * @static
         * @param {Parameters} a
         * @param {Parameters} b
         * @returns {Parameters}
         */
        static merge(a, b) {
          return new _Parameters(a.parameters.slice(0).concat(b.parameters.filter((candidate) => !a.parameters.some((existing) => existing.key === candidate.key))));
        }
      };
      _parameters = new WeakMap();
      var Parameters = _Parameters;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/ParametersBuilder.js
  var require_ParametersBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/ParametersBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ParametersBuilder_exports = {};
      __export(ParametersBuilder_exports, {
        default: () => ParametersBuilder
      });
      module.exports = __toCommonJS(ParametersBuilder_exports);
      var assert = __toESM(require_assert());
      var attributes = __toESM(require_attributes());
      var is = __toESM(require_is());
      var import_Parameter = __toESM(require_Parameter());
      var import_Parameters = __toESM(require_Parameters());
      var _parameters, _required, _ParametersBuilder_instances, addParameter_fn;
      var ParametersBuilder = class {
        /**
         * @param {boolean=} required - If true, all parameters will be marked as required.
         */
        constructor(required) {
          __privateAdd(this, _ParametersBuilder_instances);
          __privateAdd(this, _parameters);
          __privateAdd(this, _required);
          __privateSet(this, _parameters, new import_Parameters.default());
          __privateSet(this, _required, is.boolean(required) && required);
        }
        /**
         * The {@link Parameters} collection, given all the information provided thus far.
         *
         * @public
         * @returns {Parameters}
         */
        get parameters() {
          return __privateGet(this, _parameters);
        }
        /**
         * Adds a new parameter that extracts its value from a delegate.
         *
         * @param {string} description
         * @param {string} key
         * @param {Function} delegate
         * @param {boolean=} optional
         * @param {Function=} serializer
         * @returns {ParametersBuilder}
         */
        withDelegateParameter(description, key, delegate, optional, serializer) {
          __privateMethod(this, _ParametersBuilder_instances, addParameter_fn).call(this, new import_Parameter.default(description, key, buildDelegateExtractor(delegate, buildSerializer(serializer)), optional || __privateGet(this, _required)));
          return this;
        }
        /**
         * Adds a new parameter with a literal value.
         *
         * @param {string} description
         * @param {string} key
         * @param {*=} value
         * @param {boolean=} optional
         * @returns {ParametersBuilder}
         */
        withLiteralParameter(description, key, value, optional) {
          __privateMethod(this, _ParametersBuilder_instances, addParameter_fn).call(this, new import_Parameter.default(description, key, buildLiteralExtractor(value || key), optional || __privateGet(this, _required)));
          return this;
        }
        /**
         * Adds a new parameter that reads its value from the variable
         * on the request payload.
         *
         * @param {string} description
         * @param {string} key
         * @param {string} variable
         * @param {boolean=} optional
         * @param {Function=} serializer
         * @returns {ParametersBuilder}
         */
        withVariableParameter(description, key, variable, optional, serializer) {
          __privateMethod(this, _ParametersBuilder_instances, addParameter_fn).call(this, new import_Parameter.default(description, key, buildVariableExtractor(variable, buildSerializer(serializer)), optional || __privateGet(this, _required)));
          return this;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[ParametersBuilder]";
        }
      };
      _parameters = new WeakMap();
      _required = new WeakMap();
      _ParametersBuilder_instances = new WeakSet();
      addParameter_fn = function(parameter) {
        const items = __privateGet(this, _parameters).parameters.slice(0);
        items.push(parameter);
        __privateSet(this, _parameters, new import_Parameters.default(items));
      };
      function buildSerializer(serializer) {
        let returnRef;
        if (is.fn(serializer)) {
          returnRef = serializer;
        } else {
          returnRef = (x) => x;
        }
        return returnRef;
      }
      function buildDelegateExtractor(fn, serializer) {
        assert.argumentIsRequired(fn, "fn", Function);
        return async (payload) => {
          return serializer(fn(payload));
        };
      }
      function buildLiteralExtractor(value) {
        assert.argumentIsRequired(value, "value", String);
        return async () => value;
      }
      function buildVariableExtractor(variable, serializer) {
        assert.argumentIsRequired(variable, "variable", String);
        return buildDelegateExtractor((payload) => {
          if (is.object(payload) && attributes.has(payload, variable)) {
            return attributes.read(payload, variable);
          } else {
            return null;
          }
        }, serializer);
      }
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/ProtocolType.js
  var require_ProtocolType = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/ProtocolType.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ProtocolType_exports = {};
      __export(ProtocolType_exports, {
        default: () => ProtocolType
      });
      module.exports = __toCommonJS(ProtocolType_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_Enum = __toESM(require_Enum());
      var _defaultPort, _prefix;
      var _ProtocolType = class _ProtocolType extends import_Enum.default {
        /**
         * @param {string} code
         * @param {number} defaultPort
         * @param {string} prefix
         */
        constructor(code, defaultPort, prefix) {
          super(code, code);
          __privateAdd(this, _defaultPort);
          __privateAdd(this, _prefix);
          assert.argumentIsRequired(prefix, "prefix", String);
          assert.argumentIsValid(defaultPort, "defaultPort", (p) => is.integer(p) && !(p < 0 || p > 65535));
          __privateSet(this, _defaultPort, defaultPort);
          __privateSet(this, _prefix, prefix);
        }
        /**
         * Returns the default TCP port used by the protocol.
         *
         * @public
         * @returns {number}
         */
        get defaultPort() {
          return __privateGet(this, _defaultPort);
        }
        /**
         * Returns the prefix used to compose a URL.
         *
         * @public
         * @returns {string}
         */
        get prefix() {
          return __privateGet(this, _prefix);
        }
        /**
         * Returns the {@link ProtocolType} associated with a specific code.
         *
         * @public
         * @static
         * @param {string} code
         * @returns {ProtocolType|null}
         */
        static parse(code) {
          const value = import_Enum.default.fromCode(_ProtocolType, code);
          return value instanceof _ProtocolType ? value : null;
        }
        /**
         * HTTP.
         *
         * @static
         * @returns {ProtocolType}
         */
        static get HTTP() {
          return protocolTypeHttp;
        }
        /**
         * HTTPS.
         *
         * @static
         * @returns {ProtocolType}
         */
        static get HTTPS() {
          return protocolTypeHttps;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[ProtocolType (description=${this.description})]`;
        }
      };
      _defaultPort = new WeakMap();
      _prefix = new WeakMap();
      var ProtocolType = _ProtocolType;
      var protocolTypeHttp = new ProtocolType("HTTP", 80, "http://");
      var protocolTypeHttps = new ProtocolType("HTTPS", 443, "https://");
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/VerbType.js
  var require_VerbType = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/VerbType.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var VerbType_exports = {};
      __export(VerbType_exports, {
        default: () => VerbType
      });
      module.exports = __toCommonJS(VerbType_exports);
      var import_Enum = __toESM(require_Enum());
      var VerbType = class extends import_Enum.default {
        /**
         * @param {string} description
         */
        constructor(description) {
          super(description, description);
        }
        /**
         * DELETE.
         *
         * @static
         * @returns {VerbType}
         */
        static get DELETE() {
          return verbTypeDelete;
        }
        /**
         * GET.
         *
         * @static
         * @returns {VerbType}
         */
        static get GET() {
          return verbTypeGet;
        }
        /**
         * POST.
         *
         * @static
         * @returns {VerbType}
         */
        static get POST() {
          return verbTypePost;
        }
        /**
         * PUT.
         *
         * @static
         * @returns {VerbType}
         */
        static get PUT() {
          return verbTypePut;
        }
        /**
         * PATCH.
         *
         * @static
         * @returns {VerbType}
         */
        static get PATCH() {
          return verbTypePatch;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[VerbType (description=${this.description})]`;
        }
      };
      var verbTypeDelete = new VerbType("DELETE");
      var verbTypeGet = new VerbType("GET");
      var verbTypePost = new VerbType("POST");
      var verbTypePut = new VerbType("PUT");
      var verbTypePatch = new VerbType("PATCH");
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureType.js
  var require_FailureType = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureType.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var FailureType_exports = {};
      __export(FailureType_exports, {
        default: () => FailureType
      });
      module.exports = __toCommonJS(FailureType_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_Enum = __toESM(require_Enum());
      var _template, _severe, _error, _verbose;
      var _FailureType = class _FailureType extends import_Enum.default {
        /**
         * @param {string} code - The enumeration code (and description).
         * @param {string} template - The template string for formatting human-readable messages.
         * @param {boolean=} severe - Indicates if the failure is severe (default is true).
         * @param {number=} error - The HTTP error code which should be used as part of an HTTP response.
         * @param {boolean=} verbose - Indicates if data object should be included when serialized.
         */
        constructor(code, template, severe, error, verbose) {
          super(code, code);
          __privateAdd(this, _template);
          __privateAdd(this, _severe);
          __privateAdd(this, _error);
          __privateAdd(this, _verbose);
          assert.argumentIsRequired(template, "template", String);
          assert.argumentIsOptional(severe, "severe", Boolean);
          assert.argumentIsOptional(error, "error", Number);
          assert.argumentIsOptional(verbose, "verbose", Boolean);
          __privateSet(this, _template, template);
          if (is.boolean(severe)) {
            __privateSet(this, _severe, severe);
          } else {
            __privateSet(this, _severe, true);
          }
          __privateSet(this, _error, error || null);
          __privateSet(this, _verbose, verbose || false);
        }
        /**
         * The template string for formatting human-readable messages.
         *
         * @public
         * @returns {string}
         */
        get template() {
          return __privateGet(this, _template);
        }
        /**
         * Indicates if the failure is serious.
         *
         * @public
         * @return {boolean}
         */
        get severe() {
          return __privateGet(this, _severe);
        }
        /**
         * The HTTP error code which should be used as part of an HTTP response.
         *
         * @public
         * @return {number|null}
         */
        get error() {
          return __privateGet(this, _error);
        }
        /**
         * Indicates if data object should be included when serialized.
         *
         * @public
         * @return {boolean}
         */
        get verbose() {
          return __privateGet(this, _verbose);
        }
        /**
         * One or more data points is missing.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_CONSTRUCTION_FAILURE() {
          return requestConstructionFailure;
        }
        /**
         * A data point is missing.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_PARAMETER_MISSING() {
          return requestParameterMissing;
        }
        /**
         * A data point is malformed.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_PARAMETER_MALFORMED() {
          return requestParameterMalformed;
        }
        /**
         * User identity could not be determined.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_IDENTITY_FAILURE() {
          return requestIdentifyFailure;
        }
        /**
         * User authorization failed.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_AUTHORIZATION_FAILURE() {
          return requestAuthorizationFailure;
        }
        /**
         * The request data cannot be parsed or interpreted.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_INPUT_MALFORMED() {
          return requestInputMalformed;
        }
        /**
         * The request failed for unspecified reasons.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get SCHEMA_VALIDATION_FAILURE() {
          return schemaValidationFailure;
        }
        /**
         * The request failed for unspecified reasons.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get REQUEST_GENERAL_FAILURE() {
          return requestGeneralFailure;
        }
        /**
         * Insufficient permission level to access the resource.
         *
         * @public
         * @static
         * @returns {FailureType}
         */
        static get ENTITLEMENTS_FAILED() {
          return entitlementsFailed;
        }
        /**
         * Returns an HTTP status code that would be suitable for use with the
         * failure type.
         *
         * @public
         * @static
         * @param {FailureType} type
         * @returns {number}
         */
        static getHttpStatusCode(type) {
          assert.argumentIsRequired(type, "type", _FailureType, "FailureType");
          let returnVal;
          if (type === _FailureType.REQUEST_IDENTITY_FAILURE) {
            returnVal = 401;
          } else if (type === _FailureType.REQUEST_AUTHORIZATION_FAILURE) {
            returnVal = 403;
          } else {
            returnVal = 400;
          }
          return returnVal;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[FailureType (code=${this.code})]`;
        }
      };
      _template = new WeakMap();
      _severe = new WeakMap();
      _error = new WeakMap();
      _verbose = new WeakMap();
      var FailureType = _FailureType;
      var requestConstructionFailure = new FailureType("REQUEST_CONSTRUCTION_FAILURE", "An attempt to {L|root.endpoint.description} failed because some required information is missing.");
      var requestParameterMissing = new FailureType("REQUEST_PARAMETER_MISSING", 'The "{L|name}" field is required.');
      var requestParameterMalformed = new FailureType("REQUEST_PARAMETER_MALFORMED", 'The "{L|name}" field cannot be interpreted.');
      var requestIdentifyFailure = new FailureType("REQUEST_IDENTITY_FAILURE", "An attempt to {L|root.endpoint.description} failed because your identity could not be determined.");
      var requestAuthorizationFailure = new FailureType("REQUEST_AUTHORIZATION_FAILURE", "An attempt to {L|root.endpoint.description} failed. You are not authorized to perform this action.");
      var requestInputMalformed = new FailureType("REQUEST_INPUT_MALFORMED", "An attempt to {L|root.endpoint.description} failed, the data structure is invalid.");
      var schemaValidationFailure = new FailureType("SCHEMA_VALIDATION_FAILURE", 'An attempt to read {U|schema} data failed (found "{L|key}" when expecting "{L|name}")');
      var requestGeneralFailure = new FailureType("REQUEST_GENERAL_FAILURE", "An attempt to {L|root.endpoint.description} failed for unspecified reason(s).");
      var entitlementsFailed = new FailureType("ENTITLEMENTS_FAILED", "Action blocked. The current user requires elevated permissions or the current user has exceeded a quota.", false, 403, true);
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureReasonItem.js
  var require_FailureReasonItem = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureReasonItem.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var FailureReasonItem_exports = {};
      __export(FailureReasonItem_exports, {
        default: () => FailureReasonItem
      });
      module.exports = __toCommonJS(FailureReasonItem_exports);
      var assert = __toESM(require_assert());
      var attributes = __toESM(require_attributes());
      var import_FailureType = __toESM(require_FailureType());
      var _type, _data;
      var FailureReasonItem = class {
        /**
         * @param {FailureType} type
         * @param {object=} data
         */
        constructor(type, data) {
          __privateAdd(this, _type);
          __privateAdd(this, _data);
          assert.argumentIsRequired(type, "type", import_FailureType.default, "FailureType");
          __privateSet(this, _type, type);
          __privateSet(this, _data, data || null);
        }
        /**
         * The {@link FailureType} of the item.
         *
         * @public
         * @returns {FailureType}
         */
        get type() {
          return __privateGet(this, _type);
        }
        /**
         * The data.
         *
         * @public
         * @return {object}
         */
        get data() {
          return __privateGet(this, _data);
        }
        /**
         * Formats a human-readable message, describing the failure.
         *
         * @public
         * @param {object=} root - Root data from the {@link FailureReason}.
         * @returns {string}
         */
        format(root) {
          return __privateGet(this, _type).template.replace(tokenRegex, (full, ignored, casing, token) => {
            let tokenToUse;
            let dataToRead;
            if (token.startsWith(rootPrefix)) {
              tokenToUse = token.slice(rootLength);
              dataToRead = root;
            } else {
              tokenToUse = token;
              dataToRead = __privateGet(this, _data);
            }
            let replacement = attributes.read(dataToRead, tokenToUse);
            if (replacement) {
              if (casing === "l") {
                replacement = `${replacement.slice(0, 1).toLowerCase()}${replacement.slice(1)}`;
              } else if (casing === "u") {
                replacement = `${replacement.slice(0, 1).toUpperCase()}${replacement.slice(1)}`;
              } else if (casing === "U") {
                replacement = `${replacement.toUpperCase()}`;
              } else if (casing === "L") {
                replacement = `${replacement.toLowerCase()}`;
              }
            }
            return replacement;
          });
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[FailureReasonItem]";
        }
      };
      _type = new WeakMap();
      _data = new WeakMap();
      var tokenRegex = /{(([U|L|l|u])\|)?([a-zA-Z.]*)}/g;
      var rootPrefix = "root.";
      var rootLength = rootPrefix.length;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/functions.js
  var require_functions = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/functions.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var functions_exports = {};
      __export(functions_exports, {
        getEmpty: () => getEmpty,
        getTautology: () => getTautology
      });
      module.exports = __toCommonJS(functions_exports);
      function tautology(x) {
        return x;
      }
      function empty() {
        return;
      }
      function getTautology() {
        return tautology;
      }
      function getEmpty() {
        return empty;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/collections/LinkedList.js
  var require_LinkedList = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/collections/LinkedList.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var LinkedList_exports = {};
      __export(LinkedList_exports, {
        default: () => LinkedList
      });
      module.exports = __toCommonJS(LinkedList_exports);
      var _value, _next;
      var _LinkedList = class _LinkedList {
        /**
         * @param {*} value - The value of current node.
         */
        constructor(value) {
          __privateAdd(this, _value);
          __privateAdd(this, _next);
          __privateSet(this, _value, value);
          __privateSet(this, _next, null);
        }
        /**
         * Returns the value associated with the current node.
         *
         * @public
         * @returns {*}
         */
        getValue() {
          return __privateGet(this, _value);
        }
        /**
         * Returns the next node, if it exists; otherwise a null value is returned.
         *
         * @public
         * @returns {LinkedList|null}
         */
        getNext() {
          return __privateGet(this, _next);
        }
        /**
         * Returns true, if the node is the last one in the list.
         *
         * @public
         * @returns {boolean}
         */
        getIsTail() {
          return __privateGet(this, _next) === null;
        }
        /**
         * Adds (or inserts) a value after the current node and returns
         * the newly added node.
         *
         * @public
         * @param {*} value
         * @returns {LinkedList}
         */
        insert(value) {
          const next = new _LinkedList(value);
          if (__privateGet(this, _next)) {
            __privateSet(next, _next, __privateGet(this, _next));
          }
          __privateSet(this, _next, next);
          return next;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[LinkedList]";
        }
      };
      _value = new WeakMap();
      _next = new WeakMap();
      var LinkedList = _LinkedList;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/collections/Tree.js
  var require_Tree = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/collections/Tree.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Tree_exports = {};
      __export(Tree_exports, {
        default: () => Tree
      });
      module.exports = __toCommonJS(Tree_exports);
      var is = __toESM(require_is());
      var Tree = class _Tree {
        /**
         * @param {*} value - The value of the node.
         * @param {Tree=} parent - The parent node. If not supplied, this will be the root node.
         */
        constructor(value, parent) {
          this._value = value;
          this._parent = parent || null;
          this._children = [];
        }
        /**
         * Gets the root node.
         *
         * @public
         * @returns {Tree}
         */
        getRoot() {
          if (this.getIsRoot()) {
            return this;
          } else {
            return this._parent.getRoot();
          }
        }
        /**
         * Returns the parent node. If this is the root node, a null value is returned.
         *
         * @public
         * @returns {Tree|null}
         */
        getParent() {
          return this._parent;
        }
        /**
         * Returns the collection of children nodes.
         *
         * @public
         * @returns {Array<Tree>}
         */
        getChildren() {
          return this._children;
        }
        /**
         * Returns the value associated with the current node.
         *
         * @public
         * @returns {*}
         */
        getValue() {
          return this._value;
        }
        /**
         * Returns true if this node has no children; otherwise false.
         *
         * @public
         * @returns {boolean}
         */
        getIsLeaf() {
          return this._children.length === 0;
        }
        /**
         * Returns true if this node has children; otherwise false.
         *
         * @public
         * @returns {boolean}
         */
        getIsInner() {
          return this._children.length !== 0;
        }
        /**
         * Returns true if this node has no parent; otherwise false.
         *
         * @public
         * @returns {boolean}
         */
        getIsRoot() {
          return this._parent === null;
        }
        /**
         * Adds a child node to the current node and returns a reference
         * to the child node.
         *
         * @public
         * @param {*} value - The value of the child.
         * @returns {Tree}
         */
        addChild(value) {
          const returnRef = new _Tree(value, this);
          this._children.push(returnRef);
          return returnRef;
        }
        /**
         * Removes a child node.
         *
         * @public
         * @param {Tree} node - The child to remove.
         */
        removeChild(node) {
          for (let i = this._children.length - 1; !(i < 0); i--) {
            const child = this._children[i];
            if (child === node) {
              this._children.splice(i, 1);
              child._parent = null;
              child._children = [];
              break;
            }
          }
        }
        /**
         * Removes the current node from the parent tree. Use on a root node
         * has no effect.
         *
         * @public
         */
        sever() {
          if (this.getIsRoot()) {
            return;
          }
          this.getParent().removeChild(this);
        }
        /**
         * Searches the children nodes for the first child node that matches the
         * predicate.
         *
         * @public
         * @param {nodePredicate} predicate - A predicate that tests each child node. The predicate takes two arguments -- the node's value, and the node itself.
         * @returns {Tree|null}
         */
        findChild(predicate) {
          let returnRef = null;
          for (let i = 0; i < this._children.length; i++) {
            let child = this._children[i];
            if (predicate(child.getValue(), child)) {
              returnRef = child;
              break;
            }
          }
          return returnRef;
        }
        /**
         * Searches the tree recursively, starting with the current node.
         *
         * @public
         * @param {nodePredicate} predicate - A predicate that tests each child node. The predicate takes two arguments -- the node's value, and the node itself.
         * @param {boolean=} parentFirst - If true, the tree will be searched from parent-to-child (breadth first). Otherwise, child-to-parent (depth first).
         * @param {boolean=} includeCurrentNode - True, if the current node should be checked against the predicate.
         * @returns {Tree|null}
         */
        search(predicate, parentFirst, includeCurrentNode) {
          let returnRef = null;
          if (parentFirst && includeCurrentNode && predicate(this.getValue(), this)) {
            returnRef = this;
          }
          if (returnRef === null) {
            for (let i = 0; i < this._children.length; i++) {
              const child = this._children[i];
              returnRef = child.search(predicate, parentFirst, true);
              if (returnRef !== null) {
                break;
              }
            }
          }
          if (returnRef === null && !parentFirst && includeCurrentNode && predicate(this.getValue(), this)) {
            returnRef = this;
          }
          return returnRef;
        }
        /**
         * Walks the children of the current node, running an action on each node.
         *
         * @public
         * @param {nodeAction} walkAction - A action to apply to each node. The action takes two arguments -- the node's value, and the node itself.
         * @param {boolean=} parentFirst - If true, the tree will be searched from parent-to-child (breadth first). Otherwise, child-to-parent (depth first).
         * @param {boolean=} includeCurrentNode - True if the current node should be applied to the action.
         */
        walk(walkAction, parentFirst, includeCurrentNode) {
          const predicate = (value, node) => {
            walkAction(value, node);
            return false;
          };
          this.search(predicate, parentFirst, includeCurrentNode);
        }
        /**
         * Returns the count of all descendant nodes by walking the tree. Consequently, this
         * function is not efficient.
         *
         * @public
         * @returns {number}
         */
        count() {
          let count = 0;
          this.walk(() => count++, true, true);
          return count;
        }
        /**
         * Climbs the parents of the current node -- current node up to the root node, running an action on each node.
         *
         * @public
         * @param {nodeAction} climbAction - A action to apply to each node. The action takes two arguments -- the node's value, and the node itself.
         * @param {boolean=} includeCurrentNode - True if the current node should be applied to the action.
         */
        climb(climbAction, includeCurrentNode) {
          if (includeCurrentNode) {
            climbAction(this.getValue(), this);
          }
          if (this._parent !== null) {
            this._parent.climb(climbAction, true);
          }
        }
        /**
         * Climbs the tree, evaluating each parent until a predicate is matched. Once matched,
         * the {@link Tree} node is returned. Otherwise, if the predicate cannot be matched,
         * a null value is returned.
         *
         * @public
         * @param {nodePredicate} predicate - A predicate that tests each child node. The predicate takes two arguments -- the node's value, and the node itself.
         * @param {boolean=} includeCurrentNode - If true, the predicate will be applied to the current node.
         * @returns {Tree|null}
         */
        findParent(predicate, includeCurrentNode) {
          let returnRef;
          if (is.boolean(includeCurrentNode) && includeCurrentNode && predicate(this.getValue(), this)) {
            returnRef = this;
          } else if (this._parent !== null) {
            returnRef = this._parent.findParent(predicate, true);
          } else {
            returnRef = null;
          }
          return returnRef;
        }
        /**
         * Creates a representation of the tree using JavaScript objects and arrays.
         *
         * @public
         * @param {Function=} valueConverter - An optional function for converting the value of each node.
         * @param {boolean=} omitEmptyChildren - If true, empty children arrays will be excluded from output.
         * @returns {object}
         */
        toJSObj(valueConverter, omitEmptyChildren) {
          let valueConverterToUse;
          if (is.fn(valueConverter)) {
            valueConverterToUse = valueConverter;
          } else {
            valueConverterToUse = (x) => x;
          }
          const converted = {
            value: valueConverterToUse(this._value)
          };
          if (!(is.boolean(omitEmptyChildren) && omitEmptyChildren && this._children.length === 0)) {
            converted.children = this._children.map((child) => child.toJSObj(valueConverter, omitEmptyChildren));
          }
          return converted;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Tree]";
        }
      };
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Schema.js
  var require_Schema = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Schema.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Schema_exports = {};
      __export(Schema_exports, {
        default: () => Schema
      });
      module.exports = __toCommonJS(Schema_exports);
      var attributes = __toESM(require_attributes());
      var functions = __toESM(require_functions());
      var is = __toESM(require_is());
      var import_LinkedList = __toESM(require_LinkedList());
      var import_Tree = __toESM(require_Tree());
      var _name, _fields, _components, _strict, _revivers;
      var Schema = class {
        /**
         * @param {string} name - The name of the schema
         * @param {Field[]=} fields
         * @param {Component[]=} components
         * @param {boolean=} strict
         */
        constructor(name, fields, components, strict) {
          __privateAdd(this, _name);
          __privateAdd(this, _fields);
          __privateAdd(this, _components);
          __privateAdd(this, _strict);
          __privateAdd(this, _revivers);
          __privateSet(this, _name, name);
          __privateSet(this, _fields, fields || []);
          __privateSet(this, _components, components || []);
          __privateSet(this, _strict, is.boolean(strict) && strict);
          __privateSet(this, _revivers, getReviverItems(__privateGet(this, _fields), __privateGet(this, _components)));
        }
        /**
         * Accepts data and returns a new object which (should) conform to
         * the schema.
         *
         * @public
         * @param {object} data
         * @returns {object}
         */
        format(data) {
          const returnRef = {};
          __privateGet(this, _fields).forEach((field) => {
            formatField(returnRef, field, data);
          });
          __privateGet(this, _components).forEach((component) => {
            component.fields.forEach((field) => {
              formatField(returnRef, field, data);
            });
          });
          return returnRef;
        }
        /**
         * Name of the table.
         *
         * @public
         * @returns {string}
         */
        get name() {
          return __privateGet(this, _name);
        }
        /**
         * The fields of the table.
         *
         * @public
         * @returns {Array<Field>}
         */
        get fields() {
          return [...__privateGet(this, _fields)];
        }
        /**
         * The components of the table.
         *
         * @public
         * @returns {Array<Component>}
         */
        get components() {
          return [...__privateGet(this, _components)];
        }
        /**
         * If true, only the explicitly defined fields and components will
         * be serialized.
         *
         * @public
         * @returns {boolean}
         */
        get strict() {
          return __privateGet(this, _strict);
        }
        /**
         * Returns true, if an object complies with the schema.
         *
         * @public
         * @param {*} candidate
         * @returns {boolean}
         */
        validate(candidate) {
          return !getCandidateIsInvalid(candidate) && this.getInvalidFields(candidate).length === 0;
        }
        /**
         * Returns an array of {@link Field} objects from the schema for which the
         * candidate object does not comply with.
         *
         * @public
         * @param {*} candidate
         * @returns {Field[]}
         */
        getInvalidFields(candidate) {
          if (getCandidateIsInvalid(candidate)) {
            return this.fields.filter((f) => !f.optional);
          }
          return this.fields.reduce((problems, field) => {
            let check = !field.optional || attributes.has(candidate, field.name);
            if (check) {
              const valid = field.dataType.validator.call(this, attributes.read(candidate, field.name));
              if (!valid) {
                problems.push(field);
              }
            }
            return problems;
          }, []);
        }
        /**
         * Generates a function suitable for use by {@link JSON.parse}.
         *
         * @public
         * @returns {Function}
         */
        getReviver() {
          let head = __privateGet(this, _revivers);
          let node = null;
          const advance = (key) => {
            const previous = node;
            if (node === null) {
              node = head;
            } else {
              node = node.getNext();
            }
            const item = node.getValue();
            if (key === item.name) {
              return item;
            } else if (item.reset || key === "" && node === head) {
              node = null;
              return item;
            } else if (item.array && is.integer(parseInt(key))) {
              node = previous;
              return item;
            } else if (item.optional) {
              return advance(key);
            } else {
              throw new SchemaError(key, item.name, `Schema parsing is using strict mode, unexpected key found [ found: ${key}, expected: ${item.name} ]`);
            }
          };
          return (key, value) => {
            const item = advance(key);
            if (key === "" || item.array && key === item.name) {
              return value;
            } else {
              return item.reviver(value);
            }
          };
        }
        /**
         * Returns a function that will generate a *new* reviver function
         * (see {@link Schema#getReviver}).
         *
         * @public
         * @returns {Function}
         */
        getReviverFactory() {
          return () => this.getReviver();
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Schema (name=${__privateGet(this, _name)})]`;
        }
      };
      _name = new WeakMap();
      _fields = new WeakMap();
      _components = new WeakMap();
      _strict = new WeakMap();
      _revivers = new WeakMap();
      var SchemaError = class extends Error {
        constructor(key, name, message) {
          super(message);
          this.key = key;
          this.name = name;
        }
        toString() {
          return `[SchemaError]`;
        }
      };
      var _name2, _reviver, _optional, _reset, _array;
      var ReviverItem = class {
        constructor(name, reviver, optional, reset, array) {
          __privateAdd(this, _name2);
          __privateAdd(this, _reviver);
          __privateAdd(this, _optional);
          __privateAdd(this, _reset);
          __privateAdd(this, _array);
          __privateSet(this, _name2, name);
          __privateSet(this, _reviver, reviver || functions.getTautology());
          __privateSet(this, _optional, is.boolean(optional) && optional);
          __privateSet(this, _reset, is.boolean(reset) && reset);
          __privateSet(this, _array, is.boolean(array) && array);
        }
        get name() {
          return __privateGet(this, _name2);
        }
        get reviver() {
          return __privateGet(this, _reviver);
        }
        get optional() {
          return __privateGet(this, _optional);
        }
        get reset() {
          return __privateGet(this, _reset);
        }
        get array() {
          return __privateGet(this, _array);
        }
      };
      _name2 = new WeakMap();
      _reviver = new WeakMap();
      _optional = new WeakMap();
      _reset = new WeakMap();
      _array = new WeakMap();
      function getReviverItems(fields, components) {
        const root = new import_Tree.default(new ReviverItem(null, null, false, true));
        fields.forEach((field) => {
          const names = field.name.split(".");
          let node = root;
          names.forEach((name, i) => {
            if (names.length === i + 1) {
              node.addChild(new ReviverItem(name, field.dataType.reviver, field.optional, false, field.array));
            } else {
              let child = node.findChild((n) => n.name === name);
              if (!child) {
                child = node.addChild(new ReviverItem(name));
              }
              node = child;
            }
          });
        });
        components.forEach((component) => {
          let node = root;
          const names = component.name.split(".");
          names.forEach((name, i) => {
            if (names.length === i + 1) {
              node = node.addChild(new ReviverItem(name, component.reviver));
            } else {
              let child = node.findChild((n) => n.name === name);
              if (!child) {
                child = node.addChild(new ReviverItem(name));
              }
              node = child;
            }
          });
          component.fields.forEach((f) => node.addChild(new ReviverItem(f.name, f.dataType.reviver)));
        });
        let head = null;
        let current = null;
        const addItemToList = (item, node) => {
          let itemToUse = item;
          if (!node.getIsLeaf()) {
            const required = node.search((i, n) => n.getIsLeaf() && !i.optional, true, false) !== null;
            if (!required) {
              itemToUse = new ReviverItem(item.name, item.reviver, true, item.reset, item.array);
            }
          } else {
            itemToUse = item;
          }
          if (current === null) {
            current = head = new import_LinkedList.default(itemToUse);
          } else {
            current = current.insert(itemToUse);
          }
        };
        root.walk(addItemToList, false, true);
        return head;
      }
      function formatField(target, field, data) {
        if (attributes.has(data, field.name)) {
          attributes.write(target, field.name, field.dataType.convert(attributes.read(data, field.name)));
        }
      }
      function getCandidateIsInvalid(candidate) {
        return is.undef(candidate) || is.nil(candidate) || !is.object(candidate);
      }
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureReason.js
  var require_FailureReason = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/failures/FailureReason.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var FailureReason_exports = {};
      __export(FailureReason_exports, {
        default: () => FailureReason
      });
      module.exports = __toCommonJS(FailureReason_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_FailureReasonItem = __toESM(require_FailureReasonItem());
      var import_FailureType = __toESM(require_FailureType());
      var import_Schema = __toESM(require_Schema());
      var import_Tree = __toESM(require_Tree());
      var _data, _root, _current;
      var _FailureReason = class _FailureReason {
        /**
         * @param {object=} data - Data regarding the API request itself, likely independent of the failure data maintained in the tree structure.
         */
        constructor(data) {
          __privateAdd(this, _data);
          __privateAdd(this, _root);
          __privateAdd(this, _current);
          __privateSet(this, _data, data || null);
          __privateSet(this, _root, new import_Tree.default(null));
          __privateSet(this, _current, __privateGet(this, _root));
        }
        /**
         * Adds a {@link FailureReasonItem} to the tree of reasons at the current node.
         *
         * @public
         * @param {FailureType} type - The failure type.
         * @param {object=} data - The data associated with the failure type.
         * @param {boolean=} group - Whether the newly added item is expected to have children.
         * @returns {FailureReason} The current instance, allowing for method chaining.
         */
        addItem(type, data, group) {
          assert.argumentIsRequired(type, "type", import_FailureType.default, "FailureType");
          assert.argumentIsOptional(group, "group", Boolean);
          const node = __privateGet(this, _current).addChild(new import_FailureReasonItem.default(type, data));
          if (is.boolean(group) && group) {
            __privateSet(this, _current, node);
          }
          return this;
        }
        /**
         * Resets the current node to the head of the tree.
         *
         * @public
         * @param {boolean=} previous
         * @returns {FailureReason} The current instance, allowing for method chaining.
         */
        reset(previous) {
          assert.argumentIsOptional(previous, "previous", Boolean);
          let node;
          if (previous && __privateGet(this, _current).getIsInner()) {
            node = __privateGet(this, _current).getParent();
          } else {
            node = __privateGet(this, _root);
          }
          __privateSet(this, _current, node);
          return this;
        }
        /**
         * Returns a tree of strings describing the reasons for API failure.
         *
         * @public
         * @returns {Array}
         */
        format() {
          const reasons = __privateGet(this, _root).toJSObj((item) => {
            const formatted = {};
            formatted.code = item ? item.type.code : null;
            formatted.message = item ? item.format(__privateGet(this, _data)) : null;
            if (item && item.type.verbose) {
              formatted.data = item.data;
            }
            return formatted;
          }, true);
          return reasons.children;
        }
        /**
         * Indicates whether the tree of {@link FailureReasonItem} instances
         * contains at least one item with a matching {@link FailureType}.
         *
         * @public
         * @param {FailureType} type
         * @returns {boolean}
         */
        hasFailureType(type) {
          assert.argumentIsRequired(type, "type", import_FailureType.default, "FailureType");
          return __privateGet(this, _root).search((item) => item.type === type, false, false) !== null;
        }
        /**
         * Indicates whether the tree of {@link FailureReasonItem} instances
         * contains at least one item considered severe.
         *
         * @public
         * @returns {boolean}
         */
        getIsSevere() {
          return __privateGet(this, _root).search((item) => item.type.severe, false, false) !== null;
        }
        /**
         * Searches the tree of {@link FailureReasonItem} instances for a
         * non-standard HTTP error code.
         *
         * @public
         * @returns {number|null}
         */
        getErrorCode() {
          const node = __privateGet(this, _root).search((item) => item.type.error !== null, true, false);
          if (node === null) {
            return null;
          }
          return node.getValue().type.error;
        }
        /**
         * A convenience function for creating a new {@link FailureReason}
         * with a single {@link FailureType}.
         *
         * @public
         * @static
         * @param {FailureType} type
         * @param {object=} data
         * @returns {FailureReason}
         */
        static from(type, data) {
          const reason = new _FailureReason();
          return reason.addItem(type, data);
        }
        /**
         * Factory function for creating instances of {@link FailureReason}.
         *
         * @public
         * @static
         * @param {object=} data
         * @returns {FailureReason}
         */
        static forRequest(data) {
          return new _FailureReason(data);
        }
        /**
         * Returns a JSON representation of the failure reason.
         *
         * @public
         * @returns {Array}
         */
        toJSON() {
          return this.format();
        }
        /**
         * Returns an HTTP status code suitable for use with the failure reason.
         *
         * @public
         * @static
         * @param {FailureReason} reason
         * @returns {number|null}
         */
        static getHttpStatusCode(reason) {
          assert.argumentIsRequired(reason, "reason", _FailureReason, "FailureReason");
          let returnValue = null;
          __privateGet(reason, _root).walk((item) => {
            const code = import_FailureType.default.getHttpStatusCode(item.type);
            if (returnValue === null || returnValue !== 400) {
              returnValue = code;
            }
          }, false, false);
          return returnValue;
        }
        /**
         * Validates that a candidate conforms to a schema, returning a rejected
         * promise with a serialized {@link FailureReason} if a problem exists.
         *
         * The schema argument can be either a {@link Schema} instance or an
         * {@link Enum} instance that exposes a Schema through its schema property.
         *
         * @public
         * @static
         * @async
         * @param {Schema|EnumWithSchema} schema
         * @param {object} candidate
         * @param {string=} description
         * @returns {Promise<null>}
         */
        static async validateSchema(schema, candidate, description) {
          let schemaToUse;
          if (schema instanceof import_Schema.default) {
            schemaToUse = schema;
          } else if (schema.schema && schema.schema instanceof import_Schema.default) {
            schemaToUse = schema.schema;
          } else {
            throw new TypeError("The schema argument must be a Schema instance or an Enum instance containing a Schema.");
          }
          const fields = schemaToUse.getInvalidFields(candidate);
          if (fields.length === 0) {
            return null;
          }
          let failure = _FailureReason.forRequest({ endpoint: { description: description || `serialize data into ${schemaToUse.name}` } }).addItem(import_FailureType.default.REQUEST_INPUT_MALFORMED, {}, true);
          failure = fields.reduce((accumulator, field) => {
            accumulator.addItem(import_FailureType.default.REQUEST_PARAMETER_MALFORMED, { name: field.name });
            return accumulator;
          }, failure);
          throw failure.format();
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[FailureReason]";
        }
      };
      _data = new WeakMap();
      _root = new WeakMap();
      _current = new WeakMap();
      var FailureReason = _FailureReason;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/ErrorInterceptor.js
  var require_ErrorInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/ErrorInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ErrorInterceptor_exports = {};
      __export(ErrorInterceptor_exports, {
        default: () => ErrorInterceptor
      });
      module.exports = __toCommonJS(ErrorInterceptor_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_FailureReason = __toESM(require_FailureReason());
      var import_FailureType = __toESM(require_FailureType());
      var ErrorInterceptor = class {
        constructor() {
        }
        /**
         * Adjusts incoming error before the response is forwarded
         * back to the original caller.
         *
         * @public
         * @async
         * @param {object} error
         * @param {Endpoint} endpoint - The endpoint which is originating the request.
         * @returns {Promise<*>}
         */
        async process(error, endpoint) {
          return this._onProcess(error, endpoint);
        }
        /**
         * @protected
         * @async
         * @param {object} error
         * @param {Endpoint} endpoint
         * @returns {Promise<*>}
         */
        async _onProcess(error, endpoint) {
          throw error;
        }
        /**
         * A no-op error interceptor which rejects using raw response data.
         *
         * @public
         * @static
         * @returns {ErrorInterceptor}
         */
        static get EMPTY() {
          return errorInterceptorEmpty;
        }
        /**
         * An error interceptor that handles most server-side issues and rejects
         * using formatted {@link FailureReason} when an error is detected.
         *
         * @public
         * @static
         * @returns {ErrorInterceptor}
         */
        static get GENERAL() {
          return errorInterceptorGeneral;
        }
        /**
         * Returns a new {@link ErrorInterceptor} which delegates its work to another function.
         *
         * @public
         * @static
         * @param {Function} delegate
         * @returns {ErrorInterceptor}
         */
        static fromDelegate(delegate) {
          return new DelegateErrorInterceptor(delegate);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[ErrorInterceptor]";
        }
      };
      var _delegate;
      var DelegateErrorInterceptor = class extends ErrorInterceptor {
        /**
         * @param {Function} delegate
         */
        constructor(delegate) {
          super();
          __privateAdd(this, _delegate);
          assert.argumentIsRequired(delegate, "delegate", Function);
          __privateSet(this, _delegate, delegate);
        }
        /**
         * @protected
         * @override
         * @param {object} error
         * @param {Endpoint} endpoint
         * @returns {*}
         */
        _onProcess(error, endpoint) {
          return __privateGet(this, _delegate).call(this, error, endpoint);
        }
        toString() {
          return "[DelegateErrorInterceptor]";
        }
      };
      _delegate = new WeakMap();
      var errorInterceptorEmpty = new ErrorInterceptor();
      var errorInterceptorGeneral = new DelegateErrorInterceptor(async (error, endpoint) => {
        const response = error.response;
        let rejection = null;
        if (is.object(response) && is.object(response.headers) && response.headers["content-type"] === "application/json") {
          let deserialized = null;
          if (is.object(response.data)) {
            deserialized = response.data;
          } else {
            try {
              deserialized = JSON.parse(response.data);
            } catch (e) {
              deserialized = null;
            }
          }
          if (deserialized !== null) {
            rejection = deserialized;
          }
        }
        if (rejection === null && is.undef(response) && error.message === "Network Error") {
          rejection = import_FailureReason.default.forRequest({ endpoint }).addItem(import_FailureType.default.REQUEST_AUTHORIZATION_FAILURE).format();
        }
        if (rejection === null) {
          rejection = import_FailureReason.default.forRequest({ endpoint }).addItem(import_FailureType.default.REQUEST_GENERAL_FAILURE).format();
        }
        throw rejection;
      });
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/RequestInterceptor.js
  var require_RequestInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/RequestInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var RequestInterceptor_exports = {};
      __export(RequestInterceptor_exports, {
        default: () => RequestInterceptor
      });
      module.exports = __toCommonJS(RequestInterceptor_exports);
      var assert = __toESM(require_assert());
      var RequestInterceptor = class {
        constructor() {
        }
        /**
         * Adjusts outgoing requests data before the request is transmitted.
         *
         * @public
         * @async
         * @param {object} request
         * @param {Endpoint} endpoint - The endpoint which is originating the request.
         * @returns {Promise<*>}
         */
        async process(request, endpoint) {
          return this._onProcess(request, endpoint);
        }
        /**
         * @protected
         * @param {object} request
         * @param {Endpoint} endpoint
         * @returns {*}
         */
        _onProcess(request, endpoint) {
          return request;
        }
        /**
         * A no-op request interceptor.
         *
         * @public
         * @static
         * @returns {RequestInterceptor}
         */
        static get EMPTY() {
          return requestInterceptorEmpty;
        }
        /**
         * Returns a new {@link RequestInterceptor} which delegates its work to another function.
         *
         * @public
         * @static
         * @param {Function} delegate
         * @returns {RequestInterceptor}
         */
        static fromDelegate(delegate) {
          return new DelegateRequestInterceptor(delegate);
        }
        /**
         * A request interceptor that instructs the framework to skip parsing
         * of the response's data.
         *
         * @public
         * @static
         * @returns {RequestInterceptor}
         */
        static get PLAIN_TEXT_RESPONSE() {
          return requestInterceptorPlain;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[RequestInterceptor]";
        }
      };
      var _delegate;
      var DelegateRequestInterceptor = class extends RequestInterceptor {
        /**
         * @param {Function} delegate
         */
        constructor(delegate) {
          super();
          __privateAdd(this, _delegate);
          assert.argumentIsRequired(delegate, "delegate", Function);
          __privateSet(this, _delegate, delegate);
        }
        /**
         * @protected
         * @override
         * @param {object} request
         * @param {Endpoint} endpoint
         * @returns {*}
         */
        _onProcess(request, endpoint) {
          return __privateGet(this, _delegate).call(this, request, endpoint);
        }
        toString() {
          return "[DelegateRequestInterceptor]";
        }
      };
      _delegate = new WeakMap();
      var requestInterceptorEmpty = new RequestInterceptor();
      var requestInterceptorPlain = new DelegateRequestInterceptor((request) => {
        request.transformResponse = (data) => data;
        return request;
      });
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/ResponseInterceptor.js
  var require_ResponseInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/ResponseInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ResponseInterceptor_exports = {};
      __export(ResponseInterceptor_exports, {
        default: () => ResponseInterceptor
      });
      module.exports = __toCommonJS(ResponseInterceptor_exports);
      var assert = __toESM(require_assert());
      var ResponseInterceptor = class {
        constructor() {
        }
        /**
         * Adjusts incoming response data before the response is forwarded
         * back to the original caller.
         *
         * @public
         * @async
         * @param {object} response
         * @param {Endpoint} endpoint - The endpoint which is originating the request.
         * @returns {Promise<*>}
         */
        async process(response, endpoint) {
          return this._onProcess(response, endpoint);
        }
        /**
         * @protected
         * @param {object} response
         * @param {Endpoint} endpoint
         * @returns {*}
         */
        _onProcess(response, endpoint) {
          return response;
        }
        /**
         * A no-op request interceptor (which will return the raw response).
         *
         * @public
         * @static
         * @returns {ResponseInterceptor}
         */
        static get EMPTY() {
          return responseInterceptorEmpty;
        }
        /**
         * A response interceptor returns only the data payload in the format
         * specified by the response's "content-type" header.
         *
         * @public
         * @static
         * @returns {ResponseInterceptor}
         */
        static get DATA() {
          return responseInterceptorData;
        }
        /**
         * Returns a new {@link ResponseInterceptor} which delegates its work to another function.
         *
         * @public
         * @static
         * @param {Function} delegate
         * @returns {ResponseInterceptor}
         */
        static fromDelegate(delegate) {
          return new DelegateResponseInterceptor(delegate);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[ResponseInterceptor]";
        }
      };
      var _delegate;
      var DelegateResponseInterceptor = class extends ResponseInterceptor {
        /**
         * @param {Function} delegate
         */
        constructor(delegate) {
          super();
          __privateAdd(this, _delegate);
          assert.argumentIsRequired(delegate, "delegate", Function);
          __privateSet(this, _delegate, delegate);
        }
        /**
         * @protected
         * @override
         * @param {object} response
         * @param {Endpoint} endpoint
         * @returns {*}
         */
        _onProcess(response, endpoint) {
          return __privateGet(this, _delegate).call(this, response, endpoint);
        }
        toString() {
          return "[DelegateResponseInterceptor]";
        }
      };
      _delegate = new WeakMap();
      var responseInterceptorEmpty = new ResponseInterceptor();
      var responseInterceptorData = new DelegateResponseInterceptor((response, ignored) => {
        return response.data;
      });
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Endpoint.js
  var require_Endpoint = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/definitions/Endpoint.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Endpoint_exports = {};
      __export(Endpoint_exports, {
        default: () => Endpoint
      });
      module.exports = __toCommonJS(Endpoint_exports);
      var is = __toESM(require_is());
      var import_Parameters = __toESM(require_Parameters());
      var import_ProtocolType = __toESM(require_ProtocolType());
      var import_VerbType = __toESM(require_VerbType());
      var import_ErrorInterceptor = __toESM(require_ErrorInterceptor());
      var import_RequestInterceptor = __toESM(require_RequestInterceptor());
      var import_ResponseInterceptor = __toESM(require_ResponseInterceptor());
      var _name, _description, _verb, _protocol, _host, _port, _path, _query, _headers, _body, _credentials, _requestInterceptor, _responseInterceptor, _errorInterceptor;
      var Endpoint = class {
        /**
         * @param {string=} name
         * @param {string=} description
         * @param {VerbType=} verb
         * @param {ProtocolType=} protocol
         * @param {string=} host
         * @param {number=} port
         * @param {Parameters=} path
         * @param {Parameters=} query
         * @param {Parameters=} headers
         * @param {Parameters=} body
         * @param {Credentials=} credentials
         * @param {RequestInterceptor=} requestInterceptor
         * @param {ResponseInterceptor=} responseInterceptor
         * @param {ErrorInterceptor=} errorInterceptor
         */
        constructor(name, description, verb, protocol, host, port, path, query, headers, body, credentials, requestInterceptor, responseInterceptor, errorInterceptor) {
          __privateAdd(this, _name);
          __privateAdd(this, _description);
          __privateAdd(this, _verb);
          __privateAdd(this, _protocol);
          __privateAdd(this, _host);
          __privateAdd(this, _port);
          __privateAdd(this, _path);
          __privateAdd(this, _query);
          __privateAdd(this, _headers);
          __privateAdd(this, _body);
          __privateAdd(this, _credentials);
          __privateAdd(this, _requestInterceptor);
          __privateAdd(this, _responseInterceptor);
          __privateAdd(this, _errorInterceptor);
          __privateSet(this, _name, name || null);
          __privateSet(this, _description, description || null);
          __privateSet(this, _verb, verb || import_VerbType.default.GET);
          __privateSet(this, _protocol, protocol || import_ProtocolType.default.HTTPS);
          __privateSet(this, _host, host || null);
          __privateSet(this, _port, port || __privateGet(this, _protocol).defaultPort);
          __privateSet(this, _path, path || new import_Parameters.default());
          __privateSet(this, _query, query || new import_Parameters.default());
          __privateSet(this, _headers, headers || new import_Parameters.default());
          __privateSet(this, _body, body || new import_Parameters.default());
          __privateSet(this, _credentials, credentials || null);
          __privateSet(this, _requestInterceptor, requestInterceptor || import_RequestInterceptor.default.EMPTY);
          __privateSet(this, _responseInterceptor, responseInterceptor || import_ResponseInterceptor.default.EMPTY);
          __privateSet(this, _errorInterceptor, errorInterceptor || import_ErrorInterceptor.default.EMPTY);
        }
        /**
         * The name of the endpoint (used for internal purposes only).
         *
         * @public
         * @returns {string}
         */
        get name() {
          return __privateGet(this, _name);
        }
        /**
         * A description of the action performed by the endpoint, suitable for display to users.
         *
         * @public
         * @returns {string}
         */
        get description() {
          return __privateGet(this, _description);
        }
        /**
         * The verb to use when making the request.
         *
         * @public
         * @returns {VerbType}
         */
        get verb() {
          return __privateGet(this, _verb);
        }
        /**
         * The protocol to use with the endpoint.
         *
         * @public
         * @returns {ProtocolType}
         */
        get protocol() {
          return __privateGet(this, _protocol);
        }
        /**
         * The host of the endpoint.
         *
         * @public
         * @returns {string}
         */
        get host() {
          return __privateGet(this, _host);
        }
        /**
         * The host of the endpoint.
         *
         * @public
         * @returns {number}
         */
        get port() {
          return __privateGet(this, _port);
        }
        /**
         * The path definition of the endpoint.
         *
         * @public
         * @returns {Parameters}
         */
        get path() {
          return __privateGet(this, _path);
        }
        /**
         * The query definition of the endpoint.
         *
         * @public
         * @returns {Parameters}
         */
        get query() {
          return __privateGet(this, _query);
        }
        /**
         * The header definition of the endpoint.
         *
         * @public
         * @returns {Parameters}
         */
        get headers() {
          return __privateGet(this, _headers);
        }
        /**
         * The body definition of the endpoint.
         *
         * @public
         * @returns {Parameters}
         */
        get body() {
          return __privateGet(this, _body);
        }
        /**
         * Credentials for the request.
         *
         * @public
         * @return {Credentials}
         */
        get credentials() {
          return __privateGet(this, _credentials);
        }
        /**
         * The request interceptor of the endpoint.
         *
         * @public
         * @returns {RequestInterceptor|null}
         */
        get requestInterceptor() {
          return __privateGet(this, _requestInterceptor);
        }
        /**
         * The response interceptor of the endpoint.
         *
         * @public
         * @returns {ResponseInterceptor|null}
         */
        get responseInterceptor() {
          return __privateGet(this, _responseInterceptor);
        }
        /**
         * The error interceptor of the endpoint.
         *
         * @public
         * @returns {ErrorInterceptor|null}
         */
        get errorInterceptor() {
          return __privateGet(this, _errorInterceptor);
        }
        /**
         * Throws an {@link Error} if the instance is invalid.
         *
         * @public
         */
        validate() {
          if (!(this.protocol instanceof import_ProtocolType.default)) {
            throw new Error("Endpoint protocol must be an instance of ProtocolType.");
          }
          if (!is.string(__privateGet(this, _host)) || __privateGet(this, _host).length === 0) {
            throw new Error("Endpoint host is invalid.");
          }
          if (!is.integer(__privateGet(this, _port)) || __privateGet(this, _port) < 0 || __privateGet(this, _port) > 65535) {
            throw new Error("Endpoint port range is invalid.");
          }
          if (!(this.path instanceof import_Parameters.default)) {
            throw new Error("The path must be a Parameters collection.");
          }
          this.path.validate();
          if (!(this.query instanceof import_Parameters.default)) {
            throw new Error("The query must be a Parameters collection.");
          }
          this.query.validate();
          if (!(this.headers instanceof import_Parameters.default)) {
            throw new Error("The headers must be a Parameters collection.");
          }
          this.headers.validate();
          if (!(this.body instanceof import_Parameters.default)) {
            throw new Error("The body must be a Parameters collection.");
          }
          this.body.validate();
          if (this.credentials) {
            this.credentials.validate();
          }
          if (this.requestInterceptor && !(this.requestInterceptor instanceof import_RequestInterceptor.default)) {
            throw new Error("Endpoint request interceptor must be an instance of RequestInterceptor.");
          }
          if (this.responseInterceptor && !(this.responseInterceptor instanceof import_ResponseInterceptor.default)) {
            throw new Error("Endpoint response interceptor must be an instance of ResponseInterceptor.");
          }
          if (this.errorInterceptor && !(this.errorInterceptor instanceof import_ErrorInterceptor.default)) {
            throw new Error("Endpoint error interceptor must be an instance of ErrorInterceptor.");
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Endpoint (name=${__privateGet(this, _name)})]`;
        }
      };
      _name = new WeakMap();
      _description = new WeakMap();
      _verb = new WeakMap();
      _protocol = new WeakMap();
      _host = new WeakMap();
      _port = new WeakMap();
      _path = new WeakMap();
      _query = new WeakMap();
      _headers = new WeakMap();
      _body = new WeakMap();
      _credentials = new WeakMap();
      _requestInterceptor = new WeakMap();
      _responseInterceptor = new WeakMap();
      _errorInterceptor = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeErrorInterceptor.js
  var require_CompositeErrorInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeErrorInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var CompositeErrorInterceptor_exports = {};
      __export(CompositeErrorInterceptor_exports, {
        default: () => CompositeErrorInterceptor
      });
      module.exports = __toCommonJS(CompositeErrorInterceptor_exports);
      var assert = __toESM(require_assert());
      var import_ErrorInterceptor = __toESM(require_ErrorInterceptor());
      var _a, _b;
      var CompositeErrorInterceptor = class extends import_ErrorInterceptor.default {
        /**
         * @param {ErrorInterceptor} a - The first interceptor to process.
         * @param {ErrorInterceptor} b - The second interceptor to process.
         */
        constructor(a, b) {
          super();
          __privateAdd(this, _a);
          __privateAdd(this, _b);
          assert.argumentIsRequired(a, "a", import_ErrorInterceptor.default, "ErrorInterceptor");
          assert.argumentIsRequired(b, "b", import_ErrorInterceptor.default, "ErrorInterceptor");
          __privateSet(this, _a, a);
          __privateSet(this, _b, b);
        }
        /**
         * @protected
         * @override
         * @async
         * @param {object} error
         * @param {*} endpoint
         * @returns {Promise<*>}
         */
        async _onProcess(error, endpoint) {
          try {
            const result = await __privateGet(this, _a).process(error, endpoint);
            return result;
          } catch (adjusted) {
            return __privateGet(this, _b).process(adjusted, endpoint);
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[CompositeErrorInterceptor]";
        }
      };
      _a = new WeakMap();
      _b = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeResponseInterceptor.js
  var require_CompositeResponseInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeResponseInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var CompositeResponseInterceptor_exports = {};
      __export(CompositeResponseInterceptor_exports, {
        default: () => CompositeResponseInterceptor
      });
      module.exports = __toCommonJS(CompositeResponseInterceptor_exports);
      var assert = __toESM(require_assert());
      var import_ResponseInterceptor = __toESM(require_ResponseInterceptor());
      var _a, _b;
      var CompositeResponseInterceptor = class extends import_ResponseInterceptor.default {
        /**
         * @param {ResponseInterceptor} a - The first interceptor to process.
         * @param {ResponseInterceptor} b - The second interceptor to process.
         */
        constructor(a, b) {
          super();
          __privateAdd(this, _a);
          __privateAdd(this, _b);
          assert.argumentIsRequired(a, "a", import_ResponseInterceptor.default, "ResponseInterceptor");
          assert.argumentIsRequired(b, "b", import_ResponseInterceptor.default, "ResponseInterceptor");
          __privateSet(this, _a, a);
          __privateSet(this, _b, b);
        }
        /**
         * @protected
         * @override
         * @async
         * @param {object} response
         * @param {Endpoint} endpoint
         * @returns {Promise<*>}
         */
        async _onProcess(response, endpoint) {
          const adjusted = await __privateGet(this, _a).process(response, endpoint);
          return __privateGet(this, _b).process(adjusted, endpoint);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[CompositeResponseInterceptor]";
        }
      };
      _a = new WeakMap();
      _b = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeRequestInterceptor.js
  var require_CompositeRequestInterceptor = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/interceptors/CompositeRequestInterceptor.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var CompositeRequestInterceptor_exports = {};
      __export(CompositeRequestInterceptor_exports, {
        default: () => CompositeRequestInterceptor
      });
      module.exports = __toCommonJS(CompositeRequestInterceptor_exports);
      var assert = __toESM(require_assert());
      var import_RequestInterceptor = __toESM(require_RequestInterceptor());
      var _a, _b;
      var CompositeRequestInterceptor = class extends import_RequestInterceptor.default {
        /**
         * @param {RequestInterceptor} a - The first interceptor to process.
         * @param {RequestInterceptor} b - The second interceptor to process.
         */
        constructor(a, b) {
          super();
          __privateAdd(this, _a);
          __privateAdd(this, _b);
          assert.argumentIsRequired(a, "a", import_RequestInterceptor.default, "RequestInterceptor");
          assert.argumentIsRequired(b, "b", import_RequestInterceptor.default, "RequestInterceptor");
          __privateSet(this, _a, a);
          __privateSet(this, _b, b);
        }
        /**
         * @protected
         * @override
         * @async
         * @param {object} request
         * @param {Endpoint} endpoint
         * @returns {Promise<*>}
         */
        async _onProcess(request, endpoint) {
          const adjusted = await __privateGet(this, _a).process(request, endpoint);
          return __privateGet(this, _b).process(adjusted, endpoint);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[CompositeRequestInterceptor]";
        }
      };
      _a = new WeakMap();
      _b = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/EndpointBuilder.js
  var require_EndpointBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/builders/EndpointBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var EndpointBuilder_exports = {};
      __export(EndpointBuilder_exports, {
        default: () => EndpointBuilder
      });
      module.exports = __toCommonJS(EndpointBuilder_exports);
      var assert = __toESM(require_assert());
      var import_CredentialsBuilder = __toESM(require_CredentialsBuilder());
      var import_ParametersBuilder = __toESM(require_ParametersBuilder());
      var import_Endpoint = __toESM(require_Endpoint());
      var import_ProtocolType = __toESM(require_ProtocolType());
      var import_VerbType = __toESM(require_VerbType());
      var import_CompositeErrorInterceptor = __toESM(require_CompositeErrorInterceptor());
      var import_CompositeResponseInterceptor = __toESM(require_CompositeResponseInterceptor());
      var import_CompositeRequestInterceptor = __toESM(require_CompositeRequestInterceptor());
      var import_ErrorInterceptor = __toESM(require_ErrorInterceptor());
      var import_ResponseInterceptor = __toESM(require_ResponseInterceptor());
      var import_RequestInterceptor = __toESM(require_RequestInterceptor());
      var _endpoint;
      var _EndpointBuilder = class _EndpointBuilder {
        /**
         * @param {string} name
         * @param {string=} description
         */
        constructor(name, description) {
          __privateAdd(this, _endpoint);
          assert.argumentIsRequired(name, "name", String);
          assert.argumentIsOptional(description, "description", String);
          __privateSet(this, _endpoint, new import_Endpoint.default(name, description));
        }
        /**
         * The {@link Endpoint}, given all the information provided thus far.
         *
         * @public
         * @returns {Endpoint}
         */
        get endpoint() {
          return __privateGet(this, _endpoint);
        }
        /**
         * Sets the verb.
         *
         * @public
         * @param {VerbType} verb
         * @returns {EndpointBuilder}
         */
        withVerb(verb) {
          assert.argumentIsRequired(verb, "verb", import_VerbType.default, "VerbType");
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Sets the host.
         *
         * @public
         * @param {ProtocolType} protocol
         * @returns {EndpointBuilder}
         */
        withProtocol(protocol) {
          assert.argumentIsRequired(protocol, "protocol", import_ProtocolType.default, "ProtocolType");
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Sets the host.
         *
         * @public
         * @param {string} host
         * @returns {EndpointBuilder}
         */
        withHost(host) {
          assert.argumentIsRequired(host, "host", String);
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Sets the port.
         *
         * @public
         * @param {number} port
         * @returns {EndpointBuilder}
         */
        withPort(port) {
          assert.argumentIsRequired(port, "port", Number);
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link Parameters} collection, describing the request headers, using a callback.
         *
         * @public
         * @param {parametersBuilderCallback} callback
         * @returns {EndpointBuilder}
         */
        withHeadersBuilder(callback) {
          assert.argumentIsRequired(callback, "callback", Function);
          const builder = new import_ParametersBuilder.default();
          callback(builder);
          const headers = builder.parameters;
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link Parameters} collection, describing the request path, using a callback.
         *
         * @public
         * @param {parametersBuilderCallback} callback
         * @returns {EndpointBuilder}
         */
        withPathBuilder(callback) {
          assert.argumentIsRequired(callback, "callback", Function);
          const builder = new import_ParametersBuilder.default(true);
          callback(builder);
          const path = builder.parameters;
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link Parameters} collection, describing the request querystring, using a callback.
         *
         * @public
         * @param {parametersBuilderCallback} callback
         * @returns {EndpointBuilder}
         */
        withQueryBuilder(callback) {
          assert.argumentIsRequired(callback, "callback", Function);
          const builder = new import_ParametersBuilder.default();
          callback(builder);
          const query = builder.parameters;
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link Parameters} collection, describing the request body, using a callback.
         *
         * @public
         * @param {parametersBuilderCallback} callback
         * @returns {EndpointBuilder}
         */
        withBodyBuilder(callback) {
          assert.argumentIsRequired(callback, "callback", Function);
          const builder = new import_ParametersBuilder.default();
          callback(builder);
          const body = builder.parameters;
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a body to the request.
         *
         * @public
         * @param {string=} description - The human-readable description of the request body.
         * @returns {EndpointBuilder}
         */
        withBody(description) {
          assert.argumentIsOptional(description, "description", String);
          return this.withBodyBuilder((bodyBuilder) => {
            bodyBuilder.withDelegateParameter(description || "request payload", "body", (x) => x);
          });
        }
        /**
         * Adds basic authentication to the request.
         *
         * @public
         * @param {string} username
         * @param {string} password
         * @returns {EndpointBuilder}
         */
        withBasicAuthentication(username, password) {
          assert.argumentIsRequired(username, "username", String);
          assert.argumentIsRequired(password, "password", String);
          return this.withBasicAuthenticationBuilder((credentialsBuilder) => {
            credentialsBuilder.withLiteralUsername(username);
            credentialsBuilder.withLiteralPassword(password);
          });
        }
        /**
         * Adds basic authentication to the request, using a callback.
         *
         * @public
         * @param {Function} callback
         * @returns {EndpointBuilder}
         */
        withBasicAuthenticationBuilder(callback) {
          assert.argumentIsRequired(callback, "callback", Function);
          const builder = new import_CredentialsBuilder.default();
          callback(builder);
          const credentials = builder.credentials;
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link RequestInterceptor}.
         *
         * @public
         * @param {RequestInterceptor} requestInterceptor
         * @returns {EndpointBuilder}
         */
        withRequestInterceptor(requestInterceptor) {
          assert.argumentIsRequired(requestInterceptor, "requestInterceptor", import_RequestInterceptor.default, "RequestInterceptor");
          let existingRequestInterceptor = this.endpoint.requestInterceptor;
          let updatedRequestInterceptor;
          if (existingRequestInterceptor && existingRequestInterceptor !== import_RequestInterceptor.default.EMPTY) {
            updatedRequestInterceptor = new import_CompositeRequestInterceptor.default(existingRequestInterceptor, requestInterceptor);
          } else {
            updatedRequestInterceptor = requestInterceptor;
          }
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, updatedRequestInterceptor, this.endpoint.responseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link ResponseInterceptor} for successful web service responses.
         *
         * @public
         * @param {ResponseInterceptor} responseInterceptor
         * @returns {EndpointBuilder}
         */
        withResponseInterceptor(responseInterceptor) {
          assert.argumentIsRequired(responseInterceptor, "responseInterceptor", import_ResponseInterceptor.default, "ResponseInterceptor");
          let existingResponseInterceptor = this.endpoint.responseInterceptor;
          let updatedResponseInterceptor;
          if (existingResponseInterceptor && existingResponseInterceptor !== import_ResponseInterceptor.default.EMPTY) {
            updatedResponseInterceptor = new import_CompositeResponseInterceptor.default(existingResponseInterceptor, responseInterceptor);
          } else {
            updatedResponseInterceptor = responseInterceptor;
          }
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, updatedResponseInterceptor, this.endpoint.errorInterceptor));
          return this;
        }
        /**
         * Adds a {@link ErrorInterceptor} for handling remote web service errors.
         *
         * @public
         * @param {ErrorInterceptor} errorInterceptor
         * @returns {EndpointBuilder}
         */
        withErrorInterceptor(errorInterceptor) {
          assert.argumentIsRequired(errorInterceptor, "errorInterceptor", import_ErrorInterceptor.default, "ErrorInterceptor");
          let existingErrorInterceptor = this.endpoint.errorInterceptor;
          let updatedErrorInterceptor;
          if (existingErrorInterceptor && existingErrorInterceptor !== import_ErrorInterceptor.default.EMPTY) {
            updatedErrorInterceptor = new import_CompositeErrorInterceptor.default(existingErrorInterceptor, errorInterceptor);
          } else {
            updatedErrorInterceptor = errorInterceptor;
          }
          __privateSet(this, _endpoint, new import_Endpoint.default(this.endpoint.name, this.endpoint.description, this.endpoint.verb, this.endpoint.protocol, this.endpoint.host, this.endpoint.port, this.endpoint.path, this.endpoint.query, this.endpoint.headers, this.endpoint.body, this.endpoint.credentials, this.endpoint.requestInterceptor, this.endpoint.responseInterceptor, updatedErrorInterceptor));
          return this;
        }
        /**
         * Factory function for creating an {@link EndpointBuilder} instance.
         *
         * @public
         * @static
         * @param {string} name
         * @param {string=} description
         * @returns {EndpointBuilder}
         */
        static for(name, description) {
          return new _EndpointBuilder(name, description);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[EndpointBuilder]";
        }
      };
      _endpoint = new WeakMap();
      var EndpointBuilder = _EndpointBuilder;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/axios/dist/browser/axios.cjs
  var require_axios = __commonJS({
    "../../node_modules/axios/dist/browser/axios.cjs"(exports, module) {
      "use strict";
      function bind(fn, thisArg) {
        return function wrap() {
          return fn.apply(thisArg, arguments);
        };
      }
      var { toString } = Object.prototype;
      var { getPrototypeOf } = Object;
      var { iterator, toStringTag } = Symbol;
      var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      var hasOwnInPrototypeChain = (thing, prop) => {
        let obj = thing;
        const seen = [];
        while (obj != null && obj !== Object.prototype) {
          if (seen.indexOf(obj) !== -1) {
            return false;
          }
          seen.push(obj);
          if (hasOwnProperty(obj, prop)) {
            return true;
          }
          obj = getPrototypeOf(obj);
        }
        return false;
      };
      var getSafeProp = (obj, prop) => obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : void 0;
      var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      var kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      var typeOfTest = (type) => (thing) => typeof thing === type;
      var { isArray } = Array;
      var isUndefined = typeOfTest("undefined");
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        let result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      var isString = typeOfTest("string");
      var isFunction$1 = typeOfTest("function");
      var isNumber = typeOfTest("number");
      var isObject = (thing) => thing !== null && typeof thing === "object";
      var isBoolean = (thing) => thing === true || thing === false;
      var isPlainObject = (val) => {
        if (!isObject(val)) {
          return false;
        }
        const prototype2 = getPrototypeOf(val);
        return (prototype2 === null || prototype2 === Object.prototype || getPrototypeOf(prototype2) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
        // Symbol.iterator as evidence the value is a tagged/iterable type rather
        // than a plain object, while ignoring keys injected onto Object.prototype.
        !hasOwnInPrototypeChain(val, toStringTag) && !hasOwnInPrototypeChain(val, iterator);
      };
      var isEmptyObject = (val) => {
        if (!isObject(val) || isBuffer(val)) {
          return false;
        }
        try {
          return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
        } catch (e) {
          return false;
        }
      };
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isReactNativeBlob = (value) => {
        return !!(value && typeof value.uri !== "undefined");
      };
      var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
      function getGlobal() {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        return {};
      }
      var G = getGlobal();
      var FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
      var isFormData = (thing) => {
        if (!thing) return false;
        if (FormDataCtor && thing instanceof FormDataCtor) return true;
        const proto = getPrototypeOf(thing);
        if (!proto || proto === Object.prototype) return false;
        if (!isFunction$1(thing.append)) return false;
        const kind = kindOf(thing);
        return kind === "formdata" || // detect form-data instance
        kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]";
      };
      var isURLSearchParams = kindOfTest("URLSearchParams");
      var [isReadableStream, isRequest, isResponse, isHeaders] = [
        "ReadableStream",
        "Request",
        "Response",
        "Headers"
      ].map(kindOfTest);
      var trim = (str) => {
        return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      };
      function forEach(obj, fn, { allOwnKeys = false } = {}) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        let i;
        let l;
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          if (isBuffer(obj)) {
            return;
          }
          const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            fn.call(null, obj[key], key, obj);
          }
        }
      }
      function findKey(obj, key) {
        if (isBuffer(obj)) {
          return null;
        }
        key = key.toLowerCase();
        const keys = Object.keys(obj);
        let i = keys.length;
        let _key;
        while (i-- > 0) {
          _key = keys[i];
          if (key === _key.toLowerCase()) {
            return _key;
          }
        }
        return null;
      }
      var _global = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      var isContextDefined = (context) => !isUndefined(context) && context !== _global;
      function merge(...objs) {
        const { caseless, skipUndefined } = isContextDefined(this) && this || {};
        const result = {};
        const assignValue = (val, key) => {
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return;
          }
          const targetKey = caseless && typeof key === "string" && findKey(result, key) || key;
          const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
          if (isPlainObject(existing) && isPlainObject(val)) {
            result[targetKey] = merge(existing, val);
          } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
          } else if (isArray(val)) {
            result[targetKey] = val.slice();
          } else if (!skipUndefined || !isUndefined(val)) {
            result[targetKey] = val;
          }
        };
        for (let i = 0, l = objs.length; i < l; i++) {
          const source = objs[i];
          if (!source || isBuffer(source)) {
            continue;
          }
          forEach(source, assignValue);
          if (typeof source !== "object" || isArray(source)) {
            continue;
          }
          const symbols = Object.getOwnPropertySymbols(source);
          for (let j = 0; j < symbols.length; j++) {
            const symbol = symbols[j];
            if (propertyIsEnumerable.call(source, symbol)) {
              assignValue(source[symbol], symbol);
            }
          }
        }
        return result;
      }
      var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(
          b,
          (val, key) => {
            if (thisArg && isFunction$1(val)) {
              Object.defineProperty(a, key, {
                // Null-proto descriptor so a polluted Object.prototype.get cannot
                // hijack defineProperty's accessor-vs-data resolution.
                __proto__: null,
                value: bind(val, thisArg),
                writable: true,
                enumerable: true,
                configurable: true
              });
            } else {
              Object.defineProperty(a, key, {
                __proto__: null,
                value: val,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
          },
          { allOwnKeys }
        );
        return a;
      };
      var stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      var inherits = (constructor, superConstructor, props, descriptors) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        Object.defineProperty(constructor.prototype, "constructor", {
          __proto__: null,
          value: constructor,
          writable: true,
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(constructor, "super", {
          __proto__: null,
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null) return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      var endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      var toArray = (thing) => {
        if (!thing) return null;
        if (isArray(thing)) return thing;
        let i = thing.length;
        if (!isNumber(i)) return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      var forEachEntry = (obj, fn) => {
        const generator = obj && obj[iterator];
        const _iterator = generator.call(obj);
        let result;
        while ((result = _iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      var matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      var isHTMLForm = kindOfTest("HTMLFormElement");
      var toCamelCase = (str) => {
        return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        });
      };
      var { propertyIsEnumerable } = Object.prototype;
      var isRegExp = kindOfTest("RegExp");
      var reduceDescriptors = (obj, reducer) => {
        const descriptors = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors, (descriptor, name) => {
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      var freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction$1(obj) && ["arguments", "caller", "callee"].includes(name)) {
            return false;
          }
          const value = obj[name];
          if (!isFunction$1(value)) return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      var toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      var noop = () => {
      };
      var toFiniteNumber = (value, defaultValue) => {
        return value != null && Number.isFinite(value = +value) ? value : defaultValue;
      };
      function isSpecCompliantForm(thing) {
        return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
      }
      var toJSONObject = (obj) => {
        const visited = /* @__PURE__ */ new WeakSet();
        const visit = (source) => {
          if (isObject(source)) {
            if (visited.has(source)) {
              return;
            }
            if (isBuffer(source)) {
              return source;
            }
            if (!("toJSON" in source)) {
              visited.add(source);
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              visited.delete(source);
              return target;
            }
          }
          return source;
        };
        return visit(obj);
      };
      var isAsyncFn = kindOfTest("AsyncFunction");
      var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
      var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
        if (setImmediateSupported) {
          return setImmediate;
        }
        return postMessageSupported ? ((token, callbacks) => {
          _global.addEventListener(
            "message",
            ({ source, data }) => {
              if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
              }
            },
            false
          );
          return (cb) => {
            callbacks.push(cb);
            _global.postMessage(token, "*");
          };
        })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
      })(typeof setImmediate === "function", isFunction$1(_global.postMessage));
      var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
      var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
      var isSafeIterable = (thing) => thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);
      var utils$1 = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isEmptyObject,
        isReadableStream,
        isRequest,
        isResponse,
        isHeaders,
        isUndefined,
        isDate,
        isFile,
        isReactNativeBlob,
        isReactNative,
        isBlob,
        isRegExp,
        isFunction: isFunction$1,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        hasOwnInPrototypeChain,
        getSafeProp,
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable,
        setImmediate: _setImmediate,
        asap,
        isIterable,
        isSafeIterable
      };
      var ignoreDuplicateOf = utils$1.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      var parseHeaders = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
      function trimSPorHTAB(str) {
        let start = 0;
        let end = str.length;
        while (start < end) {
          const code = str.charCodeAt(start);
          if (code !== 9 && code !== 32) {
            break;
          }
          start += 1;
        }
        while (end > start) {
          const code = str.charCodeAt(end - 1);
          if (code !== 9 && code !== 32) {
            break;
          }
          end -= 1;
        }
        return start === 0 && end === str.length ? str : str.slice(start, end);
      }
      var INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
      var INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
      function sanitizeValue(value, invalidChars) {
        if (utils$1.isArray(value)) {
          return value.map((item) => sanitizeValue(item, invalidChars));
        }
        return trimSPorHTAB(String(value).replace(invalidChars, ""));
      }
      var sanitizeHeaderValue = (value) => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
      var sanitizeByteStringHeaderValue = (value) => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
      function toByteStringHeaderObject(headers) {
        const byteStringHeaders = /* @__PURE__ */ Object.create(null);
        utils$1.forEach(headers.toJSON(), (value, header) => {
          byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
        });
        return byteStringHeaders;
      }
      var $internals = /* @__PURE__ */ Symbol("internals");
      function normalizeHeader(header) {
        return header && String(header).trim().toLowerCase();
      }
      function normalizeValue(value) {
        if (value === false || value == null) {
          return value;
        }
        return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
      }
      function parseTokens(str) {
        const tokens = /* @__PURE__ */ Object.create(null);
        const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let match;
        while (match = tokensRE.exec(str)) {
          tokens[match[1]] = match[2];
        }
        return tokens;
      }
      var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
        if (utils$1.isFunction(filter)) {
          return filter.call(this, value, header);
        }
        if (isHeaderNameFilter) {
          value = header;
        }
        if (!utils$1.isString(value)) return;
        if (utils$1.isString(filter)) {
          return value.indexOf(filter) !== -1;
        }
        if (utils$1.isRegExp(filter)) {
          return filter.test(value);
        }
      }
      function formatHeader(header) {
        return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
      }
      function buildAccessors(obj, header) {
        const accessorName = utils$1.toCamelCase(" " + header);
        ["get", "set", "has"].forEach((methodName) => {
          Object.defineProperty(obj, methodName + accessorName, {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: function(arg1, arg2, arg3) {
              return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
          });
        });
      }
      var AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              return;
            }
            const key = utils$1.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
          } else if (utils$1.isObject(header) && utils$1.isSafeIterable(header)) {
            let obj = /* @__PURE__ */ Object.create(null), dest, key;
            for (const entry of header) {
              if (!utils$1.isArray(entry)) {
                throw new TypeError("Object iterator must return a key-value pair");
              }
              key = entry[0];
              if (utils$1.hasOwnProp(obj, key)) {
                dest = obj[key];
                obj[key] = utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
              } else {
                obj[key] = entry[1];
              }
            }
            setHeaders(obj, valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils$1.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils$1.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils$1.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils$1.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils$1.forEach(this, (value, header) => {
            const key = utils$1.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils$1.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        getSetCookie() {
          return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype2 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype2, _header);
              accessors[lHeader] = true;
            }
          }
          utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
      ]);
      utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils$1.freezeMethods(AxiosHeaders);
      var REDACTED = "[REDACTED ****]";
      function hasOwnOrPrototypeToJSON(source) {
        if (utils$1.hasOwnProp(source, "toJSON")) {
          return true;
        }
        let prototype2 = Object.getPrototypeOf(source);
        while (prototype2 && prototype2 !== Object.prototype) {
          if (utils$1.hasOwnProp(prototype2, "toJSON")) {
            return true;
          }
          prototype2 = Object.getPrototypeOf(prototype2);
        }
        return false;
      }
      function redactConfig(config, redactKeys) {
        const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
        const seen = [];
        const visit = (source) => {
          if (source === null || typeof source !== "object") return source;
          if (utils$1.isBuffer(source)) return source;
          if (seen.indexOf(source) !== -1) return void 0;
          if (source instanceof AxiosHeaders) {
            source = source.toJSON();
          }
          seen.push(source);
          let result;
          if (utils$1.isArray(source)) {
            result = [];
            source.forEach((v, i) => {
              const reducedValue = visit(v);
              if (!utils$1.isUndefined(reducedValue)) {
                result[i] = reducedValue;
              }
            });
          } else {
            if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
              seen.pop();
              return source;
            }
            result = /* @__PURE__ */ Object.create(null);
            for (const [key, value] of Object.entries(source)) {
              const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
              if (!utils$1.isUndefined(reducedValue)) {
                result[key] = reducedValue;
              }
            }
          }
          seen.pop();
          return result;
        };
        return visit(config);
      }
      var AxiosError = class _AxiosError extends Error {
        static from(error, code, config, request, response, customProps) {
          const axiosError = new _AxiosError(error.message, code || error.code, config, request, response);
          Object.defineProperty(axiosError, "cause", {
            __proto__: null,
            value: error,
            writable: true,
            enumerable: false,
            configurable: true
          });
          axiosError.name = error.name;
          if (error.status != null && axiosError.status == null) {
            axiosError.status = error.status;
          }
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        }
        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */
        constructor(message, code, config, request, response) {
          super(message);
          Object.defineProperty(this, "message", {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: message,
            enumerable: true,
            writable: true,
            configurable: true
          });
          this.name = "AxiosError";
          this.isAxiosError = true;
          code && (this.code = code);
          config && (this.config = config);
          request && (this.request = request);
          if (response) {
            this.response = response;
            this.status = response.status;
          }
        }
        toJSON() {
          const config = this.config;
          const redactKeys = config && utils$1.hasOwnProp(config, "redact") ? config.redact : void 0;
          const serializedConfig = utils$1.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils$1.toJSONObject(config);
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: serializedConfig,
            code: this.code,
            status: this.status
          };
        }
      };
      AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
      AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
      AxiosError.ECONNABORTED = "ECONNABORTED";
      AxiosError.ETIMEDOUT = "ETIMEDOUT";
      AxiosError.ECONNREFUSED = "ECONNREFUSED";
      AxiosError.ERR_NETWORK = "ERR_NETWORK";
      AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
      AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
      AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
      AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
      AxiosError.ERR_CANCELED = "ERR_CANCELED";
      AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
      AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
      AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
      var httpAdapter = null;
      var DEFAULT_FORM_DATA_MAX_DEPTH = 100;
      function isVisitable(thing) {
        return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
      }
      function removeBrackets(key) {
        return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
      }
      function renderKey(path, key, dots) {
        if (!path) return key;
        return path.concat(key).map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        }).join(dots ? "." : "");
      }
      function isFlatArray(arr) {
        return utils$1.isArray(arr) && !arr.some(isVisitable);
      }
      var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      function toFormData(obj, formData, options) {
        if (!utils$1.isObject(obj)) {
          throw new TypeError("target must be an object");
        }
        formData = formData || new FormData();
        options = utils$1.toFlatObject(
          options,
          {
            metaTokens: true,
            dots: false,
            indexes: false
          },
          false,
          function defined(option, source) {
            return !utils$1.isUndefined(source[option]);
          }
        );
        const metaTokens = options.metaTokens;
        const visitor = options.visitor || defaultVisitor;
        const dots = options.dots;
        const indexes = options.indexes;
        const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
        const maxDepth = options.maxDepth === void 0 ? DEFAULT_FORM_DATA_MAX_DEPTH : options.maxDepth;
        const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
        const stack = [];
        if (!utils$1.isFunction(visitor)) {
          throw new TypeError("visitor must be a function");
        }
        function convertValue(value) {
          if (value === null) return "";
          if (utils$1.isDate(value)) {
            return value.toISOString();
          }
          if (utils$1.isBoolean(value)) {
            return value.toString();
          }
          if (!useBlob && utils$1.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
          }
          if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
            if (useBlob && typeof _Blob === "function") {
              return new _Blob([value]);
            }
            if (typeof Buffer !== "undefined") {
              return Buffer.from(value);
            }
            throw new AxiosError("Blob is not supported. Use a Buffer instead.", AxiosError.ERR_NOT_SUPPORT);
          }
          return value;
        }
        function throwIfMaxDepthExceeded(depth) {
          if (depth > maxDepth) {
            throw new AxiosError(
              "Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth,
              AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED
            );
          }
        }
        function stringifyWithDepthLimit(value, depth) {
          if (maxDepth === Infinity) {
            return JSON.stringify(value);
          }
          const ancestors = [];
          return JSON.stringify(value, function limitDepth(_key, currentValue) {
            if (!utils$1.isObject(currentValue)) {
              return currentValue;
            }
            while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
              ancestors.pop();
            }
            ancestors.push(currentValue);
            throwIfMaxDepthExceeded(depth + ancestors.length - 1);
            return currentValue;
          });
        }
        function defaultVisitor(value, key, path) {
          let arr = value;
          if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
            formData.append(renderKey(path, key, dots), convertValue(value));
            return false;
          }
          if (value && !path && typeof value === "object") {
            if (utils$1.endsWith(key, "{}")) {
              key = metaTokens ? key : key.slice(0, -2);
              value = stringifyWithDepthLimit(value, 1);
            } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
              key = removeBrackets(key);
              arr.forEach(function each(el, index) {
                !(utils$1.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                  convertValue(el)
                );
              });
              return false;
            }
          }
          if (isVisitable(value)) {
            return true;
          }
          formData.append(renderKey(path, key, dots), convertValue(value));
          return false;
        }
        const exposedHelpers = Object.assign(predicates, {
          defaultVisitor,
          convertValue,
          isVisitable
        });
        function build(value, path, depth = 0) {
          if (utils$1.isUndefined(value)) return;
          throwIfMaxDepthExceeded(depth);
          if (stack.indexOf(value) !== -1) {
            throw new Error("Circular reference detected in " + path.join("."));
          }
          stack.push(value);
          utils$1.forEach(value, function each(el, key) {
            const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
              build(el, path ? path.concat(key) : [key], depth + 1);
            }
          });
          stack.pop();
        }
        if (!utils$1.isObject(obj)) {
          throw new TypeError("data must be an object");
        }
        build(obj);
        return formData;
      }
      function encode$1(str) {
        const charMap = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+"
        };
        return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
          return charMap[match];
        });
      }
      function AxiosURLSearchParams(params, options) {
        this._pairs = [];
        params && toFormData(params, this, options);
      }
      var prototype = AxiosURLSearchParams.prototype;
      prototype.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype.toString = function toString2(encoder) {
        const _encode = encoder ? (value) => encoder.call(this, value, encode$1) : encode$1;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
      }
      function buildURL(url, params, options) {
        if (!params) {
          return url;
        }
        url = url || "";
        const _options = utils$1.isFunction(options) ? {
          serialize: options
        } : options;
        const _encode = utils$1.getSafeProp(_options, "encode") || encode;
        const serializeFn = utils$1.getSafeProp(_options, "serialize");
        let serializedParams;
        if (serializeFn) {
          serializedParams = serializeFn(params, _options);
        } else {
          serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
        }
        if (serializedParams) {
          const hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      }
      var InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         * @param {Object} options The options for the interceptor, synchronous and runWhen
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {void}
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils$1.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      var transitionalDefaults = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
        legacyInterceptorReqResOrdering: true,
        advertiseZstdAcceptEncoding: false,
        validateStatusUndefinedResolves: true
      };
      var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
      var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
      var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
      var platform$1 = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams$1,
          FormData: FormData$1,
          Blob: Blob$1
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
      var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      var _navigator = typeof navigator === "object" && navigator || void 0;
      var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
      var hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      var origin = hasBrowserEnv && window.location.href || "http://localhost";
      var utils = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        hasBrowserEnv,
        hasStandardBrowserEnv,
        hasStandardBrowserWebWorkerEnv,
        navigator: _navigator,
        origin
      });
      var platform = __spreadValues(__spreadValues({}, utils), platform$1);
      function toURLEncodedForm(data, options) {
        return toFormData(data, new platform.classes.URLSearchParams(), __spreadValues({
          visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils$1.isBuffer(value)) {
              this.append(key, value.toString("base64"));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          }
        }, options));
      }
      var MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;
      function throwIfDepthExceeded(index) {
        if (index > MAX_DEPTH) {
          throw new AxiosError(
            "FormData field is too deeply nested (" + index + " levels). Max depth: " + MAX_DEPTH,
            AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED
          );
        }
      }
      function parsePropPath(name) {
        const path = [];
        const pattern = /\w+|\[(\w*)]/g;
        let match;
        while ((match = pattern.exec(name)) !== null) {
          throwIfDepthExceeded(path.length);
          path.push(match[0] === "[]" ? "" : match[1] || match[0]);
        }
        return path;
      }
      function arrayToObject(arr) {
        const obj = {};
        const keys = Object.keys(arr);
        let i;
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = arr[key];
        }
        return obj;
      }
      function formDataToJSON(formData) {
        function buildPath(path, value, target, index) {
          throwIfDepthExceeded(index);
          let name = path[index++];
          if (name === "__proto__") return true;
          const isNumericKey = Number.isFinite(+name);
          const isLast = index >= path.length;
          name = !name && utils$1.isArray(target) ? target.length : name;
          if (isLast) {
            if (utils$1.hasOwnProp(target, name)) {
              target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
            } else {
              target[name] = value;
            }
            return !isNumericKey;
          }
          if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
            target[name] = [];
          }
          const result = buildPath(path, value, target[name], index);
          if (result && utils$1.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
          }
          return !isNumericKey;
        }
        if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
          const obj = {};
          utils$1.forEachEntry(formData, (name, value) => {
            buildPath(parsePropPath(name), value, obj, 0);
          });
          return obj;
        }
        return null;
      }
      var own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : void 0;
      function stringifySafely(rawValue, parser, encoder) {
        if (utils$1.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils$1.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = utils$1.isObject(data);
            if (isObjectPayload && utils$1.isHTMLForm(data)) {
              data = new FormData(data);
            }
            const isFormData2 = utils$1.isFormData(data);
            if (isFormData2) {
              return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (utils$1.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils$1.isURLSearchParams(data)) {
              headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
              return data.toString();
            }
            let isFileList2;
            if (isObjectPayload) {
              const formSerializer = own(this, "formSerializer");
              if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
                return toURLEncodedForm(data, formSerializer).toString();
              }
              if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                const env = own(this, "env");
                const _FormData = env && env.FormData;
                return toFormData(
                  isFileList2 ? { "files[]": data } : data,
                  _FormData && new _FormData(),
                  formSerializer
                );
              }
            }
            if (isObjectPayload || hasJSONContentType) {
              headers.setContentType("application/json", false);
              return stringifySafely(data);
            }
            return data;
          }
        ],
        transformResponse: [
          function transformResponse(data) {
            const transitional = own(this, "transitional") || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const responseType = own(this, "responseType");
            const JSONRequested = responseType === "json";
            if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
              const silentJSONParsing = transitional && transitional.silentJSONParsing;
              const strictJSONParsing = !silentJSONParsing && JSONRequested;
              try {
                return JSON.parse(data, own(this, "parseReviver"));
              } catch (e) {
                if (strictJSONParsing) {
                  if (e.name === "SyntaxError") {
                    throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, own(this, "response"));
                  }
                  throw e;
                }
              }
            }
            return data;
          }
        ],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils$1.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (method) => {
        defaults.headers[method] = {};
      });
      function transformData(fns, response) {
        const config = this || defaults;
        const context = response || config;
        const headers = AxiosHeaders.from(context.headers);
        let data = context.data;
        utils$1.forEach(fns, function transform(fn) {
          data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
        });
        headers.normalize();
        return data;
      }
      function isCancel(value) {
        return !!(value && value.__CANCEL__);
      }
      var CanceledError = class extends AxiosError {
        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */
        constructor(message, config, request) {
          super(message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
          this.name = "CanceledError";
          this.__CANCEL__ = true;
        }
      };
      function settle(resolve, reject, response) {
        const validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            response.status >= 400 && response.status < 500 ? AxiosError.ERR_BAD_REQUEST : AxiosError.ERR_BAD_RESPONSE,
            response.config,
            response.request,
            response
          ));
        }
      }
      function parseProtocol(url) {
        const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
        return match && match[1] || "";
      }
      function speedometer(samplesCount, min) {
        samplesCount = samplesCount || 10;
        const bytes = new Array(samplesCount);
        const timestamps = new Array(samplesCount);
        let head = 0;
        let tail = 0;
        let firstSampleTS;
        min = min !== void 0 ? min : 1e3;
        return function push(chunkLength) {
          const now = Date.now();
          const startedAt = timestamps[tail];
          if (!firstSampleTS) {
            firstSampleTS = now;
          }
          bytes[head] = chunkLength;
          timestamps[head] = now;
          let i = tail;
          let bytesCount = 0;
          while (i !== head) {
            bytesCount += bytes[i++];
            i = i % samplesCount;
          }
          head = (head + 1) % samplesCount;
          if (head === tail) {
            tail = (tail + 1) % samplesCount;
          }
          if (now - firstSampleTS < min) {
            return;
          }
          const passed = startedAt && now - startedAt;
          return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
        };
      }
      function throttle(fn, freq) {
        let timestamp = 0;
        let threshold = 1e3 / freq;
        let lastArgs;
        let timer;
        const invoke = (args, now = Date.now()) => {
          timestamp = now;
          lastArgs = null;
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          fn(...args);
        };
        const throttled = (...args) => {
          const now = Date.now();
          const passed = now - timestamp;
          if (passed >= threshold) {
            invoke(args, now);
          } else {
            lastArgs = args;
            if (!timer) {
              timer = setTimeout(() => {
                timer = null;
                invoke(lastArgs);
              }, threshold - passed);
            }
          }
        };
        const flush = () => lastArgs && invoke(lastArgs);
        return [throttled, flush];
      }
      var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
        let bytesNotified = 0;
        const _speedometer = speedometer(50, 250);
        return throttle((e) => {
          if (!e || typeof e.loaded !== "number") {
            return;
          }
          const rawLoaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
          const progressBytes = Math.max(0, loaded - bytesNotified);
          const rate = _speedometer(progressBytes);
          bytesNotified = Math.max(bytesNotified, loaded);
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total ? (total - loaded) / rate : void 0,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
          };
          listener(data);
        }, freq);
      };
      var progressEventDecorator = (total, throttled) => {
        const lengthComputable = total != null;
        return [
          (loaded) => throttled[0]({
            lengthComputable,
            total,
            loaded
          }),
          throttled[1]
        ];
      };
      var asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
      var isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
        url = new URL(url, platform.origin);
        return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
      })(
        new URL(platform.origin),
        platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
      ) : () => true;
      var cookies = platform.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure, sameSite) {
            if (typeof document === "undefined") return;
            const cookie = [`${name}=${encodeURIComponent(value)}`];
            if (utils$1.isNumber(expires)) {
              cookie.push(`expires=${new Date(expires).toUTCString()}`);
            }
            if (utils$1.isString(path)) {
              cookie.push(`path=${path}`);
            }
            if (utils$1.isString(domain)) {
              cookie.push(`domain=${domain}`);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            if (utils$1.isString(sameSite)) {
              cookie.push(`SameSite=${sameSite}`);
            }
            document.cookie = cookie.join("; ");
          },
          read(name) {
            if (typeof document === "undefined") return null;
            const cookies2 = document.cookie.split(";");
            for (let i = 0; i < cookies2.length; i++) {
              const cookie = cookies2[i].replace(/^\s+/, "");
              const eq = cookie.indexOf("=");
              if (eq !== -1 && cookie.slice(0, eq) === name) {
                try {
                  return decodeURIComponent(cookie.slice(eq + 1));
                } catch (e) {
                  return cookie.slice(eq + 1);
                }
              }
            }
            return null;
          },
          remove(name) {
            this.write(name, "", Date.now() - 864e5, "/");
          }
        }
      ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {
          },
          read() {
            return null;
          },
          remove() {
          }
        }
      );
      function isAbsoluteURL(url) {
        if (typeof url !== "string") {
          return false;
        }
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      }
      function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      }
      var malformedHttpProtocol = /^https?:(?!\/\/)/i;
      var httpProtocolControlCharacters = /[\t\n\r]/g;
      function stripLeadingC0ControlOrSpace(url) {
        let i = 0;
        while (i < url.length && url.charCodeAt(i) <= 32) {
          i++;
        }
        return url.slice(i);
      }
      function normalizeURLForProtocolCheck(url) {
        return stripLeadingC0ControlOrSpace(url).replace(httpProtocolControlCharacters, "");
      }
      function assertValidHttpProtocolURL(url, config) {
        if (typeof url === "string" && malformedHttpProtocol.test(normalizeURLForProtocolCheck(url))) {
          throw new AxiosError(
            'Invalid URL: missing "//" after protocol',
            AxiosError.ERR_INVALID_URL,
            config
          );
        }
      }
      function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
        assertValidHttpProtocolURL(requestedURL, config);
        let isRelativeUrl = !isAbsoluteURL(requestedURL);
        if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
          assertValidHttpProtocolURL(baseURL, config);
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      }
      var headersToObject = (thing) => thing instanceof AxiosHeaders ? __spreadValues({}, thing) : thing;
      function mergeConfig(config1, config2) {
        config1 = config1 || {};
        config2 = config2 || {};
        const config = /* @__PURE__ */ Object.create(null);
        Object.defineProperty(config, "hasOwnProperty", {
          // Null-proto descriptor so a polluted Object.prototype.get cannot turn
          // this data descriptor into an accessor descriptor on the way in.
          __proto__: null,
          value: Object.prototype.hasOwnProperty,
          enumerable: false,
          writable: true,
          configurable: true
        });
        function getMergedValue(target, source, prop, caseless) {
          if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
            return utils$1.merge.call({ caseless }, target, source);
          } else if (utils$1.isPlainObject(source)) {
            return utils$1.merge({}, source);
          } else if (utils$1.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(a, b, prop, caseless) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a, prop, caseless);
          }
        }
        function valueFromConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          }
        }
        function defaultToConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a);
          }
        }
        function getMergedTransitionalOption(prop) {
          const transitional2 = utils$1.hasOwnProp(config2, "transitional") ? config2.transitional : void 0;
          if (!utils$1.isUndefined(transitional2)) {
            if (utils$1.isPlainObject(transitional2)) {
              if (utils$1.hasOwnProp(transitional2, prop)) {
                return transitional2[prop];
              }
            } else {
              return void 0;
            }
          }
          const transitional1 = utils$1.hasOwnProp(config1, "transitional") ? config1.transitional : void 0;
          if (utils$1.isPlainObject(transitional1) && utils$1.hasOwnProp(transitional1, prop)) {
            return transitional1[prop];
          }
          return void 0;
        }
        function mergeDirectKeys(a, b, prop) {
          if (utils$1.hasOwnProp(config2, prop)) {
            return getMergedValue(a, b);
          } else if (utils$1.hasOwnProp(config1, prop)) {
            return getMergedValue(void 0, a);
          }
        }
        const mergeMap = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          withXSRFToken: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          allowedSocketPaths: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
        };
        utils$1.forEach(Object.keys(__spreadValues(__spreadValues({}, config1), config2)), function computeConfigValue(prop) {
          if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
          const merge2 = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
          const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : void 0;
          const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : void 0;
          const configValue = merge2(a, b, prop);
          utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
        });
        if (utils$1.hasOwnProp(config2, "validateStatus") && utils$1.isUndefined(config2.validateStatus) && getMergedTransitionalOption("validateStatusUndefinedResolves") === false) {
          if (utils$1.hasOwnProp(config1, "validateStatus")) {
            config.validateStatus = getMergedValue(void 0, config1.validateStatus);
          } else {
            delete config.validateStatus;
          }
        }
        return config;
      }
      var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
      function setFormDataHeaders(headers, formHeaders, policy) {
        if (policy !== "content-only") {
          headers.set(formHeaders);
          return;
        }
        Object.entries(formHeaders || {}).forEach(([key, val]) => {
          if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
            headers.set(key, val);
          }
        });
      }
      var encodeUTF8$1 = (str) => encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/gi,
        (_, hex) => String.fromCharCode(parseInt(hex, 16))
      );
      function resolveConfig(config) {
        const newConfig = mergeConfig({}, config);
        const own2 = (key) => utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
        const data = own2("data");
        let withXSRFToken = own2("withXSRFToken");
        const xsrfHeaderName = own2("xsrfHeaderName");
        const xsrfCookieName = own2("xsrfCookieName");
        let headers = own2("headers");
        const auth = own2("auth");
        const baseURL = own2("baseURL");
        const allowAbsoluteUrls = own2("allowAbsoluteUrls");
        const url = own2("url");
        newConfig.headers = headers = AxiosHeaders.from(headers);
        newConfig.url = buildURL(
          buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig),
          own2("params"),
          own2("paramsSerializer")
        );
        if (auth) {
          const username = utils$1.getSafeProp(auth, "username") || "";
          const password = utils$1.getSafeProp(auth, "password") || "";
          try {
            headers.set(
              "Authorization",
              "Basic " + btoa(username + ":" + (password ? encodeUTF8$1(password) : ""))
            );
          } catch (e) {
            throw AxiosError.from(e, AxiosError.ERR_BAD_OPTION_VALUE, config);
          }
        }
        if (utils$1.isFormData(data)) {
          if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv || utils$1.isReactNative(data)) {
            headers.setContentType(void 0);
          } else if (utils$1.isFunction(data.getHeaders)) {
            setFormDataHeaders(headers, data.getHeaders(), own2("formDataHeaderPolicy"));
          }
        }
        if (platform.hasStandardBrowserEnv) {
          if (utils$1.isFunction(withXSRFToken)) {
            withXSRFToken = withXSRFToken(newConfig);
          }
          const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url);
          if (shouldSendXSRF) {
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
            if (xsrfValue) {
              headers.set(xsrfHeaderName, xsrfValue);
            }
          }
        }
        return newConfig;
      }
      var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      var xhrAdapter = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          const _config = resolveConfig(config);
          let requestData = _config.data;
          const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
          let { responseType, onUploadProgress, onDownloadProgress } = _config;
          let onCanceled;
          let uploadThrottled, downloadThrottled;
          let flushUpload, flushDownload;
          function done() {
            flushUpload && flushUpload();
            flushDownload && flushDownload();
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
          }
          let request = new XMLHttpRequest();
          request.open(_config.method.toUpperCase(), _config.url, true);
          request.timeout = _config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(
              function _resolve(value) {
                resolve(value);
                done();
              },
              function _reject(err) {
                reject(err);
                done();
              },
              response
            );
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith("file:"))) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            done();
            request = null;
          };
          request.onerror = function handleError(event) {
            const msg = event && event.message ? event.message : "Network Error";
            const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
            err.event = event || null;
            reject(err);
            done();
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = _config.transitional || transitionalDefaults;
            if (_config.timeoutErrorMessage) {
              timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(
              new AxiosError(
                timeoutErrorMessage,
                transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
                config,
                request
              )
            );
            done();
            request = null;
          };
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils$1.isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = _config.responseType;
          }
          if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
            request.addEventListener("progress", downloadThrottled);
          }
          if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
            request.upload.addEventListener("progress", uploadThrottled);
            request.upload.addEventListener("loadend", flushUpload);
          }
          if (_config.cancelToken || _config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
              request.abort();
              done();
              request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
              _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(_config.url);
          if (protocol && !platform.protocols.includes(protocol)) {
            reject(
              new AxiosError(
                "Unsupported protocol " + protocol + ":",
                AxiosError.ERR_BAD_REQUEST,
                config
              )
            );
            done();
            return;
          }
          request.send(requestData || null);
        });
      };
      var composeSignals = (signals, timeout) => {
        signals = signals ? signals.filter(Boolean) : [];
        if (!timeout && !signals.length) {
          return;
        }
        const controller = new AbortController();
        let aborted = false;
        const onabort = function(reason) {
          if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = reason instanceof Error ? reason : this.reason;
            controller.abort(
              err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err)
            );
          }
        };
        let timer = timeout && setTimeout(() => {
          timer = null;
          onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
        }, timeout);
        const unsubscribe = () => {
          if (!signals) {
            return;
          }
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach((signal2) => {
            signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
          });
          signals = null;
        };
        signals.forEach((signal2) => signal2.addEventListener("abort", onabort, { once: true }));
        const { signal } = controller;
        signal.unsubscribe = () => utils$1.asap(unsubscribe);
        return signal;
      };
      var streamChunk = function* (chunk, chunkSize) {
        let len = chunk.byteLength;
        if (len < chunkSize) {
          yield chunk;
          return;
        }
        let pos = 0;
        let end;
        while (pos < len) {
          end = pos + chunkSize;
          yield chunk.slice(pos, end);
          pos = end;
        }
      };
      var readBytes = function(iterable, chunkSize) {
        return __asyncGenerator(this, null, function* () {
          try {
            for (var iter = __forAwait(readStream(iterable)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
              const chunk = temp.value;
              yield* __yieldStar(streamChunk(chunk, chunkSize));
            }
          } catch (temp) {
            error = [temp];
          } finally {
            try {
              more && (temp = iter.return) && (yield new __await(temp.call(iter)));
            } finally {
              if (error)
                throw error[0];
            }
          }
        });
      };
      var readStream = function(stream) {
        return __asyncGenerator(this, null, function* () {
          if (stream[Symbol.asyncIterator]) {
            yield* __yieldStar(stream);
            return;
          }
          const reader = stream.getReader();
          try {
            for (; ; ) {
              const { done, value } = yield new __await(reader.read());
              if (done) {
                break;
              }
              yield value;
            }
          } finally {
            yield new __await(reader.cancel());
          }
        });
      };
      var trackStream = (stream, chunkSize, onProgress, onFinish) => {
        const iterator2 = readBytes(stream, chunkSize);
        let bytes = 0;
        let done;
        let _onFinish = (e) => {
          if (!done) {
            done = true;
            onFinish && onFinish(e);
          }
        };
        return new ReadableStream(
          {
            async pull(controller) {
              try {
                const { done: done2, value } = await iterator2.next();
                if (done2) {
                  _onFinish();
                  controller.close();
                  return;
                }
                let len = value.byteLength;
                if (onProgress) {
                  let loadedBytes = bytes += len;
                  onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
              } catch (err) {
                _onFinish(err);
                throw err;
              }
            },
            cancel(reason) {
              _onFinish(reason);
              return iterator2.return();
            }
          },
          {
            highWaterMark: 2
          }
        );
      };
      var isHexDigit = (charCode) => charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102;
      var isPercentEncodedByte = (str, i, len) => i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));
      function estimateDataURLDecodedBytes(url) {
        if (!url || typeof url !== "string") return 0;
        if (!url.startsWith("data:")) return 0;
        const comma = url.indexOf(",");
        if (comma < 0) return 0;
        const meta = url.slice(5, comma);
        const body = url.slice(comma + 1);
        const isBase64 = /;base64/i.test(meta);
        if (isBase64) {
          let effectiveLen = body.length;
          const len = body.length;
          for (let i = 0; i < len; i++) {
            if (body.charCodeAt(i) === 37 && i + 2 < len) {
              const a = body.charCodeAt(i + 1);
              const b = body.charCodeAt(i + 2);
              const isHex = isHexDigit(a) && isHexDigit(b);
              if (isHex) {
                effectiveLen -= 2;
                i += 2;
              }
            }
          }
          let pad = 0;
          let idx = len - 1;
          const tailIsPct3D = (j) => j >= 2 && body.charCodeAt(j - 2) === 37 && // '%'
          body.charCodeAt(j - 1) === 51 && // '3'
          (body.charCodeAt(j) === 68 || body.charCodeAt(j) === 100);
          if (idx >= 0) {
            if (body.charCodeAt(idx) === 61) {
              pad++;
              idx--;
            } else if (tailIsPct3D(idx)) {
              pad++;
              idx -= 3;
            }
          }
          if (pad === 1 && idx >= 0) {
            if (body.charCodeAt(idx) === 61) {
              pad++;
            } else if (tailIsPct3D(idx)) {
              pad++;
            }
          }
          const groups = Math.floor(effectiveLen / 4);
          const bytes2 = groups * 3 - (pad || 0);
          return bytes2 > 0 ? bytes2 : 0;
        }
        let bytes = 0;
        for (let i = 0, len = body.length; i < len; i++) {
          const c = body.charCodeAt(i);
          if (c === 37 && isPercentEncodedByte(body, i, len)) {
            bytes += 1;
            i += 2;
          } else if (c < 128) {
            bytes += 1;
          } else if (c < 2048) {
            bytes += 2;
          } else if (c >= 55296 && c <= 56319 && i + 1 < len) {
            const next = body.charCodeAt(i + 1);
            if (next >= 56320 && next <= 57343) {
              bytes += 4;
              i++;
            } else {
              bytes += 3;
            }
          } else {
            bytes += 3;
          }
        }
        return bytes;
      }
      var VERSION = "1.18.1";
      var DEFAULT_CHUNK_SIZE = 64 * 1024;
      var { isFunction } = utils$1;
      var encodeUTF8 = (str) => encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/gi,
        (_, hex) => String.fromCharCode(parseInt(hex, 16))
      );
      var decodeURIComponentSafe = (value) => {
        if (!utils$1.isString(value)) {
          return value;
        }
        try {
          return decodeURIComponent(value);
        } catch (error) {
          return value;
        }
      };
      var test = (fn, ...args) => {
        try {
          return !!fn(...args);
        } catch (e) {
          return false;
        }
      };
      var maybeWithAuthCredentials = (url) => {
        const protocolIndex = url.indexOf("://");
        let urlToCheck = url;
        if (protocolIndex !== -1) {
          urlToCheck = urlToCheck.slice(protocolIndex + 3);
        }
        return urlToCheck.includes("@") || urlToCheck.includes(":");
      };
      var factory = (env) => {
        const globalObject = utils$1.global !== void 0 && utils$1.global !== null ? utils$1.global : globalThis;
        const { ReadableStream: ReadableStream2, TextEncoder } = globalObject;
        env = utils$1.merge.call(
          {
            skipUndefined: true
          },
          {
            Request: globalObject.Request,
            Response: globalObject.Response
          },
          env
        );
        const { fetch: envFetch, Request, Response } = env;
        const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
        const isRequestSupported = isFunction(Request);
        const isResponseSupported = isFunction(Response);
        if (!isFetchSupported) {
          return false;
        }
        const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream2);
        const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
        const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
          let duplexAccessed = false;
          const request = new Request(platform.origin, {
            body: new ReadableStream2(),
            method: "POST",
            get duplex() {
              duplexAccessed = true;
              return "half";
            }
          });
          const hasContentType = request.headers.has("Content-Type");
          if (request.body != null) {
            request.body.cancel();
          }
          return duplexAccessed && !hasContentType;
        });
        const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
        const resolvers = {
          stream: supportsResponseStream && ((res) => res.body)
        };
        isFetchSupported && (() => {
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
            !resolvers[type] && (resolvers[type] = (res, config) => {
              let method = res && res[type];
              if (method) {
                return method.call(res);
              }
              throw new AxiosError(
                `Response type '${type}' is not supported`,
                AxiosError.ERR_NOT_SUPPORT,
                config
              );
            });
          });
        })();
        const getBodyLength = async (body) => {
          if (body == null) {
            return 0;
          }
          if (utils$1.isBlob(body)) {
            return body.size;
          }
          if (utils$1.isSpecCompliantForm(body)) {
            const _request = new Request(platform.origin, {
              method: "POST",
              body
            });
            return (await _request.arrayBuffer()).byteLength;
          }
          if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
            return body.byteLength;
          }
          if (utils$1.isURLSearchParams(body)) {
            body = body + "";
          }
          if (utils$1.isString(body)) {
            return (await encodeText(body)).byteLength;
          }
        };
        const resolveBodyLength = async (headers, body) => {
          const length = utils$1.toFiniteNumber(headers.getContentLength());
          return length == null ? getBodyLength(body) : length;
        };
        return async (config) => {
          let {
            url,
            method,
            data,
            signal,
            cancelToken,
            timeout,
            onDownloadProgress,
            onUploadProgress,
            responseType,
            headers,
            withCredentials = "same-origin",
            fetchOptions,
            maxContentLength,
            maxBodyLength
          } = resolveConfig(config);
          const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
          const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
          const own2 = (key) => utils$1.hasOwnProp(config, key) ? config[key] : void 0;
          let _fetch = envFetch || fetch;
          responseType = responseType ? (responseType + "").toLowerCase() : "text";
          let composedSignal = composeSignals(
            [signal, cancelToken && cancelToken.toAbortSignal()],
            timeout
          );
          let request = null;
          const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
            composedSignal.unsubscribe();
          });
          let requestContentLength;
          let pendingBodyError = null;
          const maxBodyLengthError = () => new AxiosError(
            "Request body larger than maxBodyLength limit",
            AxiosError.ERR_BAD_REQUEST,
            config,
            request
          );
          try {
            let auth = void 0;
            const configAuth = own2("auth");
            if (configAuth) {
              const username = utils$1.getSafeProp(configAuth, "username") || "";
              const password = utils$1.getSafeProp(configAuth, "password") || "";
              auth = {
                username,
                password
              };
            }
            if (maybeWithAuthCredentials(url)) {
              const parsedURL = new URL(url, platform.origin);
              if (!auth && (parsedURL.username || parsedURL.password)) {
                const urlUsername = decodeURIComponentSafe(parsedURL.username);
                const urlPassword = decodeURIComponentSafe(parsedURL.password);
                auth = {
                  username: urlUsername,
                  password: urlPassword
                };
              }
              if (parsedURL.username || parsedURL.password) {
                parsedURL.username = "";
                parsedURL.password = "";
                url = parsedURL.href;
              }
            }
            if (auth) {
              headers.delete("authorization");
              headers.set(
                "Authorization",
                "Basic " + btoa(encodeUTF8((auth.username || "") + ":" + (auth.password || "")))
              );
            }
            if (hasMaxContentLength && typeof url === "string" && url.startsWith("data:")) {
              const estimated = estimateDataURLDecodedBytes(url);
              if (estimated > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request
                );
              }
            }
            if (hasMaxBodyLength && method !== "get" && method !== "head") {
              const outboundLength = await getBodyLength(data);
              if (typeof outboundLength === "number" && isFinite(outboundLength)) {
                requestContentLength = outboundLength;
                if (outboundLength > maxBodyLength) {
                  throw maxBodyLengthError();
                }
              }
            }
            const mustEnforceStreamBody = hasMaxBodyLength && (utils$1.isReadableStream(data) || utils$1.isStream(data));
            const trackRequestStream = (stream, onProgress, flush) => trackStream(
              stream,
              DEFAULT_CHUNK_SIZE,
              (loadedBytes) => {
                if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
                  throw pendingBodyError = maxBodyLengthError();
                }
                onProgress && onProgress(loadedBytes);
              },
              flush
            );
            if (supportsRequestStream && method !== "get" && method !== "head" && (onUploadProgress || mustEnforceStreamBody)) {
              requestContentLength = requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;
              if (requestContentLength !== 0 || mustEnforceStreamBody) {
                let _request = new Request(url, {
                  method: "POST",
                  body: data,
                  duplex: "half"
                });
                let contentTypeHeader;
                if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
                  headers.setContentType(contentTypeHeader);
                }
                if (_request.body) {
                  const [onProgress, flush] = onUploadProgress && progressEventDecorator(
                    requestContentLength,
                    progressEventReducer(asyncDecorator(onUploadProgress))
                  ) || [];
                  data = trackRequestStream(_request.body, onProgress, flush);
                }
              }
            } else if (mustEnforceStreamBody && !isRequestSupported && isReadableStreamSupported && method !== "get" && method !== "head") {
              data = trackRequestStream(data);
            } else if (mustEnforceStreamBody && isRequestSupported && !supportsRequestStream && method !== "get" && method !== "head") {
              throw new AxiosError(
                "Stream request bodies are not supported by the current fetch implementation",
                AxiosError.ERR_NOT_SUPPORT,
                config,
                request
              );
            }
            if (!utils$1.isString(withCredentials)) {
              withCredentials = withCredentials ? "include" : "omit";
            }
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            if (utils$1.isFormData(data)) {
              const contentType = headers.getContentType();
              if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
                headers.delete("content-type");
              }
            }
            headers.set("User-Agent", "axios/" + VERSION, false);
            const resolvedOptions = __spreadProps(__spreadValues({}, fetchOptions), {
              signal: composedSignal,
              method: method.toUpperCase(),
              headers: toByteStringHeaderObject(headers.normalize()),
              body: data,
              duplex: "half",
              credentials: isCredentialsSupported ? withCredentials : void 0
            });
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            const responseHeaders = AxiosHeaders.from(response.headers);
            if (hasMaxContentLength) {
              const declaredLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
              if (declaredLength != null && declaredLength > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request
                );
              }
            }
            const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
            if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
              const options = {};
              ["status", "statusText", "headers"].forEach((prop) => {
                options[prop] = response[prop];
              });
              const responseContentLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
              const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
                responseContentLength,
                progressEventReducer(asyncDecorator(onDownloadProgress), true)
              ) || [];
              let bytesRead = 0;
              const onChunkProgress = (loadedBytes) => {
                if (hasMaxContentLength) {
                  bytesRead = loadedBytes;
                  if (bytesRead > maxContentLength) {
                    throw new AxiosError(
                      "maxContentLength size of " + maxContentLength + " exceeded",
                      AxiosError.ERR_BAD_RESPONSE,
                      config,
                      request
                    );
                  }
                }
                onProgress && onProgress(loadedBytes);
              };
              response = new Response(
                trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
                  flush && flush();
                  unsubscribe && unsubscribe();
                }),
                options
              );
            }
            responseType = responseType || "text";
            let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](
              response,
              config
            );
            if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
              let materializedSize;
              if (responseData != null) {
                if (typeof responseData.byteLength === "number") {
                  materializedSize = responseData.byteLength;
                } else if (typeof responseData.size === "number") {
                  materializedSize = responseData.size;
                } else if (typeof responseData === "string") {
                  materializedSize = typeof TextEncoder === "function" ? new TextEncoder().encode(responseData).byteLength : responseData.length;
                }
              }
              if (typeof materializedSize === "number" && materializedSize > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request
                );
              }
            }
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject) => {
              settle(resolve, reject, {
                data: responseData,
                headers: AxiosHeaders.from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config,
                request
              });
            });
          } catch (err) {
            unsubscribe && unsubscribe();
            if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError) {
              const canceledError = composedSignal.reason;
              canceledError.config = config;
              request && (canceledError.request = request);
              if (err !== canceledError) {
                Object.defineProperty(canceledError, "cause", {
                  __proto__: null,
                  value: err,
                  writable: true,
                  enumerable: false,
                  configurable: true
                });
              }
              throw canceledError;
            }
            if (pendingBodyError) {
              request && !pendingBodyError.request && (pendingBodyError.request = request);
              throw pendingBodyError;
            }
            if (err instanceof AxiosError) {
              request && !err.request && (err.request = request);
              throw err;
            }
            if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
              const networkError = new AxiosError(
                "Network Error",
                AxiosError.ERR_NETWORK,
                config,
                request,
                err && err.response
              );
              Object.defineProperty(networkError, "cause", {
                __proto__: null,
                value: err.cause || err,
                writable: true,
                enumerable: false,
                configurable: true
              });
              throw networkError;
            }
            throw AxiosError.from(err, err && err.code, config, request, err && err.response);
          }
        };
      };
      var seedCache = /* @__PURE__ */ new Map();
      var getFetch = (config) => {
        let env = config && config.env || {};
        const { fetch: fetch2, Request, Response } = env;
        const seeds = [Request, Response, fetch2];
        let len = seeds.length, i = len, seed, target, map = seedCache;
        while (i--) {
          seed = seeds[i];
          target = map.get(seed);
          target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
          map = target;
        }
        return target;
      };
      getFetch();
      var knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter,
        fetch: {
          get: getFetch
        }
      };
      utils$1.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { __proto__: null, value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { __proto__: null, value });
        }
      });
      var renderReason = (reason) => `- ${reason}`;
      var isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
      function getAdapter(adapters2, config) {
        adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
        const { length } = adapters2;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for (let i = 0; i < length; i++) {
          nameOrAdapter = adapters2[i];
          let id;
          adapter = nameOrAdapter;
          if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === void 0) {
              throw new AxiosError(`Unknown adapter '${id}'`);
            }
          }
          if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
            break;
          }
          rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
          const reasons = Object.entries(rejectedReasons).map(
            ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
          );
          let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
          throw new AxiosError(
            `There is no suitable adapter to dispatch the request ` + s,
            AxiosError.ERR_NOT_SUPPORT
          );
        }
        return adapter;
      }
      var adapters = {
        /**
         * Resolve an adapter from a list of adapter names or functions.
         * @type {Function}
         */
        getAdapter,
        /**
         * Exposes all known adapters
         * @type {Object<string, Function|Object>}
         */
        adapters: knownAdapters
      };
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError(null, config);
        }
      }
      function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = AxiosHeaders.from(config.headers);
        config.data = transformData.call(config, config.transformRequest);
        if (["post", "put", "patch"].indexOf(config.method) !== -1) {
          config.headers.setContentType("application/x-www-form-urlencoded", false);
        }
        const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
        return adapter(config).then(
          function onAdapterResolution(response) {
            throwIfCancellationRequested(config);
            config.response = response;
            try {
              response.data = transformData.call(config, config.transformResponse, response);
            } finally {
              delete config.response;
            }
            response.headers = AxiosHeaders.from(response.headers);
            return response;
          },
          function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);
              if (reason && reason.response) {
                config.response = reason.response;
                try {
                  reason.response.data = transformData.call(
                    config,
                    config.transformResponse,
                    reason.response
                  );
                } finally {
                  delete config.response;
                }
                reason.response.headers = AxiosHeaders.from(reason.response.headers);
              }
            }
            return Promise.reject(reason);
          }
        );
      }
      var validators$1 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators$1.transitional = function transitional(validator2, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator2 === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator2 ? validator2(value, opt, opts) : true;
        };
      };
      validators$1.spelling = function spelling(correctSpelling) {
        return (value, opt) => {
          console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
          return true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object" || options === null) {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        const keys = Object.keys(options);
        let i = keys.length;
        while (i-- > 0) {
          const opt = keys[i];
          const validator2 = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
          if (validator2) {
            const value = options[opt];
            const result = value === void 0 || validator2(value, opt, options);
            if (result !== true) {
              throw new AxiosError(
                "option " + opt + " must be " + result,
                AxiosError.ERR_BAD_OPTION_VALUE
              );
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      var validator = {
        assertOptions,
        validators: validators$1
      };
      var validators = validator.validators;
      var Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig || {};
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        async request(configOrUrl, config) {
          try {
            return await this._request(configOrUrl, config);
          } catch (err) {
            if (err instanceof Error) {
              let dummy = {};
              Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
              const stack = (() => {
                if (!dummy.stack) {
                  return "";
                }
                const firstNewlineIndex = dummy.stack.indexOf("\n");
                return firstNewlineIndex === -1 ? "" : dummy.stack.slice(firstNewlineIndex + 1);
              })();
              try {
                if (!err.stack) {
                  err.stack = stack;
                } else if (stack) {
                  const firstNewlineIndex = stack.indexOf("\n");
                  const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
                  const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
                  if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
                    err.stack += "\n" + stack;
                  }
                }
              } catch (e) {
              }
            }
            throw err;
          }
        }
        _request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional, paramsSerializer, headers } = config;
          if (transitional !== void 0) {
            validator.assertOptions(
              transitional,
              {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean),
                legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
                advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
                validateStatusUndefinedResolves: validators.transitional(validators.boolean)
              },
              false
            );
          }
          if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(
                paramsSerializer,
                {
                  encode: validators.function,
                  serialize: validators.function
                },
                true
              );
            }
          }
          if (config.allowAbsoluteUrls !== void 0) ;
          else if (this.defaults.allowAbsoluteUrls !== void 0) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
          } else {
            config.allowAbsoluteUrls = true;
          }
          validator.assertOptions(
            config,
            {
              baseUrl: validators.spelling("baseURL"),
              withXsrfToken: validators.spelling("withXSRFToken")
            },
            true
          );
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
          headers && utils$1.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (method) => {
            delete headers[method];
          });
          config.headers = AxiosHeaders.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            const transitional2 = config.transitional || transitionalDefaults;
            const legacyInterceptorReqResOrdering = transitional2 && transitional2.legacyInterceptorReqResOrdering;
            if (legacyInterceptorReqResOrdering) {
              requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            } else {
              requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            }
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(
            mergeConfig(config || {}, {
              method,
              url,
              data: config && utils$1.hasOwnProp(config, "data") ? config.data : void 0
            })
          );
        };
      });
      utils$1.forEach(["post", "put", "patch", "query"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(
              mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
              })
            );
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        if (method !== "query") {
          Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        }
      });
      var CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners) return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        toAbortSignal() {
          const controller = new AbortController();
          const abort = (err) => {
            controller.abort(err);
          };
          this.subscribe(abort);
          controller.signal.unsubscribe = () => this.unsubscribe(abort);
          return controller.signal;
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      }
      function isAxiosError(payload) {
        return utils$1.isObject(payload) && payload.isAxiosError === true;
      }
      var HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      function createInstance(defaultConfig) {
        const context = new Axios(defaultConfig);
        const instance = bind(Axios.prototype.request, context);
        utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
        utils$1.extend(instance, context, null, { allOwnKeys: true });
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.CanceledError = CanceledError;
      axios.CancelToken = CancelToken;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData;
      axios.AxiosError = AxiosError;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders;
      axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters.getAdapter;
      axios.HttpStatusCode = HttpStatusCode;
      axios.default = axios;
      module.exports = axios;
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/array.js
  var require_array = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/array.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var array_exports = {};
      __export(array_exports, {
        batchBy: () => batchBy,
        binarySearch: () => binarySearch,
        difference: () => difference,
        differenceBy: () => differenceBy,
        differenceSymmetric: () => differenceSymmetric,
        differenceSymmetricBy: () => differenceSymmetricBy,
        dropLeft: () => dropLeft,
        dropRight: () => dropRight,
        first: () => first,
        flatten: () => flatten,
        groupBy: () => groupBy,
        indexBy: () => indexBy,
        insert: () => insert,
        intersection: () => intersection,
        intersectionBy: () => intersectionBy,
        last: () => last,
        partition: () => partition,
        remove: () => remove,
        union: () => union,
        unionBy: () => unionBy,
        unique: () => unique,
        uniqueBy: () => uniqueBy
      });
      module.exports = __toCommonJS(array_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      function unique(a) {
        assert.argumentIsArray(a, "a");
        return uniqueBy(a, (item) => item);
      }
      function uniqueBy(a, keySelector) {
        assert.argumentIsArray(a, "a");
        return a.filter((item, index, array) => {
          const key = keySelector(item);
          return array.findIndex((candidate) => key === keySelector(candidate)) === index;
        });
      }
      function groupBy(a, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(keySelector, "keySelector", Function);
        return a.reduce((groups, item) => {
          const key = keySelector(item);
          if (!Object.prototype.hasOwnProperty.call(groups, key)) {
            groups[key] = [];
          }
          groups[key].push(item);
          return groups;
        }, {});
      }
      function batchBy(a, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(keySelector, "keySelector", Function);
        let currentKey = null;
        let currentBatch = null;
        return a.reduce((batches, item) => {
          const key = keySelector(item);
          if (currentBatch === null || currentKey !== key) {
            currentKey = key;
            currentBatch = [];
            batches.push(currentBatch);
          }
          currentBatch.push(item);
          return batches;
        }, []);
      }
      function indexBy(a, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(keySelector, "keySelector", Function);
        return a.reduce((map, item) => {
          const key = keySelector(item);
          if (Object.prototype.hasOwnProperty.call(map, key)) {
            throw new Error("Unable to index array. A duplicate key exists.");
          }
          map[key] = item;
          return map;
        }, {});
      }
      function dropLeft(a) {
        assert.argumentIsArray(a, "a");
        let returnRef = Array.from(a);
        if (returnRef.length !== 0) {
          returnRef.shift();
        }
        return returnRef;
      }
      function dropRight(a) {
        assert.argumentIsArray(a, "a");
        let returnRef = Array.from(a);
        if (returnRef.length !== 0) {
          returnRef.pop();
        }
        return returnRef;
      }
      function first(a) {
        assert.argumentIsArray(a, "a");
        let returnRef;
        if (a.length !== 0) {
          returnRef = a[0];
        } else {
          returnRef = void 0;
        }
        return returnRef;
      }
      function last(a) {
        assert.argumentIsArray(a, "a");
        let returnRef;
        if (a.length !== 0) {
          returnRef = a[a.length - 1];
        } else {
          returnRef = void 0;
        }
        return returnRef;
      }
      function flatten(a, recursive) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsOptional(recursive, "recursive", Boolean);
        const empty = [];
        let flat = empty.concat.apply(empty, a);
        if (recursive && flat.some((x) => is.array(x))) {
          flat = flatten(flat, true);
        }
        return flat;
      }
      function partition(a, size) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsOptional(size, "size", Number);
        const copy = a.slice(0);
        const partitions = [];
        while (copy.length !== 0) {
          partitions.push(copy.splice(0, size));
        }
        return partitions;
      }
      function difference(a, b) {
        return differenceBy(a, b, (item) => item);
      }
      function differenceBy(a, b, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsArray(b, "b");
        assert.argumentIsRequired(keySelector, "keySelector", Function);
        const returnRef = [];
        a.forEach((candidate) => {
          const candidateKey = keySelector(candidate);
          const exclude = b.some((comparison) => candidateKey === keySelector(comparison));
          if (!exclude) {
            returnRef.push(candidate);
          }
        });
        return returnRef;
      }
      function differenceSymmetric(a, b) {
        return differenceSymmetricBy(a, b, (item) => item);
      }
      function differenceSymmetricBy(a, b, keySelector) {
        return unionBy(differenceBy(a, b, keySelector), differenceBy(b, a, keySelector), keySelector);
      }
      function union(a, b) {
        return unionBy(a, b, (item) => item);
      }
      function unionBy(a, b, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsArray(b, "b");
        assert.argumentIsRequired(keySelector, "keySelector", Function);
        const returnRef = a.slice();
        b.forEach((candidate) => {
          const candidateKey = keySelector(candidate);
          const exclude = returnRef.some((comparison) => candidateKey === keySelector(comparison));
          if (!exclude) {
            returnRef.push(candidate);
          }
        });
        return returnRef;
      }
      function intersection(a, b) {
        return intersectionBy(a, b, (item) => item);
      }
      function intersectionBy(a, b, keySelector) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsArray(b, "b");
        const returnRef = [];
        a.forEach((candidate) => {
          const candidateKey = keySelector(candidate);
          const include = b.some((comparison) => candidateKey === keySelector(comparison));
          if (include) {
            returnRef.push(candidate);
          }
        });
        return returnRef;
      }
      function remove(a, predicate) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(predicate, "predicate", Function);
        const index = a.findIndex(predicate);
        const found = !(index < 0);
        if (found) {
          a.splice(index, 1);
        }
        return found;
      }
      function insert(a, item, comparator) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(comparator, "comparator", Function);
        if (a.length === 0 || !(comparator(item, a[a.length - 1]) < 0)) {
          a.push(item);
        } else if (comparator(item, a[0]) < 0) {
          a.unshift(item);
        } else {
          a.splice(binarySearchForInsert(a, item, comparator, 0, a.length - 1), 0, item);
        }
        return a;
      }
      function binarySearch(a, key, comparator, start, end) {
        assert.argumentIsArray(a, "a");
        assert.argumentIsRequired(comparator, "comparator", Function);
        assert.argumentIsOptional(start, "start", Number);
        assert.argumentIsOptional(end, "end", Number);
        if (a.length === 0) {
          return null;
        }
        return binarySearchForMatch(a, key, comparator, start || 0, end || a.length - 1);
      }
      function binarySearchForMatch(a, key, comparator, start, end) {
        const size = end - start;
        const midpointIndex = start + Math.floor(size / 2);
        const midpointItem = a[midpointIndex];
        const comparison = comparator(key, midpointItem);
        if (comparison === 0) {
          return midpointItem;
        } else if (size < 2) {
          const finalIndex = a.length - 1;
          const finalItem = a[finalIndex];
          if (end === finalIndex && comparator(key, finalItem) === 0) {
            return finalItem;
          } else {
            return null;
          }
        } else if (comparison > 0) {
          return binarySearchForMatch(a, key, comparator, midpointIndex, end);
        } else {
          return binarySearchForMatch(a, key, comparator, start, midpointIndex);
        }
      }
      function binarySearchForInsert(a, item, comparator, start, end) {
        const size = end - start;
        const midpointIndex = start + Math.floor(size / 2);
        const midpointItem = a[midpointIndex];
        const comparison = comparator(item, midpointItem);
        if (size < 2) {
          if (comparison > 0) {
            const finalIndex = a.length - 1;
            if (end === finalIndex && comparator(item, a[finalIndex]) > 0) {
              return end + 1;
            }
            return end;
          }
          return start;
        }
        if (comparison > 0) {
          return binarySearchForInsert(a, item, comparator, midpointIndex, end);
        }
        return binarySearchForInsert(a, item, comparator, start, midpointIndex);
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/promise.js
  var require_promise = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/promise.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var promise_exports = {};
      __export(promise_exports, {
        build: () => build,
        first: () => first,
        map: () => map,
        pipeline: () => pipeline,
        timeout: () => timeout
      });
      module.exports = __toCommonJS(promise_exports);
      var assert = __toESM(require_assert());
      async function timeout(promise, milliseconds, description) {
        assert.argumentIsRequired(promise, "promise", Promise, "Promise");
        assert.argumentIsRequired(milliseconds, "milliseconds", Number);
        assert.argumentIsOptional(description, "description", String);
        if (!(milliseconds > 0)) {
          throw 'Unable to configure promise timeout, the "milliseconds" argument must be positive';
        }
        let timeoutToken = null;
        const timeoutPromise = build((resolveCallback, rejectCallback) => {
          timeoutToken = setTimeout(() => {
            rejectCallback(description || `Promise timed out after ${milliseconds} milliseconds`);
          }, milliseconds);
        });
        const userPromise = (async () => {
          try {
            const result = await promise;
            if (timeoutToken !== null) {
              clearTimeout(timeoutToken);
            }
            return result;
          } catch (e) {
            if (timeoutToken !== null) {
              clearTimeout(timeoutToken);
            }
            throw e;
          }
        })();
        return Promise.race([userPromise, timeoutPromise]);
      }
      async function map(items, mapper, concurrency) {
        assert.argumentIsArray(items, "items");
        assert.argumentIsRequired(mapper, "mapper", Function);
        assert.argumentIsOptional(concurrency, "concurrency", Number);
        const c = Math.max(0, concurrency || 0);
        let mapPromise;
        if (c === 0 || items.length === 0) {
          mapPromise = Promise.all(items.map((item) => mapper(item)));
        } else {
          const total = items.length;
          let active = 0;
          let complete = 0;
          let failure = false;
          const results = Array.of(total);
          const executors = items.map((item, index) => {
            return async () => {
              const result = await mapper(item);
              results[index] = result;
            };
          });
          mapPromise = build((resolveCallback, rejectCallback) => {
            const execute = () => {
              if (!(executors.length > 0 && c > active && !failure)) {
                return;
              }
              active = active + 1;
              const executor = executors.shift();
              (async () => {
                try {
                  await executor();
                  if (failure) {
                    return;
                  }
                  active = active - 1;
                  complete = complete + 1;
                  if (complete < total) {
                    execute();
                  } else {
                    resolveCallback(results);
                  }
                } catch (error) {
                  failure = true;
                  rejectCallback(error);
                }
              })();
              execute();
            };
            execute();
          });
        }
        return mapPromise;
      }
      async function pipeline(functions, input) {
        assert.argumentIsArray(functions, "functions", Function);
        let result = input;
        for (let i = 0; i < functions.length; i++) {
          result = await functions[i](result);
        }
        return result;
      }
      async function first(executors) {
        assert.argumentIsArray(executors, "executors", Function);
        let result = null;
        for (let i = 0; i < executors.length && result === null; i++) {
          try {
            result = await executors[i]();
          } catch (e) {
            result = null;
          }
        }
        return result;
      }
      async function build(executor) {
        return new Promise((resolve, reject) => {
          try {
            executor(resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/api/http/Gateway.js
  var require_Gateway = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/api/http/Gateway.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Gateway_exports = {};
      __export(Gateway_exports, {
        default: () => Gateway
      });
      module.exports = __toCommonJS(Gateway_exports);
      var import_axios = __toESM(require_axios());
      var array = __toESM(require_array());
      var assert = __toESM(require_assert());
      var attributes = __toESM(require_attributes());
      var is = __toESM(require_is());
      var promise = __toESM(require_promise());
      var import_Endpoint = __toESM(require_Endpoint());
      var import_VerbType = __toESM(require_VerbType());
      var import_FailureReason = __toESM(require_FailureReason());
      var import_FailureType = __toESM(require_FailureType());
      var Gateway = class {
        constructor() {
        }
        /**
         * Invokes a web service endpoint, given the payload supplied.
         *
         * @public
         * @static
         * @async
         * @param {Endpoint} endpoint
         * @param {*=} payload
         * @returns {Promise<object>}
         */
        static async invoke(endpoint, payload) {
          assert.argumentIsRequired(endpoint, "endpoint", import_Endpoint.default, "Endpoint");
          const pathParameters = endpoint.path.parameters;
          const headerParameters = endpoint.headers.parameters;
          const queryParameters = endpoint.query.parameters;
          const bodyParameters = endpoint.body.parameters;
          const extractParameter = async (parameter) => {
            try {
              const value = await parameter.extractor(payload);
              return value;
            } catch (e) {
              return null;
            }
          };
          const groups = await Promise.all([
            promise.map(pathParameters, extractParameter),
            promise.map(headerParameters, extractParameter),
            promise.map(queryParameters, extractParameter),
            promise.map(bodyParameters, extractParameter)
          ]);
          const pathValues = groups[0];
          const headerValues = groups[1];
          const queryValues = groups[2];
          const bodyValues = groups[3];
          const parameters = array.flatten([pathParameters, headerParameters, queryParameters, bodyParameters]);
          const values = array.flatten([pathValues, headerValues, queryValues, bodyValues]);
          const failure = values.reduce((accumulator, value, index) => {
            let updatedFailure = accumulator;
            const parameter = parameters[index];
            if (value === null && !parameter.optional) {
              if (accumulator === null) {
                updatedFailure = import_FailureReason.default.forRequest({ endpoint }).addItem(import_FailureType.default.REQUEST_CONSTRUCTION_FAILURE, null, true);
              }
              updatedFailure.addItem(import_FailureType.default.REQUEST_PARAMETER_MISSING, { name: parameter.description });
            }
            return updatedFailure;
          }, null);
          if (failure !== null) {
            throw failure.format();
          }
          const options = {};
          const url = [];
          url.push(endpoint.protocol.prefix);
          url.push(endpoint.host);
          if (endpoint.port !== endpoint.protocol.defaultPort) {
            url.push(":");
            url.push(endpoint.port);
          }
          url.push("/");
          const paths = await promise.pipeline(pathValues.map((value) => (previous) => {
            let encodedValue;
            if (is.nil(value) || is.undef(value)) {
              encodedValue = value;
            } else {
              encodedValue = value.toString().replace(/\//g, "%2F");
            }
            previous.push(encodedValue);
            return previous;
          }), []);
          url.push(paths.join("/"));
          options.method = verbs.get(endpoint.verb);
          options.url = url.join("");
          if (headerParameters.length !== 0) {
            const headers = await promise.pipeline(headerValues.map((value, i) => (accumulator) => {
              const parameter = headerParameters[i];
              accumulator[parameter.key] = value;
              return accumulator;
            }), {});
            if (headers.length !== 0) {
              options.headers = headers;
            }
          }
          if (queryParameters.length !== 0) {
            const query = await promise.pipeline(queryValues.map((value, i) => (accumulator) => {
              const parameter = queryParameters[i];
              accumulator[parameter.key] = value;
              return accumulator;
            }), {});
            if (query.length !== 0) {
              options.params = query;
            }
          }
          if (bodyParameters.length !== 0) {
            const body = await promise.pipeline(bodyValues.map((value, i) => (accumulator) => {
              const parameter = bodyParameters[i];
              attributes.write(accumulator, parameter.key, value);
              return accumulator;
            }), {});
            options.data = body.body;
          }
          if (endpoint.credentials) {
            const credentials = await Promise.all([
              endpoint.credentials.usernameExtractor(payload),
              endpoint.credentials.passwordExtractor(payload)
            ]);
            options.auth = {
              username: credentials[0],
              password: credentials[1]
            };
          }
          const request = endpoint.requestInterceptor ? await endpoint.requestInterceptor.process(options, endpoint) : options;
          try {
            const response = await import_axios.default.request(request);
            if (endpoint.responseInterceptor) {
              return endpoint.responseInterceptor.process(response, endpoint);
            }
            return response;
          } catch (error) {
            if (endpoint.errorInterceptor) {
              return endpoint.errorInterceptor.process(error, endpoint);
            }
            throw error;
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Gateway]";
        }
      };
      var verbs = /* @__PURE__ */ new Map();
      verbs.set(import_VerbType.default.GET, "get");
      verbs.set(import_VerbType.default.DELETE, "delete");
      verbs.set(import_VerbType.default.POST, "post");
      verbs.set(import_VerbType.default.PUT, "put");
      verbs.set(import_VerbType.default.PATCH, "patch");
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/AdHoc.js
  var require_AdHoc = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/AdHoc.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var AdHoc_exports = {};
      __export(AdHoc_exports, {
        default: () => AdHoc
      });
      module.exports = __toCommonJS(AdHoc_exports);
      var assert = __toESM(require_assert());
      var _data;
      var _AdHoc = class _AdHoc {
        /**
         * @param {object} data
         */
        constructor(data) {
          __privateAdd(this, _data);
          __privateSet(this, _data, data || {});
        }
        /**
         * The data.
         *
         * @public
         * @returns {object}
         */
        get data() {
          return __privateGet(this, _data);
        }
        /**
         * The data.
         *
         * @public
         * @param {object} data
         */
        set data(data) {
          assert.argumentIsRequired(data, "data", Object);
          __privateSet(this, _data, data);
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {*}
         */
        toJSON() {
          return JSON.stringify(__privateGet(this, _data));
        }
        /**
         * Converts a JSON-serialized object into an {@link AdHoc} instance.
         *
         * @public
         * @static
         * @param {string} serialized
         * @returns {AdHoc}
         */
        static parse(serialized) {
          return new _AdHoc(JSON.parse(serialized));
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[AdHoc]";
        }
      };
      _data = new WeakMap();
      var AdHoc = _AdHoc;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/collections/sorting/comparators.js
  var require_comparators = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/collections/sorting/comparators.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var comparators_exports = {};
      __export(comparators_exports, {
        compareBooleans: () => compareBooleans,
        compareDates: () => compareDates,
        compareNull: () => compareNull,
        compareNumbers: () => compareNumbers,
        compareStrings: () => compareStrings,
        empty: () => empty
      });
      module.exports = __toCommonJS(comparators_exports);
      var assert = __toESM(require_assert());
      function compareDates(a, b) {
        assert.argumentIsRequired(a, "a", Date);
        assert.argumentIsRequired(b, "b", Date);
        return a.getTime() - b.getTime();
      }
      function compareNumbers(a, b) {
        assert.argumentIsRequired(a, "a", Number);
        assert.argumentIsRequired(b, "b", Number);
        return a - b;
      }
      function compareStrings(a, b) {
        assert.argumentIsRequired(a, "a", String);
        assert.argumentIsRequired(b, "b", String);
        return a.localeCompare(b);
      }
      function compareBooleans(a, b) {
        assert.argumentIsRequired(a, "a", Boolean);
        assert.argumentIsRequired(b, "b", Boolean);
        if (a === b) {
          return 0;
        } else if (a) {
          return 1;
        } else {
          return -1;
        }
      }
      function compareNull(a, b) {
        if (a === null && b !== null) {
          return -1;
        } else if (a !== null && b === null) {
          return 1;
        } else {
          return 0;
        }
      }
      function empty(a, b) {
        return 0;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/collections/sorting/ComparatorBuilder.js
  var require_ComparatorBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/collections/sorting/ComparatorBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ComparatorBuilder_exports = {};
      __export(ComparatorBuilder_exports, {
        default: () => ComparatorBuilder
      });
      module.exports = __toCommonJS(ComparatorBuilder_exports);
      var assert = __toESM(require_assert());
      var comparators = __toESM(require_comparators());
      var _comparator, _invert, _previous;
      var _ComparatorBuilder = class _ComparatorBuilder {
        /**
         * @param {Function} comparator - The initial comparator.
         * @param {boolean=} invert - Indicates if the comparator should sort in descending order.
         * @param {ComparatorBuilder=} previous - The previous comparator builder in the chain.
         */
        constructor(comparator, invert, previous) {
          __privateAdd(this, _comparator);
          __privateAdd(this, _invert);
          __privateAdd(this, _previous);
          assert.argumentIsRequired(comparator, "comparator", Function);
          assert.argumentIsOptional(invert, "invert", Boolean);
          __privateSet(this, _comparator, comparator);
          __privateSet(this, _invert, invert || false);
          __privateSet(this, _previous, previous || null);
        }
        /**
         * Adds a new comparator to the list of comparators to use.
         *
         * @public
         * @param {Function} comparator - The next comparator function.
         * @param {boolean=} invert - Indicates if the comparator should sort in descending order.
         * @returns {ComparatorBuilder}
         */
        thenBy(comparator, invert) {
          assert.argumentIsRequired(comparator, "comparator", Function);
          assert.argumentIsOptional(invert, "invert", Boolean);
          return new _ComparatorBuilder(comparator, invert, this);
        }
        /**
         * Flips the order of the comparator (e.g. ascending to descending).
         *
         * @public
         * @returns {ComparatorBuilder}
         */
        invert() {
          let previous;
          if (__privateGet(this, _previous)) {
            previous = __privateGet(this, _previous).invert();
          } else {
            previous = null;
          }
          return new _ComparatorBuilder(__privateGet(this, _comparator), !__privateGet(this, _invert), previous);
        }
        /**
         * Returns the comparator function.
         *
         * @public
         * @returns {Function}
         */
        toComparator() {
          let previousComparator;
          if (__privateGet(this, _previous)) {
            previousComparator = __privateGet(this, _previous).toComparator();
          } else {
            previousComparator = comparators.empty;
          }
          return (a, b) => {
            let result = previousComparator(a, b);
            if (result === 0) {
              let sortA;
              let sortB;
              if (__privateGet(this, _invert)) {
                sortA = b;
                sortB = a;
              } else {
                sortA = a;
                sortB = b;
              }
              result = __privateGet(this, _comparator).call(this, sortA, sortB);
            }
            return result;
          };
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[ComparatorBuilder]";
        }
        /**
         * Creates a {@link ComparatorBuilder}, given an initial comparator function.
         *
         * @public
         * @static
         * @param {Function} comparator - The initial comparator.
         * @param {boolean=} invert - Indicates if the comparator should sort in descending order.
         * @returns {ComparatorBuilder}
         */
        static startWith(comparator, invert) {
          return new _ComparatorBuilder(comparator, invert);
        }
      };
      _comparator = new WeakMap();
      _invert = new WeakMap();
      _previous = new WeakMap();
      var ComparatorBuilder = _ComparatorBuilder;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/DayFormatType.js
  var require_DayFormatType = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/DayFormatType.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var DayFormatType_exports = {};
      __export(DayFormatType_exports, {
        default: () => DayFormatType
      });
      module.exports = __toCommonJS(DayFormatType_exports);
      var import_Enum = __toESM(require_Enum());
      var _regex, _yearIndex, _monthIndex, _dayIndex, _yearShift;
      var DayFormatType = class extends import_Enum.default {
        /**
            * @param {string} description
            * @param {RegExp} regex
            * @param {number} yearIndex
            * @param {number} monthIndex
            * @param {number} dayIndex
            * @param {number} yearShift
            */
        constructor(description, regex, yearIndex, monthIndex, dayIndex, yearShift) {
          super(description, description);
          __privateAdd(this, _regex);
          __privateAdd(this, _yearIndex);
          __privateAdd(this, _monthIndex);
          __privateAdd(this, _dayIndex);
          __privateAdd(this, _yearShift);
          __privateSet(this, _regex, regex);
          __privateSet(this, _yearIndex, yearIndex);
          __privateSet(this, _monthIndex, monthIndex);
          __privateSet(this, _dayIndex, dayIndex);
          __privateSet(this, _yearShift, yearShift);
        }
        /**
         * A regular expression for parsing the day type.
         *
         * @public
         * @returns {RegExp}
         */
        get regex() {
          return __privateGet(this, _regex);
        }
        /**
         * The index used to read the year from a regular expression match.
         *
         * @public
         * @returns {number}
         */
        get yearIndex() {
          return __privateGet(this, _yearIndex);
        }
        /**
         * The index used to read the month from a regular expression match.
         *
         * @public
         * @returns {number}
         */
        get monthIndex() {
          return __privateGet(this, _monthIndex);
        }
        /**
         * The index used to read the day from a regular expression match.
         *
         * @public
         * @returns {number}
         */
        get dayIndex() {
          return __privateGet(this, _dayIndex);
        }
        /**
         * The amount to add to the year (extracted from a formatted string) to get the
         * full year (e.g. for "11-31-25" of an MM-DD-YY string, the value will be 2000).
         *
         * @public
         * @returns {number}
         */
        get yearShift() {
          return __privateGet(this, _yearShift);
        }
        /**
         * Specifies date formatting as four-digit year, then month, then day (e.g. 2025-11-31).
         *
         * @public
         * @static
         * @returns {DayFormatType}
         */
        static get YYYY_MM_DD() {
          return yyyymmdd;
        }
        /**
         * Specifies date formatting as month, then day, then four-digit year (e.g. 11-31-2025).
         *
         * @public
         * @static
         * @returns {DayFormatType}
         */
        static get MM_DD_YYYY() {
          return mmddyyyy;
        }
        /**
         * Specifies date formatting as month, then day, then two-digit year (e.g. 11-31-25).
         *
         * @public
         * @static
         * @returns {DayFormatType}
         */
        static get MM_DD_YY() {
          return mmddyy;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[DayFormatType (description=${this.description})]`;
        }
      };
      _regex = new WeakMap();
      _yearIndex = new WeakMap();
      _monthIndex = new WeakMap();
      _dayIndex = new WeakMap();
      _yearShift = new WeakMap();
      function getMillenniumShift() {
        const today = /* @__PURE__ */ new Date();
        return Math.floor(today.getFullYear() / 100) * 100;
      }
      var yyyymmdd = new DayFormatType("YYYY_MM_DD", /^([0-9]{4})[-/.]?([0-9]{1,2})[-/.]?([0-9]{1,2})$/, 1, 2, 3, 0);
      var mmddyyyy = new DayFormatType("MM_DD_YYYY", /^([0-9]{1,2})[-/.]?([0-9]{1,2})[-/.]?([0-9]{4})$/, 3, 1, 2, 0);
      var mmddyy = new DayFormatType("MM_DD_YY", /^([0-9]{1,2})[-/.]?([0-9]{1,2})[-/.]?([0-9]{2})$/, 3, 1, 2, getMillenniumShift());
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Day.js
  var require_Day = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Day.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Day_exports = {};
      __export(Day_exports, {
        default: () => Day
      });
      module.exports = __toCommonJS(Day_exports);
      var assert = __toESM(require_assert());
      var comparators = __toESM(require_comparators());
      var is = __toESM(require_is());
      var import_ComparatorBuilder = __toESM(require_ComparatorBuilder());
      var import_DayFormatType = __toESM(require_DayFormatType());
      var _year, _month, _day;
      var _Day = class _Day {
        /**
         * @param {number} year
         * @param {number} month
         * @param {number} day
         */
        constructor(year, month, day) {
          __privateAdd(this, _year);
          __privateAdd(this, _month);
          __privateAdd(this, _day);
          if (!_Day.validate(year, month, day)) {
            throw new Error(`Unable to instantiate [ Day ], input is invalid [ ${year} ], [ ${month} ], [ ${day} ]`);
          }
          __privateSet(this, _year, year);
          __privateSet(this, _month, month);
          __privateSet(this, _day, day);
        }
        /**
         * Calculates a new {@link Day} in the future (or past).
         *
         * @public
         * @param {number} days - The number of days to add (negative numbers can be used for subtraction).
         * @param {boolean=} inverse - If true, the sign of the "days" value will be flipped.
         * @returns {Day}
         */
        addDays(days, inverse) {
          assert.argumentIsRequired(days, "days", Number);
          assert.argumentIsOptional(inverse, "inverse", Boolean);
          assert.argumentIsValid(days, "days", is.large, "is an integer");
          let totalDaysToShift;
          if (is.boolean(inverse) && inverse) {
            totalDaysToShift = days * -1;
          } else {
            totalDaysToShift = days;
          }
          const positive = is.positive(totalDaysToShift);
          let shiftedDay = __privateGet(this, _day);
          let shiftedMonth = __privateGet(this, _month);
          let shiftedYear = __privateGet(this, _year);
          while (totalDaysToShift !== 0) {
            let monthDaysAvailable;
            let monthDaysToShift;
            if (positive) {
              monthDaysAvailable = _Day.getDaysInMonth(shiftedYear, shiftedMonth) - shiftedDay;
              monthDaysToShift = Math.min(totalDaysToShift, monthDaysAvailable);
            } else {
              monthDaysAvailable = 1 - shiftedDay;
              monthDaysToShift = Math.max(totalDaysToShift, monthDaysAvailable);
            }
            totalDaysToShift = totalDaysToShift - monthDaysToShift;
            if (totalDaysToShift === 0) {
              shiftedDay = shiftedDay + monthDaysToShift;
            } else if (positive) {
              shiftedMonth++;
              if (shiftedMonth > 12) {
                shiftedYear++;
                shiftedMonth = 1;
              }
              shiftedDay = 0;
            } else {
              shiftedMonth--;
              if (shiftedMonth < 1) {
                shiftedYear--;
                shiftedMonth = 12;
              }
              shiftedDay = _Day.getDaysInMonth(shiftedYear, shiftedMonth) + 1;
            }
          }
          return new _Day(shiftedYear, shiftedMonth, shiftedDay);
        }
        /**
         * Calculates a new {@link Day} in the past (or future).
         *
         * @public
         * @param {number} days - The number of days to subtract (negative numbers can be used for addition).
         * @returns {Day}
         */
        subtractDays(days) {
          return this.addDays(days, true);
        }
        /**
         * Calculates a new {@link Day} in the future (or past). If the new date is at the end of
         * the month and the new month has fewer days than the current month, days will be subtracted
         * as necessary (e.g. adding one month to March 31 will return April 30).
         *
         * @public
         * @param {number} months - The number of months to add (negative numbers can be used for subtraction).
         * @param {boolean=} inverse - If true, the sign of the "days" value will be flipped.
         * @returns {Day}
         */
        addMonths(months, inverse) {
          assert.argumentIsRequired(months, "months", Number);
          assert.argumentIsOptional(inverse, "inverse", Boolean);
          assert.argumentIsValid(months, "months", is.large, "is an integer");
          let totalMonthsToShift;
          if (is.boolean(inverse) && inverse) {
            totalMonthsToShift = months * -1;
          } else {
            totalMonthsToShift = months;
          }
          const monthsToShift = totalMonthsToShift % 12;
          const yearsToShift = (totalMonthsToShift - monthsToShift) / 12;
          let shiftedYear = this.year + yearsToShift;
          let shiftedMonth = this.month + monthsToShift;
          let shiftedDay = this.day;
          if (shiftedMonth > 12) {
            shiftedYear = shiftedYear + 1;
            shiftedMonth = shiftedMonth - 12;
          }
          if (shiftedMonth < 1) {
            shiftedYear = shiftedYear - 1;
            shiftedMonth = shiftedMonth + 12;
          }
          while (!_Day.validate(shiftedYear, shiftedMonth, shiftedDay)) {
            shiftedDay = shiftedDay - 1;
          }
          return new _Day(shiftedYear, shiftedMonth, shiftedDay);
        }
        /**
         * Calculates a new {@link Day} in the past (or future).
         *
         * @public
         * @param {number} months - The number of months to subtract (negative numbers can be used for addition).
         * @returns {Day}
         */
        subtractMonths(months) {
          return this.addMonths(months, true);
        }
        /**
         * Calculates a new {@link Day} in the future (or past). If the new date is at the end of
         * the month and the new month has fewer days than the current month, days will be subtracted
         * as necessary (e.g. adding one year to February 29 will return February 28).
         *
         * @public
         * @param {number} years - The number of years to add (negative numbers can be used for subtraction).
         * @param {boolean=} inverse - If true, the sign of the "days" value will be flipped.
         * @returns {Day}
         */
        addYears(years, inverse) {
          assert.argumentIsRequired(years, "years", Number);
          assert.argumentIsOptional(inverse, "inverse", Boolean);
          assert.argumentIsValid(years, "years", is.large, "is an integer");
          let yearsToShift;
          if (is.boolean(inverse) && inverse) {
            yearsToShift = years * -1;
          } else {
            yearsToShift = years;
          }
          let shiftedYear = this.year + yearsToShift;
          let shiftedMonth = this.month;
          let shiftedDay = this.day;
          while (!_Day.validate(shiftedYear, shiftedMonth, shiftedDay)) {
            shiftedDay = shiftedDay - 1;
          }
          return new _Day(shiftedYear, shiftedMonth, shiftedDay);
        }
        /**
         * Calculates a new {@link Day} in the past (or future).
         *
         * @public
         * @param {number} years - The number of years to subtract (negative numbers can be used for addition).
         * @returns {Day}
         */
        subtractYears(years) {
          return this.addYears(years, true);
        }
        /**
         * Returns a new {@link Day} instance for the start of the month referenced by the current instance.
         *
         * @public
         * @returns {Day}
         */
        getStartOfMonth() {
          return new _Day(this.year, this.month, 1);
        }
        /**
         * Returns a new instance for the {@link Day} end of the month referenced by the current instance.
         *
         * @public
         * @returns {Day}
         */
        getEndOfMonth() {
          return new _Day(this.year, this.month, _Day.getDaysInMonth(this.year, this.month));
        }
        /**
         * Indicates if the current {@link Day} instance occurs before another day.
         *
         * @public
         * @param {Day} other
         * @returns {boolean}
         */
        getIsBefore(other) {
          return _Day.compareDays(this, other) < 0;
        }
        /**
         * Indicates if the current {@link Day} instance occurs after another day.
         *
         * @public
         * @param {Day} other
         * @returns {boolean}
         */
        getIsAfter(other) {
          return _Day.compareDays(this, other) > 0;
        }
        /**
         * Indicates the current day falls between two other days, inclusive
         * of the range boundaries.
         *
         * @public
         * @param {Day=} first
         * @param {Day=} last
         * @returns {boolean}
         */
        getIsContained(first, last) {
          assert.argumentIsOptional(first, "first", _Day, "Day");
          assert.argumentIsOptional(last, "last", _Day, "Day");
          let notAfter;
          let notBefore;
          if (first && last && first.getIsAfter(last)) {
            notBefore = false;
            notAfter = false;
          } else {
            notAfter = !(last instanceof _Day) || !this.getIsAfter(last);
            notBefore = !(first instanceof _Day) || !this.getIsBefore(first);
          }
          return notAfter && notBefore;
        }
        /**
         * Indicates if another {@link Day} refers to the same moment.
         *
         * @public
         * @param {Day} other
         * @returns {boolean}
         */
        getIsEqual(other) {
          return _Day.compareDays(this, other) === 0;
        }
        /**
         * Calculates and returns name of the day of the week (e.g. Monday, Tuesday, Wednesday, etc.).
         *
         * @public
         * @returns {string}
         */
        getName() {
          const count = _Day.countDaysBetween(REFERENCE_MONDAY, this);
          let index = count % NAMES_OF_DAYS.length;
          if (index < 0) {
            index = index + NAMES_OF_DAYS.length;
          }
          return NAMES_OF_DAYS[index];
        }
        /**
         * The year.
         *
         * @public
         * @returns {number}
         */
        get year() {
          return __privateGet(this, _year);
        }
        /**
         * The month of the year (January is one, December is twelve).
         *
         * @public
         * @returns {number}
         */
        get month() {
          return __privateGet(this, _month);
        }
        /**
         * The day of the month.
         *
         * @public
         * @returns {number}
         */
        get day() {
          return __privateGet(this, _day);
        }
        /**
         * Outputs the date as the formatted string: {year}-{month}-{day}.
         *
         * @public
         * @returns {string}
         */
        format() {
          return `${leftPad(__privateGet(this, _year), 4, "0")}-${leftPad(__privateGet(this, _month), 2, "0")}-${leftPad(__privateGet(this, _day), 2, "0")}`;
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {string}
         */
        toJSON() {
          return this.format();
        }
        /**
         * Clones a {@link Day} instance.
         *
         * @public
         * @static
         * @param {Day} value
         * @returns {Day}
         */
        static clone(value) {
          assert.argumentIsRequired(value, "value", _Day, "Day");
          return new _Day(value.year, value.month, value.day);
        }
        /**
         * Converts a string (which matches the output of {@link Day#format}) into
         * a {@link Day} instance.
         *
         * @public
         * @static
         * @param {string} value
         * @param {DayFormatType=} type
         * @returns {Day}
         */
        static parse(value, type) {
          assert.argumentIsRequired(value, "value", String);
          let t;
          if (type instanceof import_DayFormatType.default) {
            t = type;
          } else {
            t = import_DayFormatType.default.YYYY_MM_DD;
          }
          const match = value.match(t.regex);
          if (match === null) {
            throw new Error(`Unable to parse value as Day [ ${value} ]`);
          }
          return new _Day(parseInt(match[t.yearIndex]) + t.yearShift, parseInt(match[t.monthIndex]), parseInt(match[t.dayIndex]));
        }
        /**
         * Creates a {@link Day} from the year, month, and day properties (in local time)
         * of the {@link Date} argument.
         *
         * @public
         * @static
         * @param {Date} date
         * @returns {Day}
         */
        static fromDate(date) {
          assert.argumentIsRequired(date, "date", Date);
          return new _Day(date.getFullYear(), date.getMonth() + 1, date.getDate());
        }
        /**
         * Creates a {@link Day} from the year, month, and day properties (in UTC)
         * of the {@link Date} argument.
         *
         * @public
         * @static
         * @param {Date} date
         * @returns {Day}
         */
        static fromDateUtc(date) {
          assert.argumentIsRequired(date, "date", Date);
          return new _Day(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
        }
        /**
         * Returns a {@link Day} instance using today's local date.
         *
         * @public
         * @static
         * @returns {Day}
         */
        static getToday() {
          return _Day.fromDate(/* @__PURE__ */ new Date());
        }
        /**
         * Returns true if the year, month, and day combination is valid; otherwise false.
         *
         * @public
         * @static
         * @param {number} year
         * @param {number} month
         * @param {number} day
         * @returns {boolean}
         */
        static validate(year, month, day) {
          return is.integer(year) && is.integer(month) && is.integer(day) && !(month < 1) && !(month > 12) && !(day < 1) && !(day > _Day.getDaysInMonth(year, month));
        }
        /**
         * Returns the number of days in a given month.
         *
         * @public
         * @static
         * @param {number} year - The year number (e.g. 2017)
         * @param {number} month - The month number (e.g. 2 is February)
         * @returns {number}
         */
        static getDaysInMonth(year, month) {
          switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
              return 31;
            }
            case 4:
            case 6:
            case 9:
            case 11: {
              return 30;
            }
            case 2: {
              if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return 29;
              } else {
                return 28;
              }
            }
          }
        }
        /**
         * A comparator function for {@link Day} instances.
         *
         * @public
         * @static
         * @param {Day} a
         * @param {Day} b
         * @returns {number}
         */
        static compareDays(a, b) {
          assert.argumentIsRequired(a, "a", _Day, "Day");
          assert.argumentIsRequired(b, "b", _Day, "Day");
          return comparator(a, b);
        }
        /**
         * Calculates the number of days between two {@link Day} instances (may return
         * a negative value).
         *
         * @public
         * @static
         * @param {Day} a
         * @param {Day} b
         * @returns {number}
         */
        static countDaysBetween(a, b) {
          assert.argumentIsRequired(a, "a", _Day, "Day");
          assert.argumentIsRequired(b, "b", _Day, "Day");
          if (a.getIsEqual(b)) {
            return 0;
          }
          let start;
          let end;
          let reversed = b.getIsBefore(a);
          if (reversed) {
            start = b;
            end = a;
          } else {
            start = a;
            end = b;
          }
          let currentMonth = start.month;
          let currentYear = start.year;
          let counter = 0 - start.day;
          while (!(currentMonth === end.month && currentYear === end.year)) {
            counter = counter + _Day.getDaysInMonth(currentYear, currentMonth);
            if (currentMonth === 12) {
              currentMonth = 1;
              currentYear = currentYear + 1;
            } else {
              currentMonth = currentMonth + 1;
            }
          }
          counter = counter + end.day;
          if (reversed) {
            counter = counter * -1;
          }
          return counter;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Day]";
        }
      };
      _year = new WeakMap();
      _month = new WeakMap();
      _day = new WeakMap();
      var Day = _Day;
      function leftPad(value, digits, character) {
        let string = value.toString();
        let padding = digits - string.length;
        return `${character.repeat(padding)}${string}`;
      }
      var comparator = import_ComparatorBuilder.default.startWith((a, b) => comparators.compareNumbers(a.year, b.year)).thenBy((a, b) => comparators.compareNumbers(a.month, b.month)).thenBy((a, b) => comparators.compareNumbers(a.day, b.day)).toComparator();
      var NAMES_OF_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var REFERENCE_MONDAY = new Day(2024, 1, 1);
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/big.js/big.js
  var require_big = __commonJS({
    "../../node_modules/big.js/big.js"(exports, module) {
      (function(GLOBAL) {
        "use strict";
        var Big, DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
        function _Big_() {
          function Big2(n) {
            var x = this;
            if (!(x instanceof Big2)) {
              return n === UNDEFINED && arguments.length === 0 ? _Big_() : new Big2(n);
            }
            if (n instanceof Big2) {
              x.s = n.s;
              x.e = n.e;
              x.c = n.c.slice();
            } else {
              if (typeof n !== "string") {
                if (Big2.strict === true && typeof n !== "bigint") {
                  throw TypeError(INVALID + "value");
                }
                n = n === 0 && 1 / n < 0 ? "-0" : String(n);
              }
              parse(x, n);
            }
            x.constructor = Big2;
          }
          Big2.prototype = P;
          Big2.DP = DP;
          Big2.RM = RM;
          Big2.NE = NE;
          Big2.PE = PE;
          Big2.strict = STRICT;
          Big2.roundDown = 0;
          Big2.roundHalfUp = 1;
          Big2.roundHalfEven = 2;
          Big2.roundUp = 3;
          return Big2;
        }
        function parse(x, n) {
          var e, i, nl;
          if (!NUMERIC.test(n)) {
            throw Error(INVALID + "number");
          }
          x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
          if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
          if ((i = n.search(/e/i)) > 0) {
            if (e < 0) e = i;
            e += +n.slice(i + 1);
            n = n.substring(0, i);
          } else if (e < 0) {
            e = n.length;
          }
          nl = n.length;
          for (i = 0; i < nl && n.charAt(i) == "0"; ) ++i;
          if (i == nl) {
            x.c = [x.e = 0];
          } else {
            for (; nl > 0 && n.charAt(--nl) == "0"; ) ;
            x.e = e - i - 1;
            x.c = [];
            for (e = 0; i <= nl; ) x.c[e++] = +n.charAt(i++);
          }
          return x;
        }
        function round(x, sd, rm, more) {
          var xc = x.c;
          if (rm === UNDEFINED) rm = x.constructor.RM;
          if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
            throw Error(INVALID_RM);
          }
          if (sd < 1) {
            more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
            xc.length = 1;
            if (more) {
              x.e = x.e - sd + 1;
              xc[0] = 1;
            } else {
              xc[0] = x.e = 0;
            }
          } else if (sd < xc.length) {
            more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
            xc.length = sd;
            if (more) {
              for (; ++xc[--sd] > 9; ) {
                xc[sd] = 0;
                if (sd === 0) {
                  ++x.e;
                  xc.unshift(1);
                  break;
                }
              }
            }
            for (sd = xc.length; !xc[--sd]; ) xc.pop();
          }
          return x;
        }
        function stringify(x, doExponential, isNonzero) {
          var e = x.e, s = x.c.join(""), n = s.length;
          if (doExponential) {
            s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
          } else if (e < 0) {
            for (; ++e; ) s = "0" + s;
            s = "0." + s;
          } else if (e > 0) {
            if (++e > n) {
              for (e -= n; e--; ) s += "0";
            } else if (e < n) {
              s = s.slice(0, e) + "." + s.slice(e);
            }
          } else if (n > 1) {
            s = s.charAt(0) + "." + s.slice(1);
          }
          return x.s < 0 && isNonzero ? "-" + s : s;
        }
        P.abs = function() {
          var x = new this.constructor(this);
          x.s = 1;
          return x;
        };
        P.cmp = function(y) {
          var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
          if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
          if (i != j) return i;
          isneg = i < 0;
          if (k != l) return k > l ^ isneg ? 1 : -1;
          j = (k = xc.length) < (l = yc.length) ? k : l;
          for (i = -1; ++i < j; ) {
            if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
          }
          return k == l ? 0 : k > l ^ isneg ? 1 : -1;
        };
        P.div = function(y) {
          var x = this, Big2 = x.constructor, a = x.c, b = (y = new Big2(y)).c, k = x.s == y.s ? 1 : -1, dp = Big2.DP;
          if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throw Error(INVALID_DP);
          }
          if (!b[0]) {
            throw Error(DIV_BY_ZERO);
          }
          if (!a[0]) {
            y.s = k;
            y.c = [y.e = 0];
            return y;
          }
          var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1;
          q.s = k;
          k = p < 0 ? 0 : p;
          bz.unshift(0);
          for (; rl++ < bl; ) r.push(0);
          do {
            for (n = 0; n < 10; n++) {
              if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
              } else {
                for (ri = -1, cmp = 0; ++ri < bl; ) {
                  if (b[ri] != r[ri]) {
                    cmp = b[ri] > r[ri] ? 1 : -1;
                    break;
                  }
                }
              }
              if (cmp < 0) {
                for (bt = rl == bl ? b : bz; rl; ) {
                  if (r[--rl] < bt[rl]) {
                    ri = rl;
                    for (; ri && !r[--ri]; ) r[ri] = 9;
                    --r[ri];
                    r[rl] += 10;
                  }
                  r[rl] -= bt[rl];
                }
                for (; !r[0]; ) r.shift();
              } else {
                break;
              }
            }
            qc[qi++] = cmp ? n : ++n;
            if (r[0] && cmp) r[rl] = a[ai] || 0;
            else r = [a[ai]];
          } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
          if (!qc[0] && qi != 1) {
            qc.shift();
            q.e--;
            p--;
          }
          if (qi > p) round(q, p, Big2.RM, r[0] !== UNDEFINED);
          return q;
        };
        P.eq = function(y) {
          return this.cmp(y) === 0;
        };
        P.gt = function(y) {
          return this.cmp(y) > 0;
        };
        P.gte = function(y) {
          return this.cmp(y) > -1;
        };
        P.lt = function(y) {
          return this.cmp(y) < 0;
        };
        P.lte = function(y) {
          return this.cmp(y) < 1;
        };
        P.minus = P.sub = function(y) {
          var i, j, t, xlty, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
          var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
          if (!xc[0] || !yc[0]) {
            if (yc[0]) {
              y.s = -b;
            } else if (xc[0]) {
              y = new Big2(x);
            } else {
              y.s = 1;
            }
            return y;
          }
          if (a = xe - ye) {
            if (xlty = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
            t.reverse();
            for (b = a; b--; ) t.push(0);
            t.reverse();
          } else {
            j = ((xlty = xc.length < yc.length) ? xc : yc).length;
            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
              }
            }
          }
          if (xlty) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
          }
          if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--; ) xc[i++] = 0;
          for (b = i; j > a; ) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; ) xc[i] = 9;
              --xc[i];
              xc[j] += 10;
            }
            xc[j] -= yc[j];
          }
          for (; xc[--b] === 0; ) xc.pop();
          for (; xc[0] === 0; ) {
            xc.shift();
            --ye;
          }
          if (!xc[0]) {
            y.s = 1;
            xc = [ye = 0];
          }
          y.c = xc;
          y.e = ye;
          return y;
        };
        P.mod = function(y) {
          var ygtx, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
          if (!y.c[0]) {
            throw Error(DIV_BY_ZERO);
          }
          x.s = y.s = 1;
          ygtx = y.cmp(x) == 1;
          x.s = a;
          y.s = b;
          if (ygtx) return new Big2(x);
          a = Big2.DP;
          b = Big2.RM;
          Big2.DP = Big2.RM = 0;
          x = x.div(y);
          Big2.DP = a;
          Big2.RM = b;
          return this.minus(x.times(y));
        };
        P.neg = function() {
          var x = new this.constructor(this);
          x.s = -x.s;
          return x;
        };
        P.plus = P.add = function(y) {
          var e, k, t, x = this, Big2 = x.constructor;
          y = new Big2(y);
          if (x.s != y.s) {
            y.s = -y.s;
            return x.minus(y);
          }
          var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
          if (!xc[0] || !yc[0]) {
            if (!yc[0]) {
              if (xc[0]) {
                y = new Big2(x);
              } else {
                y.s = x.s;
              }
            }
            return y;
          }
          xc = xc.slice();
          if (e = xe - ye) {
            if (e > 0) {
              ye = xe;
              t = yc;
            } else {
              e = -e;
              t = xc;
            }
            t.reverse();
            for (; e--; ) t.push(0);
            t.reverse();
          }
          if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
          }
          e = yc.length;
          for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
          if (k) {
            xc.unshift(k);
            ++ye;
          }
          for (e = xc.length; xc[--e] === 0; ) xc.pop();
          y.c = xc;
          y.e = ye;
          return y;
        };
        P.pow = function(n) {
          var x = this, one = new x.constructor("1"), y = one, isneg = n < 0;
          if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
            throw Error(INVALID + "exponent");
          }
          if (isneg) n = -n;
          for (; ; ) {
            if (n & 1) y = y.times(x);
            n >>= 1;
            if (!n) break;
            x = x.times(x);
          }
          return isneg ? one.div(y) : y;
        };
        P.prec = function(sd, rm) {
          if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throw Error(INVALID + "precision");
          }
          return round(new this.constructor(this), sd, rm);
        };
        P.round = function(dp, rm) {
          if (dp === UNDEFINED) dp = 0;
          else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
            throw Error(INVALID_DP);
          }
          return round(new this.constructor(this), dp + this.e + 1, rm);
        };
        P.sqrt = function() {
          var r, c, t, x = this, Big2 = x.constructor, s = x.s, e = x.e, half = new Big2("0.5");
          if (!x.c[0]) return new Big2(x);
          if (s < 0) {
            throw Error(NAME + "No square root");
          }
          s = Math.sqrt(+stringify(x, true, true));
          if (s === 0 || s === 1 / 0) {
            c = x.c.join("");
            if (!(c.length + e & 1)) c += "0";
            s = Math.sqrt(c);
            e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
            r = new Big2((s == 1 / 0 ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
          } else {
            r = new Big2(s + "");
          }
          e = r.e + (Big2.DP += 4);
          do {
            t = r;
            r = half.times(t.plus(x.div(t)));
          } while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
          return round(r, (Big2.DP -= 4) + r.e + 1, Big2.RM);
        };
        P.times = P.mul = function(y) {
          var c, x = this, Big2 = x.constructor, xc = x.c, yc = (y = new Big2(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
          y.s = x.s == y.s ? 1 : -1;
          if (!xc[0] || !yc[0]) {
            y.c = [y.e = 0];
            return y;
          }
          y.e = i + j;
          if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
          }
          for (c = new Array(j = a + b); j--; ) c[j] = 0;
          for (i = b; i--; ) {
            b = 0;
            for (j = a + i; j > i; ) {
              b = c[j] + yc[i] * xc[j - i - 1] + b;
              c[j--] = b % 10;
              b = b / 10 | 0;
            }
            c[j] = b;
          }
          if (b) ++y.e;
          else c.shift();
          for (i = c.length; !c[--i]; ) c.pop();
          y.c = c;
          return y;
        };
        P.toExponential = function(dp, rm) {
          var x = this, n = x.c[0];
          if (dp !== UNDEFINED) {
            if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
              throw Error(INVALID_DP);
            }
            x = round(new x.constructor(x), ++dp, rm);
            for (; x.c.length < dp; ) x.c.push(0);
          }
          return stringify(x, true, !!n);
        };
        P.toFixed = function(dp, rm) {
          var x = this, n = x.c[0];
          if (dp !== UNDEFINED) {
            if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
              throw Error(INVALID_DP);
            }
            x = round(new x.constructor(x), dp + x.e + 1, rm);
            for (dp = dp + x.e + 1; x.c.length < dp; ) x.c.push(0);
          }
          return stringify(x, false, !!n);
        };
        P.toJSON = P.toString = function() {
          var x = this, Big2 = x.constructor;
          return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, !!x.c[0]);
        };
        P.toNumber = function() {
          var n = +stringify(this, true, true);
          if (this.constructor.strict === true && !this.eq(n.toString())) {
            throw Error(NAME + "Imprecise conversion");
          }
          return n;
        };
        P.toPrecision = function(sd, rm) {
          var x = this, Big2 = x.constructor, n = x.c[0];
          if (sd !== UNDEFINED) {
            if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
              throw Error(INVALID + "precision");
            }
            x = round(new Big2(x), sd, rm);
            for (; x.c.length < sd; ) x.c.push(0);
          }
          return stringify(x, sd <= x.e || x.e <= Big2.NE || x.e >= Big2.PE, !!n);
        };
        P.valueOf = function() {
          var x = this, Big2 = x.constructor;
          if (Big2.strict === true) {
            throw Error(NAME + "valueOf disallowed");
          }
          return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, true);
        };
        Big = _Big_();
        Big["default"] = Big.Big = Big;
        if (typeof define === "function" && define.amd) {
          define(function() {
            return Big;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = Big;
        } else {
          GLOBAL.Big = Big;
        }
      })(exports);
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Decimal.js
  var require_Decimal = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Decimal.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Decimal_exports = {};
      __export(Decimal_exports, {
        default: () => Decimal
      });
      module.exports = __toCommonJS(Decimal_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_Enum = __toESM(require_Enum());
      var import_big = __toESM(require_big());
      var _big, _Decimal_static, getBig_fn;
      var _Decimal = class _Decimal {
        /**
         * @param {Decimal|number|string} value - The value.
         */
        constructor(value) {
          __privateAdd(this, _big);
          var _a;
          __privateSet(this, _big, __privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, value));
        }
        /**
         * Returns a new {@link Decimal} instance that is the sum of the
         * current instance's value and the value supplied.
         *
         * @public
         * @param {Decimal|number|string} other - The value to add.
         * @returns {Decimal}
         */
        add(other) {
          var _a;
          return new _Decimal(__privateGet(this, _big).plus(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other)));
        }
        /**
         * Returns a new {@link Decimal} instance with a value that results
         * from the subtraction of the value supplied from the current instance's
         * value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to subtract.
         * @returns {Decimal}
         */
        subtract(other) {
          var _a;
          return new _Decimal(__privateGet(this, _big).minus(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other)));
        }
        /**
         * Returns a new {@link Decimal} instance that is the product of the
         * current instance's value and the value supplied.
         *
         * @public
         * @param {Decimal|number|string} other - The value to multiply the current instance by.
         * @returns {Decimal}
         */
        multiply(other) {
          var _a;
          return new _Decimal(__privateGet(this, _big).times(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other)));
        }
        /**
         * Returns a new {@link Decimal} instance with a value that results
         * from the division of the current instance's value by the value
         * supplied.
         *
         * @public
         * @param {Decimal|number|string} other - The value to divide the current instance by.
         * @returns {Decimal}
         */
        divide(other) {
          var _a;
          return new _Decimal(__privateGet(this, _big).div(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other)));
        }
        /**
         * Returns a new {@link Decimal} instance with a value that results
         * from raising the current instance to the power of the exponent
         * provided.
         *
         * @public
         * @param {number} exponent
         * @returns {Decimal}
         */
        raise(exponent) {
          assert.argumentIsRequired(exponent, "exponent", Number);
          return new _Decimal(__privateGet(this, _big).pow(exponent));
        }
        /**
         * Returns a new {@link Decimal} with a value resulting from a rounding
         * operation on the current value.
         *
         * @public
         * @param {number} places - The number of decimal places to retain.
         * @param {RoundingMode=} mode - The strategy to use for rounding.
         * @returns {Decimal}
         */
        round(places, mode) {
          assert.argumentIsRequired(places, "places", Number);
          assert.argumentIsOptional(mode, "mode", RoundingMode, "RoundingMode");
          const modeToUse = mode || RoundingMode.NORMAL;
          return new _Decimal(__privateGet(this, _big).round(places, modeToUse.value));
        }
        /**
         * Returns a new {@link Decimal} instance with of the remainder when
         * dividing the current instance by the value supplied.
         *
         * @public
         * @param {Decimal|number|string} other
         * @returns {Decimal}
         */
        mod(other) {
          var _a;
          return new _Decimal(__privateGet(this, _big).mod(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other)));
        }
        /**
         * Returns a new {@link Decimal} instance having the absolute value of
         * the current instance's value.
         *
         * @public
         * @returns {Decimal}
         */
        absolute() {
          return new _Decimal(__privateGet(this, _big).abs());
        }
        /**
         * Returns a new {@link Decimal} instance the opposite sign as the
         * current instance's value.
         *
         * @public
         * @returns {Decimal}
         */
        opposite() {
          return this.multiply(-1);
        }
        /**
         * Returns a boolean value, indicating if the current instance's value is
         * equal to zero (or approximately equal to zero).
         *
         * @public
         * @param {boolean=} approximate
         * @param {number=} places
         * @returns {boolean}
         */
        getIsZero(approximate, places) {
          assert.argumentIsOptional(approximate, "approximate", Boolean);
          assert.argumentIsOptional(places, "places", Number);
          return __privateGet(this, _big).eq(zero) || is.boolean(approximate) && approximate && this.round(places || import_big.default.DP, RoundingMode.NORMAL).getIsZero();
        }
        /**
         * Returns true if the current instance is positive; otherwise false.
         *
         * @public
         * @returns {boolean}
         */
        getIsPositive() {
          return __privateGet(this, _big).gt(zero);
        }
        /**
         * Returns true if the current instance is negative; otherwise false.
         *
         * @public
         * @returns {boolean}
         */
        getIsNegative() {
          return __privateGet(this, _big).lt(zero);
        }
        /**
         * Returns true if the current instance is greater than the value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @returns {boolean}
         */
        getIsGreaterThan(other) {
          var _a;
          return __privateGet(this, _big).gt(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other));
        }
        /**
         * Returns true if the current instance is greater than or equal to the value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @returns {boolean}
         */
        getIsGreaterThanOrEqual(other) {
          var _a;
          return __privateGet(this, _big).gte(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other));
        }
        /**
         * Returns true if the current instance is less than the value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @returns {boolean}
         */
        getIsLessThan(other) {
          var _a;
          return __privateGet(this, _big).lt(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other));
        }
        /**
         * Returns true if the current instance is less than or equal to the value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @returns {boolean}
         */
        getIsLessThanOrEqual(other) {
          var _a;
          return __privateGet(this, _big).lte(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other));
        }
        /**
         * Returns true if the current instance between two other values. The
         * test is inclusive, by default.
         *
         * @public
         * @param {Decimal|number|string} minimum - The minimum value.
         * @param {Decimal|number|string} maximum - The maximum value.
         * @param {boolean=} exclusive - If true, the value cannot equal the minimum or maximum value and still be considered "between" the other values.
         * @returns {boolean}
         */
        getIsBetween(minimum, maximum, exclusive) {
          assert.argumentIsOptional(exclusive, "exclusive", Boolean);
          if (is.boolean(exclusive) && exclusive) {
            return this.getIsGreaterThan(minimum) && this.getIsLessThan(maximum);
          } else {
            return this.getIsGreaterThanOrEqual(minimum) && this.getIsLessThanOrEqual(maximum);
          }
        }
        /**
         * Returns true if the current instance is equal to the value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @returns {boolean}
         */
        getIsEqual(other) {
          var _a;
          return __privateGet(this, _big).eq(__privateMethod(_a = _Decimal, _Decimal_static, getBig_fn).call(_a, other));
        }
        /**
         * Returns true is close to another value.
         *
         * @public
         * @param {Decimal|number|string} other - The value to compare.
         * @param {number} places - The significant digits.
         * @returns {boolean}
         */
        getIsApproximate(other, places) {
          if (places === 0) {
            return this.getIsEqual(other);
          }
          const difference = this.subtract(other).absolute();
          const tolerance = _Decimal.ONE.divide(new _Decimal(10).raise(places));
          return difference.getIsLessThan(tolerance);
        }
        /**
         * Returns true if the current instance is an integer (i.e. has no decimal
         * component).
         *
         * @public
         * @return {boolean}
         */
        getIsInteger() {
          return this.getIsEqual(this.round(0));
        }
        /**
         * Returns the number of decimal places used.
         *
         * @public
         * @returns {number}
         */
        getDecimalPlaces() {
          const matches = this.toFixed().match(/-?\d*\.(\d*)/);
          let returnVal;
          if (matches === null) {
            returnVal = 0;
          } else {
            returnVal = matches[1].length;
          }
          return returnVal;
        }
        /**
         * Emits a floating point value that approximates the value of the current
         * instance.
         *
         * @public
         * @param {number=} places
         * @returns {number}
         */
        toFloat(places) {
          assert.argumentIsOptional(places, "places", Number);
          return parseFloat(__privateGet(this, _big).toFixed(places || 16));
        }
        /**
         * Returns a string-based representation of the instance's value.
         *
         * @public
         * @returns {string}
         */
        toFixed() {
          return __privateGet(this, _big).toFixed();
        }
        /**
         * Returns a {@link number} that is approximately equal to the value of
         * this {@link Decimal} instance.
         *
         * @public
         * @returns {number}
         */
        toNumber() {
          return __privateGet(this, _big).toNumber();
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {string}
         */
        toJSON() {
          return this.toFixed();
        }
        /**
         * Clones a {@link Decimal} instance.
         *
         * @public
         * @static
         * @param {Decimal} value
         * @returns {Decimal}
         */
        static clone(value) {
          assert.argumentIsRequired(value, "value", _Decimal, "Decimal");
          return new _Decimal(__privateGet(value, _big));
        }
        /**
         * An alias for the constructor. Creates a new instance. Suitable for
         * use with the value emitted by {@link Decimal#toJSON}.
         *
         * @public
         * @static
         * @param {Decimal|number|string} value
         * @returns {Decimal}
         */
        static parse(value) {
          return new _Decimal(value);
        }
        /**
         * Returns an instance with the value of zero.
         *
         * @public
         * @static
         * @returns {Decimal}
         */
        static get ZERO() {
          return decimalZero;
        }
        /**
         * Returns an instance with the value of one.
         *
         * @public
         * @static
         * @returns {Decimal}
         */
        static get ONE() {
          return decimalOne;
        }
        /**
         * Returns an instance with the value of one.
         *
         * @public
         * @static
         * @returns {Decimal}
         */
        static get NEGATIVE_ONE() {
          return decimalNegativeOne;
        }
        /**
         * Returns the {@link RoundingMode} enumeration type.
         *
         * @public
         * @static
         * @returns {typeof RoundingMode}
         */
        static get ROUNDING_MODE() {
          return RoundingMode;
        }
        /**
         * Runs {@link Decimal#getIsZero} and returns the result.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsZero(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return instance.getIsZero();
        }
        /**
         * Runs {@link Decimal#getIsZero} and returns the inverse.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsNotZero(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return !instance.getIsZero();
        }
        /**
         * Runs {@link Decimal#getIsPositive} and returns the result.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsPositive(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return instance.getIsPositive();
        }
        /**
         * Checks an instance to see if its negative or zero.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsNotPositive(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return instance.getIsNegative() || instance.getIsZero();
        }
        /**
         * Runs {@link Decimal#getIsNegative} and returns the result.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsNegative(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return instance.getIsNegative();
        }
        /**
         * Checks an instance to see if its positive or zero.
         *
         * @public
         * @static
         * @param {Decimal} instance
         * @returns {boolean}
         */
        static getIsNotNegative(instance) {
          assert.argumentIsRequired(instance, "instance", _Decimal, "Decimal");
          return instance.getIsPositive() || instance.getIsZero();
        }
        /**
         * A comparator function for {@link Decimal} instances.
         *
         * @public
         * @static
         * @param {Decimal} a
         * @param {Decimal} b
         * @returns {number}
         */
        static compareDecimals(a, b) {
          assert.argumentIsRequired(a, "a", _Decimal, "Decimal");
          assert.argumentIsRequired(b, "b", _Decimal, "Decimal");
          if (__privateGet(a, _big).gt(__privateGet(b, _big))) {
            return 1;
          } else if (__privateGet(a, _big).lt(__privateGet(b, _big))) {
            return -1;
          } else {
            return 0;
          }
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Decimal]";
        }
      };
      _big = new WeakMap();
      _Decimal_static = new WeakSet();
      getBig_fn = function(value) {
        if (value instanceof import_big.default) {
          return value;
        } else if (value instanceof _Decimal) {
          return __privateGet(value, _big);
        } else {
          return new import_big.default(value);
        }
      };
      __privateAdd(_Decimal, _Decimal_static);
      var Decimal = _Decimal;
      var zero = new import_big.default(0);
      var positiveOne = new import_big.default(1);
      var negativeOne = new import_big.default(-1);
      var decimalZero = new Decimal(zero);
      var decimalOne = new Decimal(positiveOne);
      var decimalNegativeOne = new Decimal(negativeOne);
      var _value;
      var RoundingMode = class extends import_Enum.default {
        /**
            * @param {number} value
            * @param {string} description
            */
        constructor(value, description) {
          super(value.toString(), description);
          __privateAdd(this, _value);
          __privateSet(this, _value, value);
        }
        /**
         * The code used by the Big.js library.
         *
         * @ignore
         * @returns {number}
         */
        get value() {
          return __privateGet(this, _value);
        }
        /**
         * Rounds away from zero.
         *
         * @public
         * @static
         * @returns {RoundingMode}
         */
        static get UP() {
          return up;
        }
        /**
         * Rounds towards zero.
         *
         * @public
         * @static
         * @returns {RoundingMode}
         */
        static get DOWN() {
          return down;
        }
        /**
         * Rounds towards nearest neighbor. If equidistant, rounds away from zero.
         *
         * @public
         * @static
         * @returns {RoundingMode}
         */
        static get NORMAL() {
          return normal;
        }
        toString() {
          return "[RoundingMode]";
        }
      };
      _value = new WeakMap();
      var up = new RoundingMode(3, "up");
      var down = new RoundingMode(0, "down");
      var normal = new RoundingMode(1, "normal");
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Timestamp.js
  var require_Timestamp = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Timestamp.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Timestamp_exports = {};
      __export(Timestamp_exports, {
        default: () => Timestamp
      });
      module.exports = __toCommonJS(Timestamp_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var MILLISECONDS_PER_SECOND = 1e3;
      var _timestamp;
      var _Timestamp = class _Timestamp {
        /**
         * @param {number} timestamp
         */
        constructor(timestamp) {
          __privateAdd(this, _timestamp);
          assert.argumentIsValid(timestamp, "timestamp", is.large, "is an integer");
          __privateSet(this, _timestamp, timestamp);
        }
        /**
         * The timestamp (milliseconds since epoch).
         *
         * @public
         * @returns {number}
         */
        get timestamp() {
          return __privateGet(this, _timestamp);
        }
        /**
         * Returns a new {@link Timestamp} instance shifted forward by a specific
         * number of milliseconds.
         *
         * @public
         * @param {number} milliseconds
         * @returns {Timestamp}
         */
        add(milliseconds) {
          assert.argumentIsRequired(milliseconds, "milliseconds", Number);
          return new _Timestamp(__privateGet(this, _timestamp) + milliseconds);
        }
        /**
         * Returns a new {@link Timestamp} instance shifted backwards by a specific
         * number of milliseconds.
         *
         * @public
         * @param {number} milliseconds
         * @returns {Timestamp}
         */
        subtract(milliseconds) {
          assert.argumentIsRequired(milliseconds, "milliseconds", Number);
          return new _Timestamp(__privateGet(this, _timestamp) - milliseconds);
        }
        /**
         * Returns a new {@link Timestamp} instance shifted forward by a specific
         * number of seconds.
         *
         * @public
         * @param {number} seconds
         * @returns {Timestamp}
         */
        addSeconds(seconds) {
          assert.argumentIsRequired(seconds, "seconds", Number);
          return this.add(seconds * MILLISECONDS_PER_SECOND);
        }
        /**
         * Returns a new {@link Timestamp} instance shifted backwards by a specific
         * number of seconds.
         *
         * @public
         * @param {number} seconds
         * @returns {Timestamp}
         */
        subtractSeconds(seconds) {
          assert.argumentIsRequired(seconds, "seconds", Number);
          return this.subtract(seconds * MILLISECONDS_PER_SECOND);
        }
        /**
         * Indicates if the current {@link Timestamp} instance occurs before another timestamp.
         *
         * @public
         * @param {Timestamp} other
         * @returns {boolean}
         */
        getIsBefore(other) {
          return _Timestamp.compareTimestamps(this, other) < 0;
        }
        /**
         * Indicates if the current {@link Timestamp} instance occurs after another timestamp.
         *
         * @public
         * @param {Timestamp} other
         * @returns {boolean}
         */
        getIsAfter(other) {
          return _Timestamp.compareTimestamps(this, other) > 0;
        }
        /**
         * Indicates if another {@link Timestamp} refers to the same moment.
         *
         * @public
         * @param {Timestamp} other
         * @returns {boolean}
         */
        getIsEqual(other) {
          return _Timestamp.compareTimestamps(this, other) === 0;
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {number}
         */
        toJSON() {
          return this.timestamp;
        }
        /**
         * Clones a {@link Timestamp} instance.
         *
         * @public
         * @static
         * @param {Timestamp} other
         * @returns {Timestamp}
         */
        static clone(other) {
          assert.argumentIsRequired(other, "other", _Timestamp, "Timestamp");
          return new _Timestamp(__privateGet(other, _timestamp));
        }
        /**
         * Parses the value emitted by {@link Timestamp#toJSON}.
         *
         * @public
         * @static
         * @param {number} value
         * @returns {Timestamp}
         */
        static parse(value) {
          return new _Timestamp(value);
        }
        /**
         * Returns a new {@link Timestamp} instance, representing the current moment.
         *
         * @public
         * @static
         * @returns {Timestamp}
         */
        static now() {
          return new _Timestamp((/* @__PURE__ */ new Date()).getTime());
        }
        /**
         * A comparator function for {@link Timestamp} instances.
         *
         * @public
         * @static
         * @param {Timestamp} a
         * @param {Timestamp} b
         * @returns {number}
         */
        static compareTimestamps(a, b) {
          assert.argumentIsRequired(a, "a", _Timestamp, "Timestamp");
          assert.argumentIsRequired(b, "b", _Timestamp, "Timestamp");
          return a.timestamp - b.timestamp;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return "[Timestamp]";
        }
      };
      _timestamp = new WeakMap();
      var Timestamp = _Timestamp;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/DataType.js
  var require_DataType = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/DataType.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var DataType_exports = {};
      __export(DataType_exports, {
        default: () => DataType
      });
      module.exports = __toCommonJS(DataType_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_AdHoc = __toESM(require_AdHoc());
      var import_Day = __toESM(require_Day());
      var import_Decimal = __toESM(require_Decimal());
      var import_Enum = __toESM(require_Enum());
      var import_Timestamp = __toESM(require_Timestamp());
      var _description, _enumerationType, _reviver, _validator, _builder;
      var _DataType = class _DataType {
        /**
         * @param {string} description
         * @param {Function=} enumerationType
         * @param {Function=} reviver
         * @param {Function=} validator
         * @param {Function=} builder
         */
        constructor(description, enumerationType, reviver, validator, builder) {
          __privateAdd(this, _description);
          __privateAdd(this, _enumerationType);
          __privateAdd(this, _reviver);
          __privateAdd(this, _validator);
          __privateAdd(this, _builder);
          assert.argumentIsRequired(description, "description", String);
          assert.argumentIsOptional(enumerationType, "enumerationType", Function);
          assert.argumentIsOptional(reviver, "reviver", Function);
          assert.argumentIsOptional(validator, "validator", Function);
          assert.argumentIsOptional(builder, "builder", Function);
          if (enumerationType) {
            assert.argumentIsValid(enumerationType, "enumerationType", extendsEnumeration, "is an enumeration");
          }
          __privateSet(this, _description, description);
          __privateSet(this, _enumerationType, enumerationType || null);
          let reviverToUse;
          if (reviver) {
            reviverToUse = reviver;
          } else if (enumerationType) {
            reviverToUse = (x) => import_Enum.default.fromCode(enumerationType, x);
          } else {
            reviverToUse = (x) => x;
          }
          __privateSet(this, _reviver, reviverToUse);
          let validatorToUse;
          if (validator) {
            validatorToUse = validator;
          } else {
            validatorToUse = (candidate) => true;
          }
          __privateSet(this, _validator, validatorToUse);
          let builderToUse;
          if (builder) {
            builderToUse = builder;
          } else {
            builderToUse = (data) => data;
          }
          __privateSet(this, _builder, builderToUse);
        }
        /**
         * A function that converts data into the desired format.
         *
         * @public
         * @param {*} data
         * @returns {*}
         */
        convert(data) {
          return __privateGet(this, _builder).call(this, data);
        }
        /**
         * Description of the data type.
         *
         * @public
         * @returns {string}
         */
        get description() {
          return __privateGet(this, _description);
        }
        /**
         * The {@Enum} type, if applicable.
         *
         * @public
         * @returns {Function|null}
         */
        get enumerationType() {
          return __privateGet(this, _enumerationType);
        }
        /**
         * A function which "revives" a value after serialization to JSON.
         *
         * @public
         * @returns {Function}
         */
        get reviver() {
          return __privateGet(this, _reviver);
        }
        /**
         * A function validates data, returning true or false.
         *
         * @public
         * @returns {Function}
         */
        get validator() {
          return __privateGet(this, _validator);
        }
        /**
         * Return a {@link DataType} instance for use with an {@link @Enum}.
         *
         * @public
         * @static
         * @param {Function} enumerationType - A class that extends {@link Enum}
         * @param description - The description
         * @returns {DataType}
         */
        static forEnum(enumerationType, description) {
          return new _DataType(description, enumerationType, null, (x) => x instanceof enumerationType, getBuilder(getEnumerationBuilder(enumerationType)));
        }
        /**
         * References a string.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get STRING() {
          return dataTypeString;
        }
        /**
         * References a number.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get NUMBER() {
          return dataTypeNumber;
        }
        /**
         * References a boolean value.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get BOOLEAN() {
          return dataTypeBoolean;
        }
        /**
         * References an object (serialized as JSON).
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get OBJECT() {
          return dataTypeObject;
        }
        /**
         * References an array.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get ARRAY() {
          return dataTypeArray;
        }
        /**
         * References a {@link Decimal} instance.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get DECIMAL() {
          return dataTypeDecimal;
        }
        /**
         * References a {@link Day} instance.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get DAY() {
          return dataTypeDay;
        }
        /**
         * References a {@link Timestamp} instance.
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get TIMESTAMP() {
          return dataTypeTimestamp;
        }
        /**
         * References an object whose internal properties are not important (for
         * serialization and deserialization purposes).
         *
         * @public
         * @static
         * @returns {DataType}
         */
        static get AD_HOC() {
          return dataTypeAdHoc;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[DataType (description=${__privateGet(this, _description)})]`;
        }
      };
      _description = new WeakMap();
      _enumerationType = new WeakMap();
      _reviver = new WeakMap();
      _validator = new WeakMap();
      _builder = new WeakMap();
      var DataType = _DataType;
      function extendsEnumeration(EnumerationType) {
        return is.extension(import_Enum.default, EnumerationType);
      }
      var dataTypeString = new DataType("String", null, null, is.string);
      var dataTypeNumber = new DataType("Number", null, null, is.number);
      var dataTypeBoolean = new DataType("Boolean", null, null, is.boolean);
      var dataTypeObject = new DataType("Object", null, null, is.object);
      var dataTypeArray = new DataType("Array", null, null, is.array);
      var dataTypeDecimal = new DataType("Decimal", null, (x) => import_Decimal.default.parse(x), (x) => x instanceof import_Decimal.default, getBuilder(buildDecimal));
      var dataTypeDay = new DataType("Day", null, (x) => import_Day.default.parse(x), (x) => x instanceof import_Day.default, getBuilder(buildDay));
      var dataTypeTimestamp = new DataType("Timestamp", null, (x) => import_Timestamp.default.parse(x), (x) => x instanceof import_Timestamp.default, getBuilder(buildTimestamp));
      var dataTypeAdHoc = new DataType("AdHoc", null, (x) => import_AdHoc.default.parse(x), (x) => x instanceof import_AdHoc.default, getBuilder(buildAdHoc));
      function getBuilder(builder) {
        return (data) => {
          try {
            return builder(data);
          } catch (e) {
            return data;
          }
        };
      }
      function buildDecimal(data) {
        return new import_Decimal.default(data);
      }
      function buildDay(data) {
        if (data instanceof import_Day.default) {
          return new import_Day.default(data.year, data.month, data.day);
        } else if (is.date(data)) {
          return import_Day.default.fromDate(data);
        } else if (is.string(data)) {
          return import_Day.default.parse(data);
        } else {
          return data;
        }
      }
      function buildTimestamp(data) {
        return new import_Timestamp.default(data);
      }
      function buildAdHoc(data) {
        if (data instanceof import_AdHoc.default) {
          return new import_AdHoc.default(data.data);
        } else if (is.object(data)) {
          return new import_AdHoc.default(data);
        }
      }
      function getEnumerationBuilder(enumerationType) {
        return (data) => {
          if (is.string(data)) {
            return import_Enum.default.fromCode(enumerationType, data);
          } else {
            return data;
          }
        };
      }
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Currency.js
  var require_Currency = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Currency.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Currency_exports = {};
      __export(Currency_exports, {
        default: () => Currency
      });
      module.exports = __toCommonJS(Currency_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_Enum = __toESM(require_Enum());
      var _precision, _alternateDescription;
      var _Currency = class _Currency extends import_Enum.default {
        /**
            * @param {string} code - Currency code (e.g. "USD")
            * @param {string} description - The description (e.g. "US Dollar")
            * @param {number} precision - The number of decimal places possible for by a real world transaction.
            * @param {string=} alternateDescription
            */
        constructor(code, description, precision, alternateDescription) {
          super(code, description);
          __privateAdd(this, _precision);
          __privateAdd(this, _alternateDescription);
          assert.argumentIsRequired(precision, "precision", Number);
          assert.argumentIsValid(precision, "precision", is.integer, "is an integer");
          assert.argumentIsOptional(alternateDescription, "alternateDescription", String);
          __privateSet(this, _precision, precision);
          __privateSet(this, _alternateDescription, alternateDescription || description);
        }
        /**
         * The maximum number of decimal places supported by a real world transaction.
         *
         * @public
         * @returns {number}
         */
        get precision() {
          return __privateGet(this, _precision);
        }
        /**
         * An alternate human-readable description.
         *
         * @public
         * @returns {string}
         */
        get alternateDescription() {
          return __privateGet(this, _alternateDescription);
        }
        /**
         * Given a code, returns the enumeration item.
         *
         * @public
         * @static
         * @param {string} code
         * @returns {Currency|null}
         */
        static parse(code) {
          const value = import_Enum.default.fromCode(_Currency, code);
          return value instanceof _Currency ? value : null;
        }
        /**
         * The Argentine Peso.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get ARS() {
          return ars;
        }
        /**
         * The Australian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get AUD() {
          return aud;
        }
        /**
         * The Bermudian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get BMD() {
          return bmd;
        }
        /**
         * The Brazilian Real.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get BRL() {
          return brl;
        }
        /**
         * The Bahamian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get BSD() {
          return bsd;
        }
        /**
         * The Canadian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get CAD() {
          return cad;
        }
        /**
         * The Swiss Franc.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get CHF() {
          return chf;
        }
        /**
         * The Chinese Yuan.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get CNY() {
          return cny;
        }
        /**
         * The Czech Koruna.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get CZK() {
          return czk;
        }
        /**
         * The Danish Krone.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get DKK() {
          return dkk;
        }
        /**
         * The Euro.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get EUR() {
          return eur;
        }
        /**
         * The Fijian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get FJD() {
          return fjd;
        }
        /**
         * The British Pound.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get GBP() {
          return gbp;
        }
        /**
         * The British Penny.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get GBX() {
          return gbx;
        }
        /**
         * The Ghanaian Cedi.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get GHS() {
          return ghs;
        }
        /**
         * The Hong Kong Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get HKD() {
          return hkd;
        }
        /**
         * The Hungarian Forint.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get HUF() {
          return huf;
        }
        /**
         * The Indonesian Rupiah.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get IDR() {
          return idr;
        }
        /**
         * The Israeli New Shekel.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get ILS() {
          return ils;
        }
        /**
         * The Jordanian Dinar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get JOD() {
          return jod;
        }
        /**
         * The Japanese Yen.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get JPY() {
          return jpy;
        }
        /**
         * The South Korean Won.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get KRW() {
          return krw;
        }
        /**
         * The Lebanese Pound.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get LBP() {
          return lbp;
        }
        /**
         * The Mexican Peso.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get MXN() {
          return mxn;
        }
        /**
         * The Malaysian Ringgit.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get MYR() {
          return myr;
        }
        /**
         * The Namibian Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get NAD() {
          return nad;
        }
        /**
         * The Nigerian Naira.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get NGN() {
          return ngn;
        }
        /**
         * The Norwegian Krone.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get NOK() {
          return nok;
        }
        /**
         * The New Zealand Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get NZD() {
          return nzd;
        }
        /**
         * The Peruvian Sol.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get PEN() {
          return pen;
        }
        /**
         * The Papua New Guinean Kina.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get PGK() {
          return pgk;
        }
        /**
         * The Philippine peso.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get PHP() {
          return php;
        }
        /**
         * The Polish Zloty.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get PLN() {
          return pln;
        }
        /**
         * The Russian Ruble.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get RUB() {
          return rub;
        }
        /**
         * The Russian Ruble (Old).
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get RUR() {
          return rur;
        }
        /**
         * The Swedish Krona.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get SEK() {
          return sek;
        }
        /**
         * The Singapore Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get SGD() {
          return sgd;
        }
        /**
         * The Thai Baht.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get THB() {
          return thb;
        }
        /**
         * The Turkish Lira.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get TRY() {
          return trx;
        }
        /**
         * The New Taiwan Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get TWD() {
          return twd;
        }
        /**
         * The US Dollar.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get USD() {
          return usd;
        }
        /**
         * The Uruguay Peso.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get UYI() {
          return uyi;
        }
        /**
         * The South African Rand.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get ZAR() {
          return zar;
        }
        /**
         * The Zambian Kwacha.
         *
         * @public
         * @static
         * @returns {Currency}
         */
        static get ZMW() {
          return zmw;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Currency (code=${this.code})]`;
        }
      };
      _precision = new WeakMap();
      _alternateDescription = new WeakMap();
      var Currency = _Currency;
      var ars = new Currency("ARS", "Argentine Peso", 2, "ARS");
      var aud = new Currency("AUD", "Australian Dollar", 2, "AUD$");
      var bmd = new Currency("BMD", "Bermudian Dollar", 2, "BMD");
      var brl = new Currency("BRL", "Brazilian Real", 2, "BRL");
      var bsd = new Currency("BSD", "Bahamian Dollar", 2, "BSD");
      var cad = new Currency("CAD", "Canadian Dollar", 2, "CAD$");
      var chf = new Currency("CHF", "Swiss Franc", 2, "CHF");
      var cny = new Currency("CNY", "Chinese Yuan", 2, "CNY");
      var czk = new Currency("CZK", "Czech Koruna", 2, "CZK");
      var dkk = new Currency("DKK", "Danish Krone", 2, "DKK");
      var eur = new Currency("EUR", "Euro", 2, "EUR");
      var fjd = new Currency("FJD", "Fijian Dollar", 2, "FJD");
      var gbp = new Currency("GBP", "British Pound", 2, "GBP");
      var gbx = new Currency("GBX", "British Penny", 2, "GBX");
      var ghs = new Currency("GHS", "Ghanaian Cedi", 2, "GHS");
      var hkd = new Currency("HKD", "Hong Kong Dollar", 2, "HK$");
      var huf = new Currency("HUF", "Hungarian Forint", 2, "HUF");
      var idr = new Currency("IDR", "Indonesian Rupiah", 2, "IDR");
      var ils = new Currency("ILS", "Israeli New Shekel", 2, "ILS");
      var jod = new Currency("JOD", "Jordanian Dinar", 2, "JOD");
      var jpy = new Currency("JPY", "Japanese Yen", 2, "JPY");
      var krw = new Currency("KRW", "South Korean Won", 2, "KRW");
      var lbp = new Currency("LBP", "Lebanese Pound", 2, "LBP");
      var mxn = new Currency("MXN", "Mexican Peso", 2, "MXN");
      var myr = new Currency("MYR", "Malaysian Ringgit", 2, "MYR");
      var nad = new Currency("NAD", "Namibian Dollar", 2, "NAD");
      var ngn = new Currency("NGN", "Nigerian Naira", 2, "NGN");
      var nok = new Currency("NOK", "Norwegian Krone", 2, "Nkr");
      var nzd = new Currency("NZD", "New Zealand Dollar", 2, "NZD");
      var pen = new Currency("PEN", "Peruvian Sol", 2, "PEN");
      var pgk = new Currency("PGK", "Papua New Guinean Kina", 2, "PGK");
      var php = new Currency("PHP", "Philippine peso", 2, "PHP");
      var pln = new Currency("PLN", "Polish Zloty", 2, "PLN");
      var rub = new Currency("RUB", "Russian Ruble", 2, "RUB");
      var rur = new Currency("RUR", "Russian Ruble (Old)", 2, "RUR");
      var sek = new Currency("SEK", "Swedish Krona", 2, "SEK");
      var sgd = new Currency("SGD", "Singapore Dollar", 2, "SGD");
      var thb = new Currency("THB", "Thai Baht", 2, "THB");
      var trx = new Currency("TRY", "Turkish Lira", 2, "TRY");
      var twd = new Currency("TWD", "New Taiwan Dollar", 2, "TWD");
      var usd = new Currency("USD", "US Dollar", 2, "US$");
      var uyi = new Currency("UYI", "Uruguay Peso", 2, "UYI");
      var zar = new Currency("ZAR", "South African Rand", 2, "ZAR");
      var zmw = new Currency("ZMW", "Zambian Kwacha", 2, "ZMW");
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/lang/Money.js
  var require_Money = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/lang/Money.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Money_exports = {};
      __export(Money_exports, {
        default: () => Money
      });
      module.exports = __toCommonJS(Money_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_Decimal = __toESM(require_Decimal());
      var import_Currency = __toESM(require_Currency());
      var _decimal, _currency;
      var _Money = class _Money {
        /**
         * @param {Decimal|number|string} value - A amount, which can be parsed as a {@link Decimal}
         * @param {Currency} currency - The currency.
         */
        constructor(value, currency) {
          __privateAdd(this, _decimal);
          __privateAdd(this, _currency);
          assert.argumentIsRequired(currency, "currency", import_Currency.default, "Currency");
          __privateSet(this, _decimal, getDecimal(value));
          __privateSet(this, _currency, currency);
        }
        /**
         * The currency amount.
         *
         * @public
         * @returns {Decimal}
         */
        get decimal() {
          return __privateGet(this, _decimal);
        }
        /**
         * The currency.
         *
         * @public
         * @returns {Currency}
         */
        get currency() {
          return __privateGet(this, _currency);
        }
        /**
         * @public
         * @param {*} places
         * @param {*} mode
         * @returns {Money}
         */
        toAmount(places, mode) {
          return new _Money(__privateGet(this, _decimal).round(getPlaces(places), mode), __privateGet(this, _currency));
        }
        /**
         * Returns the JSON representation.
         *
         * @public
         * @returns {object}
         */
        toJSON() {
          return {
            decimal: __privateGet(this, _decimal),
            currency: __privateGet(this, _currency)
          };
        }
        /**
         * Parses the value emitted by {@link Decimal#toJSON}.
         *
         * @public
         * @static
         * @param {object} value
         * @returns {Money}
         */
        static parse(value) {
          return new _Money(value.decimal, value.currency);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Money]`;
        }
      };
      _decimal = new WeakMap();
      _currency = new WeakMap();
      var Money = _Money;
      function getDecimal(value) {
        if (value instanceof import_Decimal.default) {
          return value;
        } else {
          return new import_Decimal.default(value);
        }
      }
      function getPlaces(value) {
        if (is.integer(value) && !(value < 0)) {
          return value;
        } else {
          return 2;
        }
      }
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Field.js
  var require_Field = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Field.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Field_exports = {};
      __export(Field_exports, {
        default: () => Field
      });
      module.exports = __toCommonJS(Field_exports);
      var assert = __toESM(require_assert());
      var is = __toESM(require_is());
      var import_DataType = __toESM(require_DataType());
      var _name, _dataType, _optional, _array;
      var Field = class {
        /**
         * @param {string} name
         * @param {DataType} dataType
         * @param {boolean=} optional
         * @param {boolean=} array
         */
        constructor(name, dataType, optional, array) {
          __privateAdd(this, _name);
          __privateAdd(this, _dataType);
          __privateAdd(this, _optional);
          __privateAdd(this, _array);
          assert.argumentIsRequired(name, "name", String);
          assert.argumentIsRequired(dataType, "dataType", import_DataType.default, "DataType");
          assert.argumentIsOptional(optional, "optional", Boolean);
          assert.argumentIsOptional(array, "array", Boolean);
          __privateSet(this, _name, name);
          __privateSet(this, _dataType, dataType);
          __privateSet(this, _optional, is.boolean(optional) && optional);
          __privateSet(this, _array, is.boolean(array) && array);
        }
        /**
         * Name of the field.
         *
         * @public
         * @returns {string}
         */
        get name() {
          return __privateGet(this, _name);
        }
        /**
         * Type of the field.
         *
         * @public
         * @returns {DataType}
         */
        get dataType() {
          return __privateGet(this, _dataType);
        }
        /**
         * Indicates if the field can be omitted without violating the schema.
         *
         * @public
         * @returns {boolean}
         */
        get optional() {
          return __privateGet(this, _optional);
        }
        /**
         * Indicates if the field is an array.
         *
         * @public
         * @returns {boolean}
         */
        get array() {
          return __privateGet(this, _array);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Field (name=${__privateGet(this, _name)})]`;
        }
      };
      _name = new WeakMap();
      _dataType = new WeakMap();
      _optional = new WeakMap();
      _array = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Component.js
  var require_Component = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/Component.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var Component_exports = {};
      __export(Component_exports, {
        default: () => Component
      });
      module.exports = __toCommonJS(Component_exports);
      var import_Currency = __toESM(require_Currency());
      var import_Money = __toESM(require_Money());
      var import_DataType = __toESM(require_DataType());
      var import_Field = __toESM(require_Field());
      var _name, _fields, _reviver;
      var _Component = class _Component {
        /**
         * @param {string} name
         * @param {Array<Field>=} fields
         * @param {Function=} reviver
         */
        constructor(name, fields, reviver) {
          __privateAdd(this, _name);
          __privateAdd(this, _fields);
          __privateAdd(this, _reviver);
          __privateSet(this, _name, name);
          __privateSet(this, _fields, fields || []);
          __privateSet(this, _reviver, reviver);
        }
        /**
         * Name of the component.
         *
         * @public
         * @returns {string}
         */
        get name() {
          return __privateGet(this, _name);
        }
        /**
         * Type of the component.
         *
         * @public
         * @returns {Array<Field>}
         */
        get fields() {
          return __privateGet(this, _fields);
        }
        /**
         * The reviver used to rebuild the entire component.
         *
         * @returns {Function}
         */
        get reviver() {
          return __privateGet(this, _reviver);
        }
        /**
         * The builds a {@link Component} for {@link Money}.
         *
         * @public
         * @static
         * @param {string} name
         * @returns {Component}
         */
        static forMoney(name) {
          return new _Component(name, [new import_Field.default("decimal", import_DataType.default.DECIMAL), new import_Field.default("currency", import_DataType.default.forEnum(import_Currency.default, "Currency"))], (x) => import_Money.default.parse(x));
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[Component (name=${__privateGet(this, _name)})]`;
        }
      };
      _name = new WeakMap();
      _fields = new WeakMap();
      _reviver = new WeakMap();
      var Component = _Component;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/builders/ComponentBuilder.js
  var require_ComponentBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/builders/ComponentBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var ComponentBuilder_exports = {};
      __export(ComponentBuilder_exports, {
        default: () => ComponentBuilder
      });
      module.exports = __toCommonJS(ComponentBuilder_exports);
      var assert = __toESM(require_assert());
      var import_Component = __toESM(require_Component());
      var import_DataType = __toESM(require_DataType());
      var import_Field = __toESM(require_Field());
      var _component, _name;
      var ComponentBuilder = class {
        /**
         * @param {string} name - The name of the schema
         */
        constructor(name) {
          __privateAdd(this, _component);
          __privateAdd(this, _name);
          __privateSet(this, _component, new import_Component.default(name));
        }
        /**
         * The {@link Schema} current schema instance.
         *
         * @public
         * @returns {Component}
         */
        get component() {
          return __privateGet(this, _component);
        }
        /**
         * Adds a new {@link Field} to the schema and returns the current instance.
         *
         * @public
         * @param {string} name
         * @param {DataType} dataType
         * @returns {ComponentBuilder}
         */
        withField(name, dataType) {
          assert.argumentIsRequired(name, "name", String);
          assert.argumentIsRequired(dataType, "dataType", import_DataType.default, "DataType");
          const fields = __privateGet(this, _component).fields.concat([new import_Field.default(name, dataType)]);
          __privateSet(this, _component, new import_Component.default(__privateGet(this, _component).name, fields, __privateGet(this, _component).reviver));
          return this;
        }
        /**
         * Adds a "reviver" function for use with JSON.parse.
         *
         * @public
         * @param {Function} reviver
         * @returns {ComponentBuilder}
         */
        withReviver(reviver) {
          assert.argumentIsRequired(reviver, "reviver", Function);
          __privateSet(this, _component, new import_Component.default(__privateGet(this, _component).name, __privateGet(this, _component).fields, reviver));
          return this;
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[ComponentBuilder (name=${__privateGet(this, _name)})]`;
        }
      };
      _component = new WeakMap();
      _name = new WeakMap();
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../../node_modules/@barchart/common-js/dist/cjs/serialization/json/builders/SchemaBuilder.js
  var require_SchemaBuilder = __commonJS({
    "../../node_modules/@barchart/common-js/dist/cjs/serialization/json/builders/SchemaBuilder.js"(exports, module) {
      var __create = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
      var SchemaBuilder_exports = {};
      __export(SchemaBuilder_exports, {
        default: () => SchemaBuilder
      });
      module.exports = __toCommonJS(SchemaBuilder_exports);
      var assert = __toESM(require_assert());
      var import_Component = __toESM(require_Component());
      var import_DataType = __toESM(require_DataType());
      var import_Field = __toESM(require_Field());
      var import_Schema = __toESM(require_Schema());
      var import_ComponentBuilder = __toESM(require_ComponentBuilder());
      var _schema, _name;
      var _SchemaBuilder = class _SchemaBuilder {
        /**
         * @param {string} name - The name of the schema
         */
        constructor(name) {
          __privateAdd(this, _schema);
          __privateAdd(this, _name);
          __privateSet(this, _name, name);
          __privateSet(this, _schema, new import_Schema.default(name));
        }
        /**
         * The {@link Schema} current schema instance.
         *
         * @public
         * @returns {Schema}
         */
        get schema() {
          return __privateGet(this, _schema);
        }
        /**
         * Adds a new {@link Field} to the schema and returns the current instance.
         *
         * @public
         * @param {string} name - The name of the new field.
         * @param {DataType} dataType - The type of the new field.
         * @param {boolean=} optional - If true, the field is not required and may be omitted.
         * @returns {SchemaBuilder}
         */
        withField(name, dataType, optional) {
          assert.argumentIsRequired(name, "name", String);
          assert.argumentIsRequired(dataType, "dataType", import_DataType.default, "DataType");
          assert.argumentIsOptional(optional, "optional", Boolean);
          const fields = __privateGet(this, _schema).fields.concat([new import_Field.default(name, dataType, optional, false)]);
          __privateSet(this, _schema, new import_Schema.default(__privateGet(this, _schema).name, fields, __privateGet(this, _schema).components, __privateGet(this, _schema).strict));
          return this;
        }
        /**
         * Adds a new {@link Field} to the schema (where the field is an array) and returns the current instance.
         *
         * @public
         * @param {string} name - The name of the new field.
         * @param {DataType} dataType - The type of the new field.
         * @param {boolean=} optional - If true, the field is not required and may be omitted.
         * @returns {SchemaBuilder}
         */
        withArray(name, dataType, optional) {
          assert.argumentIsRequired(name, "name", String);
          assert.argumentIsRequired(dataType, "dataType", import_DataType.default, "DataType");
          assert.argumentIsOptional(optional, "optional", Boolean);
          const fields = __privateGet(this, _schema).fields.concat([new import_Field.default(name, dataType, optional, true)]);
          __privateSet(this, _schema, new import_Schema.default(__privateGet(this, _schema).name, fields, __privateGet(this, _schema).components, __privateGet(this, _schema).strict));
          return this;
        }
        /**
         * Adds a new {@link Component} to the schema and returns the current instance.
         *
         * @public
         * @param {Component} component - The new component to add.
         * @returns {SchemaBuilder}
         */
        withComponent(component) {
          assert.argumentIsRequired(component, "component", import_Component.default, "Component");
          const components = __privateGet(this, _schema).components.concat([component]);
          __privateSet(this, _schema, new import_Schema.default(__privateGet(this, _schema).name, __privateGet(this, _schema).fields, components, __privateGet(this, _schema).strict));
          return this;
        }
        /**
         * Adds a new {@link Component} to the schema, using a {@link ComponentBuilder}
         * and returns the current instance.
         *
         * @public
         * @param {string} name - The name of the new component.
         * @param {Function} callback - A callback to which the {@link ComponentBuilder} is passed synchronously.
         * @returns {SchemaBuilder}
         */
        withComponentBuilder(name, callback) {
          assert.argumentIsRequired(name, "name", String);
          const componentBuilder = new import_ComponentBuilder.default(name);
          callback(componentBuilder);
          return this.withComponent(componentBuilder.component);
        }
        /**
         * Creates a new {@link SchemaBuilder}.
         *
         * @public
         * @static
         * @param {string} name
         * @returns {SchemaBuilder}
         */
        static withName(name) {
          assert.argumentIsRequired(name, "name", String);
          return new _SchemaBuilder(name);
        }
        /**
         * Returns a string representation.
         *
         * @public
         * @returns {string}
         */
        toString() {
          return `[SchemaBuilder (name=${__privateGet(this, _name)})]`;
        }
      };
      _schema = new WeakMap();
      _name = new WeakMap();
      var SchemaBuilder = _SchemaBuilder;
      {
        const cjsExports = module.exports;
        const cjsDefaultExport = cjsExports && cjsExports.__esModule ? cjsExports.default : cjsExports;
        if (cjsDefaultExport && (typeof cjsDefaultExport === "function" || typeof cjsDefaultExport === "object")) {
          Object.keys(cjsExports).forEach((key) => {
            if (key !== "default" && key !== "__esModule") {
              cjsDefaultExport[key] = cjsExports[key];
            }
          });
        }
        module.exports = cjsDefaultExport;
      }
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports.URL = URL2;
      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version;
      exports.default = _default;
    }
  });

  // ../common-js/node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "../common-js/node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // ../common-js/lib/data/CustomerType.js
  var require_CustomerType = __commonJS({
    "../common-js/lib/data/CustomerType.js"(exports, module) {
      var Enum = require_Enum();
      module.exports = (() => {
        "use strict";
        class CustomerType extends Enum {
          constructor(code, description) {
            super(code, description);
          }
          /**
           * Returns the {@link CustomerType} which corresponds to the code supplied.
           * If no matching {@link CustomerType} exists, a null value is returned.
           *
           * @public
           * @param {String} code
           * @returns {CustomerType|null}
           */
          static parse(code) {
            return Enum.fromCode(CustomerType, code);
          }
          /**
           * Customer type for Barchart internal use.
           *
           * @public
           * @static
           * @returns {CustomerType}
           */
          static get BARCHART() {
            return barchart;
          }
          /**
           * Customer type for TGAM.
           *
           * @public
           * @static
           * @returns {CustomerType}
           */
          static get TGAM() {
            return tgam;
          }
          toString() {
            return `[CustomerType (code=${this.code})]`;
          }
        }
        const barchart = new CustomerType("BARCHART", "Barchart");
        const tgam = new CustomerType("TGAM", "The Globe and Mail");
        return CustomerType;
      })();
    }
  });

  // ../common-js/lib/data/ProductType.js
  var require_ProductType = __commonJS({
    "../common-js/lib/data/ProductType.js"(exports, module) {
      var Enum = require_Enum();
      module.exports = (() => {
        "use strict";
        class ProductType extends Enum {
          constructor(code, description) {
            super(code, description);
          }
          /**
           * Returns the {@link ProductType} which corresponds to the code supplied.
           * If no matching {@link ProductType} exists, a null value is returned.
           *
           * @public
           * @param {String} code
           * @returns {ProductType|null}
           */
          static parse(code) {
            return Enum.fromCode(ProductType, code);
          }
          /**
           * The portfolio service.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get ALERT() {
            return alert2;
          }
          /**
           * The portfolio service.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get PORTFOLIO() {
            return portfolio;
          }
          /**
           * The watchlist service.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get WATCHLIST() {
            return watchlist;
          }
          /**
           * The cmdtyView trading platform.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get CMDTYVIEW() {
            return cmdtyView;
          }
          /**
           * The cmdtyView web Excel platform.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get CMDTYVIEW_WEB_EXCEL() {
            return cmdtyViewWebExcel;
          }
          /**
           * The entitlements service.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get ENTITLEMENTS() {
            return entitlements;
          }
          /**
           * The cmdty Marketplace platform.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get MARKETPLACE() {
            return marketplace;
          }
          /**
           * The Barchart Excel platform.
           *
           * @public
           * @static
           * @return {ProductType}
           */
          static get BARCHART_EXCEL() {
            return barchartExcel;
          }
          /**
           * The Barchart web Excel platform.
           *
           * @public
           * @static
           * @returns {ProductType}
           */
          static get BARCHART_WEB_EXCEL() {
            return barchartWebExcel;
          }
          toString() {
            return `[ProductType (code=${this.code})]`;
          }
        }
        const alert2 = new ProductType("ALERT", "ALERT");
        const portfolio = new ProductType("PORTFOLIO", "PORTFOLIO");
        const watchlist = new ProductType("WATCHLIST", "WATCHLIST");
        const cmdtyView = new ProductType("CMDTYVIEW", "CMDTYVIEW");
        const cmdtyViewWebExcel = new ProductType("CMDTYVIEW-WEB-EXCEL", "CMDTYVIEW-WEB-EXCEL");
        const entitlements = new ProductType("ENTITLEMENTS", "ENTITLEMENTS");
        const marketplace = new ProductType("MARKETPLACE", "MARKETPLACE");
        const barchartExcel = new ProductType("BARCHART-EXCEL", "BARCHART-EXCEL");
        const barchartWebExcel = new ProductType("BARCHART-WEB-EXCEL", "BARCHART-WEB-EXCEL");
        return ProductType;
      })();
    }
  });

  // ../common-js/lib/data/EventType.js
  var require_EventType = __commonJS({
    "../common-js/lib/data/EventType.js"(exports, module) {
      var assert = require_assert();
      var array = require_array();
      var Enum = require_Enum();
      var is = require_is();
      var uuid = require_commonjs_browser();
      var CustomerType = require_CustomerType();
      var ProductType = require_ProductType();
      module.exports = (() => {
        "use strict";
        class EventType extends Enum {
          constructor(code, description, product, contextKeys, validators2, transformers2) {
            super(code, description);
            assert.argumentIsOptional(product, "product", ProductType, "ProductType");
            assert.argumentIsOptional(contextKeys, "contextKeys", Array);
            assert.argumentIsOptional(validators2, "validators", Object);
            assert.argumentIsOptional(transformers2, "transformers", Object);
            this._product = product || null;
            this._contextKeys = contextKeys || [];
            this._validators = validators2 || {};
            this._transformers = transformers2 || {};
          }
          /**
           * The {@link ProductType} which the event applies to.
           *
           * @public
           * @returns {ProductType|null}
           */
          get product() {
            return this._product;
          }
          /**
           * The context keys.
           *
           * @public
           * @returns {Array}
           */
          get contextKeys() {
            return this._contextKeys;
          }
          /**
           * The validators.
           *
           * @public
           * @returns {Object}
           */
          get validators() {
            return this._validators;
          }
          /**
           * The transformers.
           *
           * @public
           * @returns {Object}
           */
          get transformers() {
            return this._transformers;
          }
          /**
           * Returns the {@link EventType} which corresponds to the code supplied.
           * If no matching {@link EventType} exists, a null value is returned.
           *
           * @public
           * @param {String} code
           * @returns {EventType|null}
           */
          static parse(code) {
            return Enum.fromCode(EventType, code);
          }
          // ALERTING SERVICE
          static get ALERT_APPLICATION_LOADED() {
            return alertApplicationLoaded;
          }
          static get ALERT_CREATED() {
            return alertCreated;
          }
          static get ALERT_STARTED() {
            return alertStarted;
          }
          static get ALERT_STARTED_ALL() {
            return alertStartedAll;
          }
          static get ALERT_STOPPED() {
            return alertStopped;
          }
          static get ALERT_STOPPED_ALL() {
            return alertStoppedAll;
          }
          static get ALERT_NOTES_EDITED() {
            return alertNotesEdited;
          }
          static get ALERT_DELETED() {
            return alertDeleted;
          }
          static get ALERT_DELETED_ALL() {
            return alertDeletedAll;
          }
          // WATCHLIST
          static get WATCHLIST_APPLICATION_LOADED() {
            return watchlistApplicationLoaded;
          }
          static get WATCHLIST_ACCESSED() {
            return watchlistAccessed;
          }
          static get WATCHLIST_CREATED() {
            return watchlistCreated;
          }
          static get WATCHLIST_DOWNLOADED() {
            return watchlistDownloaded;
          }
          static get WATCHLIST_PRINTED() {
            return watchlistPrinted;
          }
          static get WATCHLIST_DELETED() {
            return watchlistDeleted;
          }
          static get WATCHLIST_SYMBOL_ADDED() {
            return watchlistSymbolAdded;
          }
          static get WATCHLIST_SYMBOL_REMOVED() {
            return watchlistSymbolRemoved;
          }
          static get WATCHLIST_CUSTOM_VIEW_CREATED() {
            return watchlistCustomViewCreated;
          }
          static get WATCHLIST_CUSTOM_VIEW_DELETED() {
            return watchlistCustomViewDeleted;
          }
          static get WATCHLIST_VIEW_TYPE_CHANGED() {
            return watchlistViewTypeChanged;
          }
          static get WATCHLIST_VIEW_CHANGED() {
            return watchlistViewChanged;
          }
          static get WATCHLIST_DATA_MODE_CHANGED() {
            return watchlistDataModeChanged;
          }
          static get WATCHLIST_EDIT_SCREEN_INVOKED() {
            return watchlistEditScreenInvoked;
          }
          static get WATCHLIST_PORTFOLIO_ADD_SCREEN_INVOKED() {
            return watchlistPortfolioAddScreenInvoked;
          }
          static get WATCHLIST_SYMBOL_NOTES_SCREEN_INVOKED() {
            return watchlistSymbolNotesScreenInvoked;
          }
          static get WATCHLIST_ASSET_CLASS_FILTER_ACTIVATED() {
            return watchlistAssetClassFilterActivated;
          }
          static get WATCHLIST_ASSET_CLASS_FILTER_DEACTIVATED() {
            return watchlistAssetClassFilterDeactivated;
          }
          // PORTFOLIO
          static get PORTFOLIO_APPLICATION_LOADED() {
            return portfolioApplicationLoaded;
          }
          static get PORTFOLIO_ACCESSED() {
            return portfolioAccessed;
          }
          static get PORTFOLIO_CREATED() {
            return portfolioCreated;
          }
          static get PORTFOLIO_DOWNLOADED() {
            return portfolioDownloaded;
          }
          static get PORTFOLIO_DELETED() {
            return portfolioDeleted;
          }
          static get PORTFOLIO_TRANSACTION_CREATED() {
            return portfolioTransactionCreated;
          }
          static get PORTFOLIO_TRANSACTION_EDITED() {
            return portfolioTransactionEdited;
          }
          static get PORTFOLIO_TRANSACTION_DELETED() {
            return portfolioTransactionDeleted;
          }
          static get PORTFOLIO_POSITION_CREATED() {
            return portfolioPositionCreated;
          }
          static get PORTFOLIO_POSITION_DELETED() {
            return portfolioPositionDeleted;
          }
          static get PORTFOLIO_BROKERAGE_REPORT_DOWNLOADED() {
            return portfolioBrokerageReportDownloaded;
          }
          static get PORTFOLIO_CUSTOM_VIEW_CREATED() {
            return portfolioCustomViewCreated;
          }
          static get PORTFOLIO_CUSTOM_VIEW_DELETED() {
            return portfolioCustomViewDeleted;
          }
          static get PORTFOLIO_VIEW_TYPE_CHANGED() {
            return portfolioViewTypeChanged;
          }
          static get PORTFOLIO_SHOW_CLOSED_POSITIONS_CHANGED() {
            return portfolioShowClosedPositionsChanged;
          }
          static get PORTFOLIO_DIVIDEND_STRATEGY_CHANGED() {
            return portfolioDividendStrategyChanged;
          }
          static get PORTFOLIO_CASH_ADJUSTMENT_STRATEGY_CHANGED() {
            return portfolioCashAdjustmentStrategyChanged;
          }
          static get PORTFOLIO_TRANSACTION_HISTORY_SINGLE_INVOKED() {
            return portfolioTransactionHistorySingleInvoked;
          }
          static get PORTFOLIO_TRANSACTION_HISTORY_ALL_INVOKED() {
            return portfolioTransactionHistoryAllInvoked;
          }
          static get PORTFOLIO_EDIT_PORTFOLIO_SCREEN_INVOKED() {
            return portfolioEditPortfolioScreenInvoked;
          }
          static get PORTFOLIO_EDIT_TRANSACTION_SCREEN_INVOKED() {
            return portfolioEditTransactionScreenInvoked;
          }
          static get PORTFOLIO_WATCHLIST_ADD_SCREEN_INVOKED() {
            return portfolioWatchlistAddScreenInvoked;
          }
          static get PORTFOLIO_WEALTHSCOPE_REPORT_VIEWED() {
            return portfolioWealthscopeReportViewed;
          }
          static get PORTFOLIO_VALUE_GRAPH_OPENED() {
            return portfolioValueGraphOpened;
          }
          static get PORTFOLIO_VALUE_GRAPH_DURATION_CHANGED() {
            return portfolioValueGraphDurationChanged;
          }
          // CMDTYVIEW
          static get CMDTYVIEW_LOGIN() {
            return cmdtyViewLogin;
          }
          static get CMDTYVIEW_LOGOUT() {
            return cmdtyViewLogout;
          }
          static get CMDTYVIEW_WORKSPACE_CREATED() {
            return cmdtyViewWorkspaceCreated;
          }
          static get CMDTYVIEW_WORKSPACE_ACTIVATED() {
            return cmdtyViewWorkspaceActivated;
          }
          static get CMDTYVIEW_PANEL_ADDED() {
            return cmdtyViewPanelAdded;
          }
          static get CMDTYVIEW_PANEL_REMOVED() {
            return cmdtyViewPanelRemoved;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_SHOWN() {
            return cmdtyViewSymbolBrowserShown;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_SEARCH() {
            return cmdtyViewSymbolBrowserSearch;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_SYMBOL_CONFIRMED() {
            return cmdtyViewSymbolBrowerSymbolConfirmed;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_BRANCH_STATE_CHANGED() {
            return cmdtyViewSymbolBrowserBranchStateChanged;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_FILTER_CHANGED() {
            return cmdtyViewSymbolBrowserFilterChanged;
          }
          static get CMDTYVIEW_SYMBOL_BROWSER_SYMBOLS_INSERTED() {
            return cmdtyViewSymbolBrowserSymbolsInserted;
          }
          static get CMDTYVIEW_SYMBOL_SEARCH_SYMBOL_SELECTED() {
            return cmdtyViewSymbolSearchSymbolSelected;
          }
          static get CMDTYVIEW_SYMBOL_SEARCH_RESULTS_SHOWN() {
            return cmdtyViewSymbolSearchResultsShown;
          }
          static get CMDTYVIEW_SYMBOL_SEARCH_BRANCH_SELECTED() {
            return cmdtyViewSymbolSearchBranchSelected;
          }
          static get CMDTYVIEW_SYMBOL_SEARCH_OPTIONS_TREE_OPENED() {
            return cmdtyViewSymbolSearchOptionsTreeOpened;
          }
          static get CMDTYVIEW_EXPRESSION_DIALOG_SHOWN() {
            return cmdtyViewExpressionDialogShown;
          }
          static get CMDTYVIEW_EXPRESSION_ADDED() {
            return cmdtyViewExpressionAdded;
          }
          static get CMDTYVIEW_COLUMNS_MENU_SHOWN() {
            return cmdtyViewColumnsMenuShown;
          }
          static get CMDTYVIEW_COLUMNS_ADDED() {
            return cmdtyViewColumnsAdded;
          }
          static get CMDTYVIEW_COLUMNS_REMOVED() {
            return cmdtyViewColumnsRemoved;
          }
          static get CMDTYVIEW_COLUMNS_RESTORED() {
            return cmdtyViewColumnsRestored;
          }
          static get CMDTYVIEW_EXCEL_EXPORT_SHOWN() {
            return cmdtyViewExcelExportShown;
          }
          static get CMDTYVIEW_EXCEL_EXPORT_COMPLETED() {
            return cmdtyViewExcelExportCompleted;
          }
          static get CMDTYVIEW_QUOTES_PRICE_FORMAT_SHOWN() {
            return cmdtyViewQuotesPriceFormatShown;
          }
          static get CMDTYVIEW_QUOTES_PRICE_FORMAT_CHANGED() {
            return cmdtyViewQuotesPriceFormatChanged;
          }
          static get CMDTYVIEW_QUOTES_CONTEXT_MENU_SHOWN() {
            return cmdtyViewQuotesContextMenuShown;
          }
          static get CMDTYVIEW_QUOTES_CONTEXT_MENU_SELECTED() {
            return cmdtyViewQuotesContextMenuSelected;
          }
          static get CMDTYVIEW_OPTIONS_STRIKES_NUM_STRIKES_MENU_SHOWN() {
            return cmdtyViewOptionsStrikesNumStrikesMenuShown;
          }
          static get CMDTYVIEW_OPTIONS_STRIKES_NUM_STRIKES_CHANGED() {
            return cmdtyViewOptionsStrikesNumStrikesChanged;
          }
          static get CMDTYVIEW_OPTIONS_STRIKES_FIELDS_MENU_SHOWN() {
            return cmdtyViewOptionsStrikesFieldsMenuShown;
          }
          static get CMDTYVIEW_OPTIONS_STRIKES_FIELD_CHANGED() {
            return cmdtyViewOptionsStrikesFieldChanged;
          }
          static get CMDTYVIEW_OPTIONS_STRIKES_ROOT_SELECTED() {
            return cmdtyViewOptionsStrikesRootSelected;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_DATE_CHANGED() {
            return cmdtyViewOptionsChainDateChanged;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_HIGHLIGHT_CHANGED() {
            return cmdtyViewOptionsChainHighlightChanged;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_STRIKE_COUNT_CHANGED() {
            return cmdtyViewOptionsChainStrikeCountChanged;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_COLUMNS_VIEW_CHANGED() {
            return cmdtyViewOptionsChainColumnsViewChanged;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_EXPIRATION_MENU_SHOWN() {
            return cmdtyViewOptionsChainExpirationMenuShown;
          }
          static get CMDTYVIEW_OPTIONS_CHAIN_EXPIRATION_SELECTED() {
            return cmdtyViewOptionsChainExpirationSelected;
          }
          static get CMDTYVIEW_HISTORY_AGGREGATION_MENU_SHOWN() {
            return cmdtyViewHistoryAggregationMenuShown;
          }
          static get CMDTYVIEW_HISTORY_AGGREGATION_SELECTED() {
            return cmdtyViewHistoryAggregationSelected;
          }
          static get CMDTYVIEW_HISTORY_RANGE_SELECTED() {
            return cmdtyViewHistoryRangeSelected;
          }
          static get CMDTYVIEW_HISTORY_CONTRACT_ROLL_CHANGED() {
            return cmdtyViewHistoryContractRollChanged;
          }
          static get CMDTYVIEW_HISTORY_INDICATOR_DIALOG_SHOWN() {
            return cmdtyViewHistoryIndicatorDialogShown;
          }
          static get CMDTYVIEW_HISTORY_INDICATOR_ADDED() {
            return cmdtyViewHistoryIndicatorAdded;
          }
          static get CMDTYVIEW_HISTORY_INDICATOR_REMOVED() {
            return cmdtyViewHistoryIndicatorRemoved;
          }
          static get CMDTYVIEW_NEWS_FILTER_VISIBILITY_CHANGED() {
            return cmdtyViewNewsFilterVisibilityChanged;
          }
          static get CMDTYVIEW_NEWS_SHOW_SYMBOLS_CHANGED() {
            return cmdtyViewNewsShowSymbolsChanged;
          }
          static get CMDTYVIEW_NEWS_OPEN_CHART_ON_CLICK_CHANGED() {
            return cmdtyViewNewsOpenChartOnClickChanged;
          }
          static get CMDTYVIEW_NEWS_FILTER_CHANGED() {
            return cmdtyViewNewsFilterChanged;
          }
          static get CMDTYVIEW_GRAIN_BID_ZIP_CODE_CHANGED() {
            return cmdtyViewGraiBidZipCodeChanged;
          }
          static get CMDTYVIEW_GRAIN_BID_LOCATIONS_CHANGED() {
            return cmdtyViewGrainBidLocationsChanged;
          }
          static get CMDTYVIEW_GRAIN_BID_COMMODITIES_CHANGED() {
            return cmdtyViewGrainBidCommoditiesChanged;
          }
          static get CMDTYVIEW_GRAIN_BID_DISTANCE_CHANGED() {
            return cmdtyViewGrainBidDistanceChanged;
          }
          static get CMDTYVIEW_GRAIN_BID_DELIVERIES_CHANGED() {
            return cmdtyViewGrainBidDeliveriesChanged;
          }
          // CMDTYVIEW WEB EXCEL
          static get CMDTYVIEW_WEB_EXCEL_LOGIN() {
            return cmdtyViewWebExcelLogin;
          }
          static get CMDTYVIEW_WEB_EXCEL_LOGOUT() {
            return cmdtyViewWebExcelLogout;
          }
          static get CMDTYVIEW_WEB_EXCEL_QUOTES_OPENED() {
            return cmdtyViewWebExcelQuotesOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_QUOTES_INSERTED() {
            return cmdtyViewWebExcelQuotesInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_HISTORY_OPENED() {
            return cmdtyViewWebExcelHistoryOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_HISTORY_INSERTED() {
            return cmdtyViewWebExcelHistoryInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_OPTIONS_OPENED() {
            return cmdtyViewWebExcelOptionsOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_OPTIONS_INSERTED() {
            return cmdtyViewWebExcelOptionsInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_CHART_OPENED() {
            return cmdtyViewWebExcelChartOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_CHART_INSERTED() {
            return cmdtyViewWebExcelChartInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_FORWARD_CURVES_OPENED() {
            return cmdtyViewWebExcelForwardCurvesOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_FORWARD_CURVES_INSERTED() {
            return cmdtyViewWebExcelForwardCurvesInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_ORDER_BOOK_OPENED() {
            return cmdtyViewWebExcelOrderBookOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_ORDER_BOOK_INSERTED() {
            return cmdtyViewWebExcelOrderBookInserted;
          }
          static get CMDTYVIEW_WEB_EXCEL_REFRESH_SELECTED() {
            return cmdtyViewWebExcelRefreshSelected;
          }
          static get CMDTYVIEW_WEB_EXCEL_REFRESH_ALL() {
            return cmdtyViewWebExcelRefreshAll;
          }
          static get CMDTYVIEW_WEB_EXCEL_ABOUT_OPENED() {
            return cmdtyViewWebExcelAboutOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_PREFERENCES_OPENED() {
            return cmdtyViewWebExcelPreferencesOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_TEMPLATES_OPENED() {
            return cmdtyViewWebExcelTemplatesOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_TEMPLATES_CLICKED() {
            return cmdtyViewWebExcelTemplatesClicked;
          }
          static get CMDTYVIEW_WEB_EXCEL_HELP_OPENED() {
            return cmdtyViewWebExcelHelpOpened;
          }
          static get CMDTYVIEW_WEB_EXCEL_USER_GUIDE_CLICKED() {
            return cmdtyViewWebExcelUserGuideClicked;
          }
          static get CMDTYVIEW_WEB_EXCEL_UPGRADE_CLICKED() {
            return cmdtyViewWebExcelUpgradeClicked;
          }
          // ENTITLEMENTS
          static get ENTITLEMWENTS_AUTHORIZATION_FAILED() {
            return entitlementsAuthorizationFailed;
          }
          static get ENTITLEMENTS_AUTHORIZATION_FAILED() {
            return entitlementsAuthorizationFailed;
          }
          // MARKETPLACE
          static get MARKETPLACE_CUSTOMER_CREATED() {
            return marketplaceCustomerCreated;
          }
          static get MARKETPLACE_ACCOUNT_LINKED() {
            return marketplaceAccountLinked;
          }
          static get MARKETPLACE_CUSTOMER_OFFER_ACCESS_APPROVED() {
            return marketplaceCustomerOfferAccessApproved;
          }
          static get MARKETPLACE_OFFER_CREATED() {
            return marketplaceOfferCreated;
          }
          static get MARKETPLACE_CONTRACT_SIGNED() {
            return marketplaceContractSigned;
          }
          // BARCHART WEB EXCEL
          static get BARCHART_WEB_EXCEL_LOGIN() {
            return barchartWebExcelLogin;
          }
          static get BARCHART_WEB_EXCEL_LOGOUT() {
            return barchartWebExcelLogout;
          }
          static get BARCHART_WEB_EXCEL_QUOTES_OPENED() {
            return barchartWebExcelQuotesOpened;
          }
          static get BARCHART_WEB_EXCEL_QUOTES_INSERTED() {
            return barchartWebExcelQuotesInserted;
          }
          static get BARCHART_WEB_EXCEL_HISTORY_OPENED() {
            return barchartWebExcelHistoryOpened;
          }
          static get BARCHART_WEB_EXCEL_HISTORY_INSERTED() {
            return barchartWebExcelHistoryInserted;
          }
          static get BARCHART_WEB_EXCEL_OPTIONS_OPENED() {
            return barchartWebExcelOptionsOpened;
          }
          static get BARCHART_WEB_EXCEL_OPTIONS_INSERTED() {
            return barchartWebExcelOptionsInserted;
          }
          static get BARCHART_WEB_EXCEL_REFRESH_SELECTED() {
            return barchartWebExcelRefreshSelected;
          }
          static get BARCHART_WEB_EXCEL_REFRESH_ALL() {
            return barchartWebExcelRefreshAll;
          }
          static get BARCHART_WEB_EXCEL_ABOUT_OPENED() {
            return barchartWebExcelAboutOpened;
          }
          static get BARCHART_WEB_EXCEL_PREFERENCES_OPENED() {
            return barchartWebExcelPreferencesOpened;
          }
          static get BARCHART_WEB_EXCEL_TEMPLATES_OPENED() {
            return barchartWebExcelTemplatesOpened;
          }
          static get BARCHART_WEB_EXCEL_TEMPLATES_CLICKED() {
            return barchartWebExcelTemplatesClicked;
          }
          static get BARCHART_WEB_EXCEL_HELP_OPENED() {
            return barchartWebExcelHelpOpened;
          }
          static get BARCHART_WEB_EXCEL_USER_GUIDE_CLICKED() {
            return barchartWebExcelUserGuideClicked;
          }
          static get BARCHART_WEB_EXCEL_UPGRADE_CLICKED() {
            return barchartWebExcelUpgradeClicked;
          }
          // BARCHART EXCEL
          static get BARCHART_EXCEL_LOGIN() {
            return barchartExcelLogin;
          }
          static get BARCHART_EXCEL_LOGOUT() {
            return barchartExcelLogout;
          }
          static get BARCHART_EXCEL_QUOTES_OPENED() {
            return barchartExcelQuotesOpened;
          }
          static get BARCHART_EXCEL_QUOTES_CLOSED() {
            return barchartExcelQuotesClosed;
          }
          static get BARCHART_EXCEL_QUOTES_INSERTED() {
            return barchartExcelQuotesInserted;
          }
          static get BARCHART_EXCEL_HISTORY_OPENED() {
            return barchartExcelHistoryOpened;
          }
          static get BARCHART_EXCEL_HISTORY_CLOSED() {
            return barchartExcelHistoryClosed;
          }
          static get BARCHART_EXCEL_HISTORY_INSERTED() {
            return barchartExcelHistoryInserted;
          }
          static get BARCHART_EXCEL_OPTIONS_OPENED() {
            return barchartExcelOptionsOpened;
          }
          static get BARCHART_EXCEL_OPTIONS_CLOSED() {
            return barchartExcelOptionsClosed;
          }
          static get BARCHART_EXCEL_OPTIONS_INSERTED() {
            return barchartExcelOptionsInserted;
          }
          static get BARCHART_EXCEL_CHART_OPENED() {
            return barchartExcelChartOpened;
          }
          static get BARCHART_EXCEL_CHART_CLOSED() {
            return barchartExcelChartClosed;
          }
          static get BARCHART_EXCEL_CHART_INSERTED() {
            return barchartExcelChartInserted;
          }
          static get BARCHART_EXCEL_FORWARD_CURVES_OPENED() {
            return barchartExcelForwardCurvesOpened;
          }
          static get BARCHART_EXCEL_FORWARD_CURVES_CLOSED() {
            return barchartExcelForwardCurvesClosed;
          }
          static get BARCHART_EXCEL_FORWARD_CURVES_INSERTED() {
            return barchartExcelForwardCurvesInserted;
          }
          static get BARCHART_EXCEL_TIME_AND_SALES_OPENED() {
            return barchartExcelTimeAndSalesOpened;
          }
          static get BARCHART_EXCEL_TIME_AND_SALES_CLOSED() {
            return barchartExcelTimeAndSalesClosed;
          }
          static get BARCHART_EXCEL_TIME_AND_SALES_INSERTED() {
            return barchartExcelTimeAndSalesInserted;
          }
          static get BARCHART_EXCEL_REFRESH_SELECTED() {
            return barchartExcelRefreshSelected;
          }
          static get BARCHART_EXCEL_REFRESH_ALL() {
            return barchartExcelRefreshAll;
          }
          static get BARCHART_EXCEL_STOCKS_LISTS_OPENED() {
            return barchartExcelStocksListsOpened;
          }
          static get BARCHART_EXCEL_STOCKS_LISTS_CLOSED() {
            return barchartExcelStocksListsClosed;
          }
          static get BARCHART_EXCEL_STOCKS_LISTS_INSERTED() {
            return barchartExcelStocksListsInserted;
          }
          static get BARCHART_EXCEL_ETFS_LISTS_OPENED() {
            return barchartExcelEtfsListsOpened;
          }
          static get BARCHART_EXCEL_ETFS_LISTS_CLOSED() {
            return barchartExcelEtfsListsClosed;
          }
          static get BARCHART_EXCEL_ETFS_LISTS_INSERTED() {
            return barchartExcelEtfsListsInserted;
          }
          static get BARCHART_EXCEL_OPTIONS_LISTS_OPENED() {
            return barchartExcelOptionsListsOpened;
          }
          static get BARCHART_EXCEL_OPTIONS_LISTS_CLOSED() {
            return barchartExcelOptionsListsClosed;
          }
          static get BARCHART_EXCEL_OPTIONS_LISTS_INSERTED() {
            return barchartExcelOptionsListsInserted;
          }
          static get BARCHART_EXCEL_FUTURES_LISTS_OPENED() {
            return barchartExcelFuturesListsOpened;
          }
          static get BARCHART_EXCEL_FUTURES_LISTS_CLOSED() {
            return barchartExcelFuturesListsClosed;
          }
          static get BARCHART_EXCEL_FUTURES_LISTS_INSERTED() {
            return barchartExcelFuturesListsInserted;
          }
          static get BARCHART_EXCEL_CURRENCIES_LISTS_OPENED() {
            return barchartExcelCurrenciesListsOpened;
          }
          static get BARCHART_EXCEL_CURRENCIES_LISTS_CLOSED() {
            return barchartExcelCurrenciesListsClosed;
          }
          static get BARCHART_EXCEL_CURRENCIES_LISTS_INSERTED() {
            return barchartExcelCurrenciesListsInserted;
          }
          static get BARCHART_EXCEL_FUNDAMENTALS_OPENED() {
            return barchartExcelFundamentalsOpened;
          }
          static get BARCHART_EXCEL_FUNDAMENTALS_CLOSED() {
            return barchartExcelFundamentalsClosed;
          }
          static get BARCHART_EXCEL_FUNDAMENTALS_INSERTED() {
            return barchartExcelFundamentalsInserted;
          }
          static get BARCHART_EXCEL_STOCK_SCREENER_OPENED() {
            return barchartExcelStockScreenerOpened;
          }
          static get BARCHART_EXCEL_STOCK_SCREENER_CLOSED() {
            return barchartExcelStockScreenerClosed;
          }
          static get BARCHART_EXCEL_STOCK_SCREENER_INSERTED() {
            return barchartExcelStockScreenerInserted;
          }
          static get BARCHART_EXCEL_ETF_SCREENER_OPENED() {
            return barchartExcelEtfScreenerOpened;
          }
          static get BARCHART_EXCEL_ETF_SCREENER_CLOSED() {
            return barchartExcelEtfScreenerClosed;
          }
          static get BARCHART_EXCEL_ETF_SCREENER_INSERTED() {
            return barchartExcelEtfScreenerInserted;
          }
          static get BARCHART_EXCEL_OPTIONS_SCREENER_OPENED() {
            return barchartExcelOptionsScreenerOpened;
          }
          static get BARCHART_EXCEL_OPTIONS_SCREENER_CLOSED() {
            return barchartExcelOptionsScreenerClosed;
          }
          static get BARCHART_EXCEL_OPTIONS_SCREENER_INSERTED() {
            return barchartExcelOptionsScreenerInserted;
          }
          static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_OPENED() {
            return barchartExcelVolatilityAnalysisOpened;
          }
          static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_CLOSED() {
            return barchartExcelVolatilityAnalysisClosed;
          }
          static get BARCHART_EXCEL_VOLATILITY_ANALYSIS_INSERTED() {
            return barchartExcelVolatilityAnalysisInserted;
          }
          static get BARCHART_EXCEL_WATCHLIST_OPENED() {
            return barchartExcelWatchlistOpened;
          }
          static get BARCHART_EXCEL_WATCHLIST_CLOSED() {
            return barchartExcelWatchlistClosed;
          }
          static get BARCHART_EXCEL_WATCHLIST_INSERTED() {
            return barchartExcelWatchlistInserted;
          }
          static get BARCHART_EXCEL_PORTFOLIO_OPENED() {
            return barchartExcelPortfolioOpened;
          }
          static get BARCHART_EXCEL_PORTFOLIO_CLOSED() {
            return barchartExcelPortfolioClosed;
          }
          static get BARCHART_EXCEL_PORTFOLIO_INSERTED() {
            return barchartExcelPortfolioInserted;
          }
          static get BARCHART_EXCEL_ABOUT_OPENED() {
            return barchartExcelAboutOpened;
          }
          static get BARCHART_EXCEL_ABOUT_CLOSED() {
            return barchartExcelAboutClosed;
          }
          static get BARCHART_EXCEL_PREFERENCES_OPENED() {
            return barchartExcelPreferencesOpened;
          }
          static get BARCHART_EXCEL_PREFERENCES_CLOSED() {
            return barchartExcelPreferencesClosed;
          }
          static get BARCHART_EXCEL_SETTINGS_OPENED() {
            return barchartExcelSettingsOpened;
          }
          static get BARCHART_EXCEL_SETTINGS_CLOSED() {
            return barchartExcelSettingsClosed;
          }
          static get BARCHART_EXCEL_CUSTOM_VIEWS_INSERTED() {
            return barchartExcelCustomViewsInserted;
          }
          static get BARCHART_EXCEL_CUSTOM_VIEWS_CHANGED() {
            return barchartExcelCustomViewsChanged;
          }
          static get BARCHART_EXCEL_CUSTOM_VIEWS_LOADED() {
            return barchartExcelCustomViewsLoaded;
          }
          /**
          * Get all context keys for productType.
          *
          * @public
          * @static
          * @param {ProductType} productType
          * @returns {Array}
          */
          static getContextKeysFor(productType) {
            assert.argumentIsRequired(productType, "productType", ProductType, "ProductType");
            return array.unique(
              Enum.getItems(EventType).filter((eventType) => eventType.product === productType).reduce((acc, item) => acc.concat(item.contextKeys), [])
            );
          }
          toString() {
            return `[EventType (code=${this.code})]`;
          }
        }
        const validators = {};
        validators.string = (x) => is.string(x) && x.length > 0;
        validators.uuid = (x) => is.string(x) && x.length > 0 && uuid.validate(x);
        validators.stringOptional = (x) => is.string(x);
        const transformers = {};
        transformers.stringOptional = (x) => x || "";
        const alertApplicationLoaded = new EventType("ALERT-APPLICATION-LOADED", "Application Loaded", ProductType.ALERT, ["userId"], { [CustomerType.TGAM.code]: [validators.string] });
        const alertCreated = new EventType("ALERT-CREATED", "Alert Created", ProductType.ALERT, ["userId", "alertId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const alertStarted = new EventType("ALERT-STARTED", "Alert Started", ProductType.ALERT, ["userId", "alertId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const alertStartedAll = new EventType("ALERT-STARTED-ALL", "Alert Started", ProductType.ALERT, ["userId"], { [CustomerType.TGAM.code]: [validators.string] });
        const alertStopped = new EventType("ALERT-STOPPED", "Alert Stopped", ProductType.ALERT, ["userId", "alertId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const alertStoppedAll = new EventType("ALERT-STOPPED-ALL", "Alert Stopped", ProductType.ALERT, ["userId"], { [CustomerType.TGAM.code]: [validators.string] });
        const alertNotesEdited = new EventType("ALERT-NOTES-EDITED", "Alert Notes Edited", ProductType.ALERT, ["userId", "alertId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const alertDeleted = new EventType("ALERT-DELETED", "Alert Deleted", ProductType.ALERT, ["userId", "alertId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const alertDeletedAll = new EventType("ALERT-DELETED-ALL", "Alert Deleted", ProductType.ALERT, ["userId"], { [CustomerType.TGAM.code]: [validators.string] });
        const watchlistApplicationLoaded = new EventType("WATCHLIST-APPLICATION-LOADED", "Application Loaded", ProductType.WATCHLIST, ["userId"], { [CustomerType.TGAM.code]: [validators.string] });
        const watchlistAccessed = new EventType("WATCHLIST-ACCESSED", "Watchlist Selected", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistCreated = new EventType("WATCHLIST-CREATED", "Watchlist Created", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistDownloaded = new EventType("WATCHLIST-DOWNLOADED", "Watchlist Downloaded", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistPrinted = new EventType("WATCHLIST-PRINTED", "Watchlist Printed", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistDeleted = new EventType("WATCHLIST-DELETED", "Watchlist Deleted", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistSymbolAdded = new EventType("WATCHLIST-SYMBOL-ADDED", "Symbol Added", ProductType.WATCHLIST, ["userId", "watchlistId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistSymbolRemoved = new EventType("WATCHLIST-SYMBOL-REMOVED", "Symbol Removed", ProductType.WATCHLIST, ["userId", "watchlistId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistCustomViewCreated = new EventType("WATCHLIST-CUSTOM-VIEW-CREATED", "Custom View Created", ProductType.WATCHLIST, ["userId", "viewName"], { [CustomerType.TGAM.code]: [validators.string, validators.string] });
        const watchlistCustomViewDeleted = new EventType("WATCHLIST-CUSTOM-VIEW-DELETED", "Custom View Deleted", ProductType.WATCHLIST, ["userId", "viewName"], { [CustomerType.TGAM.code]: [validators.string, validators.string] });
        const watchlistViewTypeChanged = new EventType("WATCHLIST-VIEW-TYPE-CHANGED", "View Type Changed", ProductType.WATCHLIST, ["userId", "watchlistId", "viewType"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistViewChanged = new EventType("WATCHLIST-VIEW-CHANGED", "View Changed", ProductType.WATCHLIST, ["userId", "watchlistId", "viewName"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistDataModeChanged = new EventType("WATCHLIST-DATA-MODE-CHANGED", "Data mode changed", ProductType.WATCHLIST, ["userId", "watchlistId", "dataMode"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistEditScreenInvoked = new EventType("WATCHLIST-SCREEN-INVOKED-EDIT", "Edit Screen Invoked", ProductType.WATCHLIST, ["userId", "watchlistId"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid] });
        const watchlistPortfolioAddScreenInvoked = new EventType("WATCHLIST-SCREEN-INVOKED-PORTFOLIO-ADD", "Portfolio Add Screen Invoked", ProductType.WATCHLIST, ["userId", "watchlistId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistSymbolNotesScreenInvoked = new EventType("WATCHLIST-SCREEN-INVOKED-SYMBOL-NOTES", "Symbol Notes Screen Accessed", ProductType.WATCHLIST, ["userId", "watchlistId", "symbol"], { [CustomerType.TGAM.code]: [validators.string, validators.uuid, validators.string] });
        const watchlistAssetClassFilterActivated = new EventType("WATCHLIST-ASSET-CLASS-FILTER-ACTIVATED", "Asset Filter Activated", ProductType.WATCHLIST, ["userId", "classFilter"], { [CustomerType.TGAM.code]: [validators.string, validators.string] });
        const watchlistAssetClassFilterDeactivated = new EventType("WATCHLIST-ASSET-CLASS-FILTER-DEACTIVATED", "Asset Filter Deactivated", ProductType.WATCHLIST, ["userId", "classFilter"], { [CustomerType.TGAM.code]: [validators.string, validators.string] });
        const portfolioApplicationLoaded = new EventType("PORTFOLIO-APPLICATION-LOADED", "Application Loaded", ProductType.PORTFOLIO, ["userId"]);
        const portfolioAccessed = new EventType("PORTFOLIO-ACCESSED", "Portfolio Accessed", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioCreated = new EventType("PORTFOLIO-CREATED", "Portfolio Created", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioDownloaded = new EventType("PORTFOLIO-DOWNLOADED", "Portfolio Downloaded", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioDeleted = new EventType("PORTFOLIO-DELETED", "Portfolio Deleted", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioTransactionCreated = new EventType("PORTFOLIO-TRANSACTION-CREATED", "Transaction Created", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioTransactionEdited = new EventType("PORTFOLIO-TRANSACTION-EDITED", "Transaction Edited", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioTransactionDeleted = new EventType("PORTFOLIO-TRANSACTION-DELETED", "Transaction Deleted", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioPositionCreated = new EventType("PORTFOLIO-POSITION-CREATED", "Position Created", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioPositionDeleted = new EventType("PORTFOLIO-POSITION-DELETED", "Position Deleted", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioBrokerageReportDownloaded = new EventType("PORTFOLIO-BROKERAGE-REPORT-DOWNLOADED", "Brokerage Report Downloaded", ProductType.PORTFOLIO, ["userId", "portfolioId", "frame"]);
        const portfolioCustomViewCreated = new EventType("PORTFOLIO-CUSTOM-VIEW-CREATED", "Custom View Created", ProductType.PORTFOLIO, ["userId", "viewName"]);
        const portfolioCustomViewDeleted = new EventType("PORTFOLIO-CUSTOM-VIEW-DELETED", "Custom View Deleted", ProductType.PORTFOLIO, ["userId", "viewName"]);
        const portfolioViewTypeChanged = new EventType("PORTFOLIO-VIEW-TYPE-CHANGED", "View Changed", ProductType.PORTFOLIO, ["userId", "portfolioId", "viewName"]);
        const portfolioShowClosedPositionsChanged = new EventType("PORTFOLIO-CLOSED-POSITIONS-CHANGED", "Closed Positions View Changed", ProductType.PORTFOLIO, ["userId", "portfolioId", "showClosedPositions"]);
        const portfolioDividendStrategyChanged = new EventType("PORTFOLIO-DIVIDEND-STRATEGY-CHANGED", "Dividend Strategy Changed", ProductType.PORTFOLIO, ["userId", "portfolioId", "dividendStrategy"]);
        const portfolioCashAdjustmentStrategyChanged = new EventType("PORTFOLIO-CASH-ADJUSTMENT-STRATEGY-CHANGED", "Cash Adjustment Strategy Changed", ProductType.PORTFOLIO, ["userId", "portfolioId", "cashAdjustmentStrategy"]);
        const portfolioTransactionHistorySingleInvoked = new EventType("PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-SINGLE", "Transaction History Viewed (Single Position)", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioTransactionHistoryAllInvoked = new EventType("PORTFOLIO-SCREEN-INVOKED-TRANSACTIONS-ALL", "Transaction History Viewed (All Positions)", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioEditPortfolioScreenInvoked = new EventType("PORTFOLIO-SCREEN-INVOKED-EDIT-PORTFOLIO", "Portfolio Edit Screen Invoked", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioEditTransactionScreenInvoked = new EventType("PORTFOLIO-SCREEN-INVOKED-EDIT-TRANSACTION", "Transaction Edit Screen Invoked", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioWatchlistAddScreenInvoked = new EventType("PORTFOLIO-SCREEN-INVOKED-WATCHLIST-ADD", "Watchlist Add Edit Screen Invoked", ProductType.PORTFOLIO, ["userId", "portfolioId", "positionId", "symbol"]);
        const portfolioWealthscopeReportViewed = new EventType("PORTFOLIO-WEALTHSCOPE-REPORT-VIEWED", "Wealthscope Report Viewed", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioValueGraphOpened = new EventType("PORTFOLIO-VALUE-GRAPH-OPENED", "Portfolio Value Graph Opened", ProductType.PORTFOLIO, ["userId", "portfolioId"]);
        const portfolioValueGraphDurationChanged = new EventType("PORTFOLIO-VALUE-GRAPH-DURATION-CHANGED", "Portfolio Value Graph Duration Changed", ProductType.PORTFOLIO, ["userId", "portfolioId", "duration"]);
        const cmdtyViewLogin = new EventType("CMDTYVIEW-LOGIN", "User Logged In", ProductType.CMDTYVIEW, ["userId", "sessionId", "browser", "hostname"], { [CustomerType.BARCHART.code]: [null, null, null, validators.stringOptional] }, { [CustomerType.BARCHART.code]: [null, null, null, transformers.stringOptional] });
        const cmdtyViewLogout = new EventType("CMDTYVIEW-LOGOUT", "User Logged Out", ProductType.CMDTYVIEW, ["userId", "sessionId"]);
        const cmdtyViewWorkspaceCreated = new EventType("CMDTYVIEW-WORKSPACE-CREATED", "Workspace Created", ProductType.CMDTYVIEW, ["userId", "sessionId", "workspaceId", "title"]);
        const cmdtyViewWorkspaceActivated = new EventType("CMDTYVIEW-WORKSPACE-ACTIVATED", "Workspace Activated", ProductType.CMDTYVIEW, ["userId", "sessionId", "workspaceId", "title", "panels"]);
        const cmdtyViewPanelAdded = new EventType("CMDTYVIEW-PANEL-ADDED", "Panel Added", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "origin"]);
        const cmdtyViewPanelRemoved = new EventType("CMDTYVIEW-PANEL-REMOVED", "Panel Removed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewSymbolBrowserShown = new EventType("CMDTYVIEW-SYMBOL-BROWSER-SHOWN", "Symbol Browser Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewSymbolBrowserSearch = new EventType("CMDTYVIEW-SYMBOL-BROWSER-SEARCH", "Symbol Browser Search Performed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "searchString"]);
        const cmdtyViewSymbolBrowerSymbolConfirmed = new EventType("CMDTYVIEW-SYMBOL-BROWSER-SYMBOL-CONFIRMED", "Symbol Browser Symbol Confirmed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "path"]);
        const cmdtyViewSymbolBrowserBranchStateChanged = new EventType("CMDTYVIEW-SYMBOL-BROWSER-BRANCH-STATE-CHANGED", "Symbol Browser Branch State Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "path", "isOpen"]);
        const cmdtyViewSymbolBrowserFilterChanged = new EventType("CMDTYVIEW-SYMBOL-BROWSER-FILTER-CHANGED", "Symbol Browser Filter Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "filter", "filterSelected", "activeFilters"]);
        const cmdtyViewSymbolBrowserSymbolsInserted = new EventType("CMDTYVIEW-SYMBOL-BROWSER-SYMBOLS-INSERTED", "Symbol Browser Symbols Inserted", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbols"]);
        const cmdtyViewSymbolSearchSymbolSelected = new EventType("CMDTYVIEW-SYMBOL-SEARCH-SYMBOL-SELECTED", "Symbol Search Symbol Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "path"]);
        const cmdtyViewSymbolSearchResultsShown = new EventType("CMDTYVIEW-SYMBOL-SEARCH-RESULTS-SHOWN", "Symbol Search Results Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "searchString"]);
        const cmdtyViewSymbolSearchBranchSelected = new EventType("CMDTYVIEW-SYMBOL-SEARCH-BRANCH-SELECTED", "Symbol Search Branch Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "path", "collapsed"]);
        const cmdtyViewSymbolSearchOptionsTreeOpened = new EventType("CMDTYVIEW-SYMBOL-SEARCH-OPTIONS-TREE-OPENED", "Symbol Search Options Tree Opened", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "path"]);
        const cmdtyViewExpressionDialogShown = new EventType("CMDTYVIEW-EXPRESSION-DIALOG-SHOWN", "Expression Dialog Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewExpressionAdded = new EventType("CMDTYVIEW-EXPRESSION-ADDED", "Expression Added", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "expressionName", "expressionSource", "expression"]);
        const cmdtyViewColumnsMenuShown = new EventType("CMDTYVIEW-COLUMNS-MENU-SHOWN", "Columns Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "columns"]);
        const cmdtyViewColumnsAdded = new EventType("CMDTYVIEW-COLUMNS-ADDED", "Column(s) Added", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "column", "columns"]);
        const cmdtyViewColumnsRemoved = new EventType("CMDTYVIEW-COLUMNS-REMOVED", "Column(s) Removed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "column", "columns"]);
        const cmdtyViewColumnsRestored = new EventType("CMDTYVIEW-COLUMNS-RESTORED", "Column(s) Restored", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "columns"]);
        const cmdtyViewExcelExportShown = new EventType("CMDTYVIEW-EXCEL-EXPORT-SHOWN", "Export Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewExcelExportCompleted = new EventType("CMDTYVIEW-EXCEL-EXPORT-COMPLETED", "Data Exported to Excel", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "exportType"]);
        const cmdtyViewQuotesPriceFormatShown = new EventType("CMDTYVIEW-QUOTES-PRICE-FORMAT-SHOWN", "Price Format Drop Down Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewQuotesPriceFormatChanged = new EventType("CMDTYVIEW-QUOTES-PRICE-FORMAT-CHANGED", "Price Format Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "previousFormat", "newFormat"]);
        const cmdtyViewQuotesContextMenuShown = new EventType("CMDTYVIEW-QUOTES-CONTEXT-MENU-SHOWN", "Quoteboard Context Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol"]);
        const cmdtyViewQuotesContextMenuSelected = new EventType("CMDTYVIEW-QUOTES-CONTEXT-MENU-SELECTED", "Quoteboard Context Menu Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "action", "symbol"]);
        const cmdtyViewOptionsStrikesNumStrikesMenuShown = new EventType("CMDTYVIEW-OPTIONS-STRIKES-NUM-STRIKES-MENU-SHOWN", "Options Strikes Num Strikes Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewOptionsStrikesNumStrikesChanged = new EventType("CMDTYVIEW-OPTIONS-STRIKES-NUM-STRIKES-CHANGED", "Options Strikes Num Strikes Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "previousNumber", "newNumber"]);
        const cmdtyViewOptionsStrikesFieldsMenuShown = new EventType("CMDTYVIEW-OPTIONS-STRIKES-FIELDS-MENU-SHOWN", "Options Strikes Fields Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewOptionsStrikesFieldChanged = new EventType("CMDTYVIEW-OPTIONS-STRIKES-FIELD-CHANGED", "Options Strikes Field Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "oldField", "newField"]);
        const cmdtyViewOptionsStrikesRootSelected = new EventType("CMDTYVIEW-OPTIONS-STRIKES-ROOT-SELECTED", "Options Strikes Root Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "oldRoot", "newRoot"]);
        const cmdtyViewOptionsChainDateChanged = new EventType("CMDTYVIEW-OPTIONS-CHAIN-DATE-CHANGED", "Options Chain Date Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "date"]);
        const cmdtyViewOptionsChainHighlightChanged = new EventType("CMDTYVIEW-OPTIONS-CHAIN-HIGHLIGHT-CHANGED", "Options Chain Highlight Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "oldValue", "newValue"]);
        const cmdtyViewOptionsChainStrikeCountChanged = new EventType("CMDTYVIEW-OPTIONS-CHAIN-STRIKE-COUNT-CHANGED", "Options Chain Strike Count Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "strikeCount"]);
        const cmdtyViewOptionsChainColumnsViewChanged = new EventType("CMDTYVIEW-OPTIONS-CHAIN-COLUMNS-VIEW-CHANGED", "Options Chain Columns View Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "view"]);
        const cmdtyViewOptionsChainExpirationMenuShown = new EventType("CMDTYVIEW-OPTIONS-CHAIN-EXPIRATION-MENU-SHOWN", "Options Chain Expiration Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title"]);
        const cmdtyViewOptionsChainExpirationSelected = new EventType("CMDTYVIEW-OPTIONS-CHAIN-EXPIRATION-SELECTED", "Options Chain Expiration Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "monthCode", "underlier", "date"]);
        const cmdtyViewHistoryAggregationMenuShown = new EventType("CMDTYVIEW-HISTORY-AGGREGATION-MENU_SHOWN", "History Aggregation Menu Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol"]);
        const cmdtyViewHistoryAggregationSelected = new EventType("CMDTYVIEW-HISTORY-AGGREGATION-SELECTED", "History Aggregation Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "previousAggregation", "newAggregation"]);
        const cmdtyViewHistoryRangeSelected = new EventType("CMDTYVIEW-HISTORY-RANGE-SELECTED", "History Range Selected", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "previousRange", "newRange"]);
        const cmdtyViewHistoryContractRollChanged = new EventType("CMDTYVIEW-HISTORY-CONTRACT-ROLL-CHANGED", "History Contract Roll Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "oldRollType", "newRollType", "oldBackAdjust", "newBackAdjust"]);
        const cmdtyViewHistoryIndicatorDialogShown = new EventType("CMDTYVIEW-HISTORY-INDICATOR-DIALOG-SHOWN", "History Indicator Dialog Shown", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol"]);
        const cmdtyViewHistoryIndicatorAdded = new EventType("CMDTYVIEW-HISTORY-INDICATOR-ADDED", "History Indicator Added", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "indicator", "indicators"]);
        const cmdtyViewHistoryIndicatorRemoved = new EventType("CMDTYVIEW-HISTORY-INDICATOR-REMOVED", "History Indicator Removed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "symbol", "indicator", "indicators"]);
        const cmdtyViewNewsFilterVisibilityChanged = new EventType("CMDTYVIEW-NEWS-FILTER-VISIBILITY-CHANGED", "News Filter Sidebar Visibility Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "filterVisible"]);
        const cmdtyViewNewsShowSymbolsChanged = new EventType("CMDTYVIEW-NEWS-SHOW-SYMBOLS-CHANGED", "News Show Symbols Option Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "value"]);
        const cmdtyViewNewsOpenChartOnClickChanged = new EventType("CMDTYVIEW-NEWS-OPEN-CHART-ON-CLICK-CHANGED", "News Open Chart On Click Option Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "value"]);
        const cmdtyViewNewsFilterChanged = new EventType("CMDTYVIEW-NEWS-FILTER-CHANGED", "News Filter Selection Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "filter"]);
        const cmdtyViewGraiBidZipCodeChanged = new EventType("CMDTYVIEW-GRAIN-BID-ZIP-CODE-CHANGED", "Grain Bid Zip Code Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "zipCode", "previousZipCode"]);
        const cmdtyViewGrainBidLocationsChanged = new EventType("CMDTYVIEW-GRAIN-BID-LOCATIONS-CHANGED", "Grain Bid Locations Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "locations", "previousLocations"]);
        const cmdtyViewGrainBidCommoditiesChanged = new EventType("CMDTYVIEW-GRAIN-BID-COMMODITIES-CHANGED", "Grain Bid Commodities Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "commodities", "previousCommodities"]);
        const cmdtyViewGrainBidDistanceChanged = new EventType("CMDTYVIEW-GRAIN-BID-DISTANCE-CHANGED", "Grain Bid Distance Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "distance", "previousDistance"]);
        const cmdtyViewGrainBidDeliveriesChanged = new EventType("CMDTYVIEW-GRAIN-BID-DELIVERIES-CHANGED", "Grain Bid Deliveries Changed", ProductType.CMDTYVIEW, ["userId", "sessionId", "panelId", "title", "deliveries", "previousDeliveries"]);
        const entitlementsAuthorizationFailed = new EventType("ENTITLEMENTS_AUTHORIZATION_FAILED", "Authorization Failed", ProductType.ENTITLEMENTS, ["userId", "operation"]);
        const marketplaceCustomerCreated = new EventType("CUSTOMER-CREATED", "Customer Created", ProductType.MARKETPLACE, ["userId", "userType", "companyId", "companyName", "entityId"]);
        const marketplaceAccountLinked = new EventType("ACCOUNT-LINKED", "Account Linked", ProductType.MARKETPLACE, ["userId", "userType", "companyId", "companyName", "entityId"]);
        const marketplaceCustomerOfferAccessApproved = new EventType("CUSTOMER-OFFER-ACCESS-APPROVED", "Offer Access Approved", ProductType.MARKETPLACE, ["userId", "userType", "companyId", "companyName", "entityId"]);
        const marketplaceOfferCreated = new EventType("OFFER-CREATED", "Offer Created", ProductType.MARKETPLACE, ["userId", "userType", "companyId", "companyName", "entityId"]);
        const marketplaceContractSigned = new EventType("CONTRACT-SIGNED", "Contract Signed", ProductType.MARKETPLACE, ["userId", "userType", "companyId", "companyName", "entityId"]);
        const cmdtyViewWebExcelLogin = new EventType("CMDTYVIEW-WEB-EXCEL-LOGIN", "User Logged In", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelLogout = new EventType("CMDTYVIEW-WEB-EXCEL-LOGOUT", "User Logged Out", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelQuotesOpened = new EventType("CMDTYVIEW-WEB-EXCEL-QUOTES-OPENED", "Quotes Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelQuotesInserted = new EventType("CMDTYVIEW-WEB-EXCEL-QUOTES-INSERTED", "Quotes Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "symbolsCount", "fieldsCount", "symbolsConversionCount"]);
        const cmdtyViewWebExcelHistoryOpened = new EventType("CMDTYVIEW-WEB-EXCEL-HISTORY-OPENED", "History Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelHistoryInserted = new EventType("CMDTYVIEW-WEB-EXCEL-HISTORY-INSERTED", "History Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "symbolsCount", "fieldsCount", "aggregationType"]);
        const cmdtyViewWebExcelOptionsOpened = new EventType("CMDTYVIEW-WEB-EXCEL-OPTIONS-OPENED", "Options Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelOptionsInserted = new EventType("CMDTYVIEW-WEB-EXCEL-OPTIONS-INSERTED", "Options Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "symbol", "optionsType", "strikeType", "lookBackDate"], { [CustomerType.BARCHART.code]: [null, null, null, null, validators.stringOptional] }, { [CustomerType.BARCHART.code]: [null, null, null, null, transformers.stringOptional] });
        const cmdtyViewWebExcelChartOpened = new EventType("CMDTYVIEW-WEB-EXCEL-CHART-OPENED", "Chart Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelChartInserted = new EventType("CMDTYVIEW-WEB-EXCEL-CHART-INSERTED", "Chart Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "symbolsCount", "chartType"]);
        const cmdtyViewWebExcelForwardCurvesOpened = new EventType("CMDTYVIEW-WEB-EXCEL-FORWARD-CURVES-OPENED", "Forward Curves Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelForwardCurvesInserted = new EventType("CMDTYVIEW-WEB-EXCEL-FORWARD-CURVES-INSERTED", "Forward Curves Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "rootsCount"]);
        const cmdtyViewWebExcelOrderBookOpened = new EventType("CMDTYVIEW-WEB-EXCEL-ORDER-BOOK-OPENED", "Order Book Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelOrderBookInserted = new EventType("CMDTYVIEW-WEB-EXCEL-ORDER-BOOK-INSERTED", "Order Book Inserted", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "symbolsCount"]);
        const cmdtyViewWebExcelRefreshSelected = new EventType("CMDTYVIEW-WEB-EXCEL-REFRESH-SELECTED", "Refresh Selected", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId", "refreshModule"]);
        const cmdtyViewWebExcelRefreshAll = new EventType("CMDTYVIEW-WEB-EXCEL-REFRESH-ALL", "Refresh All", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelAboutOpened = new EventType("CMDTYVIEW-WEB-EXCEL-ABOUT-OPENED", "About Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelPreferencesOpened = new EventType("CMDTYVIEW-WEB-EXCEL-PREFERENCES-OPENED", "Preferences Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelTemplatesOpened = new EventType("CMDTYVIEW-WEB-EXCEL-TEMPLATES-OPENED", "Templates Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelTemplatesClicked = new EventType("CMDTYVIEW-WEB-EXCEL-TEMPLATES-CLICKED", "Templates Clicked", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelHelpOpened = new EventType("CMDTYVIEW-WEB-EXCEL-HELP-OPENED", "Help Opened", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelUserGuideClicked = new EventType("CMDTYVIEW-WEB-EXCEL-USER-GUIDE-CLICKED", "User Guide Clicked", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const cmdtyViewWebExcelUpgradeClicked = new EventType("CMDTYVIEW-WEB-EXCEL-UPGRADE-CLICKED", "Upgrade Clicked", ProductType.CMDTYVIEW_WEB_EXCEL, ["userId"]);
        const barchartWebExcelLogin = new EventType("BARCHART-WEB-EXCEL-LOGIN", "User Logged In", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelLogout = new EventType("BARCHART-WEB-EXCEL-LOGOUT", "User Logged Out", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelQuotesOpened = new EventType("BARCHART-WEB-EXCEL-QUOTES-OPENED", "Quotes Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelQuotesInserted = new EventType("BARCHART-WEB-EXCEL-QUOTES-INSERTED", "Quotes Inserted", ProductType.BARCHART_WEB_EXCEL, ["userId", "symbolsCount", "fieldsCount", "symbolsConversionCount"]);
        const barchartWebExcelHistoryOpened = new EventType("BARCHART-WEB-EXCEL-HISTORY-OPENED", "History Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelHistoryInserted = new EventType("BARCHART-WEB-EXCEL-HISTORY-INSERTED", "History Inserted", ProductType.BARCHART_WEB_EXCEL, ["userId", "symbolsCount", "fieldsCount", "aggregationType"]);
        const barchartWebExcelOptionsOpened = new EventType("BARCHART-WEB-EXCEL-OPTIONS-OPENED", "Options Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelOptionsInserted = new EventType("BARCHART-WEB-EXCEL-OPTIONS-INSERTED", "Options Inserted", ProductType.BARCHART_WEB_EXCEL, ["userId", "symbol", "optionsType", "strikeType", "lookBackDate"], { [CustomerType.BARCHART.code]: [null, null, null, null, validators.stringOptional] }, { [CustomerType.BARCHART.code]: [null, null, null, null, transformers.stringOptional] });
        const barchartWebExcelRefreshSelected = new EventType("BARCHART-WEB-EXCEL-REFRESH-SELECTED", "Refresh Selected", ProductType.BARCHART_WEB_EXCEL, ["userId", "refreshModule"]);
        const barchartWebExcelRefreshAll = new EventType("BARCHART-WEB-EXCEL-REFRESH-ALL", "Refresh All", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelAboutOpened = new EventType("BARCHART-WEB-EXCEL-ABOUT-OPENED", "About Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelPreferencesOpened = new EventType("BARCHART-WEB-EXCEL-PREFERENCES-OPENED", "Preferences Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelTemplatesOpened = new EventType("BARCHART-WEB-EXCEL-TEMPLATES-OPENED", "Templates Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelTemplatesClicked = new EventType("BARCHART-WEB-EXCEL-TEMPLATES-CLICKED", "Templates Clicked", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelHelpOpened = new EventType("BARCHART-WEB-EXCEL-HELP-OPENED", "Help Opened", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelUserGuideClicked = new EventType("BARCHART-WEB-EXCEL-USER-GUIDE-CLICKED", "User Guide Clicked", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartWebExcelUpgradeClicked = new EventType("BARCHART-WEB-EXCEL-UPGRADE-CLICKED", "Upgrade Clicked", ProductType.BARCHART_WEB_EXCEL, ["userId"]);
        const barchartExcelLogin = new EventType("BARCHART-EXCEL-LOGIN", "User Logged In", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelLogout = new EventType("BARCHART-EXCEL-LOGOUT", "User Logged Out", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelQuotesOpened = new EventType("BARCHART-EXCEL-QUOTES-OPENED", "Quotes Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelQuotesClosed = new EventType("BARCHART-EXCEL-QUOTES-CLOSED", "Quotes Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelQuotesInserted = new EventType("BARCHART-EXCEL-QUOTES-INSERTED", "Quotes Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "fieldsCount"]);
        const barchartExcelHistoryOpened = new EventType("BARCHART-EXCEL-HISTORY-OPENED", "History Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelHistoryClosed = new EventType("BARCHART-EXCEL-HISTORY-CLOSED", "History Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelHistoryInserted = new EventType("BARCHART-EXCEL-HISTORY-INSERTED", "History Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "fieldsCount"]);
        const barchartExcelOptionsOpened = new EventType("BARCHART-EXCEL-OPTIONS-OPENED", "Options Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsClosed = new EventType("BARCHART-EXCEL-OPTIONS-CLOSED", "Options Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsInserted = new EventType("BARCHART-EXCEL-OPTIONS-INSERTED", "Options Inserted", ProductType.BARCHART_EXCEL, ["userId", "optionsType", "strikeType", "lookBackDate"], { [CustomerType.BARCHART.code]: [null, null, null, validators.stringOptional] }, { [CustomerType.BARCHART.code]: [null, null, null, transformers.stringOptional] });
        const barchartExcelChartOpened = new EventType("BARCHART-EXCEL-CHART-OPENED", "Chart Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelChartClosed = new EventType("BARCHART-EXCEL-CHART-CLOSED", "Chart Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelChartInserted = new EventType("BARCHART-EXCEL-CHART-INSERTED", "Chart Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "chartType"]);
        const barchartExcelForwardCurvesOpened = new EventType("BARCHART-EXCEL-FORWARD-CURVES-OPENED", "Forward Curves Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelForwardCurvesClosed = new EventType("BARCHART-EXCEL-FORWARD-CURVES-CLOSED", "Forward Curves Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelForwardCurvesInserted = new EventType("BARCHART-EXCEL-FORWARD-CURVES-INSERTED", "Forward Curves Inserted", ProductType.BARCHART_EXCEL, ["userId", "rootsCount"]);
        const barchartExcelTimeAndSalesOpened = new EventType("BARCHART-EXCEL-TIME-AND-SALES-OPENED", "Time And Sales Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelTimeAndSalesClosed = new EventType("BARCHART-EXCEL-TIME-AND-SALES-CLOSED", "Time And Sales Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelTimeAndSalesInserted = new EventType("BARCHART-EXCEL-TIME-AND-SALES-INSERTED", "Time And Sales Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "fieldsCount"]);
        const barchartExcelRefreshSelected = new EventType("BARCHART-EXCEL-REFRESH-SELECTED", "Refresh Selected", ProductType.BARCHART_EXCEL, ["userId", "refreshModule"]);
        const barchartExcelRefreshAll = new EventType("BARCHART-EXCEL-REFRESH-ALL", "Refresh All", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelStocksListsOpened = new EventType("BARCHART-EXCEL-STOCKS-LISTS-OPENED", "Stocks Lists Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelStocksListsClosed = new EventType("BARCHART-EXCEL-STOCKS-LISTS-CLOSED", "Stocks Lists Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelStocksListsInserted = new EventType("BARCHART-EXCEL-STOCKS-LISTS-INSERTED", "Stocks Lists Inserted", ProductType.BARCHART_EXCEL, ["userId", "reportsType", "marketType"]);
        const barchartExcelEtfsListsOpened = new EventType("BARCHART-EXCEL-ETFS-LISTS-OPENED", "ETFs Lists Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelEtfsListsClosed = new EventType("BARCHART-EXCEL-ETFS-LISTS-CLOSED", "ETFs Lists Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelEtfsListsInserted = new EventType("BARCHART-EXCEL-ETFS-LISTS-INSERTED", "ETFs Lists Inserted", ProductType.BARCHART_EXCEL, ["userId", "reportsType", "marketType"]);
        const barchartExcelOptionsListsOpened = new EventType("BARCHART-EXCEL-OPTIONS-LISTS-OPENED", "Options Lists Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsListsClosed = new EventType("BARCHART-EXCEL-OPTIONS-LISTS-CLOSED", "Options Lists Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsListsInserted = new EventType("BARCHART-EXCEL-OPTIONS-LISTS-INSERTED", "Options Lists Inserted", ProductType.BARCHART_EXCEL, ["userId", "reportsType", "listsType", "marketType"]);
        const barchartExcelFuturesListsOpened = new EventType("BARCHART-EXCEL-FUTURES-LISTS-OPENED", "Futures Lists Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelFuturesListsClosed = new EventType("BARCHART-EXCEL-FUTURES-LISTS-CLOSED", "Futures Lists Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelFuturesListsInserted = new EventType("BARCHART-EXCEL-FUTURES-LISTS-INSERTED", "Futures Lists Inserted", ProductType.BARCHART_EXCEL, ["userId", "reportsType"]);
        const barchartExcelCurrenciesListsOpened = new EventType("BARCHART-EXCEL-CURRENCIES-LISTS-OPENED", "Currencies Lists Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelCurrenciesListsClosed = new EventType("BARCHART-EXCEL-CURRENCIES-LISTS-CLOSED", "Currencies Lists Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelCurrenciesListsInserted = new EventType("BARCHART-EXCEL-CURRENCIES-LISTS-INSERTED", "Currencies Lists Inserted", ProductType.BARCHART_EXCEL, ["userId", "reportsType"]);
        const barchartExcelFundamentalsOpened = new EventType("BARCHART-EXCEL-FUNDAMENTALS-OPENED", "Fundamentals Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelFundamentalsClosed = new EventType("BARCHART-EXCEL-FUNDAMENTALS-CLOSED", "Fundamentals Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelFundamentalsInserted = new EventType("BARCHART-EXCEL-FUNDAMENTALS-INSERTED", "Fundamentals Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "category", "types"]);
        const barchartExcelStockScreenerOpened = new EventType("BARCHART-EXCEL-STOCK-SCREENER-OPENED", "Stock Screener Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelStockScreenerClosed = new EventType("BARCHART-EXCEL-STOCK-SCREENER-CLOSED", "Stock Screener Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelStockScreenerInserted = new EventType("BARCHART-EXCEL-STOCK-SCREENER-INSERTED", "Stock Screener Inserted", ProductType.BARCHART_EXCEL, ["userId", "marketType"]);
        const barchartExcelEtfScreenerOpened = new EventType("BARCHART-EXCEL-ETF-SCREENER-OPENED", "ETF Screener Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelEtfScreenerClosed = new EventType("BARCHART-EXCEL-ETF-SCREENER-CLOSED", "ETF Screener Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelEtfScreenerInserted = new EventType("BARCHART-EXCEL-ETF-SCREENER-INSERTED", "ETF Screener Inserted", ProductType.BARCHART_EXCEL, ["userId", "marketType"]);
        const barchartExcelOptionsScreenerOpened = new EventType("BARCHART-EXCEL-OPTIONS-SCREENER-OPENED", "Options Screener Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsScreenerClosed = new EventType("BARCHART-EXCEL-OPTIONS-SCREENER-CLOSED", "Options Screener Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelOptionsScreenerInserted = new EventType("BARCHART-EXCEL-OPTIONS-SCREENER-INSERTED", "Options Screener Inserted", ProductType.BARCHART_EXCEL, ["userId", "marketType"]);
        const barchartExcelVolatilityAnalysisOpened = new EventType("BARCHART-EXCEL-VOLATILITY-ANALYSIS-OPENED", "Volatility Analysis Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelVolatilityAnalysisClosed = new EventType("BARCHART-EXCEL-VOLATILITY-ANALYSIS-CLOSED", "Volatility Analysis Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelVolatilityAnalysisInserted = new EventType("BARCHART-EXCEL-VOLATILITY-ANALYSIS-INSERTED", "Volatility Analysis Inserted", ProductType.BARCHART_EXCEL, ["userId", "volatilityType"]);
        const barchartExcelWatchlistOpened = new EventType("BARCHART-EXCEL-WATCHLIST-OPENED", "Watchlist Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelWatchlistClosed = new EventType("BARCHART-EXCEL-WATCHLIST-CLOSED", "Watchlist Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelWatchlistInserted = new EventType("BARCHART-EXCEL-WATCHLIST-INSERTED", "Watchlist Inserted", ProductType.BARCHART_EXCEL, ["userId", "symbolsCount", "fieldsCount"]);
        const barchartExcelPortfolioOpened = new EventType("BARCHART-EXCEL-PORTFOLIO-OPENED", "Portfolio Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelPortfolioClosed = new EventType("BARCHART-EXCEL-PORTFOLIO-CLOSED", "Portfolio Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelPortfolioInserted = new EventType("BARCHART-EXCEL-PORTFOLIO-INSERTED", "Portfolio Inserted", ProductType.BARCHART_EXCEL, ["userId", "fieldsCount"]);
        const barchartExcelAboutOpened = new EventType("BARCHART-EXCEL-ABOUT-OPENED", "About Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelAboutClosed = new EventType("BARCHART-EXCEL-ABOUT-CLOSED", "About Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelPreferencesOpened = new EventType("BARCHART-EXCEL-PREFERENCES-OPENED", "Preferences Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelPreferencesClosed = new EventType("BARCHART-EXCEL-PREFERENCES-CLOSED", "Preferences Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelSettingsOpened = new EventType("BARCHART-EXCEL-SETTINGS-OPENED", "Settings Opened", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelSettingsClosed = new EventType("BARCHART-EXCEL-SETTINGS-CLOSED", "Settings Closed", ProductType.BARCHART_EXCEL, ["userId"]);
        const barchartExcelCustomViewsInserted = new EventType("BARCHART-EXCEL-CUSTOM-VIEWS-INSERTED", "Custom Views Inserted", ProductType.BARCHART_EXCEL, ["userId", "moduleType", "isSet"]);
        const barchartExcelCustomViewsChanged = new EventType("BARCHART-EXCEL-CUSTOM-VIEWS-CHANGED", "Custom Views Changed", ProductType.BARCHART_EXCEL, ["userId", "moduleType"]);
        const barchartExcelCustomViewsLoaded = new EventType("BARCHART-EXCEL-CUSTOM-VIEWS-LOADED", "Custom Views Loaded", ProductType.BARCHART_EXCEL, ["userId", "moduleType", "isSet"]);
        return EventType;
      })();
    }
  });

  // ../common-js/lib/data/EventJobStatus.js
  var require_EventJobStatus = __commonJS({
    "../common-js/lib/data/EventJobStatus.js"(exports, module) {
      var assert = require_assert();
      var Enum = require_Enum();
      module.exports = (() => {
        "use strict";
        class EventJobStatus extends Enum {
          constructor(code, description, initial, terminal) {
            super(code, description);
            assert.argumentIsRequired(initial, "initial", Boolean);
            assert.argumentIsRequired(terminal, "terminal", Boolean);
            this._initial = initial;
            this._terminal = terminal;
          }
          /**
           * Indicates if the status represents an initial state.
           *
           * @public
           * @returns {Boolean}
           */
          get initial() {
            return this._initial;
          }
          /**
           * Indicates if the status represents a terminal state.
           *
           * @public
           * @returns {Boolean}
           */
          get terminal() {
            return this._terminal;
          }
          /**
           * The job is in-progress.
           *
           * @public
           * @static
           * @returns {EventJobStatus}
           */
          static get RUNNING() {
            return running;
          }
          /**
           * The job succeeded.
           *
           * @public
           * @static
           * @returns {EventJobStatus}
           */
          static get COMPLETE() {
            return complete;
          }
          /**
           * The job timed out.
           *
           * @public
           * @static
           * @returns {EventJobStatus}
           */
          static get TIMEOUT() {
            return timeout;
          }
          /**
           * The job failed.
           *
           * @public
           * @static
           * @returns {EventJobStatus}
           */
          static get FAILED() {
            return failed;
          }
          toString() {
            return `[EventJobStatus (code=${this.code})]`;
          }
        }
        const running = new EventJobStatus("RUNNING", "Running", true, false);
        const complete = new EventJobStatus("COMPLETE", "Complete", false, true);
        const timeout = new EventJobStatus("TIMEOUT", "Timeout", false, true);
        const failed = new EventJobStatus("FAILED", "Failed", false, true);
        return EventJobStatus;
      })();
    }
  });

  // ../common-js/lib/data/serialization/EventJobSchema.js
  var require_EventJobSchema = __commonJS({
    "../common-js/lib/data/serialization/EventJobSchema.js"(exports, module) {
      var assert = require_assert();
      var DataType = require_DataType();
      var Enum = require_Enum();
      var Schema = require_Schema();
      var SchemaBuilder = require_SchemaBuilder();
      var EventType = require_EventType();
      var CustomerType = require_CustomerType();
      var EventJobStatus = require_EventJobStatus();
      var ProductType = require_ProductType();
      module.exports = (() => {
        "use strict";
        class EventJobSchema extends Enum {
          constructor(schema) {
            assert.argumentIsRequired(schema, "schema", Schema, "Schema");
            super(schema.name, schema.name);
            this._schema = schema;
          }
          /**
           * The actual {@link Schema}.
           *
           * @public
           * @returns {Schema}
           */
          get schema() {
            return this._schema;
          }
          /**
           * Data required to get report.
           *
           * @static
           * @public
           * @return {EventJobSchema}
           */
          static get GET() {
            return get;
          }
          /**
           * Data required to start report.
           *
           * @static
           * @public
           * @returns {EventJobSchema}
           */
          static get START() {
            return start;
          }
          /**
           * Data required to process report.
           *
           * @static
           * @public
           * @returns {EventJobSchema}
           */
          static get PROCESS() {
            return process2;
          }
          toString() {
            return `[EventJobSchema (code=${this._code})]`;
          }
        }
        const get = new EventJobSchema(
          SchemaBuilder.withName("get").withField("source", DataType.STRING).schema
        );
        const start = new EventJobSchema(
          SchemaBuilder.withName("start").withField("filter.customer", DataType.forEnum(CustomerType, "CustomerType")).withField("filter.product", DataType.forEnum(ProductType, "ProductType")).withArray("filter.types", DataType.forEnum(EventType, "EventType"), true).withField("filter.start", DataType.TIMESTAMP, true).withField("filter.end", DataType.TIMESTAMP, true).withField("output.delimiter", DataType.STRING, true).withField("output.bucketName", DataType.STRING, true).withField("output.bucketKey", DataType.STRING, true).schema
        );
        const process2 = new EventJobSchema(
          SchemaBuilder.withName("process").withField("job", DataType.STRING).withField("source", DataType.STRING).withField("status", DataType.forEnum(EventJobStatus, "EventJobStatus")).withField("filter.customer", DataType.forEnum(CustomerType, "CustomerType")).withField("filter.product", DataType.forEnum(ProductType, "ProductType")).withArray("filter.types", DataType.forEnum(EventType, "EventType"), true).withField("filter.start", DataType.TIMESTAMP, true).withField("filter.end", DataType.TIMESTAMP, true).withField("timing.day", DataType.DAY).withField("timing.start", DataType.TIMESTAMP).withField("timing.end", DataType.TIMESTAMP, true).withField("output.delimiter", DataType.STRING, true).withField("output.bucketName", DataType.STRING, true).withField("output.bucketKey", DataType.STRING, true).schema
        );
        return EventJobSchema;
      })();
    }
  });

  // lib/common/Configuration.js
  var require_Configuration = __commonJS({
    "lib/common/Configuration.js"(exports, module) {
      module.exports = (() => {
        "use strict";
        class Configuration {
          constructor() {
          }
          /**
           * The host of the development system.
           *
           * @public
           * @static
           * @returns {String}
           */
          static get developmentHost() {
            return "events-stage.aws.barchart.com";
          }
          /**
           * The host of the staging system.
           *
           * @public
           * @static
           * @returns {String}
           */
          static get stagingHost() {
            return "events-stage.aws.barchart.com";
          }
          /**
           * The host of the production system.
           *
           * @public
           * @static
           * @returns {String}
           */
          static get productionHost() {
            return "events.aws.barchart.com";
          }
          toString() {
            return "[Configuration]";
          }
        }
        return Configuration;
      })();
    }
  });

  // lib/gateway/ReportGateway.js
  var require_ReportGateway = __commonJS({
    "lib/gateway/ReportGateway.js"(exports, module) {
      var assert = require_assert();
      var Disposable = require_Disposable();
      var Enum = require_Enum();
      var EndpointBuilder = require_EndpointBuilder();
      var ErrorInterceptor = require_ErrorInterceptor();
      var Gateway = require_Gateway();
      var ProtocolType = require_ProtocolType();
      var RequestInterceptor = require_RequestInterceptor();
      var ResponseInterceptor = require_ResponseInterceptor();
      var VerbType = require_VerbType();
      var EventJobSchema = require_EventJobSchema();
      var Configuration = require_Configuration();
      module.exports = (() => {
        "use strict";
        class ReportGateway extends Disposable {
          constructor(protocol, host, port, credentials) {
            super();
            assert.argumentIsRequired(protocol, "protocol", String);
            assert.argumentIsRequired(host, "host", String);
            assert.argumentIsRequired(port, "port", Number);
            assert.argumentIsRequired(credentials, "credentials", Object);
            assert.argumentIsRequired(credentials.username, "credentials.username", String, "String");
            assert.argumentIsRequired(credentials.password, "credentials.password", String, "String");
            this._started = false;
            this._startPromise = null;
            const protocolType = Enum.fromCode(ProtocolType, protocol.toUpperCase());
            this._startReportEndpoint = EndpointBuilder.for("start-report", "start report").withVerb(VerbType.POST).withProtocol(protocolType).withHost(host).withPort(port).withPathBuilder((pb) => {
              pb.withLiteralParameter("reports", "reports");
            }).withBody("filter and output").withBasicAuthentication(credentials.username, credentials.password).withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE).withResponseInterceptor(responseInterceptorForReportStartDeserialization).withErrorInterceptor(ErrorInterceptor.GENERAL).endpoint;
            this._getReportAvailabilityEndpoint = EndpointBuilder.for("get-report-availability", "get report availability").withVerb(VerbType.GET).withProtocol(protocolType).withHost(host).withPort(port).withPathBuilder((pb) => {
              pb.withLiteralParameter("reports", "reports").withVariableParameter("source", "source", "source", false).withLiteralParameter("availability", "availability");
            }).withBasicAuthentication(credentials.username, credentials.password).withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE).withResponseInterceptor(responseInterceptorForReportAvailabilityDeserialization).withErrorInterceptor(ErrorInterceptor.GENERAL).endpoint;
            this._getReportEndpoint = EndpointBuilder.for("get-report", "get report").withVerb(VerbType.GET).withProtocol(protocolType).withHost(host).withPort(port).withPathBuilder((pb) => {
              pb.withLiteralParameter("reports", "reports").withVariableParameter("source", "source", "source", false);
            }).withBasicAuthentication(credentials.username, credentials.password).withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE).withResponseInterceptor(responseInterceptorForGetReport).withErrorInterceptor(ErrorInterceptor.GENERAL).endpoint;
            this._checkAuthenticationEndpoint = EndpointBuilder.for("check-authentication", "get user authentication").withVerb(VerbType.GET).withProtocol(protocolType).withHost(host).withPort(port).withPathBuilder((pb) => {
              pb.withLiteralParameter("service", "service").withLiteralParameter("authenticate", "authenticate");
            }).withBasicAuthentication(credentials.username, credentials.password).withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE).withResponseInterceptor(responseInterceptorForCheckAuthentication).withErrorInterceptor(ErrorInterceptor.GENERAL).endpoint;
            this._getVersion = EndpointBuilder.for("get-service-version", "get service version").withVerb(VerbType.GET).withProtocol(protocolType).withHost(host).withPort(port).withPathBuilder((pb) => {
              pb.withLiteralParameter("system", "system").withLiteralParameter("version", "version");
            }).withRequestInterceptor(RequestInterceptor.PLAIN_TEXT_RESPONSE).withResponseInterceptor(responseInterceptorForGetVersion).withErrorInterceptor(ErrorInterceptor.GENERAL).endpoint;
          }
          /**
           * Initializes the connection to the remote server and returns a promise
           * containing the current instance.
           *
           * @public
           * @returns {Promise<ReportGateway>}
           */
          async start() {
            if (this._startPromise === null) {
              try {
                this._startPromise = (async () => {
                  this._started = true;
                  return this;
                })();
              } catch (e) {
                this._startPromise = null;
                throw e;
              }
            }
            return this._startPromise;
          }
          /**
           * Starts a report.
           *
           * @public
           * @async
           * @param {Schema.ReportFilter} filter
           * @param {Schema.ReportOutputConfig} output
           * @returns {Promise<Schema.ReportStatus>}
           */
          async startReport(filter, output) {
            checkStart.call(this);
            assert.argumentIsRequired(filter, "filter", Object);
            assert.argumentIsOptional(output, "output", Object);
            return await Gateway.invoke(this._startReportEndpoint, EventJobSchema.START.schema.format({ filter, output }));
          }
          /**
           * Returns data regarding the status of a report (i.e. running, finished, etc).
           *
           * @public
           * @async
           * @param {String} source - The "source" identifier for the report.
           * @return {Promise<Schema.ReportStatus>}
           */
          async getReportAvailability(source) {
            checkStart.call(this);
            assert.argumentIsRequired(source, "source", String);
            return await Gateway.invoke(this._getReportAvailabilityEndpoint, { source });
          }
          /**
           * Assuming the report has completed, gets a link which can be used to
           * download the actual report in CSV format.
           *
           * @public
           * @async
           * @param {String} source - The "source" identifier for the report.
           * @return {Promise<ReportDownloadLink>}
           */
          async getReport(source) {
            checkStart.call(this);
            assert.argumentIsRequired(source, "source", String);
            return await Gateway.invoke(this._getReportEndpoint, { source });
          }
          /**
           * Authenticates the current user and returns information regarding the current
           * user and metadata regarding the remote service.
           *
           * @public
           * @async
           * @return {Promise<AuthenticationMetadata>}
           */
          async checkAuthentication() {
            checkStart.call(this);
            return await Gateway.invoke(this._checkAuthenticationEndpoint, {});
          }
          /**
           * Returns metadata regarding the remote service.
           *
           * @public
           * @async
           * @return {Promise<ServiceMetadata>}
           */
          async getVersion() {
            checkStart.call(this);
            return await Gateway.invoke(this._getVersionEndpoint, {});
          }
          /**
           * Creates and starts a new {@link ReportGateway} for an environment.
           *
           * @public
           * @static
           * @async
           * @param {String} stage
           * @param {Schema.ReportCredentials} credentials
           * @returns {Promise<ReportGateway|null>}
           */
          static async for(stage, credentials) {
            if (stage === "staging") {
              return await ReportGateway.forStaging(credentials);
            } else if (stage === "production") {
              return await ReportGateway.forProduction(credentials);
            } else {
              return null;
            }
          }
          /**
           * Creates and starts a new {@link ReportGateway} for the staging environment.
           *
           * @public
           * @static
           * async
           * @param {Schema.ReportCredentials} credentials
           * @returns {Promise<ReportGateway>}
           */
          static async forStaging(credentials) {
            return await start(new ReportGateway("https", Configuration.stagingHost, 443, credentials));
          }
          /**
           * Creates and starts a new {@link ReportGateway} for the production environment.
           *
           * @public
           * @static
           * @async
           * @param {Schema.ReportCredentials} credentials
           * @returns {Promise<ReportGateway>}
           */
          static async forProduction(credentials) {
            return await start(new ReportGateway("https", Configuration.productionHost, 443, credentials));
          }
          toString() {
            return "[ReportGateway]";
          }
        }
        const responseInterceptorForReportStartDeserialization = ResponseInterceptor.fromDelegate((response) => {
          try {
            return JSON.parse(response.data, EventJobSchema.PROCESS.schema.getReviver());
          } catch (e) {
            console.log("Error deserializing report (using EventJobSchema.PROCESS schema)", e);
          }
        });
        const responseInterceptorForReportAvailabilityDeserialization = ResponseInterceptor.fromDelegate((response) => {
          try {
            return JSON.parse(response.data, EventJobSchema.PROCESS.schema.getReviver());
          } catch (e) {
            console.log("Error deserializing report availability (using EventJobSchema.PROCESS schema)", e);
          }
        });
        const responseInterceptorForGetReport = ResponseInterceptor.fromDelegate((response) => {
          try {
            return JSON.parse(response.data);
          } catch (e) {
            console.log("Error deserializing report", e);
          }
        });
        const responseInterceptorForCheckAuthentication = ResponseInterceptor.fromDelegate((response) => {
          try {
            return JSON.parse(response.data);
          } catch (e) {
            console.log("Error deserializing report authentication response", e);
          }
        });
        const responseInterceptorForGetVersion = ResponseInterceptor.fromDelegate((response) => {
          try {
            return JSON.parse(response.data);
          } catch (e) {
            console.log("Error deserializing report service version", e);
          }
        });
        async function start(gateway) {
          await gateway.start();
          return gateway;
        }
        function checkStart() {
          if (this.getIsDisposed()) {
            throw new Error("Unable to use gateway, the gateway has been disposed.");
          }
          if (!this._started) {
            throw new Error("Unable to use gateway, the gateway has not started.");
          }
        }
        return ReportGateway;
      })();
    }
  });

  // lib/index.js
  var require_lib = __commonJS({
    "lib/index.js"(exports, module) {
      module.exports = (() => {
        "use strict";
        return {
          version: "5.10.0"
        };
      })();
    }
  });

  // example/browser/js/example.config.js
  var require_example_config = __commonJS({
    "example/browser/js/example.config.js"(exports, module) {
      var Enum = require_Enum();
      var CustomerType = require_CustomerType();
      var EventType = require_EventType();
      var ProductType = require_ProductType();
      var version = require_lib().version;
      module.exports = (() => {
        "use strict";
        return {
          version,
          stages: [
            "staging",
            "production"
          ],
          customers: [
            CustomerType.BARCHART,
            CustomerType.TGAM
          ],
          products: [
            ProductType.PORTFOLIO,
            ProductType.WATCHLIST,
            ProductType.ENTITLEMENTS,
            ProductType.ALERT,
            ProductType.MARKETPLACE,
            ProductType.CMDTYVIEW
          ],
          types: {
            [ProductType.PORTFOLIO.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.PORTFOLIO),
            [ProductType.WATCHLIST.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.WATCHLIST),
            [ProductType.ENTITLEMENTS.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.ENTITLEMENTS),
            [ProductType.ALERT.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.ALERT),
            [ProductType.MARKETPLACE.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.MARKETPLACE),
            [ProductType.CMDTYVIEW.code]: Enum.getItems(EventType).filter((eventType) => eventType.product === ProductType.CMDTYVIEW)
          }
        };
      })();
    }
  });

  // example/browser/js/startup.report.vue.js
  var require_startup_report_vue = __commonJS({
    "example/browser/js/startup.report.vue.js"(exports, module) {
      var ReportGateway = require_ReportGateway();
      var CustomerType = require_CustomerType();
      var ProductType = require_ProductType();
      var EventJobStatus = require_EventJobStatus();
      var FailureType = require_FailureType();
      var Config = require_example_config();
      module.exports = (() => {
        "use strict";
        const app = new Vue({
          el: ".wrapper",
          data: {
            selectedCustomer: "",
            selectedProduct: "",
            startTime: "",
            endTime: "",
            username: "",
            password: "",
            showAuth: true,
            stage: "production",
            connecting: false,
            message: "",
            reports: [],
            reportGateway: null,
            config: Config
          },
          methods: {
            connect() {
              if (this.connecting) {
                return;
              }
              if (!this.username || !this.password) {
                alert("Fill all required fields");
                return;
              }
              this.connecting = true;
              return ReportGateway.for(this.stage, { username: this.username, password: this.password }).then((gateway) => {
                return gateway.checkAuthentication().catch((errors) => {
                  const valid = !errors.some((error) => FailureType.fromCode(FailureType, error.value.code) === FailureType.REQUEST_AUTHORIZATION_FAILURE);
                  return valid;
                }).then((valid) => {
                  this.connecting = false;
                  if (valid) {
                    this.reportGateway = gateway;
                    this.showAuth = false;
                  } else {
                    alert("Invalid credentials");
                  }
                });
              });
            },
            disconnect() {
              this.clear();
              this.username = "";
              this.password = "";
              this.reportGateway = null;
              this.showAuth = true;
            },
            start() {
              if (!validateFields.call(this)) {
                this.message = "Fill required fields";
                return;
              }
              this.message = "Sending...";
              const filter = {
                customer: CustomerType.parse(this.selectedCustomer),
                product: ProductType.parse(this.selectedProduct)
              };
              if (this.startTime) {
                filter.start = parseInt(this.startTime);
              }
              if (this.endTime) {
                filter.end = parseInt(this.endTime);
              }
              this.reportGateway.startReport(filter).then((response) => {
                this.reports.push(format(response));
                this.message = response;
              }).catch((err) => {
                this.message = err;
              });
            },
            get(report) {
              if (report.status === EventJobStatus.RUNNING) {
                this.message = "Sending...";
                return this.reportGateway.getReportAvailability(report.source).then((response) => {
                  const index = this.reports.findIndex((r) => r.source === report.source);
                  if (index >= 0) {
                    this.reports[index] = format(response);
                  }
                  this.message = response;
                  if (response.status === EventJobStatus.COMPLETE) {
                    this.get(this.reports[index]);
                  }
                }).catch((err) => {
                  this.message = err;
                });
              } else if (report.status === EventJobStatus.COMPLETE) {
                return this.reportGateway.getReport(report.source).then((response) => {
                  const index = this.reports.findIndex((r) => r.source === report.source);
                  this.reports[index].link = response.link;
                  this.message = `Report [ ${index + 1} ] is ready for download, click link (on left side of screen)`;
                });
              }
            },
            clear() {
              clear.call(this);
            }
          }
        });
        function format(response) {
          return {
            filter: response.filter,
            source: response.source,
            status: response.status
          };
        }
        function clear() {
          this.reports = [];
          this.message = "";
        }
        function validateFields() {
          return !!this.selectedCustomer && !!this.selectedProduct;
        }
      })();
    }
  });
  require_startup_report_vue();
})();
/*! Bundled license information:

axios/dist/browser/axios.cjs:
  (*! Axios v1.18.1 Copyright (c) 2026 Matt Zabriskie and contributors *)
*/
