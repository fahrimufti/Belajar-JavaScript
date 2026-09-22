// ====== VERSI SEDERHANA (Mudah Dipahami) ======
function totalGaji(namaKaryawan, gajiPerhari, jumlahHariMasuk){
  const totalGaji = gajiPerhari * jumlahHariMasuk;
  return `Nama: ${namaKaryawan}, Total Gaji: Rp${totalGaji}`
}

console.log(totalGaji('fahri', 250000, 20));
console.log(totalGaji('indra', 100000, 20));

function luasSegitiga(alas,tinggi){
  const luas = (alas * tinggi) / 2;
  return `LuasSegitiga: ${luas}`;
}

console.log(luasSegitiga(10, 15));

console.log('hai anjing')


// ====== VERSI LENGKAP (Dengan Dokumentasi & Format Rupiah) ======

/**
 * Menghitung total gaji karyawan dalam satu bulan
 * @param {string} namaKaryawan - Nama lengkap karyawan
 * @param {number} gajiPerHari - Gaji yang diterima per hari
 * @param {number} jumlahHariMasuk - Jumlah hari masuk kerja dalam sebulan
 * @returns {string} - Informasi nama dan total gaji
 */
function hitungGajiLengkap(namaKaryawan, gajiPerHari, jumlahHariMasuk) {
  const totalGaji = gajiPerHari * jumlahHariMasuk;
  return `Nama: ${namaKaryawan}, Total Gaji: Rp ${totalGaji.toLocaleString("id-ID")}`;
}
console.log(hitungGajiLengkap('lukman', 200000, 20));

// Contoh pakai:
// console.log( hitungGajiLengkap("Budi", 150000, 20) );
// Output: Nama: Budi, Total Gaji: Rp 3.000.000
