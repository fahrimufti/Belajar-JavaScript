const token = ~~[Math.random()* 12345678]
const pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];


function login(username, callback) {
    console.log('processing data... memvalidasi data!')
    setTimeout(() => {
        callback({username, token})
    }, 3000)
}
function getUser(token) {
    if (token) return {apiKey: "xkey123"}
}

function getPictures(){
    if (apiKey) return pictures
}

login("Brannn", function(response){
    console.log('data berhasil di proses!', response)
})