// 1. Type Conversion (Explicit)
const angka1 = '1';
console.log(typeof angka1);
console.log(typeof Number(angka1));

console.log(typeof String(100));

console.log(Boolean(0));

/**
 * Catatan :
 * 1. Falsy :
 * false
 * 0
 * ""
 * null
 * undefined
 * NaN
 *
 * 2. Truthy :
 * "harus ada isinya"
 * "false"
 * []
 * {}
 * console.log()
 */

// 2. Implicit Coercion
console.log(1 + '1'); // Yang bekerja adalah bukan operator assignment namun operator concatenation (cara javascript menggabungkan 2 string atau lebih)
console.log(2 * '5');
console.log(2 - '5');
console.log(2 / '5');

console.log(true + 2);

/**
 * Catatan :
 * 1. Loose Equality (==) -> hanya membandingkan nilainya saja
 * 2. Strict Equality (===) -> membandingkan nilainya dan tipe data
 */

console.log(1 == '1');
console.log(1 === '1');
