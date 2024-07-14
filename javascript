javascript:
implicit type coercison
Arithematic operation:
(+)
1) if both operands are strings string oncatenation happens
2) if any one operand is string the other operand wil be tried to be converted to string and string conacatenation happends
    1) if number =>string, boolen=>string, null =>string, undefined ->string
     2) if object 
        1) if obejct has valueOf method it will be coerced to return value of valueOf methid
         2) else toStrng method will be aplied on object
all other aithematic operations("-","*","/","%)
1)if both the operands are numbers arithemtic operaions takes place wothout any tye coercison
2) if any on oerand is not number , if posible converetd to nuber or esle will be a NAN
    1) string 
         "1223"=>123
          "abc"=>NaN
     2) Boolean
        true =>1
         false =>0
     3) null => 0, undefined => NaN
     4) Object  
     if has valueOf method for that obejct the retrun valueOf will be coerced else it will be NaN
Logical operator
Logical Operators (&&, ||, !)

Logical AND (&&):

Returns the first falsy value or the last value if none are falsy.
No type coercion to boolean for the return value.

console.log(1 && 0); // 0
console.log(1 && 2); // 2
console.log('' && 'hello'); // ""
console.log('hello' && 'world'); // "world"
Logical OR (||):

Returns the first truthy value or the last value if none are truthy.

console.log(0 || 1); // 1
console.log('' || 'hello'); // "hello"
console.log(null || 0 || 'hello'); // "hello"
Logical NOT (!):

Converts the operand to a boolean and negates it.

console.log(!0); // true
console.log(!1); // false
console.log(!''); // true
console.log(!'hello'); // false

Relation operaotr:
1) tries to convert operands to number and perfoems to opertaion if not possible coverts to NaN
2) if both values are string the relational operation happens based onn lexographical order

If both operands are strings, they are compared lexicographically.
console.log('2' < '10'); // false
console.log('apple' > 'banana'); // false
If one operand is not a string, both are coerced to numbers.

console.log('2' < 10); // true
console.log(true <= 1); // true (true is coerced to 1)
console.log('5' > 3); // true

Unary Plus (+) and Minus (-)

Unary Plus (+):
Converts the operand to a number.

console.log(+ '5'); // 5
console.log(+ true); // 1
console.log(+ false); // 0
console.log(+ null); // 0
console.log(+ undefined); // NaN
console.log(+ 'hello'); // NaN

Unary Minus (-):
Converts the operand to a number and negates it.
console.log(- '5'); // -5
console.log(- true); // -1
console.log(- false); // -0
console.log(- null); // -0
console.log(- undefined); // NaN
console.log(- 'hello'); // NaN


eaqulaity operaot:
for (2== "str") string will be converted to numbner not possible NaN

Equality Operators:

Type coercion rules for ==:
Number and String: String is coerced to a number.
console.log(5 == '5'); // true

Boolean and Number/String: Boolean is coerced to a number.
console.log(true == 1); // true
console.log(false == '0'); // true

Null and Undefined: null and undefined are only equal to each other.
console.log(null == undefined); // true
console.log(null == 0); // false

Object and Primitive: Object is coerced to a primitive using ToPrimitive.
let obj = { valueOf: () => 42 };
console.log(obj == 42); // true
     
