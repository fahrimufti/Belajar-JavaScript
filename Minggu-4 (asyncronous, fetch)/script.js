// API & JSON
// penjelasan: API (Application Programming Interface) adalah sebuah antarmuka yang memungkinkan aplikasi untuk berkomunikasi dengan aplikasi lain. atau aturan yang digunakan "pelanggan" dan "dapur" untuk saling berkomunikasi. API dapat digunakan untuk mengakses data dari server, mengirim data ke server, atau melakukan operasi tertentu di server. API biasanya menggunakan protokol HTTP dan format data JSON.

// JSON (JavaScript Object Notation) adalah format data yang digunakan untuk pertukaran data antara server dan client. JSON mudah dibaca dan ditulis oleh manusia, serta mudah diurai dan dihasilkan oleh mesin.

// await adalah sebuah keyword yang digunakan untuk menunggu Promise selesai dan mendapatkan hasilnya. Await hanya bisa digunakan di dalam fungsi async. Ketika kita menggunakan await, eksekusi kode akan berhenti sementara sampai Promise selesai, sehingga kita bisa mendapatkan hasilnya langsung tanpa harus menggunakan then().

// promise adalah sebuah objek yang merepresentasikan hasil dari operasi asynchronous. Promise memiliki tiga state: pending (sedang menunggu), fulfilled (berhasil), dan rejected (gagal). Promise memiliki dua method utama: then() untuk menangani hasil yang berhasil, dan catch() untuk menangani hasil yang gagal. Promise juga bisa digunakan dengan async/await untuk membuat kode lebih mudah dibaca dan ditulis.

// response adalah data yang berisi infotmasi tentang hasil permintaan kita, termasuk isi/body yang dikirim oleh server.

// response
//    │
//    └── json() → data
//                   │
//                   ├── nama
//                   ├── harga
//                   └── tersedia


// fetch adalah sebuah fungsi bawaan JavaScript yang digunakan untuk melakukan permintaan HTTP ke server dan mendapatkan responsenya. Fetch menggunakan Promise, sehingga kita bisa menggunakan then() dan catch() untuk menangani hasilnya.


// asynchronous
// console.log("A")
// setTimeout(() => {
//     console.log("B")
// }, 100)
// console.log("C")

// synchronous
// console.log("D")
// console.log("E")
// console.log("F")

// promise
// resolve = berhasil
const pesan = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Pizza sudah siap disantap")
    }, 3000)
})
console.log("pizza sedang dibuat....")
pesan.then((hasil)=>{
    console.log(hasil)
})

// reject = gagal
const janji2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Pizza sudah habis")
    }, 3000)
})
janji2.catch((hasil)=>{
    console.log(hasil)
})

// then chaining
const janji3 = Promise.resolve("A")
janji3
    .then((hasil)=>{
        console.log(hasil)
        return "Aku belajar Javascript"
    })
// setelah then pertama selesai (menadpatkan hasil), maka hasil dari then pertama akan dikirim ke then selanjutnya
    .then((hasil)=>{
        console.log(hasil)
    })

// async await
async function sapa(){
    return "Halo Brannn"
}
sapa().then((Hasil)=>{
    console.log(Hasil)
})

// =====
function ambilData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Data berhasil didapat!")
        }, 3000)
    })
}
async function jalankan(){
    const hasil = await ambilData()  // menunggu ambilData() selesai, baru hasilnya dikirim ke variabel hasil
    console.log(hasil)
}
jalankan()  

// =====
async function jalan(){
    console.log("A")
    const hasil = await ambilData() 
    console.log(hasil)
    console.log("C")
}
jalan()

// =====
function ambilNama(){
    return Promise.resolve("Brannn") // langsung resolve tanpa menunggu
}
async function tampilkanNama(){ // async function harus menggunakan await untuk menunggu ambilNama() selesai
    const nama = await ambilNama() // menunggu ambilNama() selesai, baru hasilnya dikirim ke variabel nama
    console.log(nama)
}
tampilkanNama()

// ====
function ambilData2(){
    return Promise.resolve(10)
}
function prosesData(data){
    return Promise.resolve(data * 2)
}

async function jalankan2(){
    const data1 = await ambilData2()
    const hasilAkhir = await prosesData(data1)
    console.log(hasilAkhir)
}
jalankan2()



// forEach, map, & filter pada API
async function ambilData3(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos") // menunggu fetch selesai, baru hasilnya dikirim ke variabel response
    const data = await response.json()

    data.forEach((item) =>{
        console.log(item)
    }) 
    
    const selesai = data.filter((item) =>{
        return item.completed === true
    })
    console.log(selesai)

    const judulSelesai = selesai.map((item) =>{
        return item.title
    })
    console.log(judulSelesai)

}
ambilData3()

// latihan API
async function ambilData4() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()

    const dataSelesai = data.filter((item) =>{
        return item.completed === true
    })
    console.log(dataSelesai)

    const judulSelesai = dataSelesai.map((item) =>{
        return item.title
    })
    console.log(judulSelesai)
}
ambilData4()

// DOM Manipulation pada API
const list = document.querySelector("#todoList")
async function ambilData5() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()

    const dataSelesai = data.filter((item) =>{
        return item.completed === true
    })


    dataSelesai.forEach((item) =>{
        const Item = document.createElement("li")
        Item.textContent = item.title
        list.append(Item)
    })
}
ambilData5()

