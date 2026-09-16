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
const menu = [
    {
        nama: "Tiramisu",
        harga: 10000,
        kategori: "Manis"
    },
    {
        nama: "Americano",
        harga: 10000,
        kategori: "Strong"
    },
    {
        nama: "Caramel",
        harga: 10000,
        kategori: "Manis"
    },
    {
        nama: "Gula Aren",
        harga: 10000,
        kategori: "Creamy"
    }
];
// No.1
menu.forEach((menuItem) =>{
    console.log(menuItem.nama + " - " + "Rp" + menuItem.harga)
});
// disini aku menggunakan forEach untuk melakukan sesuatu terhadap masing - masing object yang ada didalam array

// No.2
const menuM = menu.filter((menuManis) =>{
    return menuManis.kategori === "Manis"
});
console.log(menuM);
// filter() disini untuk menyaring kategori manis 

// No.3
const strong = menu.find((pahit) =>{
    return pahit.nama === "Americano"
});
console.log(strong);
// untuk No.3 aku mencari kategori Strong untuk mendapatkan Americano 


// No.4
const menuBaru = menu.map((menuB) =>{
    return {
        nama:menuB.nama,
        harga:menuB.harga + 2000,
        kategori:menuB.kategori
    };  
});
console.log(menuBaru);
// buat No.4 kita mengubah setiap harga yang ada didalam array, makanya membutuhkan .map()


// BOS FIGHT
const menuEnak = menu.filter((item) =>{
    return item.kategori === "Manis" && item.harga <=10000;
});
console.log(menuEnak);


// Mini Project Minggu 3
// ======================= project to do list ========================

const Form = document.querySelector("#todoForm")
const Input = document.querySelector("#todoInput")
const List = document.querySelector("#todoList")

Form.addEventListener("submit", (eventt)=> {
    eventt.preventDefault()
    if(Input.value.trim() === ""){
        return
    }
    const Item = document.createElement("li")
    const Hapuss = document.createElement("button")
    const teks = Input.value.trim() // trim() untuk menghapus spasi di awal dan akhir input
    Hapuss.style.marginLeft = "10px"
    Hapuss.style.backgroundColor = "red"
    Hapuss.style.borderRadius = "5px"
    Hapuss.textContent = "Hapus"
    Item.textContent = teks
    Item.style.marginTop = "10px"
    Item.append(Hapuss)
    Input.value = ""
    List.append(Item)
    Hapuss.addEventListener("click", ()=>{
        Item.remove()
    })
})
// Input masih menerima input kosong, jadi perlu ditambahkan validasi agar tidak bisa menambahkan item kosong ke dalam daftar.


// Mini Project Minggu 4
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const btnQuote = document.querySelector("#btnQuote")

async function ambilQuote(){
    try{
        btnQuote.disabled = true
        btnQuote.textContent = "Loading..."
            const response = await fetch("https://dummyjson.com/quotes/random")
            const data = await response.json()
            quote.textContent = data.quote
            author.textContent = data.author
            btnQuote.disabled = false
            btnQuote.textContent = "Ambil Quote"
        } catch (error){
            console.log(error)
            btnQuote.disabled = false
            btnQuote.textContent = "Ambil Quote"
        }
    } 

btnQuote.addEventListener("click", ()=>{
    ambilQuote()
    
})

