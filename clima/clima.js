const axios = require('axios');


const getClima = async(lat, lng) => {



    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=de945607d6dbee5f81d1253d0c933fc1`)


    return resp.data.main.temp


}

module.exports = {
    getClima
}