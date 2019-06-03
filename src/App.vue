<template>
  <div id="app">
    <div>
      <!-- ------------------------- -->
      <!-- ----NAVBAR CREATION------ -->
      <!-- ------------------------- -->
      <b-navbar toggleable="lg" type="light" variant="dark">
        <b-navbar-brand href="#">
          <router-link to="/">
            <i class="fa fa-leaf"></i>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item id="hom" href="#">
              <router-link to="/">
                <i class="fa fa-home"></i> Homepage
              </router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/ecolocmap">
                <i class="fa fa-map-o"></i> EcolocMap
              </router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/recycle">
                <i class="fa fa-recycle"></i> Recycle
              </router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/myresults">
                <i class="fa fa-trophy"></i> MyResults
              </router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item href="#" right>
              <router-link to="/settings">Settings</router-link>
            </b-nav-item>-->
            <b-nav-item href="#" right>
              <router-link to="/account">
                <i class="fa fa-user"></i> Account
              </router-link>
            </b-nav-item>
            <b-nav-item href="#" right>
              <router-link to="/about">
                <i class="fa fa-info"></i> About
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  position: relative;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

router-link {
  color: white;
}
</style>
