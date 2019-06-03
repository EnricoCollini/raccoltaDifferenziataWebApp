<template>
  <div>
    <!-- --------------------------- -->
    <!-- ----MAP PAGE CREATION----- -->
    <!-- --------------------------- -->

    <!-- ----MAP SECTION----- -->
    <div id="mappa" style=" top:0;position: relative; z-index:1;">
      <!-- ---- mappa ----- -->
      <l-map :zoom="zoom" ref="mappa" :center="center" style="height:100vh;">
        <!-- ---- layer ----- -->
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <!-- ---- markers V-FOR JSON EXTERNAL FILE ----- -->
        <l-marker
          v-for="item in results"
          v-bind:key="item.indirizzo"
          :lat-lng="[item.latitudine, item.longitudine]"
        >
          <!-- ---- marker popup----- -->
          <l-popup>
            <p>Indirizzo: {{item.indirizzo}}</p>
            <p>Orario: {{item.orario}}</p>
            <p>{{item.tipo}}</p>
          </l-popup>
        </l-marker>
      </l-map>
    </div>

    <!-- ---- RICERCA FORM ----- -->
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
          <!-- ----submit button----- -->
          <b-button type="submit" variant="primary">Submit</b-button>
        </span>
      </b-form>
    </div>
  </div>
</template>

<script>
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

//importing json marker file
import jsn from "./../assets/ecostations";
import { client } from "../utils/httpClient";
//importing map leaflet stuff
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
export default {
  //the components
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      //map reference
      mymap: null,
      //form ricerca with address
      form: {
        address: ""
      },
      //latitude & longitude
      lat: "",
      lon: "",
      // results to api call to get lat and lon through address
      results: "",

      //MAP DATAS
      zoom: 15,
      center: L.latLng(43.77543, 11.248576),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      //JSON OBJS TO GET THE OBJECTS
      objs: jsn,
      //meglio con i marker dal cms
      results: []
    };
  },
  //function called when this view is created
  created() {
    //to get the device position
    this.getLocation();
    //to log the external json file
    this.showJsonFile;
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      client.fetch('*[_type == "markers"]').then(response => {
        console.log(response);
        this.results = response;
      });
    },
    //log external json file function
    showJsonFile() {
      console.log(this.objs);
    },
    //show info map funciton
    showInfoMappa() {
      let mappa = this.$refs.mappa;
    },
    //get geolocation of the device function
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    //the show position function to get the device geolocation
    showPosition(position) {
      console.log(
        position.coords.latitude + "latlon " + position.coords.longitude
      );
      this.setCenterMap(position.coords.latitude, position.coords.longitude);
    },
    //SET CENTER MAP FUNCTION
    setCenterMap(la, lo) {
      this.center = L.latLng(la, lo);
    },
    //SET ZOOM MAP FUNCTION
    setZoomMap(lv) {
      this.zoom = lv;
    },
    //API CALL TO GET LATITUDE AND LONGITUDE THROUGH ADDRESS
    getCoordinates() {
      //url creation
      let url =
        "https://servicemap.disit.org/WebAppGrafo/api/v1/location/?search=" +
        this.form.address;
      console.log(url);
      //starting the request
      this.axios.get(url).then(response => {
        this.results = response.data;
      });
      //getting lon & lat
      this.lon = parseFloat(this.results.features[0].geometry.coordinates[1]);
      this.lat = parseFloat(this.results.features[0].geometry.coordinates[0]);
      //control log
      console.log(
        this.results.features[0].geometry.coordinates[1],
        this.results.features[0].geometry.coordinates[0]
      );
      //setting the center map
      this.setCenterMap(
        this.results.features[0].geometry.coordinates[1],
        this.results.features[0].geometry.coordinates[0]
      );
    },
    //on submit button
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form.address);
      this.getCoordinates();
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
