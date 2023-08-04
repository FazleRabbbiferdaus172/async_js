function whereAmI(lat, lng){
    let x;
    fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=809769886241866428498x37494`)
    .then((res) => res.json())
    .then((dataGeo) => {
        console.log(dataGeo);
        return fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((err) => err);
}
whereAmI(51.50354,-0.12768);