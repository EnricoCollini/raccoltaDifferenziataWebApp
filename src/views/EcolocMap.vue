<template>
  <div>
    <div id="mappa" style=" top:0;position: relative; z-index:1;">
      <Map ref="mappa"></Map>
    </div>
    <div class="ricerca">
      <b-form @submit="onSubmit" inline>
        <b-form-input
          id="input-1"
          v-model="form.address"
          required
          placeholder="address and city : "
          type="text"
          style="max-width:40%;"
        ></b-form-input>
        <span>
          <b-button type="submit" variant="primary">Submit</b-button>
        </span>
      </b-form>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  components: {
    Map
  },
  data() {
    return {
      mymap: null,
      form: {
        address: ""
      },
      lat: "",
      lon: "",
      results: ""
    };
  },
  methods: {
    getCoordinates() {
      let url =
        "https://servicemap.disit.org/WebAppGrafo/api/v1/location/?search=" +
        this.address +
        "maxResults=1";
      this.axios.get(url).then(response => {
        this.results = response.data;
      });
      this.lon = parseInt(this.results.features[0].geometry.coordinates[0]);
      this.lat = parseInt(this.results.features[0].geometry.coordinates[1]);
      console.log(this.lat, this.lon);
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form.address);
      this.getCoordinates();
      this.$refs.mappa.setCenterMap();
    }
  }
};
</script>

<style>
.ricerca {
  position: relative;
  bottom: 95vh;
  right: -60px;
  z-index: +20;
}

@media screen and (max-width: 600px) {
  .ricerca {
    position: relative;
    bottom: 95vh;
    z-index: +25;
  }
}
</style>
