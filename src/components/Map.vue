<template>
  <div>
    <div style="height: 10%; overflow: auto;"></div>
    <l-map :zoom="zoom" ref="mappa" :center="center" style="height:100vh;">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="item in objects" v-bind:key="item.title" :lat-lng="item.coordinate">
        <l-popup>
          <p>Indirizzo: {{item.indirizzo}}</p>
          <p>Orario: {{item.orario}}</p>
          <p>{{item.tipo}}</p>
        </l-popup>
      </l-marker>
    </l-map>
    <button @click="setCenterMap(43,11)"></button>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 15,
      center: L.latLng(43.77543, 11.248576),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: [43.77543, 11.248576],
      content: "Ciao",
      objects: [
        {
          indirizzo: "via di prova1",
          orario: "lun-ve 8:00-18:00",
          tipo: "Ecotappa",
          coordinate: [43.77543, 11.248576]
        },
        {
          indirizzo: "via di prova2",
          orario: "mar 8:00-18:00",
          tipo: "Ecostazione",
          coordinate: [43.8, 11.248576]
        }
      ]
    };
  },
  methods: {
    showInfoMappa() {
      let mappa = this.$refs.mappa;
    },
    setCenterMap(la, lo) {
      this.center = L.latLng(la, lo);
    },
    setZoomMap(lv) {
      this.zoom = lv;
    }
  }
};
</script>