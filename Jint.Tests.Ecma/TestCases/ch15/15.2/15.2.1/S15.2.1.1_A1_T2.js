// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * When the Object(value) is called and the value is null, undefined or not supplied,
 * create and return a new Object object if the object constructor had been called with the same arguments (15.2.2.1)
 *
 * @path ch15/15.2/15.2.1/S15.2.1.1_A1_T2.js
 * @description Creating Object(void 0) and checking its properties
 */

//var y= void 0;

var __obj = Object(void 0);

var n__obj = new Object(void 0);


if (__obj.toString() !== n__obj.toString()){
	$ERROR('#1');	
}

if (__obj.constructor !== n__obj.constructor) {
	$ERROR('#2');
}

if (__obj.prototype !== n__obj.prototype) {
	$ERROR('#3');
}	

if (__obj.toLocaleString() !== n__obj.toLocaleString()) {
	$ERROR('#4');
}

if (typeof __obj !== typeof n__obj) {
	$ERROR('#5');
}

