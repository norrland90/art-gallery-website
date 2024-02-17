// Map

const map = L.map('map', {
  center: [41.48242514020146, -71.31042606285652],
  zoom: 14,
  zoomControl: false,
});

const locationIcon = L.icon({
  iconUrl: 'assets/images/icon-location.svg',
});

L.tileLayer
  .provider('Jawg.Streets', {
    variant: 'jawg-light',
    accessToken:
      'N8aeJfESnD01rYqByeyv6rRqYLOTTkM8vLIYRsmcaJPFaF3n8zybSXcdVTZYrOOw',
  })
  .addTo(map);

const marker = L.marker([41.48242514020146, -71.31042606285652], {
  icon: locationIcon,
}).addTo(map);
