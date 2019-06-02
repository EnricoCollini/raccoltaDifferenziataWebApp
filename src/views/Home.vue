<template>
  <div class="home">
    <!-- --------------------------- -->
    <!-- ----HOME PAGE CREATION----- -->
    <!-- --------------------------- -->

    <!-- ----image background with descritpion app----- -->
    <b-card
      overlay
      img-src="https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg"
      img-alt="home Image"
      text-variant="white"
      title="ECOLOC WEB APPLICATION"
      sub-title="This web application allows you to find ecostations and monitor your contribution to the world!
      Results graphs and trophies are waiting for you!"
    ></b-card>
    <button @click="login">ciaoneee</button>
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




