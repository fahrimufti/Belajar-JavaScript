const BASE_URL_API = "https://api.deaidea.io"

const lapangan = document.querySelector("#lapangan")
const bookingList = document.querySelector("#booking-list")

const option = document.createElement("option")

lapangan.appendChild(option)

async function loadBooking (){
    const urlAPI = BASE_URL_API + '/bookings'
    const response = await fetch(urlAPI)
    const result = await response.json()
    console.log(result.data)
    renderBooking(result.data)
}

function renderBooking(dataList){
    dataList.forEach(data =>{
        const tableRow = document.createElement("tr")
        tableRow.innerHTML = `
        <td>${data.court_id}</td>
        <td>${data.customer_name}</td>
        <td>${data.booking_date}</td>
        <td>${data.start_time}</td>
        <td>${data.duration_hours} jam</td>
        `
        bookingList.appendChild(tableRow)
    })
}

async function loadLapangan(){
    const urlAPI = BASE_URL_API + '/courts'
    const response = await fetch(urlAPI)
    const result = await response.json()
    renderLapangan(result.data)
}

function renderLapangan(courts){
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
    loadBooking()
}
init()

