<template>
  <section class="container section">
    <div>
      <h1>Map of Charity Organizations</h1>
      <p>In Berlin there are various organizations helping people. You can support them by:</p>
      <ul>
        <li>Giving food</li>
        <li>Sorting stocks</li>
        <li>Transfering money</li>
        <li>Volunteering</li>
      </ul>
    </div>
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 80%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker v-for="marker in markers" :key="marker.name" :lat-lng="marker.location">
            <l-tooltip :options="{ permanent: true, interactive: true }">
              <a :href="marker.link" target="_blank">
                {{ marker.name }}
              </a>
            </l-tooltip>
          </l-marker>
        </l-map>
      </client-only>
    </div>
  </section>
</template>

<script>
import { latLng } from 'leaflet'

export default {
  name: 'Map',

  data() {
    return {
      zoom: 12,
      center: latLng(52.520008, 13.404954),
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(52.520008, 13.404954),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      markers: [
        {
          name: 'Berliner Tafel',
          link: 'https://www.berliner-tafel.de/',
          location: latLng(52.5351036, 13.32868510000003),
        },
        {
          name: 'SIRPLUS Rettermarkt Friedrichshain',
          link: 'https://sirplus.de/',
          location: latLng(52.504804, 13.445164900000009),
        },
        {
          name: 'SIRPLUS Rettermarkt Neukölln',
          link: 'https://sirplus.de/',
          location: latLng(52.47884850000001, 13.437235600000008),
        },
        {
          name: 'Berliner Engel für Bedürftige',
          link: 'https://www.berlinerengel.de/',
          location: latLng(52.541468, 13.437853399999995),
        },
        {
          name: 'Berliner Stadtmission',
          link: 'https://www.berliner-stadtmission.de',
          location: latLng(52.5264325, 13.363480500000037),
        },
        {
          name: 'Berliner Obdachlosenhilfe',
          link: 'https://www.berliner-obdachlosenhilfe.de',
          location: latLng(52.54070609999999, 13.360949000000005),
        },
      ],
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    showLongText() {
      this.showParagraph = !this.showParagraph
    },
    innerClick() {
      alert('Click!')
    },
  },
}
</script>
