<template>
  <div class="container">
    <!-- ------------------------------ -->
    <!-- ----ABOUT PAGE CREATION----- -->
    <!-- ------------------------------ -->
    <b-jumbotron>
      <!-- ----title section----- -->
      <template slot="header">About</template>
      <!-- ----with description----- -->
      <template slot="lead">
        This is a web application developed for the course "Human Computer Interaction"
        of the Professor Andrew D. Bagdanov at the University of Florence for the master
        degree in Computer Engineering
      </template>
      <p style="height:20px;"></p>

      <h2>Needfinding</h2>
      <p style="height:20px;"></p>

      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://fundacaofat.org.br/wp-content/uploads/2018/01/info-copy.jpg"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="The idea">
              <b-card-text>
                The idea for this application is based on the need to have a simple and rewarding system to find the
                ecostations on the territory. Through an interviewing process has been developed some Personas with a
                specific scenario. Studying these has been designed Goals and Requirements of this application.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <p style="height:40px;"></p>
      <h2>Personas</h2>
      <p style="height:20px;"></p>

      <b-card-group deck>
        <b-card
          title="Title"
          img-src="https://markethax.com/generador-de-buyer-persona/img/avatar_6.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <div slot="footer">
            <small class="text-muted"></small>
          </div>
        </b-card>

        <b-card
          title="Title"
          img-src="https://markethax.com/generador-de-buyer-persona/img/avatar_1.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <div slot="footer">
            <small class="text-muted"></small>
          </div>
        </b-card>

        <b-card
          title="Title"
          img-src="https://markethax.com/generador-de-buyer-persona/img/avatar_7.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <div slot="footer">
            <small class="text-muted"></small>
          </div>
        </b-card>
      </b-card-group>

      <p style="height:20px;"></p>

      <h2>Requirements</h2>
      <p style="height:20px;"></p>
      <b-list-group>
        <b-list-group-item>Web Responsive Application to enable the search system from every device with a browser</b-list-group-item>
        <b-list-group-item>
          The software needs a map with search functionalities and user positio on which there are some
          popup markers that corresponds to ecostations with the relative informations.
        </b-list-group-item>
        <b-list-group-item>The interface should be intuitive and simple to use.</b-list-group-item>
      </b-list-group>

      <hr class="my-4">
      <!-- ----some info ----- -->
      <h4>If you want to find out more info about the University or me choose one of the button below.</h4>

      <!-- ----UNIVERSITY BUTTON----- -->
      <b-button variant="primary" href="https://www.ing-inm.unifi.it/changelang-eng.html">University</b-button>

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
