<template>
  <div class="container">
    <!-- ------------------------------ -->
    <!-- ----ABOUT PAGE CREATION----- -->
    <!-- ------------------------------ -->
    <b-jumbotron>
      <!-- ----title section----- -->
      <template slot="header">About Page</template>
      <!-- ----with description----- -->
      <template slot="lead">
        This is a web application developed for the course "Human Computer Interaction"
        of the Professor Andrew D. Bagdanov at the University of Florence for the master
        degree in Computer Engineering
      </template>

      <hr class="my-4">
      <!-- ----some info ----- -->
      <p>
        This application has been developed based on a process of needfinding and prototyping to help
        people find ecostation and motivate them to keep recycling.
      </p>
      <p>
        <!-- ----UNIVERSITY BUTTON----- -->
        <b-button
          variant="primary"
          href="https://www.ing-inm.unifi.it/changelang-eng.html"
        >University</b-button>
      </p>
      <!-- ----GHITHUB BUTTON----- -->
      <b-button variant="success" href="https://github.com/EnricoCollini">MyGhithub: Enrico Collini</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .container {
    padding-left: 5%;
  }
}
</style>
