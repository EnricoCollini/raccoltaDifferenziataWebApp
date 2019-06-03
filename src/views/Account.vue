<template>
  <div class="container">
    <!-- ------------------------------ -->
    <!-- ----ACCOUNT PAGE CREATION----- -->
    <!-- ------------------------------ -->
    <b-jumbotron header="Account">
      <!-- ----profile image & title----- -->
      <p style="height:20px;"></p>

      <b-card
        no-body
        class="overflow-hidden"
        header=" "
        header-tag="header"
        footer=" "
        footer-tag="footer"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              style="height:40vh; width:40vh;"
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-title>Name:</b-card-title>
              <b-card-sub-title class="mb-2">{{this.results.nome}}</b-card-sub-title>
            </b-card-body>

            <b-list-group flush>
              <!-- ----username section----- -->
              <b-list-group-item>
                <b-card-title>Surname:</b-card-title>
                <b-card-sub-title class="mb-2">{{this.results.cognome}}</b-card-sub-title>
              </b-list-group-item>
              <!-- ----email section----- -->
              <b-list-group-item>
                <b-card-title>e-mail:</b-card-title>
                <b-card-sub-title class="mb-2">{{this.results.mail}}</b-card-sub-title>
              </b-list-group-item>
              <!-- ----gender section----- -->
              <b-list-group-item>
                <b-card-title>Username:</b-card-title>
                <b-card-sub-title class="mb-2">{{this.results.username}}</b-card-sub-title>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-card>
    </b-jumbotron>
  </div>
</template>

<script>
import { client } from "../utils/httpClient";
export default {
  data() {
    return {
      results: []
    };
  },
  mounted() {
    this.fetchData();
    //setInterval(() => {
    //  this.fetchData();
    //}, 3000);
    this.getTrophies();
  },
  methods: {
    fetchData() {
      client
        .fetch('*[_type == "account" && mail==$mail]', {
          mail: "encollini@gmail.com"
        })
        .then(response => {
          console.log(response);
          this.results = response[0];
        });
    }
  }
};
</script>

<style>
@media screen and (max-width: 600px) {
  .container {
    padding-left: 5%;
  }
}
</style>
