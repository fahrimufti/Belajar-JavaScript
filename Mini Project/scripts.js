// mini Project Minggu 1
// level 1
const angka1 = 10;
const angka2 = 5;
const operator = "+";
// hitung menggunakan operator

if(operator === "+"){
    console.log(angka1 + angka2);
}else {
    console.log(angka1 - angka2)
};

// level 2
let angka3 = 18;
// genap ganjil 

if(angka3 % 2 === 0){
    console.log("bilangan genap")
}else if(angka3 % 2 !== 0){
    console.log("bilangan ganjil")
};


// level 3
let nilai = 55;
// beri nilai A B C D 
if(nilai >= 85){
    console.log("nilai A")
}else if(nilai >=70){
    console.log("nilai B")
}else if(nilai >=50){
    console.log("nilai C")
}else{
    console.log("nilai D")
}


// level 4
const inventory = ["potion", "sword", "potion", "shield"];
// hitung jumlah potion dan item lain
let jumlahPotion = 0
let jumlahItemlain = 0

for(const item of inventory){
    if(item === "potion"){
        jumlahPotion++;
    } else if(item !== "potion"){
        jumlahItemlain++;
    }
}; 

console.log("jumlah potion :" + jumlahPotion)
console.log("jumlah item lain :" + jumlahItemlain)

const player = [
    {nama : "Bran", level: 15},
    {nama : "Budi", level : 8},
    {nama : "Andi", level : 20},
    {nama : "Rizky",level : 5}
]
// saring menggunakan for of >= 10
for(const p of player){
    if(p.level >= 10){
        console.log( "selamat "+ p.nama +" anda boleh masuk dungeon")
    }
}

// Mini Project Minggu 2
// Mini Project Minggu 3
// Mini Project Minggu 4