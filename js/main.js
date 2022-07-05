var map = L.map('mapa').setView([5.305862, -73.815035], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([5.305862,-73.815035]).addTo(map)
    .bindPopup('Estamos ubicados.<br> AQUI.')
    .openPopup();