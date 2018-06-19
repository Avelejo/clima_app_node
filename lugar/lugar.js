const axios = require('axios');



const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCppbdQ6KtS6DPJAC8v75HqxKtMXjrN3yo`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }






    let location = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;



    //console.log(JSON.stringify(resp.data, undefined, 2));



    return {
        direccion: location,
        lat: coors.lat,
        lng: coors.lng
    };
}


module.exports = {
    getLugarLatLng
}