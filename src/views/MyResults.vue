<template>
  <div class="container">
    <!-- -------------------------------- -->
    <!-- ----MYRESULTS PAGE CREATION----- -->
    <!-- -------------------------------- -->
    <b-jumbotron>
      <!-- ----STATISTICS SECTION----- -->
      <h1 style="margin-botton:40px;">Statistics</h1>
      <b-card-group deck>
        <b-card img-top>
          <h4 slot="header">Stats</h4>
          <!-- ----total kg recycled----- -->
          <b-card-body>
            <b-card-title>total kg material recycled: {{total}}</b-card-title>
          </b-card-body>
          <!-- ----detailed kg recycled----- -->
          <b-list-group flush>
            <b-list-group-item>Organic: {{organico}}</b-list-group-item>
            <b-list-group-item>Glass: {{vetro}}</b-list-group-item>
            <b-list-group-item>Paper and Cardboard: {{carta}}</b-list-group-item>
            <b-list-group-item>Packaging and Containers {{imballaggi}}</b-list-group-item>

            <!-- ----PIE CHART PERCENTAGES----- -->
            <b-list-group-item>
              Percentages
              <GChart type="PieChart" :data="chartData" :options="chartOptions"/>
            </b-list-group-item>
          </b-list-group>

          <!-- ----FOOTER CARD IMAGE----- -->
          <b-card-img
            src="data:image/jpeg;base64,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"
            alt="Image"
            bottom
          ></b-card-img>
        </b-card>
      </b-card-group>

      <!-- ----TROPHIES SECTION----- -->
      <h1 style="margin-botton:40px;">Trophies</h1>
      <b-card-group deck>
        <!-- ----V-FOR THROPHIES CARDS ----- -->
        <b-card
          v-for="item in objects"
          v-bind:key="item.tname"
          header=" "
          header-tag="header"
          footer=" "
          footer-tag="footer"
          :title="item.tname"
        >
          <b-img thumbnail fluid :src="item.timage" alt="Image 1"></b-img>
          <b-card-text>{{item.tdescription}}.</b-card-text>
        </b-card>
      </b-card-group>
    </b-jumbotron>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { client } from "../utils/httpClient";

export default {
  components: {
    GChart
  },
  data() {
    return {
      slide: 0,
      //chart options
      chartOptions: {
        chart: {
          title: "Percentages"
        }
      },
      //Types
      organico: 0,
      vetro: 0,
      carta: 0,
      imballaggi: 0,

      results: [],
      results1: [],

      sliding: null,
      //TROPHIES OBJECTS
      objects: []
    };
  },
  mounted() {
    this.fetchData();
    //setInterval(() => {
    //  this.fetchData();
    //}, 3000);
    this.getTrophies();
  },
  computed: {
    //funcntion that calculates the total kg material recycled
    total: function() {
      return this.organico + this.vetro + this.carta + this.imballaggi;
    },
    //return the chart datas
    chartData: function() {
      return [
        ["a", "b"],
        ["Organic", this.organico],
        ["Glass", this.vetro],
        ["Paper", this.carta],
        ["Packages", this.imballaggi]
      ];
    }
  },
  methods: {
    getTrophies() {
      client
        .fetch('*[_type == "trofei"]', {
          mail: "encollini@gmail.com"
        })
        .then(response => {
          console.log(response);
          this.results1 = response;
          for (let i = 0; i < this.results1.length; i++) {
            if (this.results1[i].organicosoglia <= this.organico) {
              this.objects.push(this.results1[i]);
            }
            if (this.results1[i].vetrocosoglia <= this.vetro) {
              this.objects.push(this.results1[i]);
            }
            if (this.results1[i].cartasoglia <= this.carta) {
              this.objects.push(this.results1[i]);
            }
            if (this.results1[i].imballaggisoglia <= this.imballaggi) {
              this.objects.push(this.results1[i]);
            }
            if (this.results1[i].totalsoglia <= this.total) {
              this.objects.push(this.results1[i]);
            }
          }
        });
    },
    fetchData() {
      client
        .fetch('*[_type == "rifiuti" && mail==$mail]', {
          mail: "encollini@gmail.com"
        })
        .then(response => {
          console.log(response);
          this.results = response;
          this.organico = 0;
          this.imballaggi = 0;
          this.carta = 0;
          this.vetro = 0;
          for (let i = 0; i < this.results.length; i++) {
            console.log(this.results[i].organico);
            this.organico += parseInt(this.results[i].organico);
            this.carta += parseInt(this.results[i].carta);
            this.imballaggi += parseInt(this.results[i].imballaggi);
            this.vetro += parseInt(this.results[i].vetro);
          }
        });
    }
  }
};
</script>

<style>
</style>
