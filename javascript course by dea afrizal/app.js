const BASE_URL_API = "https://api.deaidea.io"
console.log(BASE_URL_API)

const lapangan = document.querySelector("#lapangan")
console.log(lapangan)

const option = document.createElement("option")
option.text = "LAPANGAN A"

lapangan.appendChild(option)

async function loadLapangan(){
    const urlAPI = BASE_URL_API + '/courts'
    const response = await fetch(urlAPI)
    console.log({response})
    const result = await response.json()
    console.log(result.data)
    renderLapangan(result.data)
}

function renderLapangan(courts){
    console.log("render lapangan!")

    courts.forEach(court => {
        const option = document.createElement("option")
        option.text = court.name
        option.value = court.id

        lapangan.appendChild(option)
        
        console.log(court.id)
        console.log(court.name)
        console.log(court.surface)
        console.log(court.price_per_hour)
    });
}

function init(){
    loadLapangan()
}
init()