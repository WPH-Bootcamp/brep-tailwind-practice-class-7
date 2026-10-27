let umur = 16;

if (umur >= 18) {
  console.log('Sudah bisa bikin SIM');
} else if (umur == 17) {
  console.log('Sudah bisa daftar SIM');
} else {
  console.log('Belum boleh bikin SIM');
}

let nilai = 100;
let predikat = '';

if (nilai >= 90 && nilai <= 100) {
  predikat = 'A';
} else if (nilai >= 80 && nilai < 90) {
  predikat = 'B';
} else if (nilai >= 70 && nilai < 80) {
  predikat = 'B+';
} else if (nilai >= 0 && nilai < 70) {
  predikat = 'C';
} else {
  console.log('Nilai tidak valid');
}
console.log(`Nilai : ${nilai} dengan Predikat : ${predikat}`);

// Operator Ternary
let sudahMakan = false;
// <kondisi> ? "ekspresi benar" : "ekspresi salah"
sudahMakan ? console.log('sudah makan') : console.log('belum makan');
