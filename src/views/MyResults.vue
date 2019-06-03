<template>
  <div class="container">
    <!-- -------------------------------- -->
    <!-- ----MYRESULTS PAGE CREATION----- -->
    <!-- -------------------------------- -->
    <b-jumbotron>
      <!-- ----title section----- -->
      <template slot="header">Results</template>
      <!-- ----with description----- -->
      <template slot="lead">This page contains your recycling statistics and throphies earned.</template>
      <p style="height:20px;"></p>
      <!-- ----STATISTICS SECTION----- -->

      <b-card
        no-body
        class="overflow-hidden"
        header="Statistics"
        header-tag="header"
        footer=" "
        footer-tag="footer"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body>
              <b-card-title>total kg material recycled: {{total}}</b-card-title>
            </b-card-body>
            <!-- ----detailed kg recycled----- -->
            <b-list-group flush>
              <b-list-group-item>Organic: {{organico}}</b-list-group-item>
              <b-list-group-item>Glass: {{vetro}}</b-list-group-item>
              <b-list-group-item>Paper and Cardboard: {{carta}}</b-list-group-item>
              <b-list-group-item>Packaging and Containers {{imballaggi}}</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col md="6">
            <GChart type="PieChart" :data="chartData" :options="chartOptions"/>
          </b-col>
        </b-row>
      </b-card>

      <!-- ----TROPHIES SECTION----- -->
      <p style="height:30px;"></p>
      <h1 style="margin-botton:40px;">Trophies</h1>
      <p style="height:15px;"></p>
      <b-card-group deck>
        <!-- ----V-FOR THROPHIES CARDS ----- -->
        <b-card
          v-for="item in objects"
          v-bind:key="item.tname"
          :header="item.tname"
          header-tag="header"
          footer=" "
          footer-tag="footer"
        >
          <b-img thumbnail fluid :src="item.timage" alt="Image 1" style="max-height:30vh"></b-img>
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
    setInterval(() => {
      this.fetchData();
    }, 3000);
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
          //this.results1 = response;
          this.objects = response;
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
