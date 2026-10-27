// Operator Logika
/**
 * -. AND (&&) -> Seluruh kondisi wajib true, maka hasilnya true
 * -. OR (||) -> Salah satu saja kondisi true, maka hasilnya true
 * -. NOT (!) -> Kebalikkan nilai
 */

let sudahMakan = true;
let sudahCuciPiring = false;

console.log(sudahCuciPiring && sudahMakan);
console.log(sudahCuciPiring || sudahMakan);
console.log(!sudahMakan);

/**
## AND (&&)
a && b

```
✔ jika a true → ambil b
✔ jika a false → stop di a
```

---

## OR (||)
a||b

```
✔ jika a false → ambil b
✔ jika a true → ambil a
```
*/

console.log(true && console.log('Halo dunia'));
console.log(0 && 1);
console.log(0 || false);
console.log(true && 0 && 'hello dunia');
console.log(true || 0 || 'hello dunia');
