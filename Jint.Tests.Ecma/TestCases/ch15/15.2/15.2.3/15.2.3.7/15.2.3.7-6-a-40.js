/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-40.js
 * @description Object.defineProperties - 'P' is accessor descriptor and every fields in 'desc' is the same with 'P' (8.12.9 step 6)
 */


function testcase() {

        var obj = {};

        function get_func() {
            return 0;
        }
        function set_func(value) {
            obj.setVerifyHelpProp = value;
        }
        var desc = {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        };

        Object.defineProperty(obj, "foo", desc);

        Object.defineProperties(obj, {
            foo: {
                get: get_func,
                set: set_func,
                enumerable: true,
                configurable: true
            }
        });
        return accessorPropertyAttributesAreCorrect(obj, "foo", get_func, set_func, "setVerifyHelpProp", true, true);

    }
runTestCase(testcase);
