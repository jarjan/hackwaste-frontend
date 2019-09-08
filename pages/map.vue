<template>
  <section class="section">
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
            <div>
              {{ marker.name }}
            </div>
          </l-tooltip>
        </l-marker>
      </l-map>
    </client-only>
  </section>
</template>

<script>
import { latLng } from 'leaflet'

export default {
  name: 'Map',

  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      markers: [
        {
          name: 'Berliner Tafel e.V.',
          category: 'Food',
          location: latLng(52.5351036, 13.32868510000003),
        },
        {
          name: 'SIRPLUS Rettermarkt Friedrichshain',
          category: 'Food',
          location: latLng(52.504804, 13.445164900000009),
        },
        {
          name: 'SIRPLUS Rettermarkt Neukölln',
          category: 'Food',
          location: latLng(52.47884850000001, 13.437235600000008),
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
