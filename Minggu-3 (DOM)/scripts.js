const body = document.body

// EVENT (CLICK)
// soal A
// const sapa = document.querySelector("#sapa");
// sapa.textContent = "hai Bran, selamat datang di pembelajaran DOM"

// soal B
// const teks = document.querySelectorAll(".teks");
// console.log(teks);
// console.log(teks[0]);
// console.log(teks[0].textContent = "Ternyata belajar DOM bikin gila");

// soal C
// const ulang = document.querySelectorAll('.teks')
// for(const ngulang of ulang){
//     ngulang.textContent = "Ternyata belajar DOM itu seru"
// }

// const tombol = document.querySelector("#tombol");
// const tambah = document.querySelector("#tambah")
// const kurang = document.querySelector("#kurang")
// const jumlah = document.querySelector("#counter")
// let jumlahklik = 0;
// const pesan = document.querySelector("#pesan");

// tambah.addEventListener("click", ()=>{
//     pesan.textContent = "Tombol sudah diclick dan menghasilkan aksi"
//     jumlahklik++
//     jumlah.textContent = "jumlah: " + jumlahklik
// })

// kurang.addEventListener("click", ()=>{
//     if(jumlahklik > 0){
//         jumlahklik--
//     }
//     jumlah.textContent = "jumlah: " + jumlahklik
// })

// tombol.addEventListener("click",()=>{

//     jumlahklik++
//     jumlahKlik.textContent = "Jumlah Klik: " + jumlahklik
// })


// EVENT (INPUT)
const nama = document.querySelector("#nama");
const sapaan = document.querySelector("#sapaan");

nama.addEventListener("input",()=> {
    sapaan.textContent = "Halo, " + nama.value + "!"
});

// EVENT (SUBMIT)
const form = document.querySelector("#formNama")
const namaa = document.querySelector("#namaa")
// const hasil = document.querySelector("#hasil")
const daftarH = document.querySelector("#daftar")


form.addEventListener("submit",(eventt) => {
    eventt.preventDefault();
    const p1 = document.createElement('p')
    const hapus = document.createElement("button")
    hapus.textContent = "Hapus"
    p1.textContent = namaa.value + ""
    p1.append(hapus)
    namaa.value = ""
    daftarH.append(p1)
    hapus.addEventListener("click",()=>{
        p1.remove()
    })
});


// create element
// const buat = document.querySelector("#buat")
// const daftar = document.querySelector("#daftar")

// buat.addEventListener("click", ()=>{
//     p1.textContent = "Aku dibuat menggunakan Javascript";
//     body.append(p1)
//     console.log(p1)
//     // document.body.append(p1)
// });

// const p = document.createElement("p")
// p.textContent = "haloo"
// body.append(p)

// Hapus Elemen
const daftarr = document.querySelector("#daftarr")
const item = document.createElement("p")
const tombolHapus = document.createElement("button")

item.textContent = "Belajar Javascript"
tombolHapus.textContent = "Hapus"

item.append(tombolHapus)
daftarr.append(item)

tombolHapus.addEventListener("click", ()=>{
    item.remove()
});

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
    const teks = Input.value.trim()
    Hapuss.textContent = "Hapus"
    Item.style.marginTop = "10px"
    Item.textContent = teks
    Item.append(Hapuss)
    Input.value = ""
    List.append(Item)
    Hapuss.addEventListener("click", ()=>{
        Item.remove()
    })
})
// Input masih menerima input kosong, jadi perlu ditambahkan validasi agar tidak bisa menambahkan item kosong ke dalam daftar.