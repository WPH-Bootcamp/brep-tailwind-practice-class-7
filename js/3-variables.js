/**
 * Pattern Variable :
 * variable_declare variable_name = variable_value
 *
 * 1. Variable Declare :
 * -. var -> tidak direkomendasikan
 * -. let -> block scope dan masih dapat diubah nilainya
 * -. const -> block scope namun data tidak dapat diubah
 *
 * 2. Variable Name :
 * -. camelCase : isSmart, isLoginTrue, dll.
 *
 * 3. Variable Value (Data Types):
 * -. string
 * -. number
 * -. boolean
 * -. null
 * -. undefined
 * -. Symbol()
 * -. bigInt
 * -. object
 * -. array
 * -. dll...
 */

let nama = 'Ucup';
console.log(nama);
nama = 'Renday';
console.log(nama);

const phi = Math.PI;
console.log(phi);

console.log(alamat);
var alamat = 'Jl Untung Jawa';
console.log(alamat);
