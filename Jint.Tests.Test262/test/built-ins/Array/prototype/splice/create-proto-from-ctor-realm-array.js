// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.25
esid: sec-array.prototype.splice
description: Prefer Array constructor of current realm record
info: |
    1. Let O be ? ToObject(this value).
    [...]
    9. Let A be ? ArraySpeciesCreate(O, actualDeleteCount).
    [...]

    9.4.2.3 ArraySpeciesCreate

    [...]
    5. Let C be ? Get(originalArray, "constructor").
    6. If IsConstructor(C) is true, then
       a. Let thisRealm be the current Realm Record.
       b. Let realmC be ? GetFunctionRealm(C).
       c. If thisRealm and realmC are not the same Realm Record, then
          i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, let C
             be undefined.
    [...]
features: [cross-realm, Symbol.species]
---*/

var array = [];
var callCount = 0;
var OArray = $262.createRealm().global.Array;
var speciesDesc = {
  get: function() {
    callCount += 1;
  }
};
var result;
array.constructor = OArray;

Object.defineProperty(Array, Symbol.species, speciesDesc);
Object.defineProperty(OArray, Symbol.species, speciesDesc);

result = array.splice();

assert.sameValue(Object.getPrototypeOf(result), Array.prototype);
assert.sameValue(callCount, 0, 'Species constructor is not referenced');
