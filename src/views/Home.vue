<template>
  <div class="home">
    <!-- --------------------------- -->
    <!-- ----HOME PAGE CREATION----- -->
    <!-- --------------------------- -->

    <!-- ----image background with descritpion app----- 
    <b-card
      overlay
      img-src="https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg"
      img-alt="home Image"
      text-variant="white"
      title="ECOLOC WEB APPLICATION"
      sub-title="This web application allows you to find ecostations and monitor your contribution to the world!
      Results graphs and trophies are waiting for you!"
    ></b-card> 
    <button @click="login">ciaoneee</button>-->
    <header>
      <div class="welcome-title">
        <h1>ECOLOC WEB APPLICATION</h1>
        <h3>
          This web application allows you to find ecostations and monitor your contribution to the world!
          Results graphs and trophies are waiting for you!
        </h3>
        <p style="height:60px;"></p>
        <b-button variant="dark">
          <router-link to="/ecolocmap">find an ecostation</router-link>
        </b-button>
        <h3>Or</h3>
        <b-button variant="dark">
          <router-link to="/myresults">visualize statistics</router-link>
        </b-button>
      </div>
    </header>
  </div>
</template>

<script>
import netlify from "netlify-identity-widget";

import User from "../utils/userClass";

export default {
  name: "home",
  data() {
    return {
      currentUser: new User()
    };
  },
  methods: {
    login() {
      if (this.currentUser.logged) {
        console.log("già loggato");
        return;
      }
      netlify.init();
      netlify.open(); // open the modal
    }
  }
};
</script>

<style scoped>
header {
  height: 100vh;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0)),
    url("./../assets/se.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.welcome-title {
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.welcome-title h1 {
  color: #2c3e50;
  font-size: 70ox;
}
.welcome-title h3 {
  color: #2c3e50;
  font-size: 18px;
}
@media screen and (max-width: 600px) {
  .welcome-title {
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  header {
    position: relative;
    z-index: 0;
  }
}
</style>





