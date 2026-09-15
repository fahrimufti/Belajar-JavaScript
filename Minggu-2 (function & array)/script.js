// H-1

// soal A 
// function sapa(nama){
//     return "Halo, " + nama + "!";
// }
// console.log(sapa("Bran"));

// =========================================================

// function perkenalan(nama, jurusan){
//     return "Halo, nama saya " + nama + ". Saya memilih program studi " + jurusan + ".";
// }
// console.log(perkenalan("Bran", "Informatika"));

// // soal B
// function hitungDamage(damage, bonus){
//     return damage + bonus;
// }
// console.log(hitungDamage(50, 20));

// =========================================================

// function damageDiterima(damage, efek){
//     return "kamu menerima damage sebesar " + damage + efek;
// }
// console.log(damageDiterima(20, " dan terkena efek slow selama 10 detik"));

// // soal C
// const kali = (a, b) => {
//     return a * b;
// };

// console.log(kali(5, 5));

// =========================================================

// const bagi = (a, b) => {
//     return a / b;
// };
// console.log(bagi(10, 2));


// Array + Arrow Function (forEach(), map())
// const senjata = ["pistol", "shotgun", "sniper"]
// senjata.forEach((senjataItem)=> {
//     console.log(senjataItem + " Siap digunakan!")
// });

// const inventory = ["potion", "axe", "picaxe"]
// inventory.forEach((inventoryItem) => {
//     console.log(inventoryItem + " sudah dibawa")
// });

// =========================================================

// const harga = [10000, 15000, 20000];
// const hargaBaru = harga.map((hargaItem) =>{
//     return hargaItem + 5000;
// });

// console.log(hargaBaru);

// const potongan = [15000, 20000, 25000];
// const potonganHarga = potongan.map((diskon)=>{
//     return diskon - 5000
// })
// console.log("anda mendapat potongan sebesar 5K! " + potonganHarga)


// =========================================================

// ================================ H-2 ================================

// soal A
// const angka = [5, 12, 8, 20, 3, 15];
// const angkaLevel = angka.filter((angkaItem) =>{
//     return angkaItem >= 10;
// });
// console.log(angkaLevel);

// soal B
// const inventory = [
//     "potion",
//     "sword",
//     "potion",
//     "shield",
//     "potion"
// ];
// const spell = inventory.filter((item) =>{
//     return item === "potion"
// });
// console.log(spell)

// soal C (filter & find)
// const players = [
//     {nama: "Bran", level: 15},
//     {nama: "Budi", level: 8},
//     {nama: "Andi", level: 20},
//     {nama: "Rizky", level: 5}
// ]

// const playerV = players.filter((lv) =>{
    //^^ ini adalah parameter
//     return lv.level >= 10;
// });
// console.log(playerV);

// find
// const player = players.find((playerr) => {
//     return playerr.level >=10;
// })
// console.log(player);


// ================================ Object (lebih dalam) ================================


// const plaayer = {
//     nama : "Bran",
//     level : 20,
//     gold : 1500
// };
// const key = Object.keys(plaayer);
// const value = Object.values(plaayer);
// const entry = Object.entries(plaayer);


// // console.log(key);
// // console.log(value);
// // console.log(entry);


// for(const keys of key){
//     console.log(keys)
// };

// for(const values of value){
//     console.log(values)
// };

// for(const entries of Object.entries(plaayer)){
//     console.log(entries)
// };

// LATIHAN
const itemm = {
    nama: "Sword",
    damage: 50,
    rarity: "Rare"
};
const entrie = Object.entries(itemm);
for(const entries of entrie){
    console.log(entries)
};
for(const [key,value] of Object.entries(itemm)){
    console.log(key,value)
};

const key = Object.keys(itemm);
const value = Object.values(itemm);   

console.log(key);
console.log(value);
console.log(entrie);


