// CHECK POINT BELAJAR DOM
//  Select element (querySelector, getElementById)
//  Create & append element (createElement, append, remove)
//  Ubah konten/style (textContent, innerHTML, classList, style)
//  Event handling (addEventListener — click, submit, input, dll)
//  Event object dasar (event.target, event.preventDefault())


document.title = 'Belajar DOM'
const body = document.body //cara menyimpan <body> didalam html agar mudah diakses

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'MENU'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '10px 20px'
btn1.style.backgroundColor = 'aquamarine'


function clickButton() {
    const text = document.createElement('p')
    text.textContent = 'kami menyediakan berbagai macam menu kopi. mulai dari: '
    const textLi = document.createElement('li')
    textLi.textContent = 'kopi susu, kopi hitam, hingga kopi spesial. silahkan pilih menu yang anda inginkan'
    body.append(text)
    body.append(textLi)
}

function ubahText() {
    btn1.textContent = 'list menu'
    btn1.style.backgroundColor = 'aqua'
}

function balikText() {
    btn1.textContent = defaultText
}

// TUGAS

const defaultText2 = 'ABOUT'
btn2.textContent = defaultText2

btn2.style.border = 'none'
btn2.style.padding = '10px 20px'
btn2.style.backgroundColor = 'tomato'

const text2 = document.createElement('p')
text2.innerHTML = 'kami adalah kedai kopi yang menyediakan berbagai macam menu kopi. mulai dari kopi susu, kopi hitam, hingga kopi spesial. silahkan pilih menu yang anda inginkan'


function ubahText2() {
    btn2.textContent = 'ABOUT US'
    body.append(text2)
    btn2.style.backgroundColor = 'red'
}

function gantiWarna(){
    btn2.textContent = defaultText2
    text2.style.color = 'blue'
    btn2.style.backgroundColor = 'tomato'
}
