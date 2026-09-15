// variabel & Object

// tugas 1
const nama = "fahri Mufti";
const umur = 19;
const mahasiswa = true;

console.log(nama);
console.log(umur);
console.log(mahasiswa);

// tugas 2
let uang =  50000;
uang = uang - 18000;

console.log(uang);


const mobil = {
    merk: "Toyota",
    warna: "Putih",
    tahun: 2022,
    listrik: false
};

console.log(mobil.merk);
console.log(mobil.tahun);

mobil.warna = "Hitam";
console.log(mobil.warna);


const player = {
    nama: "Bran",
    level: 1,
    gold: 1000
};

console.log(player.nama);

player.gold += 500;
player.level +=1;

console.log(player);



const nama = "Fahri Mufti";
const umur = 19;
const mahasiswa = true;
const hobi = ["gaming", "ngoding", "belajar hal baru"];
const dataDiri = {
    nama: "Fahri Mufti",
    umur: 19
}

console.log(typeof nama);
console.log(typeof umur);
console.log(typeof mahasiswa);
console.log(typeof hobi);
console.log(typeof dataDiri);

console.log("10" * 2);

const level = 15
const punyaKunci = true

if (level >= 20) {
    console.log("anda bisa masuk ke dungeon");
} else if (level >= 10 && punyaKunci){
    console.log("anda bisa melawan mini boss")
} else {
    console.log("anda tidak bisa masuk ke dungeon");
}

const hari = "senin";

switch (hari) {
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
    case "jumat":
        console.log("hari kerja");
        break;
    
    case "sabtu":
    case "minggu":
        console.log("hari libur");
        break;
    default:
        console.log("hari tidak valid");
    
}

const buah = ["apel", "jeruk", "mangga", "pisang"];

for (let i = 0; i<buah.length; i++) {
    console.log(buah[i]);
}

const angka = [80, 65, 90, 75, 85];

for (let i = 0; i<angka.length; i++){
    if (angka[i] >=70){
    console.log(angka[i] + " Lulus");
    }
}

let angka2 = 1;
while (angka2 < 10){
    console.log(angka2);
    angka2++;
}

const inventory = [
    "potion",
    "sword",
    "potion",
    "shield",
    "potion"
];
let bukanPotion = 0;

for (const item of inventory){
    if (item !== "potion"){
        bukanPotion++;
    }
}
console.log("jumlah item yang bukan potion:" + bukanPotion);

