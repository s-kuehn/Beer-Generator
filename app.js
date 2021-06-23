document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.punkapi.com/v2/beers/random').then(response => {
        return response.json();
    }).then(data => {
        const name = data[0].name;
        const description = data[0].description;
        const {volume} = data[0];
        const volumeValue = volume.value;
        const volumeUnit = volume.unit;
        console.log(volumeValue);
        console.log(volumeUnit);
    })
});